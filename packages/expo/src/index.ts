// Re-export everything from @toankhontech/arctimer-react-native
export {
  CountdownCircleTimer,
  TimerGroup,
  useCountdown,
  useTimerGroup,
  useReducedMotion,
} from '@toankhontech/arctimer-react-native'

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
} from '@toankhontech/arctimer-react-native'

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
} from '@toankhontech/arctimer-themes'

// Expo-specific
export { ExpoTimerProvider } from './ExpoTimerProvider'
export type { ExpoTimerProviderProps } from './ExpoTimerProvider'
