import { ChangeEvent, FC, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import useTimer from '../../hooks/useTimer'
import SettingsField from './SettingsField'
import './index.scss'

interface SettingsModalProps {
  onDismiss?: () => any
  open: boolean
}

const SettingsModal: FC<SettingsModalProps> = ({ open = false, onDismiss }) => {
  const { focusMinutes, breakMinutes, updateModeMinutes } = useTimer()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const portalElement = document.getElementById('modal-root')
  const classes: string[] = ['settings-modal']

  if (open) {
    classes.push('settings-modal-open')
  }

  const handleSetFocusMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    updateModeMinutes('focus', parseInt(event.target.value))
  }

  const handleSetBreakMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    updateModeMinutes('break', parseInt(event.target.value))
  }

  const handleOnClose = () => {
    if (!onDismiss) {
      return
    }

    onDismiss()
  }

  useEffect(() => {
    if (!open) {
      return
    }

    closeButtonRef.current?.focus()
  }, [open])

  if (!portalElement) return <></>

  return ReactDOM.createPortal(
    <div className={classes.join(' ')}>
      <div className="settings-modal-content">
        <div className="settings-modal-header">
          <h2 className="settings-modal-title">Settings</h2>

          <button
            className="settings-modal-close-button"
            onClick={handleOnClose}
            ref={closeButtonRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="settings-modal-close-button-icon"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>

        <SettingsField
          id="focusTime"
          name="focusTime"
          type="number"
          min="1"
          label="Focus duration"
          value={focusMinutes.toString()}
          onChange={handleSetFocusMinutes}
        />

        <SettingsField
          id="breakTime"
          name="breakTime"
          type="number"
          min="1"
          label="Break duration"
          value={breakMinutes.toString()}
          onChange={handleSetBreakMinutes}
        />

        <p className="settings-modal-note">All values are in minutes.</p>
      </div>
    </div>,
    portalElement
  )
}

export default SettingsModal