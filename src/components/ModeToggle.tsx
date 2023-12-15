// import { Moon, Sun } from 'lucide-react'
import { Switch } from '@headlessui/react'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useEffect, useMemo, useState } from 'react'

export default function ModeToggle() {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light')

  const isDark = useMemo(() => theme === 'dark', [theme])

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'light')
  }, [])

  const Icon = useMemo(() => (isDark ? IconMoon : IconSun), [isDark])

  useEffect(() => {
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [isDark])

  const handleToggleTheme = (checked: boolean) =>
    setThemeState(checked ? 'dark' : 'light')

  return (
    <div className='flex items-center gap-x-2'>
      <Switch
        checked={isDark}
        onChange={handleToggleTheme}
        className={
          'relative inline-flex h-9 w-16 items-center rounded-full  border-2 border-black text-black dark:border-slate-400 dark:text-slate-400'
        }
      >
        <span className='inline-block h-7 w-7 rounded-full transition ui-checked:translate-x-8 ui-not-checked:translate-x-1'>
          <Icon className='h-7 w-7' />
        </span>
      </Switch>
    </div>
  )
}
