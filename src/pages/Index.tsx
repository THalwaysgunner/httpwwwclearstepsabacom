import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OnlyText from "@/components/OnlyText";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
      <main>
        <Hero onOpenContactModal={() => setIsContactModalOpen(true)} />
        <OnlyText />
        <Services />
        <WhyChoose />
        <CTASection onOpenContactModal={() => setIsContactModalOpen(true)} />
        <HowItWorks />
        <Testimonials />
        <ContactForm onOpenContactModal={() => setIsContactModalOpen(true)} />
      </main>
      <Footer onOpenContactModal={() => setIsContactModalOpen(true)} />
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </div>
  );
};

export default Index;
