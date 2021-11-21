import { useEffect, useState } from 'react'

function useLocalStorage<T = any>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [value, directlySetValue] = useState<T>(() => {
    const valueFromStorage = localStorage.getItem(key)

    if (valueFromStorage === null) {
      return defaultValue
    }

    return JSON.parse(valueFromStorage)
  })

  const setValue = (value: T) => {
    directlySetValue(value)
  }

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
      return
    }

    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
