import type { Theme } from '@toankhontech/arctimer-core'

export const minimalTheme: Theme = {
  name: 'minimal',
  colors: {
    primary: '#555555',
    trail: '#EEEEEE',
    text: '#333333',
    background: '#FAFAFA',
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#F44336',
  },
  sizes: {
    default: 160,
    strokeWidth: 6,
  },
  animation: {
    defaultEasing: 'linear',
  },
  accessibility: {
    focusRingColor: '#555555',
    focusRingWidth: 1,
    focusRingOffset: 3,
  },
  strokeLinecap: 'butt',
}
