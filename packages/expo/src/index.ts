// Re-export everything from @ArcTimer/react-native
export {
  CountdownCircleTimer,
  TimerGroup,
  useCountdown,
  useTimerGroup,
  useReducedMotion,
} from '@ArcTimer/react-native'

export type {
  CountdownCircleTimerProps,
  CountdownProps,
  TimerRef,
  TimerGroupRef,
  TimerGroupProps,
  RenderInfo,
  OnCompleteResult,
  UseCountdownReturn,
  UseTimerGroupReturn,
  TimerStatus,
  EasingName,
  EasingConfig,
  Rotation,
  Color,
  ColorFormat,
  Theme,
} from '@ArcTimer/react-native'

// Re-export themes
export {
  TimerThemeProvider,
  useTimerTheme,
  createTheme,
  defaultTheme,
  darkTheme,
  minimalTheme,
  vibrantTheme,
  neonTheme,
} from '@ArcTimer/themes'

// Expo-specific
export { ExpoTimerProvider } from './ExpoTimerProvider'
export type { ExpoTimerProviderProps } from './ExpoTimerProvider'
