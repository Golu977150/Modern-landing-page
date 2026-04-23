import { useInView } from '../hooks/useInView';
import { Code2, GitCommitVertical as GitCommit, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Code2,
    step: '01',
    title: 'Choose a Template',
    description:
      'Pick from our collection of modern, professionally designed templates. Customize colors, fonts, and layouts to match your brand.',
  },
  {
    icon: GitCommit,
    step: '02',
    title: 'Add Your Content',
    description:
      'Drag and drop your content, images, and media. Use our built-in editor or connect your CMS for dynamic content.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch & Share',
    description:
      'Go live instantly with our fast CDN. Share your landing page and start collecting leads or customers right away.',
  },
];

export default function HowItWorks() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="how-it-works" className="section-padding gradient-bg relative" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            How It Works
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Simple Process to{' '}
            <span className="gradient-text">Get Started</span>
          </h2>
          <p
            className={`text-lg text-neutral-600 leading-relaxed ${
              isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
            }`}
          >
            Create your beautiful landing page in just three simple steps. No coding required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`relative text-center ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 200}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-neutral-300 to-neutral-200" />
              )}

              <div className="relative">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white shadow-lg shadow-neutral-900/5 border border-neutral-100 flex items-center justify-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary-500" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
