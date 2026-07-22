import PricingCard from './PricingCard'
import { plans } from './data'

export default function Pricing () {
  return (
    <section id='pricing' className='bg-[var(--background)] py-32'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mx-auto mb-20 max-w-3xl text-center'>
          <span className='rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--primary)]'>
            Pricing
          </span>

          <h2 className='mt-6 text-5xl font-bold tracking-tight'>
            Simple pricing for every community
          </h2>

          <p className='mt-6 text-lg text-[var(--text-secondary)]'>
            Choose the plan that best fits your residential community. Upgrade
            anytime as your society grows.
          </p>
        </div>

        <div className='grid gap-8 lg:grid-cols-3'>
          {plans.map(plan => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
