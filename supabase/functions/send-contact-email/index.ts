import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://esm.sh/zod@3.25.76";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ContactEmailSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(50),
  email: z.string().trim().email().max(255),
});

type ContactEmailRequest = z.infer<typeof ContactEmailSchema>;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const parsed = ContactEmailSchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid form data" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, phone, email }: ContactEmailRequest = parsed.data;

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Send notification email to the business
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: "notifications@notifications.clearstepsaba.com",
      to: ["hello@clearstepsaba.com"],
      subject: `New Contact Request`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p>This message was sent from the ClearSteps website contact form.</p>
      `,
    });

    if (notificationError) {
      console.error("Notification email error:", notificationError);
      throw notificationError;
    }

    console.log("Notification email sent:", notificationData);

    // Send confirmation email to the user
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: "notifications@notifications.clearstepsaba.com",
      to: [email],
      subject: "Thank you for contacting ClearSteps!",
      html: `
        <h1>Thank you for reaching out, ${name}!</h1>
        <p>We have received your inquiry and our team will contact you shortly.</p>
        <p>Best regards,<br>The ClearSteps Team</p>
      `,
    });

    if (confirmationError) {
      console.error("Confirmation email error:", confirmationError);
    } else {
      console.log("Confirmation email sent:", confirmationData);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
