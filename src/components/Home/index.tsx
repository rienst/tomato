import { FC, useEffect } from 'react'
import useTimer from '../../hooks/useTimer'
import Navigation from '../Navigation'
import Timer from '../Timer'

const Home: FC = () => {
  const { mode, idle } = useTimer()

  useEffect(() => {
    const bodyClasses: string[] = [`tomato-${mode}`]

    if (idle) {
      bodyClasses.push('tomato-idle')
    }

    document.body.className = ''
    document.body.classList.add(...bodyClasses)
  }, [mode, idle])

  return (
    <div className="home">
      <Navigation />
      <Timer />
    </div>
  )
}

export default Home
