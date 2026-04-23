import { useInView } from '../hooks/useInView';
import {
  Zap,
  Shield,
  BarChart3,
  GitBranch,
  Clock,
  Layers,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized performance with instant loading times and smooth animations.',
    color: 'primary',
  },
  {
    icon: Shield,
    title: 'Fully Secure',
    description:
      'Built with security best practices, SSL encryption, and secure data handling.',
    color: 'accent',
  },
  {
    icon: BarChart3,
    title: 'Data Insights',
    description:
      'Track analytics and get insights to understand your audience better.',
    color: 'primary',
  },
  {
    icon: GitBranch,
    title: 'Easy Deployment',
    description:
      'Deploy your landing page in minutes with one-click deployment.',
    color: 'accent',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description:
      '99.99% uptime guarantee with automatic backups and disaster recovery.',
    color: 'primary',
  },
  {
    icon: Layers,
    title: 'Fully Customizable',
    description:
      'Complete control over design and functionality. Build exactly what you need.',
    color: 'accent',
  },
];

export default function Features() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="features" className="section-padding bg-white relative" ref={ref}>
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Features
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Powerful Features for{' '}
            <span className="gradient-text">Modern Websites</span>
          </h2>
          <p
            className={`text-lg text-neutral-600 leading-relaxed ${
              isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
            }`}
          >
            A complete platform that replaces your fragmented toolchain with one
            powerful, integrated workflow.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl bg-white border border-neutral-100 card-hover hover:border-${
                feature.color
              }-200 hover:shadow-${
                feature.color
              }-500/5 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === 'primary'
                    ? 'bg-primary-50 text-primary-600'
                    : 'bg-accent-50 text-accent-600'
                }`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
