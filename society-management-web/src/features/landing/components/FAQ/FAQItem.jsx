import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQItem ({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className='
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                transition-all
            '
    >
      <button
        onClick={() => setOpen(!open)}
        className='
                    flex
                    w-full
                    items-center
                    justify-between
                    p-6
                    text-left
                '
      >
        <span className='text-lg font-semibold text-[var(--text)]'>
          {question}
        </span>

        <ChevronDown
          size={22}
          className={`
                        transition-transform
                        duration-300
                        ${open ? 'rotate-180' : ''}
                    `}
        />
      </button>

      <div
        className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${open ? 'max-h-96 pb-6 px-6' : 'max-h-0 px-6'}
                `}
      >
        <p className='leading-7 text-[var(--text-secondary)]'>{answer}</p>
      </div>
    </div>
  )
}
