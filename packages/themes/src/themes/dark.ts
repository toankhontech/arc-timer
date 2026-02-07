import type { Theme } from '@toankhontech/arctimer-core'

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#00D2FF',
    trail: '#2C3E50',
    text: '#ECF0F1',
    background: '#1A1A2E',
    success: '#00E676',
    warning: '#FFD600',
    danger: '#FF5252',
  },
  sizes: {
    default: 180,
    strokeWidth: 12,
  },
  animation: {
    defaultEasing: 'easeInOut',
  },
  accessibility: {
    focusRingColor: '#00D2FF',
    focusRingWidth: 2,
    focusRingOffset: 2,
  },
  strokeLinecap: 'round',
}
