import FAQItem from './FAQItem'
import { faqs } from './data'

export default function FAQ () {
  return (
    <section id='faq' className='py-32'>
      <div className='mx-auto max-w-4xl px-6'>
        <div className='mb-20 text-center'>
          <span className='rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--primary)]'>
            FAQ
          </span>

          <h2 className='mt-6 text-5xl font-bold tracking-tight text-[var(--text)]'>
            Frequently Asked Questions
          </h2>

          <p className='mt-6 text-lg text-[var(--text-secondary)]'>
            Everything you need to know before getting started with Portl.
          </p>
        </div>

        <div className='space-y-5'>
          {faqs.map(faq => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
