import { useInView } from '../hooks/useInView';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="section-padding bg-neutral-950 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative container-narrow text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium mb-8 ${
            isInView ? 'animate-fade-in-down' : 'opacity-0'
          }`}
        >
          <Zap className="w-4 h-4" />
          Ready to ship faster?
        </div>

        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Start building with
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
            Velocity today
          </span>
        </h2>

        <p
          className={`text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed ${
            isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
          }`}
        >
          Join 10,000+ teams already shipping faster. Free to start, no credit
          card required.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            isInView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-2xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-neutral-300 rounded-xl border border-neutral-700 hover:border-neutral-500 hover:text-white transition-all duration-300"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
}
