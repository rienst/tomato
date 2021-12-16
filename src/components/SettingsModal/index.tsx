import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import SettingsField from './SettingsField'
import './index.scss'
import {
  createResetTimerAction,
  createSetBreakTimeAction,
  createSetFocusTimeAction,
} from '../../store/action-creators'
import { useGlobalState } from '../../store/selectors'

interface SettingsModalProps {
  onDismiss?: () => any
  open: boolean
}

const SettingsModal: FC<SettingsModalProps> = ({ open = false, onDismiss }) => {
  const { focusTime, breakTime } = useGlobalState()
  const dispatch = useDispatch()

  const [newFocusMinutes, setNewFocusMinutes] = useState<string>(
    (focusTime / 60000).toString()
  )
  const [newBreakMinutes, setNewBreakMinutes] = useState<string>(
    (breakTime / 60000).toString()
  )

  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const portalElement = document.getElementById('modal-root')

  const classes: string[] = ['settings-modal']

  if (open) {
    classes.push('settings-modal-open')
  }

  const handleSetNewFocusMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFocusMinutes(event.target.value)
  }

  const handleSetNewBreakMinutes = (event: ChangeEvent<HTMLInputElement>) => {
    setNewBreakMinutes(event.target.value)
  }

  const handleSave = () => {
    dispatch(createSetFocusTimeAction(parseInt(newFocusMinutes) * 60000))
    dispatch(createSetBreakTimeAction(parseInt(newBreakMinutes) * 60000))
    dispatch(createResetTimerAction())

    if (!onDismiss) {
      return
    }

    onDismiss()
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

    setNewFocusMinutes((focusTime / 60000).toString())
    setNewBreakMinutes((breakTime / 60000).toString())

    closeButtonRef.current?.focus()
  }, [open, focusTime, breakTime])

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
          max="60"
          label="Focus minutes"
          value={newFocusMinutes.toString()}
          onChange={handleSetNewFocusMinutes}
        />

        <SettingsField
          id="breakTime"
          name="breakTime"
          type="number"
          min="1"
          max="60"
          label="Break minutes"
          value={newBreakMinutes.toString()}
          onChange={handleSetNewBreakMinutes}
        />

        <button className="settings-modal-save-button" onClick={handleSave}>
          Save settings
        </button>
      </div>
    </div>,
    portalElement
  )
}

export default SettingsModal
