import React, { useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native'
import { CountdownCircleTimer } from '@ArcTimer/react-native'
import { ExpoTimerProvider } from '@ArcTimer/expo'
import { neonTheme } from '@ArcTimer/themes'
import type { TimerRef } from '@ArcTimer/core'

function PomodoroTimer() {
  const timerRef = useRef<TimerRef>(null)

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Pomodoro Timer</Text>
      <CountdownCircleTimer
        ref={timerRef}
        duration={25 * 60}
        colors={['#39FF14', '#FFD700', '#FF6B6B']}
        colorsTime={[25 * 60, 10 * 60, 0]}
        isPlaying
        size={200}
        strokeWidth={12}
        trailColor="#1A1A2E"
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60)
          const seconds = remainingTime % 60
          return (
            <View style={styles.timerContent}>
              <Text style={styles.timerText}>
                {String(minutes).padStart(2, '0')}:
                {String(seconds).padStart(2, '0')}
              </Text>
              <Text style={styles.timerLabel}>FOCUS</Text>
            </View>
          )
        }}
      </CountdownCircleTimer>
      <View style={styles.controls}>
        <Pressable
          style={styles.button}
          onPress={() => timerRef.current?.pause()}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => timerRef.current?.play()}
        >
          <Text style={styles.buttonText}>Resume</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => timerRef.current?.reset()}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  )
}

function CountUpTimer() {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Count Up</Text>
      <CountdownCircleTimer
        duration={120}
        colors={['#00D2FF']}
        isPlaying
        isCountUp
        size={120}
        strokeWidth={8}
        trailColor="#1A1A2E"
      >
        {({ elapsedTime }) => (
          <Text style={styles.smallTimerText}>{Math.floor(elapsedTime)}s</Text>
        )}
      </CountdownCircleTimer>
    </View>
  )
}

export default function App() {
  return (
    <ExpoTimerProvider theme={neonTheme} pauseOnBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ArcTimer - Expo</Text>
        <PomodoroTimer />
        <CountUpTimer />
      </SafeAreaView>
    </ExpoTimerProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#39FF14',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#AAAAAA',
    marginBottom: 16,
  },
  timerContent: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontVariant: ['tabular-nums'],
  },
  timerLabel: {
    fontSize: 12,
    color: '#39FF14',
    letterSpacing: 4,
    marginTop: 4,
  },
  smallTimerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00D2FF',
  },
  controls: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1A1A2E',
    borderWidth: 1,
    borderColor: '#39FF14',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#39FF14',
    fontSize: 14,
    fontWeight: '600',
  },
})
