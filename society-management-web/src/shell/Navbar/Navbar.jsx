import {
  SearchBar,
  ThemeToggle,
  NotificationButton,
  ProfileMenu,
  PageTitle
} from '.'

export default function Navbar () {
  return (
    <header className='sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--navbar)] px-6'>
      <PageTitle />

      <div className='flex items-center gap-3'>
        <SearchBar />

        <ThemeToggle />

        <NotificationButton />

        <ProfileMenu />
      </div>
    </header>
  )
}
