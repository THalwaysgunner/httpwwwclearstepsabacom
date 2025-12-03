const WhyChoose = () => {
  const reasons = [
    {
      number: 1,
      title: "Highly Qualified Team",
      description: "Our team includes Behavior Technicians (BTs) and Registered Behavior Technicians (RBTs), supervised by experienced Board Certified Behavior Analysts (BCBAs).",
    },
    {
      number: 2,
      title: "Data-Driven Approach",
      description: "We use ongoing data collection and analysis to monitor progress and make informed adjustments to treatment",
    },
    {
      number: 3,
      title: "Collaborative Care",
      description: "We work closely with families, schools, and other therapists to ensure client's progress.",
    },
    {
      number: 4,
      title: "Focused Age Range",
      description: "We specialize in working with clients 3-21 years old.",
    },
    {
      number: 5,
      title: "Major Insurance Accepted",
      description: "We partner with major health insurance providers to ensure families have access to the care they need",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose CLEARSTEPSS?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At <span className="gradient-text font-semibold">CLEARSTEPSS</span>, our mission is to empower individuals and families through compassionate, evidence-based Applied Behavior Analysis services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary-foreground">{reason.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
