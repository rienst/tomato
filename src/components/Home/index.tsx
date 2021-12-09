import { FC, useEffect } from 'react'
import Navigation from '../Navigation'
import Timer from '../Timer'
import store from '../../store'
import { observer } from 'mobx-react'

const Home: FC = observer(() => {
  useEffect(() => {
    const { mode, idle } = store

    const bodyClasses: string[] = [`tomato-${mode}`]

    if (idle) {
      bodyClasses.push('tomato-idle')
    }

    document.body.className = ''
    document.body.classList.add(...bodyClasses)
  }, [])

  return (
    <div className="home">
      <Navigation />
      <Timer />
    </div>
  )
})

export default Home
