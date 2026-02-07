import type { Theme } from '@ArcTimer/core'

export const neonTheme: Theme = {
  name: 'neon',
  colors: {
    primary: '#39FF14',
    trail: '#1A1A1A',
    text: '#FFFFFF',
    background: '#000000',
    success: '#39FF14',
    warning: '#FFE400',
    danger: '#FF073A',
  },
  sizes: {
    default: 180,
    strokeWidth: 10,
  },
  animation: {
    defaultEasing: 'easeInOut',
  },
  accessibility: {
    focusRingColor: '#39FF14',
    focusRingWidth: 2,
    focusRingOffset: 3,
  },
  strokeLinecap: 'round',
}
