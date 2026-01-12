import { ArrowUpRight } from "lucide-react";

interface ContactFormProps {
  onOpenContactModal: () => void;
}

const ContactForm = ({ onOpenContactModal }: ContactFormProps) => {
  return (
    <section id="contact" className="footer-blue-bg py-16 md:py-24">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let us guide you through every step of the enrollment process.
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Please click the button below to get started, and our administrator will contact you shortly
          </p>
          
          <button
            type="button"
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full p-3 pl-8 border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20 group"
          >
            <div className="text-left">
              <p className="font-semibold text-lg text-primary-foreground">Get Started</p>
              <p className="text-sm text-primary-foreground/70">Reach out today!</p>
            </div>
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-6 h-6 text-accent-foreground" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
