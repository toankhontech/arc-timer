import type { Theme } from '@toankhontech/arctimer-core'

export const defaultTheme: Theme = {
  name: 'default',
  colors: {
    primary: '#3498DB',
    trail: '#d9d9d9',
    text: '#333333',
    background: '#ffffff',
    success: '#2ECC71',
    warning: '#F39C12',
    danger: '#E74C3C',
  },
  sizes: {
    default: 180,
    strokeWidth: 12,
  },
  animation: {
    defaultEasing: 'linear',
  },
  accessibility: {
    focusRingColor: '#3498DB',
    focusRingWidth: 2,
    focusRingOffset: 2,
  },
  strokeLinecap: 'round',
}
