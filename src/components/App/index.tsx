import { FC } from 'react'
import { TimerProvider } from '../../hooks/useTimer'
import Home from '../Home'
import './index.scss'

const App: FC = () => (
  <TimerProvider>
    <Home />
  </TimerProvider>
)

export default App
