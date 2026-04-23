import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Velocity cut our deployment time from 45 minutes to under 30 seconds. The team was skeptical at first, but now they can\'t imagine going back.',
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'Streamline',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    rating: 5,
  },
  {
    quote:
      'The preview environments alone saved us 20 hours a week in code review. Reviewers can actually test changes before approving PRs.',
    name: 'Marcus Johnson',
    role: 'CTO',
    company: 'NovaTech',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    rating: 5,
  },
  {
    quote:
      'We migrated 200+ microservices to Velocity in a weekend. The auto-detection and zero-config approach made it almost too easy.',
    name: 'Elena Rodriguez',
    role: 'Platform Lead',
    company: 'ScaleUp',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="testimonials" className="section-padding bg-white relative" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
          >
            <Star className="w-3.5 h-3.5" />
            Testimonials
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Loved by{' '}
            <span className="gradient-text">engineering teams</span>
          </h2>
          <p
            className={`text-lg text-neutral-600 leading-relaxed ${
              isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
            }`}
          >
            See why thousands of teams trust Velocity to power their deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group p-6 rounded-2xl bg-neutral-50 border border-neutral-100 card-hover hover:bg-white hover:shadow-xl hover:shadow-neutral-900/5 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-neutral-700 leading-relaxed mb-6 text-[15px]">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
