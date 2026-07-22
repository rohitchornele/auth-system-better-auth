import { ArrowRight, Calendar, Check } from 'lucide-react'
import { Button } from '@/ui'

export default function CTA () {
  return (
    <section className='py-32'>
      <div className='mx-auto max-w-7xl px-6'>
        <div
          className='
                        relative
                        overflow-hidden
                        rounded-[40px]
                        bg-gradient-to-br
                        from-[var(--primary)]
                        via-blue-600
                        to-indigo-700
                        px-8
                        py-24
                        text-center
                        text-white
                        shadow-2xl
                        md:px-20
                    '
        >
          {/* Background Blur */}

          <div className='absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl' />

          <div className='absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl' />

          {/* Grid */}

          <div
            className='
                            absolute
                            inset-0
                            opacity-10
                            [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(to_right,white_1px,transparent_1px)]
                            [background-size:48px_48px]
                        '
          />

          {/* Content */}

          <div className='relative z-10 mx-auto max-w-4xl'>
            <span className='rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur'>
              Ready to Get Started?
            </span>

            <h2 className='mt-8 text-4xl font-bold leading-tight md:text-6xl'>
              Simplify your society
              <br />
              with Portl today.
            </h2>

            <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-blue-100'>
              Manage residents, visitors, maintenance, billing and communication
              from one powerful, modern platform built for residential
              communities.
            </p>

            {/* Buttons */}

            <div className='mt-12 flex flex-col justify-center gap-4 sm:flex-row'>
              <Button
                size='lg'
                className='
                                    bg-white
                                    text-[var(--primary)]
                                    hover:bg-slate-100
                                '
              >
                Start Free
                <ArrowRight size={18} className='ml-2' />
              </Button>

              <Button
                size='lg'
                variant='ghost'
                className='
                                    border
                                    border-white/30
                                    bg-white/10
                                    text-white
                                    hover:bg-white/20
                                '
              >
                <Calendar size={18} className='mr-2' />
                Schedule Demo
              </Button>
            </div>

            {/* Bottom */}

            <div className='mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-100'>
              <div className='flex items-center gap-2'>
                <Check size={18} />
                No Credit Card
              </div>

              <div className='flex items-center gap-2'>
                <Check size={18} />
                Free Forever
              </div>

              <div className='flex items-center gap-2'>
                <Check size={18} />
                Setup in Minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
