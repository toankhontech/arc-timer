import React, { useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { CountdownCircleTimer, TimerGroup } from '@toankhontech/arctimer-react-native'
import { TimerThemeProvider, darkTheme } from '@toankhontech/arctimer-themes'
import type { TimerRef, TimerGroupRef } from '@toankhontech/arctimer-core'

function BasicTimer() {
  const timerRef = useRef<TimerRef>(null)

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Basic Timer</Text>
      <CountdownCircleTimer
        ref={timerRef}
        duration={60}
        colors={['#3498DB', '#2ECC71', '#E74C3C']}
        colorsTime={[60, 30, 0]}
        isPlaying
        size={150}
        strokeWidth={10}
      >
        {({ remainingTime }) => (
          <Text style={styles.timerText}>{remainingTime}s</Text>
        )}
      </CountdownCircleTimer>
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => timerRef.current?.pause()}
        >
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => timerRef.current?.play()}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => timerRef.current?.reset()}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

function GroupTimer() {
  const groupRef = useRef<TimerGroupRef>(null)

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Sequential Group</Text>
      <TimerGroup
        ref={groupRef}
        mode="sequential"
        isPlaying
        onGroupComplete={() => console.log('All timers done!')}
      >
        <CountdownCircleTimer
          duration={10}
          colors={['#E74C3C']}
          size={100}
          strokeWidth={8}
        >
          {({ remainingTime }) => (
            <Text style={styles.smallTimerText}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          duration={10}
          colors={['#2ECC71']}
          size={100}
          strokeWidth={8}
        >
          {({ remainingTime }) => (
            <Text style={styles.smallTimerText}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          duration={10}
          colors={['#3498DB']}
          size={100}
          strokeWidth={8}
        >
          {({ remainingTime }) => (
            <Text style={styles.smallTimerText}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </TimerGroup>
    </View>
  )
}

export default function App() {
  return (
    <TimerThemeProvider theme={darkTheme}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ArcTimer - React Native</Text>
        <BasicTimer />
        <GroupTimer />
      </SafeAreaView>
    </TimerThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
    color: '#CCCCCC',
    marginBottom: 16,
  },
  timerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  smallTimerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  controls: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#2C3E50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
})
