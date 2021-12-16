import {
  SetBreakTimeAction,
  SetFocusTimeAction,
  PauseTimerAction,
  ResetTimerAction,
  SkipTimerAction,
  StartTimerAction,
  SetTimePassedAction,
  SetTimeOfLastWatchAction,
} from './types'

export const createSetFocusTimeAction = (time: number): SetFocusTimeAction => ({
  type: 'set-focus-time',
  time,
})

export const createSetBreakTimeAction = (time: number): SetBreakTimeAction => ({
  type: 'set-break-time',
  time,
})

export const createSetTimeOfLastWatchAction = (
  time: number
): SetTimeOfLastWatchAction => ({
  type: 'set-time-of-last-watch',
  time,
})

export const createSetTimePassedAction = (
  time: number
): SetTimePassedAction => ({
  type: 'set-time-passed',
  time,
})

export const createStartTimerAction = (): StartTimerAction => ({
  type: 'start-timer',
})

export const createPauseTimerAction = (): PauseTimerAction => ({
  type: 'pause-timer',
})

export const createResetTimerAction = (): ResetTimerAction => ({
  type: 'reset-timer',
})

export const createSkipTimerAction = (): SkipTimerAction => ({
  type: 'skip-timer',
})
