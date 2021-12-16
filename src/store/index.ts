import { createStore, Reducer } from 'redux'
import { validateTime } from './helpers'
import { Action, State } from './types'

const initialState: State = {
  timePassed: 0,
  mode: 'focus',
  focusTime: 25 * 60 * 1000,
  breakTime: 5 * 60 * 1000,
}

const storeReducer: Reducer<State> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'set-focus-time':
      const focusTime = validateTime(action.time)

      return {
        ...state,
        focusTime: focusTime ? focusTime : state.focusTime,
      }
    case 'set-break-time':
      const breakTime = validateTime(action.time)

      return {
        ...state,
        breakTime: breakTime ? breakTime : state.breakTime,
      }
    case 'set-time-of-last-watch':
      return {
        ...state,
        timeOfLastWatch: action.time,
      }
    case 'set-time-passed':
      return {
        ...state,
        timePassed: action.time,
      }
    case 'start-timer':
      return {
        ...state,
        timeOfLastWatch: new Date().getTime(),
      }
    case 'pause-timer':
      return {
        ...state,
        timeOfLastWatch: undefined,
      }
    case 'reset-timer':
      return {
        ...state,
        timeOfLastWatch: undefined,
        msPassed: 0,
      }
    case 'skip-timer':
      return {
        ...state,
        timeOfLastWatch: undefined,
        timePassed: 0,
        mode: state.mode === 'focus' ? 'break' : 'focus',
      }
    default:
      return state
  }
}

const store = createStore(storeReducer)

store.subscribe(() => {
  const state = store.getState()

  localStorage.setItem('tomato-focus-time', state.focusTime.toString())
  localStorage.setItem('tomato-break-time', state.breakTime.toString())
})

export default store
