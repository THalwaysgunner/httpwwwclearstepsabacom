import { useState } from "react";
import { User, Phone, Mail, ArrowUpRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "We'll contact you shortly to discuss your needs.",
    });
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section id="contact" className="footer-blue-bg py-16 md:py-24">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let us guide you through every step of the enrollment process.
          </h2>
          <p className="text-primary-foreground/80">
            Please complete the form, and our administrator will contact you shortly
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Name */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-2">
                <User className="w-5 h-5 text-accent" />
                <label className="text-sm text-primary-foreground/70 font-bold">Your Name</label>
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex. John Doe"
                className="input-field"
                required
              />
            </div>

            {/* Phone */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-accent" />
                <label className="text-sm text-primary-foreground/70 font-bold">Your Phone</label>
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ex. +1 718 344 1446"
                className="input-field"
                required
              />
            </div>

            {/* Email */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-accent" />
                <label className="text-sm text-primary-foreground/70 font-bold">Your Email</label>
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ex. mail@gmail.com"
                className="input-field"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/10 flex items-center justify-between hover:bg-primary-foreground/20 transition-colors group"
            >
              <div className="text-left">
                <p className="font-semibold text-primary-foreground">Get Started</p>
                <p className="text-sm text-primary-foreground/70">Reach out today!</p>
              </div>
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
