import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type ModeName = 'focus' | 'break'

interface TimerContextProps {
  idle: boolean
  mode: ModeName
  focusMinutes: number
  breakMinutes: number
  getClockValues: () => { minutes: string; seconds: string }
  updateModeMinutes: (modeName: ModeName, minutes: number) => void
  startTimer: () => void
  pauseTimer: () => void
  skipTimer: () => void
}

const timerContext = createContext<TimerContextProps>(
  {} as any as TimerContextProps
)

export const TimerProvider: FC = ({ children }) => {
  const [idle, setIdle] = useState<boolean>(true)
  const [msPassed, setMsPassed] = useState<number>(0)
  const [mode, setMode] = useState<ModeName>('focus')
  const [focusMinutes, setFocusMinutes] = useState<number>(25)
  const [breakMinutes, setBreakMinutes] = useState<number>(5)

  const getCurrentModeMs = useCallback(() => {
    const currentModeMinutes = mode === 'focus' ? focusMinutes : breakMinutes

    return currentModeMinutes * 60000
  }, [mode, focusMinutes, breakMinutes])

  const getClockValues = () => {
    const ISOString = new Date(getCurrentModeMs() - msPassed).toISOString()

    return {
      minutes: ISOString.substr(14, 2),
      seconds: ISOString.substr(17, 2),
    }
  }

  const updateModeMinutes = (modeName: ModeName, minutes: number) => {
    let newMinutes = minutes

    if (isNaN(newMinutes) || newMinutes <= 0) {
      return
    }

    if (minutes > 60) {
      newMinutes = 60
    }

    switch (modeName) {
      case 'focus':
        setFocusMinutes(newMinutes)
        break
      case 'break':
        setBreakMinutes(newMinutes)
        break
    }
  }

  const startTimer = () => {
    setIdle(false)
  }

  const pauseTimer = () => {
    setIdle(true)
  }

  const skipTimer = useCallback(() => {
    pauseTimer()

    setMode(mode => (mode === 'focus' ? 'break' : 'focus'))
    setMsPassed(0)
  }, [])

  const watcher = useCallback(() => {
    if (idle) {
      return
    }

    if (msPassed >= getCurrentModeMs()) {
      skipTimer()

      return
    }

    setMsPassed(ms => ms + 1000)
  }, [idle, msPassed, getCurrentModeMs, skipTimer])

  useEffect(() => {
    const currentWatcher = setTimeout(watcher, 1000)

    return () => clearTimeout(currentWatcher)
  }, [mode, msPassed, watcher])

  const timerContextValue = {
    idle,
    mode,
    focusMinutes,
    breakMinutes,
    getClockValues,
    updateModeMinutes,
    startTimer,
    pauseTimer,
    skipTimer,
  }

  return (
    <timerContext.Provider value={timerContextValue}>
      {children}
    </timerContext.Provider>
  )
}

const useTimer = () => useContext(timerContext)

export default useTimer
