import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground animate-fade-in">
            <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">Empowering Lives</h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-primary-foreground/90">
              Applied Behavior Analysis (ABA) Therapy
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              At <span className="font-semibold text-accent">CLEARSTEPS</span>, we specialize in providing comprehensive
              ABA therapy services designed to help individuals with Autism Spectrum Disorder (ASD) unlock their full
              potential.
            </p>

            {/* Info Cards Row */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Age Range Card */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/70">For clients</p>
                <p className="text-2xl font-bold text-accent">3 to 21 years old</p>
              </div>

              {/* CTA Button */}
              <a href="#contact" className="btn-get-started group">
                <div>
                  <p className="font-semibold text-primary-foreground">Get Started</p>
                  <p className="text-sm text-primary-foreground/70">Verify Insurance</p>
                </div>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                </div>
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-3xl backdrop-blur-sm border border-primary-foreground/10" />
              <div className="absolute inset-4 bg-primary-foreground/5 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">👦</span>
                  </div>
                  <p className="text-primary-foreground/80 text-lg">Joyful children thriving with ABA therapy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
