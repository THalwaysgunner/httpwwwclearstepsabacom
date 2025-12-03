import { Heart, Lightbulb } from "lucide-react";

const OnlyText = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Text */}
          <div className="animate-fade-in">
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
              Our <span className="gradient-text font-semibold">evidence-based approach</span> focuses on fostering meaningful, long-lasting behavioral changes and improving quality of life for both clients and their families
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start p-6 bg-muted rounded-2xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                An ABA assessment is a comprehensive evaluation process used to identify an individual's strengths, challenges, and areas for growth
              </p>
            </div>

            <div className="flex gap-4 items-start p-6 bg-muted rounded-2xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-muted-foreground">
                Applied Behavior Analysis (ABA) direct care services focus on using evidence-based strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlyText;
