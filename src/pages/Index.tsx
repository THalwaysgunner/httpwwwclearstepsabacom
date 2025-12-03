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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <OnlyText />
        <Services />
        <WhyChoose />
        <CTASection />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
