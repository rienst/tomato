import { autorun, makeAutoObservable } from 'mobx'
import {
  loadLocalStorage,
  getCurrentModeMs,
  getClockValues,
  updateModeMinutes,
  startTimer,
  pauseTimer,
  resetTimer,
  skipTimer,
  watch,
  startWatcher,
  stopWatcher,
} from './actions'

export type ModeName = 'focus' | 'break'

export class Store {
  constructor() {
    makeAutoObservable(this)
    loadLocalStorage(this)
  }

  idle = true
  mode: ModeName = 'focus'
  focusMinutes = 25
  breakMinutes = 5
  msPassed = 0
  watcher?: NodeJS.Timeout

  loadLocalStorage = () => loadLocalStorage(this)
  getCurrentModeMs = () => getCurrentModeMs(this)
  getClockValues = () => getClockValues(this)
  updateModeMinutes = (modeName: ModeName, minutes: number) =>
    updateModeMinutes(this, modeName, minutes)
  startTimer = () => startTimer(this)
  pauseTimer = () => pauseTimer(this)
  resetTimer = () => resetTimer(this)
  skipTimer = () => skipTimer(this)
  watch = () => watch(this)
  startWatcher = () => startWatcher(this)
  stopWatcher = () => stopWatcher(this)
}

const store = new Store()

autorun(() => {
  localStorage.setItem('tomato-focus-minutes', store.focusMinutes.toString())
  localStorage.setItem('tomato-break-minutes', store.breakMinutes.toString())
})

export default store
