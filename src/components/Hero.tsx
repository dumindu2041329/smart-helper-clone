import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">
            Free AI API Providers 2024
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-8">
          Access GPT-4, Claude, Llama & Premium AI Models for FREE
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
          Discover the top 8 best free AI API providers offering OpenRouter, Groq, Together AI, 
          Hugging Face, and more. Get started with premium artificial intelligence models without 
          any credit card required. Perfect for developers, researchers, and AI enthusiasts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow transition-smooth"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg font-semibold transition-smooth"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;