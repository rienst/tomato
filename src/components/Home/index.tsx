import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  createSetBreakTimeAction,
  createSetFocusTimeAction,
} from '../../store/action-creators'
import { useGlobalState } from '../../store/selectors'
import Navigation from '../Navigation'
import Timer from '../Timer'

const Home: FC = () => {
  const { mode, timeOfLastWatch } = useGlobalState()
  const dispatch = useDispatch()

  useEffect(() => {
    const focusTime = localStorage.getItem('tomato-focus-time')
    const breakTime = localStorage.getItem('tomato-break-time')

    const focusTimeInt = focusTime ? parseInt(focusTime) : false
    const breakTimeInt = breakTime ? parseInt(breakTime) : false

    if (focusTimeInt && !isNaN(focusTimeInt)) {
      dispatch(createSetFocusTimeAction(focusTimeInt))
    }

    if (breakTimeInt && !isNaN(breakTimeInt)) {
      dispatch(createSetBreakTimeAction(breakTimeInt))
    }
  }, [dispatch])

  useEffect(() => {
    const bodyClasses: string[] = [`tomato-${mode}`]

    if (!timeOfLastWatch) {
      bodyClasses.push('tomato-idle')
    }

    document.body.className = ''
    document.body.classList.add(...bodyClasses)
  }, [mode, timeOfLastWatch])

  return (
    <div className="home">
      <Navigation />
      <Timer />
    </div>
  )
}

export default Home
