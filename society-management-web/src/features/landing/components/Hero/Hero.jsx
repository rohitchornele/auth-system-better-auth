import { ArrowRight, PlayCircle, Star } from 'lucide-react'
import { Button } from '@/ui'

export default function Hero () {
  return (
    <section className='relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)]/20 blur-3xl opacity-60'></div>
      </div>

      <div className='mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center'>
        {/* Badge */}

        <div className='mb-6 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)]'>
          🚀 Modern Society Management Platform
        </div>

        {/* Heading */}

        <h1 className='max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-[var(--text)] md:text-7xl'>
          Society Management
          <span className='block text-[var(--primary)]'>Made Simple.</span>
        </h1>

        {/* Description */}

        <p className='mt-8 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]'>
          Manage residents, visitors, maintenance, notices, billing, complaints
          and communication from one powerful dashboard.
        </p>

        {/* Buttons */}

        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
          <Button size='lg' className='px-8'>
            Start Free
            <ArrowRight size={18} />
          </Button>

          <Button size='lg' variant='secondary' className='px-8'>
            <PlayCircle size={18} />
            Book Demo
          </Button>
        </div>

        {/* Trust */}

        <div className='mt-10 flex items-center gap-2 text-sm text-[var(--text-secondary)]'>
          <div className='flex text-yellow-500'>
            <Star fill='currentColor' size={16} />
            <Star fill='currentColor' size={16} />
            <Star fill='currentColor' size={16} />
            <Star fill='currentColor' size={16} />
            <Star fill='currentColor' size={16} />
          </div>
          Trusted by 500+ housing societies
        </div>

        {/* Dashboard */}

        <div className='mt-20 w-full max-w-6xl'>
          <div className='overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-2xl'>
            {/* Top */}

            <div className='flex items-center gap-2 border-b border-[var(--border)] px-5 py-4'>
              <div className='h-3 w-3 rounded-full bg-red-400'></div>
              <div className='h-3 w-3 rounded-full bg-yellow-400'></div>
              <div className='h-3 w-3 rounded-full bg-green-400'></div>
            </div>

            {/* Body */}

            <div className='grid gap-6 p-8 md:grid-cols-4'>
              <DashboardCard title='Residents' value='1,284' />

              <DashboardCard title='Visitors' value='124' />

              <DashboardCard title='Complaints' value='18' />

              <DashboardCard title='Revenue' value='₹3.5L' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardCard ({ title, value }) {
  return (
    <div className='rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6'>
      <p className='text-sm text-[var(--text-secondary)]'>{title}</p>

      <h3 className='mt-3 text-3xl font-bold'>{value}</h3>
    </div>
  )
}
