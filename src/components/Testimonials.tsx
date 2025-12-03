import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Before finding CLEARSTEPSS, I felt hopeless watching my son struggle with daily tasks and communication. Today, I can't believe the progress he's made! The therapists are patient and caring—and my child actually looks forward to his sessions. I can finally see a bright future ahead.",
      name: "Michael",
      info: "Parent of a 5-Year-Old, Queens, NY",
    },
    {
      text: "Accepting that my son has autism was one of the toughest moments in my life. I felt overwhelmed and unsure of how to help him. But CLEARSTEPSS made the transition smoother. The team not only supported my 4-year-old but also guided me as a parent. They helped me better understand my child's needs and taught me how to approach him in a way that fosters his growth. Thanks to their care and expertise, we've seen amazing progress, and I feel more confident as a parent. I'm forever grateful for CLEARSTEPSS.",
      name: "Rose",
      info: "Parent of a 8-Year-Old, Brooklyn, NY",
    },
    {
      text: "When we first started therapy with CLEARSTEPSS, my daughter was having difficulty expressing herself and engaging with tasks. The BCBA took the time to really understand her needs and created a personalized approach that has helped her to improve. The progress she's made is remarkable, and I feel much more confident as a parent knowing I have the support of such a dedicated team.",
      name: "Jennifer",
      info: "Parent of a 13-Year-Old, Staten Island, NY",
    },
    {
      text: "As a parent of a nonverbal child with autism, finding CLEARSTEPSS was the best decision we ever made. Their evidence-based approach and compassionate staff have helped my daughter gain confidence and new skills. Highly recommend!",
      name: "Samantha",
      info: "Parent of a 8-Year-Old, Brooklyn, NY",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Parents Say</h2>
          <p className="text-muted-foreground text-lg">Real stories from families we've helped</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Testimonial Card */}
          <div className="testimonial-card">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {testimonials[currentIndex].name[0]}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].info}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
