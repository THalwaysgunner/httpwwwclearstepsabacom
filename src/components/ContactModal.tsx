import { FormEvent, useState } from "react";
import { User, Phone, Mail, ArrowUpRight, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "" });
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      alert(error?.message || "Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    void submit();
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setIsSuccess(false);
    onOpenChange(nextOpen);
  };

  const handleClose = () => {
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg bg-primary text-primary-foreground border-primary-foreground/20">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="w-16 h-16 text-accent mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-primary-foreground/80 mb-6">
              We will get back to you soon.
            </p>
            <Button
              onClick={handleClose}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-primary-foreground">
                Get Started with CLEARSTEPS
              </DialogTitle>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Please complete the form, and our administrator will contact you shortly
              </p>
            </DialogHeader>

            <form
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void submit();
                }
              }}
              className="space-y-4 mt-4"
            >
              {/* Name */}
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10">
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-5 h-5 text-accent" />
                  <label className="text-sm text-primary-foreground/70 font-bold">Your Name</label>
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex. John Doe"
                  className="w-full bg-transparent text-primary-foreground placeholder:text-primary-foreground/50 outline-none text-base"
                  required
                />
              </div>

              {/* Phone */}
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-accent" />
                  <label className="text-sm text-primary-foreground/70 font-bold">Your Phone</label>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ex. +1 718 344 1446"
                  className="w-full bg-transparent text-primary-foreground placeholder:text-primary-foreground/50 outline-none text-base"
                  required
                />
              </div>

              {/* Email */}
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-accent" />
                  <label className="text-sm text-primary-foreground/70 font-bold">Your Email</label>
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ex. mail@gmail.com"
                  className="w-full bg-transparent text-primary-foreground placeholder:text-primary-foreground/50 outline-none text-base"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl p-4 flex items-center justify-between transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="text-left">
                  <p className="font-semibold">
                    {isSubmitting ? "Sending..." : "Get Started"}
                  </p>
                  <p className="text-sm opacity-80">
                    {isSubmitting ? "Please wait" : "Reach out today!"}
                  </p>
                </div>
                <div className="w-10 h-10 bg-accent-foreground/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
