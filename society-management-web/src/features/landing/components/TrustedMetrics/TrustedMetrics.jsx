import { metrics } from './data'

export default function TrustedMetrics () {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mx-auto mb-16 max-w-2xl text-center'>
          <span className='rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--primary)]'>
            Trusted Metrics
          </span>

          <h2 className='mt-6 text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl'>
            Built for growing residential communities
          </h2>

          <p className='mt-6 text-lg leading-8 text-[var(--text-secondary)]'>
            From visitor management to maintenance and billing, Portl is
            designed to grow alongside your community.
          </p>
        </div>

        <div
          className='
                        relative
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-[var(--border)]
                        bg-[var(--card)]/80
                        backdrop-blur-xl
                        shadow-xl
                    '
        >
          {/* Decorative background */}

          <div className='absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 via-transparent to-[var(--primary)]/10' />

          <div className='relative grid divide-y divide-[var(--border)] md:grid-cols-5 md:divide-y-0 md:divide-x'>
            {metrics.map(metric => (
              <div
                key={metric.title}
                className='
                                    group
                                    px-8
                                    py-10
                                    text-center
                                    transition-all
                                    duration-300
                                    hover:bg-[var(--primary)]/10
                                '
              >
                <h3
                  className='
                                        text-5xl
                                        font-bold
                                        text-[var(--primary)]
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    '
                >
                  {metric.value}
                </h3>

                <h4 className='mt-4 text-lg font-semibold text-[var(--text)]'>
                  {metric.title}
                </h4>

                <p className='mt-2 text-sm leading-6 text-[var(--text-secondary)]'>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
