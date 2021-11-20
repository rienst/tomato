import { FC, useEffect } from 'react'
import useTimer from '../../hooks/useTimer'
import './index.scss'

const Timer: FC = () => {
  const { idle, getClockValues, startTimer, pauseTimer, skipTimer, mode } =
    useTimer()

  const { minutes, seconds } = getClockValues()

  const handleStartTimer = () => {
    startTimer()
  }

  const handlePauseTimer = () => {
    pauseTimer()
  }

  const handleSkipTimer = () => {
    skipTimer()
  }

  useEffect(() => {
    const status = mode === 'focus' ? 'Focus' : 'Break'

    document.title = idle ? 'Tomato' : `${status} - Tomato`
  }, [minutes, seconds, mode, idle])

  return (
    <main className="timer">
      <div className="container">
        <div className="timer-mode">
          {mode === 'focus' ? 'Time to focus' : 'Time for a break!'}
        </div>

        <div className="timer-time">
          {minutes}:{seconds}
        </div>

        <div>
          {idle ? (
            <button
              className="timer-button timer-button-primary timer-button-primary-paused"
              onClick={handleStartTimer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="timer-button-icon"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
            </button>
          ) : (
            <button
              className="timer-button timer-button-primary timer-button-primary-started"
              onClick={handlePauseTimer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="timer-button-icon"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
              </svg>
            </button>
          )}

          <div>
            <button
              className="timer-button timer-button-secondary"
              onClick={handleSkipTimer}
            >
              {mode === 'focus' ? 'I deserve a break' : 'Back to work'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Timer
