import { ModeName, Store } from '.'

export const loadLocalStorage = (instance: Store) => {
  const focusMinutes = localStorage.getItem('tomato-focus-minutes')
  const breakMinutes = localStorage.getItem('tomato-break-minutes')

  const focusMinutesInt = focusMinutes ? parseInt(focusMinutes) : false
  const breakMinutesInt = breakMinutes ? parseInt(breakMinutes) : false

  if (focusMinutesInt && !isNaN(focusMinutesInt)) {
    instance.focusMinutes = focusMinutesInt
  }

  if (breakMinutesInt && !isNaN(breakMinutesInt)) {
    instance.breakMinutes = breakMinutesInt
  }
}

export const getCurrentModeMs = (instance: Store) => {
  const currentModeMinutes =
    instance.mode === 'focus' ? instance.focusMinutes : instance.breakMinutes

  return currentModeMinutes * 60000
}

export const getClockValues = (instance: Store) => {
  const ISOString = new Date(
    instance.getCurrentModeMs() - instance.msPassed
  ).toISOString()

  if (ISOString.substr(12, 7) === '1:00:00') {
    return {
      minutes: '60',
      seconds: '00',
    }
  }

  return {
    minutes: ISOString.substr(14, 2),
    seconds: ISOString.substr(17, 2),
  }
}

export const updateModeMinutes = (
  instance: Store,
  modeName: ModeName,
  minutes: number
) => {
  let newMinutes = minutes

  if (isNaN(newMinutes) || newMinutes <= 0) {
    return
  }

  if (minutes > 60) {
    newMinutes = 60
  }

  switch (modeName) {
    case 'focus':
      instance.focusMinutes = newMinutes
      break
    case 'break':
      instance.breakMinutes = newMinutes
      break
  }
}

export const startTimer = (instance: Store) => {
  instance.idle = false
}

export const pauseTimer = (instance: Store) => {
  instance.idle = true
}

export const resetTimer = (instance: Store) => {
  instance.pauseTimer()

  instance.msPassed = 0
}

export const skipTimer = (instance: Store) => {
  instance.resetTimer()

  instance.mode = instance.mode === 'focus' ? 'break' : 'focus'
}

export const watch = (instance: Store) => {
  if (instance.idle) {
    return
  }

  if (instance.msPassed >= instance.getCurrentModeMs()) {
    return
  }

  instance.msPassed = instance.msPassed + 1000
}

export const startWatcher = (instance: Store) => {
  instance.watcher = setTimeout(instance.watch, 1000)
}

export const stopWatcher = (instance: Store) => {
  if (!instance.watcher) {
    return
  }

  clearTimeout(instance.watcher)
}
