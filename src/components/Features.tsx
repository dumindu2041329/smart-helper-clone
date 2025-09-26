const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "No Credit Card Required",
      description: "Start building immediately with free AI APIs from OpenRouter, Groq, Together AI, and Hugging Face. Access premium models like GPT-4, Claude 3.5 Sonnet, and Llama 3.1 without any payment information."
    },
    {
      icon: "⚡",
      title: "Lightning Fast Inference",
      description: "Experience blazing-fast AI responses with Groq's LPU technology, Together AI's optimized infrastructure, and Replicate's efficient model serving. Perfect for real-time applications and high-throughput scenarios."
    },
    {
      icon: "🤖",
      title: "Premium AI Models",
      description: "Access state-of-the-art models including GPT-4 Turbo, Claude 3.5 Sonnet, Llama 3.1 405B, Mixtral 8x7B, Gemini Pro, and more. Build sophisticated AI applications with the latest language and multimodal models."
    }
  ];

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Free AI APIs in 2024?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Free AI API providers have revolutionized access to cutting-edge artificial intelligence. From 
            OpenRouter's GPT-4 access to Groq's lightning-fast inference, these platforms democratize AI 
            development for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="gradient-card p-8 rounded-2xl transition-smooth hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;