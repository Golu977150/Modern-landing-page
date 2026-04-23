import { useInView } from '../hooks/useInView';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for side projects and experiments.',
    features: [
      '3 projects',
      '100 deploys/month',
      'Shared preview environments',
      'Community support',
      '1 team member',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited projects',
      'Unlimited deploys',
      'Dedicated preview environments',
      'Priority support',
      'Up to 10 team members',
      'Custom domains',
      'Analytics dashboard',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'For organizations with advanced needs.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'SSO & SAML',
      '99.99% SLA',
      'Dedicated support engineer',
      'Custom integrations',
      'Audit logs',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="pricing" className="section-padding gradient-bg relative" ref={ref}>
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4 ${
              isInView ? 'animate-fade-in-down' : 'opacity-0'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Pricing
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Simple,{' '}
            <span className="gradient-text">transparent pricing</span>
          </h2>
          <p
            className={`text-lg text-neutral-600 leading-relaxed ${
              isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
            }`}
          >
            No hidden fees. No surprise charges. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl card-hover ${
                plan.popular
                  ? 'bg-white border-2 border-primary-500 shadow-xl shadow-primary-500/10'
                  : 'bg-white border border-neutral-200'
              } ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-primary-500/25">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-neutral-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">
                  ${plan.price}
                </span>
                <span className="text-neutral-500 text-sm">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-primary-500' : 'text-accent-500'
                      }`}
                    />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5'
                    : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
