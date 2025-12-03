import { User, Home, Puzzle, Brain, Users, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individualized Treatment Plan",
      description: "Every client receives a personalized treatment plan tailored to their unique strengths, needs, and goals",
    },
    {
      icon: Home,
      title: "In-Home Therapy",
      description: "Our therapy sessions are conducted in the comfort of your home, ensuring a familiar and supportive environment for learning and growth",
    },
    {
      icon: Puzzle,
      title: "Behavior Management",
      description: "We address challenging behaviors with proven strategies",
    },
    {
      icon: Brain,
      title: "Skill Development",
      description: "Our therapy emphasizes the development of key skills, including communication, social skills, and daily living skills",
    },
    {
      icon: Users,
      title: "Parent & Caregiver Training",
      description: "We empower families with the tools and techniques needed to reinforce learning and maintain progress",
    },
    {
      icon: Globe,
      title: "Community-Based Services",
      description: "We extend our support to community settings, helping clients generalize skills in real-world environments",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
