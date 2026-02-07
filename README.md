<p align="center">
  <img src="assets/demo.gif" alt="ArcTimer Demo" width="720" />
</p>

<h1 align="center">ArcTimer</h1>
<p align="center">The modern, accessible countdown circle timer for React, React Native & Expo</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@toankhontech/arctimer-react" alt="npm version" />
  <img src="https://img.shields.io/npm/dw/@toankhontech/arctimer-react" alt="npm downloads" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="license" />
  <img src="https://img.shields.io/badge/react-18%2B-blue" alt="react" />
  <img src="https://img.shields.io/badge/react--native-0.72%2B-blue" alt="react native" />
  <img src="https://img.shields.io/badge/expo-49%2B-blue" alt="expo" />
  <img src="https://img.shields.io/badge/WCAG-2.1%20AA-green" alt="accessibility" />
  <img src="https://img.shields.io/badge/TypeScript-100%25-blue" alt="typescript" />
</p>

---

## Features

- **Universal** - React (Web), React Native (iOS/Android), Expo
- **Animated** - 7 built-in easings, spring physics, bounce, pulse
- **Multi-Timer** - TimerGroup: sequential, parallel, staggered modes
- **Themed** - 5 built-in themes + custom themes + auto dark mode
- **Accessible** - WCAG 2.1 AA, ARIA, keyboard nav, screen reader
- **Imperative** - `ref.play()` / `pause()` / `reset()` / `getState()`
- **Count Up** - Both countdown and elapsed time modes
- **Tiny** - < 5KB gzipped, tree-shakable
- **TypeScript** - 100% strict mode, zero `any`

## Quick Start

### Install

```bash
# React (Web)
npm install @toankhontech/arctimer-react

# React Native
npm install @toankhontech/arctimer-react-native react-native-svg

# Expo
npx expo install @toankhontech/arctimer-expo
```

### Use

```tsx
import { CountdownCircleTimer } from '@toankhontech/arctimer-react'

function App() {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={60}
      colors={['#3498DB', '#F39C12', '#E74C3C']}
      colorsTime={[60, 30, 0]}
    >
      {({ remainingTime, color }) => (
        <span style={{ color, fontSize: 32 }}>{remainingTime}</span>
      )}
    </CountdownCircleTimer>
  )
}
```

## Packages

| Package | Description |
|---------|-------------|
| `@toankhontech/arctimer-core` | Shared logic, hooks, animation engine (zero platform deps) |
| `@toankhontech/arctimer-react` | React web component (HTML SVG) |
| `@toankhontech/arctimer-react-native` | React Native component (react-native-svg) |
| `@toankhontech/arctimer-expo` | Expo wrapper with auto-linking |
| `@toankhontech/arctimer-themes` | Pre-built theme packs |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `duration` | `number` | **required** | Duration in seconds |
| `isPlaying` | `boolean` | `false` | Controls playback |
| `colors` | `string \| string[]` | `'#3498DB'` | Color(s) for progress arc |
| `colorsTime` | `number[]` | auto | Time thresholds for colors |
| `size` | `number` | `180` | Size in pixels |
| `strokeWidth` | `number` | `12` | Stroke width |
| `easing` | `string \| object \| function` | `'linear'` | Animation easing |
| `isCountUp` | `boolean` | `false` | Count up mode |
| `children` | `function` | - | Render content inside circle |
| `onComplete` | `function` | - | Called when timer finishes |

[Full API Reference](./docs/docs/api-reference.md)

## Multi-Timer (Pomodoro)

```tsx
import { TimerGroup, CountdownCircleTimer } from '@toankhontech/arctimer-react'

<TimerGroup mode="sequential" isPlaying onGroupComplete={() => alert('Done!')}>
  <CountdownCircleTimer duration={1500} colors="#E74C3C" />
  <CountdownCircleTimer duration={300} colors="#2ECC71" />
  <CountdownCircleTimer duration={1500} colors="#E74C3C" />
  <CountdownCircleTimer duration={900} colors="#3498DB" />
</TimerGroup>
```

## Theming

```tsx
import { TimerThemeProvider, darkTheme } from '@toankhontech/arctimer-themes'

<TimerThemeProvider theme="auto"> {/* auto dark mode */}
  <CountdownCircleTimer duration={60} />
</TimerThemeProvider>
```

Built-in themes: `defaultTheme`, `darkTheme`, `minimalTheme`, `vibrantTheme`, `neonTheme`

## Migrating from react-countdown-circle-timer

ArcTimer is a drop-in replacement. [Migration Guide](./docs/docs/guides/migration.md)

```diff
- import { CountdownCircleTimer } from 'react-countdown-circle-timer'
+ import { CountdownCircleTimer } from '@toankhontech/arctimer-react'
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup and guidelines.

## License

MIT
