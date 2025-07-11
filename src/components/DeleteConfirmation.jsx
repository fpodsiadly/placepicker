import { use } from 'react'
import { useEffect, useState } from 'react'

const TIMER = 3000 // 3 seconds

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval running')
      setRemainingTime((prevTime) => prevTime - 10)
    }, 10)
    return () => {
      clearInterval(interval)
      console.log('Interval cleared')
    }
  }, [])

  useEffect(() => {
    console.log('Timer set')
    const timer = setTimeout(() => {
      onConfirm()
    }, 3000)

    return () => {
      console.log('Timer cleared')
      clearTimeout(timer)
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  )
}
