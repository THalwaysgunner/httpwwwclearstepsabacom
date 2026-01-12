import { ArrowUpRight } from "lucide-react";

interface CTASectionProps {
  onOpenContactModal: () => void;
}

const CTASection = ({ onOpenContactModal }: CTASectionProps) => {
  return (
    <section className="relative py-24 md:py-32 gradient-bg overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get Started Today with CLEARSTEPS</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Contact us to schedule a consultation and learn more about how we can support your loved one on their path
            to success.
          </p>

          <button
            type="button"
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full p-3 pl-8 border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20 group"
          >
            <div className="text-left">
              <p className="font-semibold text-lg">Get Started</p>
              <p className="text-sm text-primary-foreground/70">Discover how ABA therapy can make a difference</p>
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

export default CTASection;
