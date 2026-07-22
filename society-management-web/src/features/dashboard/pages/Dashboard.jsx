import { QuickActions, RecentActivities, StatsGrid } from '../index'

export default function Dashboard () {
  return (
    <div className='space-y-6'>
      <StatsGrid />

      <div className='grid gap-6 lg:grid-cols-2'>
        <RecentActivities />
        <QuickActions />
      </div>
    </div>
  )
}
