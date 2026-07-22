import PreviewSidebar from './PreviewSidebar'
import PreviewNavbar from './PreviewNavbar'
import PreviewStats from './PreviewStats'
import PreviewActivity from './PreviewActivity'

export default function DashboardPreview () {
  return (
    <section className='py-32'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mx-auto mb-20 max-w-3xl text-center'>
          <span className='rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--primary)]'>
            Dashboard
          </span>

          <h2 className='mt-6 text-5xl font-bold'>Everything in one place</h2>

          <p className='mt-6 text-lg text-[var(--text-secondary)]'>
            Built for committees, residents and managers.
          </p>
        </div>

        <div className='overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-2xl'>
          <div className='grid md:grid-cols-[260px_1fr]'>
            <PreviewSidebar />

            <div>
              <PreviewNavbar />

              <div className='space-y-8 p-8'>
                <PreviewStats />

                <PreviewActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
