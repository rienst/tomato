export type ModeName = 'focus' | 'break'

export interface State {
  mode: ModeName
  timeOfLastWatch?: number
  timePassed: number
  focusTime: number
  breakTime: number
}

export interface LoadLocalStorageAction {
  type: 'load-local-storage'
}

export interface SetFocusTimeAction {
  type: 'set-focus-time'
  time: number
}

export interface SetBreakTimeAction {
  type: 'set-break-time'
  time: number
}

export interface SetTimeOfLastWatchAction {
  type: 'set-time-of-last-watch'
  time: number
}

export interface SetTimePassedAction {
  type: 'set-time-passed'
  time: number
}

export interface StartTimerAction {
  type: 'start-timer'
}

export interface PauseTimerAction {
  type: 'pause-timer'
}

export interface ResetTimerAction {
  type: 'reset-timer'
}

export interface SkipTimerAction {
  type: 'skip-timer'
}

export interface WatchAction {
  type: 'watch'
}

export interface StartWatcherAction {
  type: 'start-watcher'
}

export interface StopWatcherAction {
  type: 'stop-watcher'
}

export type Action =
  | LoadLocalStorageAction
  | SetFocusTimeAction
  | SetBreakTimeAction
  | SetTimeOfLastWatchAction
  | SetTimePassedAction
  | StartTimerAction
  | PauseTimerAction
  | ResetTimerAction
  | SkipTimerAction
  | WatchAction
  | StartWatcherAction
  | StopWatcherAction

export type ActionProcessor<State, Action> = (
  state: State,
  action: Action
) => State

export type ActionProcessorWithoutAction<State> = (
  state: State,
  action: Action
) => State
