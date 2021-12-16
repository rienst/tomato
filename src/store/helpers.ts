import { State } from './types'

export const validateTime = (time: number) => {
  if (isNaN(time)) {
    return false
  }

  if (time <= 1000) {
    return 1000
  }

  if (time > 3600000) {
    return 3600000
  }

  return time
}

export const getCurrentModeTime = (state: State) => {
  return state.mode === 'focus' ? state.focusTime : state.breakTime
}

export const getClockValue = (state: State) => {
  const currentModeTime = getCurrentModeTime(state)

  const timeLeft = currentModeTime - state.timePassed

  const minutes = Math.floor(timeLeft / 60000)
  const seconds = parseInt(((timeLeft % 60000) / 1000).toFixed(0))

  return (
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds
  )
}
