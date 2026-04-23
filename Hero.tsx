import { ArrowRight, Play, Sparkles, BarChart3, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-100/40 blur-3xl animate-pulse-soft animate-delay-1500" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-50/60 blur-2xl animate-float" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #171717 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-8 animate-fade-in-down">
            <Sparkles className="w-4 h-4" />
            <span>Modern Design Patterns & Best Practices</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
            Create Amazing
            <br />
            <span className="gradient-text">Web Experiences</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            Build beautiful, responsive landing pages with modern design patterns, smooth animations, and seamless user interactions. Everything you need to impress your audience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animate-delay-400">
            <a href="#pricing" className="btn-primary text-base px-8 py-4">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#how-it-works" className="btn-secondary text-base px-8 py-4">
              <Play className="w-5 h-5 mr-2 text-primary-500" />
              View Demo
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 sm:gap-16 mb-20 animate-fade-in animate-delay-600">
            {[
              { value: '50K+', label: 'Users' },
              { value: '99.99%', label: 'Uptime' },
              { value: '500+', label: 'Templates' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900">{stat.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero Visual */}
          <div className="relative animate-scale-in animate-delay-700">
            <div className="relative mx-auto max-w-4xl">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-400/20 to-primary-500/20 rounded-3xl blur-2xl" />

              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-neutral-900/10 border border-neutral-200/60 overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-5 py-3 bg-neutral-50 border-b border-neutral-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 bg-neutral-100 rounded-md text-xs text-neutral-500 font-medium">
                      app.velocity.dev/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: BarChart3, label: 'Deployments', value: '1,284', change: '+12%', color: 'primary' },
                      { icon: Shield, label: 'Success Rate', value: '99.9%', change: '+0.3%', color: 'accent' },
                      { icon: Globe, label: 'Active Regions', value: '24', change: '+3', color: 'primary' },
                    ].map((card) => (
                      <div
                        key={card.label}
                        className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            card.color === 'primary' ? 'bg-primary-100 text-primary-600' : 'bg-accent-100 text-accent-600'
                          }`}>
                            <card.icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-neutral-500">{card.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-neutral-900">{card.value}</div>
                        <div className="text-xs text-accent-600 font-medium mt-1">{card.change} this month</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-40 sm:h-48 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 border border-neutral-100 flex items-end p-4 gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-primary-500 to-primary-400 opacity-80 hover:opacity-100 transition-opacity duration-200"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
