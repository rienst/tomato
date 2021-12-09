import { FC, useEffect } from 'react'
import Navigation from '../Navigation'
import Timer from '../Timer'
import store from '../../store'
import { observer } from 'mobx-react'

const Home: FC = observer(() => {
  const { mode, idle } = store

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
})

export default Home
