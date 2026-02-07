import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'
import type { AppStateStatus } from 'react-native'
import {
  TimerThemeProvider,
  type ThemeProp,
} from '@ArcTimer/themes'

export interface ExpoTimerProviderProps {
  theme?: ThemeProp
  pauseOnBackground?: boolean
  children: React.ReactNode
}

export function ExpoTimerProvider({
  theme = 'auto',
  pauseOnBackground = true,
  children,
}: ExpoTimerProviderProps) {
  const appStateRef = useRef(AppState.currentState)

  useEffect(() => {
    if (!pauseOnBackground) return

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      appStateRef.current = nextAppState
    }

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    )

    return () => {
      subscription.remove()
    }
  }, [pauseOnBackground])

  return (
    <TimerThemeProvider theme={theme}>
      {children}
    </TimerThemeProvider>
  )
}
