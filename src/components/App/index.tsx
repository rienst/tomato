import { FC, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  createSetTimeOfLastWatchAction,
  createSetTimePassedAction,
  createSkipTimerAction,
} from '../../store/action-creators'
import Home from '../Home'
import './index.scss'
import { useCurrentModeTime, useGlobalState } from '../../store/selectors'

const App: FC = () => {
  const { timeOfLastWatch, timePassed } = useGlobalState()
  const currentModeTime = useCurrentModeTime()
  const dispatch = useDispatch()

  const watch = useCallback(() => {
    // Timer is not running
    if (!timeOfLastWatch) {
      return
    }

    // Timer is finished
    if (timePassed >= currentModeTime) {
      return dispatch(createSkipTimerAction())
    }

    // Timer is running

    const currentTime = new Date().getTime()
    const timeSinceLastWatch = currentTime - timeOfLastWatch

    dispatch(createSetTimeOfLastWatchAction(currentTime))
    dispatch(createSetTimePassedAction(timePassed + timeSinceLastWatch))
  }, [timePassed, timeOfLastWatch, currentModeTime, dispatch])

  useEffect(() => {
    const watcher = setInterval(watch, 1000)

    return () => clearTimeout(watcher)
  }, [watch])

  return <Home />
}

export default App
