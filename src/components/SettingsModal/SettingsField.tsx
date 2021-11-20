import { FC, ChangeEvent } from 'react'
import './SettingsField.scss'

interface Props {
  type: string
  id: string
  name: string
  label: string
  value: string
  min?: string
  max?: string
  onChange: (event: ChangeEvent<any>) => void
}

const SettingsField: FC<Props> = ({
  type,
  id,
  name,
  label,
  value,
  min,
  max,
  onChange,
}) => (
  <div className="settings-field">
    <label className="settings-field-label" htmlFor={id}>
      {label}
    </label>

    <input
      className="settings-field-control"
      type={type}
      name={name}
      id={id}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  </div>
)

export default SettingsField
