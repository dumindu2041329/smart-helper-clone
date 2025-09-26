const Stats = () => {
  const stats = [
    {
      number: "8+",
      label: "Free AI Providers"
    },
    {
      number: "50+",
      label: "AI Models Available"
    },
    {
      number: "100%",
      label: "Free to Start"
    },
    {
      number: "24/7",
      label: "API Availability"
    }
  ];

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Top Free AI API Providers Comparison 2024
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Provider Icons Section */}
        <div className="mt-16 text-center">
          <div className="gradient-card p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl mr-2">🚀</span>
              <h4 className="text-xl font-semibold text-foreground">Free AI APIs</h4>
            </div>
            <p className="text-foreground/80 mb-6">
              Access premium AI models for FREE! Get GPT-4, Claude, Llama, and more from top providers.
            </p>
            
            {/* Provider Icons */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-xl">🔄</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-xl">🤗</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-xl">🧠</span>
              </div>
              <div className="text-foreground/60">+4 more</div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <span className="text-3xl font-bold gradient-text">8</span>
              <span className="text-foreground/80">Providers</span>
              <span className="text-2xl font-bold text-green-400">FREE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;