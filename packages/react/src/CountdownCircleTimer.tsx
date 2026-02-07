import { forwardRef, useImperativeHandle, useMemo } from 'react'
import { useCountdown } from '@toankhontech/arctimer-core'
import type { CountdownProps, TimerRef, RenderInfo } from '@toankhontech/arctimer-core'

export interface CountdownCircleTimerProps extends CountdownProps {
  style?: React.CSSProperties
  className?: string
}

export const CountdownCircleTimer = forwardRef<
  TimerRef,
  CountdownCircleTimerProps
>((props, ref) => {
  const {
    children,
    trailColor = '#d9d9d9',
    trailStrokeWidth,
    strokeLinecap = 'round',
    style,
    className,
    size = 180,
    strokeWidth = 12,
    ...restProps
  } = props

  const countdown = useCountdown({
    ...restProps,
    size,
    strokeWidth,
  })

  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    progress,
    color,
    isComplete,
    animationScale,
    animationOpacity,
    _play,
    _pause,
    _reset,
    _getState,
  } = countdown

  useImperativeHandle(ref, () => ({
    play: _play,
    pause: _pause,
    reset: _reset,
    getState: _getState,
  }), [_play, _pause, _reset, _getState])

  const effectiveTrailStrokeWidth = trailStrokeWidth ?? strokeWidth
  const viewBox = `0 0 ${size} ${size}`

  const renderInfo: RenderInfo = useMemo(
    () => ({
      remainingTime,
      elapsedTime,
      color,
      progress,
      isComplete,
    }),
    [remainingTime, elapsedTime, color, progress, isComplete]
  )

  // Apply animation effects (bounce/pulse)
  const hasEffects = animationScale !== 1 || animationOpacity !== 1
  const svgTransform = hasEffects
    ? `scale(${animationScale})`
    : undefined
  const svgTransformOrigin = hasEffects ? 'center' : undefined

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        ...style,
      }}
      className={className}
    >
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: svgTransform,
          transformOrigin: svgTransformOrigin,
          opacity: animationOpacity,
        }}
      >
        <path
          d={path}
          fill="none"
          stroke={trailColor}
          strokeWidth={effectiveTrailStrokeWidth}
        />
        <path
          d={path}
          fill="none"
          stroke={stroke}
          strokeLinecap={strokeLinecap}
          strokeWidth={strokeWidth}
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke 0.5s ease',
          }}
        />
      </svg>
      {typeof children === 'function' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children(renderInfo)}
        </div>
      )}
    </div>
  )
})

CountdownCircleTimer.displayName = 'CountdownCircleTimer'
