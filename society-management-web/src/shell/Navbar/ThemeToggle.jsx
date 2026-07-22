import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme.js'

export default function ThemeToggle () {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--card) hover:bg-(--surface-hover)'
    >
      {theme === 'dark' ? (
        <Sun className='h-5 w-5 rotate-0 scale-100 transition-all' />
      ) : (
        <Moon className='h-5 w-5 rotate-0 scale-100 transition-all' />
      )}
    </button>
  )
}
