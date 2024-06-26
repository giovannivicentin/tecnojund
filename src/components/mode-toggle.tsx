'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Loader } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Toggle } from '@/components/ui/toggle'

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const displayIcon = () => {
    if (!mounted) {
      return <Loader className="animate-spin h-[1.2rem] w-[1.2rem]" />
    }

    if (theme === 'system') {
      return resolvedTheme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] hover:text-primary" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] hover:text-primary" />
      )
    }
    return theme === 'dark' ? (
      <Sun className="h-[1.2rem] w-[1.2rem] hover:text-primary" />
    ) : (
      <Moon className="h-[1.2rem] w-[1.2rem] hover:text-primary" />
    )
  }

  return (
    <Toggle variant="default" aria-label="Toggle theme" onClick={handleToggle}>
      {displayIcon()}
    </Toggle>
  )
}
