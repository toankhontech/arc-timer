import type { Theme } from '@ArcTimer/core'

export const vibrantTheme: Theme = {
  name: 'vibrant',
  colors: {
    primary: '#FF6B6B',
    trail: '#FFE66D',
    text: '#2D3436',
    background: '#FFFFFF',
    success: '#6BCB77',
    warning: '#FFD93D',
    danger: '#FF6B6B',
  },
  sizes: {
    default: 200,
    strokeWidth: 16,
  },
  animation: {
    defaultEasing: 'easeOutCubic',
  },
  accessibility: {
    focusRingColor: '#FF6B6B',
    focusRingWidth: 3,
    focusRingOffset: 2,
  },
  strokeLinecap: 'round',
}
