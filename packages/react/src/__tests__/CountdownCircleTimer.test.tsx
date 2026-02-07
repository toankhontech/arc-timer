import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CountdownCircleTimer } from '../CountdownCircleTimer'
import { _resetForTesting } from '@ArcTimer/core'

// Access the internal reset function
vi.mock('@ArcTimer/core', async () => {
  const actual = await vi.importActual('@ArcTimer/core')
  return actual
})

describe('CountdownCircleTimer', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders SVG element', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} />
    )

    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
  })

  it('renders with correct size', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} size={200} />
    )

    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('width')).toBe('200')
    expect(svg?.getAttribute('height')).toBe('200')
  })

  it('renders two path elements (trail + progress)', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} />
    )

    const paths = container.querySelectorAll('path')
    expect(paths.length).toBe(2)
  })

  it('renders trail with custom color', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} trailColor="#FF0000" />
    )

    const paths = container.querySelectorAll('path')
    expect(paths[0]?.getAttribute('stroke')).toBe('#FF0000')
  })

  it('renders children with render info', () => {
    render(
      <CountdownCircleTimer duration={60}>
        {({ remainingTime }) => (
          <span data-testid="time">{remainingTime}</span>
        )}
      </CountdownCircleTimer>
    )

    expect(screen.getByTestId('time')).toHaveTextContent('60')
  })

  it('applies custom className', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} className="my-timer" />
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('my-timer')
  })

  it('applies custom style', () => {
    const { container } = render(
      <CountdownCircleTimer
        duration={60}
        style={{ border: '1px solid red' }}
      />
    )

    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.style.border).toBe('1px solid red')
  })

  it('renders with default size 180', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} />
    )

    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('width')).toBe('180')
  })

  it('renders strokeLinecap', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} strokeLinecap="butt" />
    )

    const paths = container.querySelectorAll('path')
    expect(paths[1]?.getAttribute('stroke-linecap')).toBe('butt')
  })

  it('does not render children content when no children provided', () => {
    const { container } = render(
      <CountdownCircleTimer duration={60} />
    )

    const divs = container.querySelectorAll('div')
    expect(divs.length).toBe(1) // Only wrapper div
  })
})
