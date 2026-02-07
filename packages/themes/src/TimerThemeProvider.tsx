import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import type { Theme } from '@ArcTimer/core'
import { defaultTheme } from './themes/default'
import { darkTheme } from './themes/dark'

const TimerThemeContext = createContext<Theme>(defaultTheme)

export type ThemeProp = Theme | 'light' | 'dark' | 'auto'

function useSystemColorScheme(): 'light' | 'dark' {
  const [scheme, setScheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    if (typeof window.matchMedia !== 'function') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (typeof window.matchMedia !== 'function') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      setScheme(e.matches ? 'dark' : 'light')
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return scheme
}

function resolveTheme(
  theme: ThemeProp,
  systemScheme: 'light' | 'dark'
): Theme {
  if (typeof theme === 'object') return theme
  if (theme === 'dark') return darkTheme
  if (theme === 'light') return defaultTheme
  // 'auto'
  return systemScheme === 'dark' ? darkTheme : defaultTheme
}

export interface TimerThemeProviderProps {
  theme?: ThemeProp
  children: React.ReactNode
}

export function TimerThemeProvider({
  theme = 'light',
  children,
}: TimerThemeProviderProps) {
  const systemScheme = useSystemColorScheme()
  const resolvedTheme = useMemo(
    () => resolveTheme(theme, systemScheme),
    [theme, systemScheme]
  )

  // Inject CSS custom properties on web
  const cssVars = useMemo(
    () =>
      ({
        '--arc-timer-color-primary': resolvedTheme.colors.primary,
        '--arc-timer-color-trail': resolvedTheme.colors.trail,
        '--arc-timer-color-text': resolvedTheme.colors.text,
        '--arc-timer-color-background': resolvedTheme.colors.background,
        '--arc-timer-color-success': resolvedTheme.colors.success,
        '--arc-timer-color-warning': resolvedTheme.colors.warning,
        '--arc-timer-color-danger': resolvedTheme.colors.danger,
        '--arc-timer-size': `${resolvedTheme.sizes.default}px`,
        '--arc-timer-stroke-width': `${resolvedTheme.sizes.strokeWidth}px`,
        '--arc-timer-focus-ring-color':
          resolvedTheme.accessibility.focusRingColor,
      }) as React.CSSProperties,
    [resolvedTheme]
  )

  return (
    <TimerThemeContext.Provider value={resolvedTheme}>
      <div style={cssVars}>{children}</div>
    </TimerThemeContext.Provider>
  )
}

export function useTimerTheme(): Theme {
  return useContext(TimerThemeContext)
}
