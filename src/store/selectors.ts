import { useSelector } from 'react-redux'
import { getClockValue, getCurrentModeTime } from './helpers'
import { State } from './types'

export const useGlobalState = () => useSelector<State, State>(state => state)

export const useCurrentModeTime = () => {
  return useSelector<State, number>(state => {
    return getCurrentModeTime(state)
  })
}

export const useClockValue = () => {
  return useSelector<State, string>(state => getClockValue(state))
}
