import { FileCheck, ClipboardList, PlayCircle, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileCheck,
      title: "Initial Consultation",
      description: "Reach out to us via phone or our contact form to schedule an initial consultation. During this meeting, we'll discuss your concerns, goals, and answer any questions you may have about ABA therapy.",
    },
    {
      icon: ClipboardList,
      title: "Comprehensive Assessment",
      description: "A BCBA will conduct a thorough assessment to understand your child's unique needs, strengths, and areas for improvement. This evaluation helps us develop a customized treatment plan.",
    },
    {
      icon: PlayCircle,
      title: "Beginning Therapy",
      description: "Once your individualized plan is approved, our trained therapists will begin implementing it in the comfort of your home or community. Sessions are tailored to your schedule.",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Progress Monitoring",
      description: "We use data-driven methods to track progress and make necessary adjustments to the treatment plan. Regular parent training ensures skills are reinforced outside of sessions.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How it works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with <span className="gradient-text font-semibold">CLEARSTEPSS</span> is simple and straightforward. Here's what to expect:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-primary">Step {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
