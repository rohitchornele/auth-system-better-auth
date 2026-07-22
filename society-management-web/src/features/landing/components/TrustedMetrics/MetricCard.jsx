export default function MetricCard ({ value, title, description }) {
  return (
    <div
      className='
                group
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--primary)]
                hover:shadow-lg
            '
    >
      <h3
        className='
                    text-5xl
                    font-bold
                    text-[var(--primary)]
                    transition-transform
                    duration-300
                    group-hover:scale-105
                '
      >
        {value}
      </h3>

      <h4 className='mt-4 text-lg font-semibold text-[var(--text)]'>{title}</h4>

      <p className='mt-2 text-sm leading-6 text-[var(--text-secondary)]'>
        {description}
      </p>
    </div>
  )
}
