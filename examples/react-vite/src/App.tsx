import { useRef, useState } from 'react'
import {
  CountdownCircleTimer,
  TimerGroup,
  type TimerRef,
  type TimerGroupRef,
} from '@ArcTimer/react'
import {
  TimerThemeProvider,
  darkTheme,
} from '@ArcTimer/themes'

const sectionStyle: React.CSSProperties = {
  marginBottom: 48,
  padding: 32,
  borderRadius: 16,
  background: '#f8f9fa',
}

const headingStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 8,
  color: '#1a1a2e',
}

const subStyle: React.CSSProperties = {
  fontSize: 13,
  color: '#666',
  marginBottom: 20,
}

const btnStyle: React.CSSProperties = {
  padding: '8px 20px',
  borderRadius: 8,
  border: '2px solid #3498DB',
  background: 'white',
  color: '#3498DB',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: 14,
}

export function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const timerRef = useRef<TimerRef>(null)
  const groupRef = useRef<TimerGroupRef>(null)

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>
        ArcTimer
      </h1>
      <p style={{ color: '#666', fontSize: 16, marginBottom: 40 }}>
        Smooth 60fps countdown circle timer with animations, effects &amp;
        theming
      </p>

      {/* 1. Basic - smooth arc */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Smooth Arc Animation</h2>
        <p style={subStyle}>
          Arc animates at 60fps while the text updates once per second
        </p>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <CountdownCircleTimer
            ref={timerRef}
            isPlaying={isPlaying}
            duration={30}
            colors={['#3498DB', '#F39C12', '#E74C3C']}
            colorsTime={[30, 15, 0]}
            strokeWidth={10}
            size={180}
            onComplete={() => {
              setIsPlaying(false)
              return { shouldRepeat: false }
            }}
          >
            {({ remainingTime, color }) => (
              <div style={{ textAlign: 'center' }}>
                <div style={{ color, fontSize: 48, fontWeight: 800 }}>
                  {remainingTime}
                </div>
                <div style={{ fontSize: 12, color: '#999', marginTop: -4 }}>
                  seconds
                </div>
              </div>
            )}
          </CountdownCircleTimer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button style={btnStyle} onClick={() => setIsPlaying((p) => !p)}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button style={btnStyle} onClick={() => timerRef.current?.reset()}>
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* 2. Easing Comparison */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Easing Functions</h2>
        <p style={subStyle}>
          Compare linear vs easeInOut vs spring physics side-by-side
        </p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <CountdownCircleTimer
              isPlaying
              duration={15}
              easing="linear"
              colors="#3498DB"
              size={140}
              strokeWidth={8}
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
            >
              {({ remainingTime }) => (
                <span style={{ fontSize: 28, fontWeight: 700 }}>
                  {remainingTime}
                </span>
              )}
            </CountdownCircleTimer>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>
              Linear
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <CountdownCircleTimer
              isPlaying
              duration={15}
              easing="easeInOut"
              colors="#8E44AD"
              size={140}
              strokeWidth={8}
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
            >
              {({ remainingTime }) => (
                <span style={{ fontSize: 28, fontWeight: 700 }}>
                  {remainingTime}
                </span>
              )}
            </CountdownCircleTimer>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>
              Ease In-Out
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <CountdownCircleTimer
              isPlaying
              duration={15}
              easing={{ type: 'spring', tension: 170, friction: 26 }}
              colors="#E74C3C"
              size={140}
              strokeWidth={8}
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
            >
              {({ remainingTime }) => (
                <span style={{ fontSize: 28, fontWeight: 700 }}>
                  {remainingTime}
                </span>
              )}
            </CountdownCircleTimer>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>
              Spring Physics
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bounce Effect */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Bounce Effect</h2>
        <p style={subStyle}>
          Circle bounces (scales) at 10s, 5s thresholds and on complete
        </p>
        <CountdownCircleTimer
          isPlaying
          duration={15}
          colors={['#2ECC71', '#F39C12', '#E74C3C']}
          colorsTime={[15, 8, 0]}
          size={180}
          strokeWidth={10}
          bounceOnComplete
          bounceAt={[10, 5]}
          onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        >
          {({ remainingTime, color }) => (
            <span style={{ color, fontSize: 44, fontWeight: 800 }}>
              {remainingTime}
            </span>
          )}
        </CountdownCircleTimer>
      </section>

      {/* 4. Pulse Effect */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Pulse Effect</h2>
        <p style={subStyle}>
          Rhythmic breathing animation - scale + opacity pulse every 2 seconds
        </p>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <CountdownCircleTimer
              isPlaying
              duration={60}
              colors="#E74C3C"
              size={150}
              strokeWidth={8}
              pulse={{ interval: 2, scale: 1.08, opacity: 0.7 }}
            >
              {({ remainingTime }) => (
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800 }}>
                    {remainingTime}
                  </div>
                  <div style={{ fontSize: 10, color: '#E74C3C' }}>PULSE</div>
                </div>
              )}
            </CountdownCircleTimer>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>
              Fast Pulse (2s)
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <CountdownCircleTimer
              isPlaying
              duration={60}
              colors="#3498DB"
              size={150}
              strokeWidth={8}
              pulse={{ interval: 4, scale: 1.04, opacity: 0.85 }}
            >
              {({ remainingTime }) => (
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800 }}>
                    {remainingTime}
                  </div>
                  <div style={{ fontSize: 10, color: '#3498DB' }}>BREATHE</div>
                </div>
              )}
            </CountdownCircleTimer>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>
              Slow Breathe (4s)
            </div>
          </div>
        </div>
      </section>

      {/* 5. Count Up */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Count Up + Color Gradient</h2>
        <p style={subStyle}>
          Smooth arc fills up as time elapses with color transitions
        </p>
        <CountdownCircleTimer
          isPlaying
          duration={120}
          isCountUp
          colors={['#2ECC71', '#3498DB', '#8E44AD']}
          colorsTime={[120, 60, 0]}
          size={160}
          strokeWidth={10}
        >
          {({ elapsedTime }) => (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800 }}>
                {Math.floor(elapsedTime / 60)}:
                {String(elapsedTime % 60).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 11, color: '#999' }}>elapsed</div>
            </div>
          )}
        </CountdownCircleTimer>
      </section>

      {/* 6. Dark Theme + Neon */}
      <section
        style={{
          ...sectionStyle,
          background: '#0f0f1a',
          border: '1px solid #1a1a2e',
        }}
      >
        <h2 style={{ ...headingStyle, color: '#fff' }}>Dark Theme</h2>
        <p style={{ ...subStyle, color: '#666' }}>
          Themed timer with neon glow effect via CSS text-shadow
        </p>
        <TimerThemeProvider theme={darkTheme}>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <CountdownCircleTimer
              isPlaying
              duration={45}
              colors="#00D2FF"
              trailColor="#1a1a2e"
              size={160}
              strokeWidth={8}
              pulse={{ interval: 3, scale: 1.03, opacity: 0.9 }}
            >
              {({ remainingTime }) => (
                <span
                  style={{
                    color: '#00D2FF',
                    fontSize: 36,
                    fontWeight: 800,
                    textShadow: '0 0 20px rgba(0,210,255,0.5)',
                  }}
                >
                  {remainingTime}
                </span>
              )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
              isPlaying
              duration={30}
              colors="#39FF14"
              trailColor="#1a1a2e"
              size={160}
              strokeWidth={8}
            >
              {({ remainingTime }) => (
                <span
                  style={{
                    color: '#39FF14',
                    fontSize: 36,
                    fontWeight: 800,
                    textShadow: '0 0 20px rgba(57,255,20,0.5)',
                  }}
                >
                  {remainingTime}
                </span>
              )}
            </CountdownCircleTimer>
          </div>
        </TimerThemeProvider>
      </section>

      {/* 7. Pomodoro Sequential Group */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Sequential Timer Group</h2>
        <p style={subStyle}>
          Pomodoro-style: timers run one after another automatically
        </p>
        <TimerGroup
          ref={groupRef}
          mode="sequential"
          isPlaying
          onGroupComplete={() => alert('Pomodoro session complete!')}
        >
          <CountdownCircleTimer
            duration={10}
            colors="#E74C3C"
            size={120}
            strokeWidth={8}
            bounceOnComplete
          >
            {({ remainingTime }) => (
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{ fontSize: 10, fontWeight: 600, color: '#E74C3C' }}
                >
                  WORK
                </div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>
                  {remainingTime}
                </div>
              </div>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            duration={5}
            colors="#2ECC71"
            size={120}
            strokeWidth={8}
            bounceOnComplete
          >
            {({ remainingTime }) => (
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{ fontSize: 10, fontWeight: 600, color: '#2ECC71' }}
                >
                  BREAK
                </div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>
                  {remainingTime}
                </div>
              </div>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            duration={10}
            colors="#E74C3C"
            size={120}
            strokeWidth={8}
            bounceOnComplete
          >
            {({ remainingTime }) => (
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{ fontSize: 10, fontWeight: 600, color: '#E74C3C' }}
                >
                  WORK
                </div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>
                  {remainingTime}
                </div>
              </div>
            )}
          </CountdownCircleTimer>
        </TimerGroup>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button style={btnStyle} onClick={() => groupRef.current?.pauseAll()}>
            Pause All
          </button>
          <button style={btnStyle} onClick={() => groupRef.current?.resetAll()}>
            Reset All
          </button>
        </div>
      </section>
    </div>
  )
}
