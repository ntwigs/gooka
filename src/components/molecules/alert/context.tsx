import { AnimatePresence } from 'framer-motion'
import * as React from 'react'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Alert } from '.'
import { on } from '../../../utils/on'

type AlertContextProps = {
  setOpen: (isOpen: boolean) => void
  setMessage: (message: string) => void
}

const AlertContext = createContext({} as AlertContextProps)

type AlertProviderProps = {
  children: ReactNode
}

const ALERT_DISPLAY_TIME = 2000
export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [isOpen, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  useErrorEvent({ setOpen, setMessage })

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setOpen(false)
      }, ALERT_DISPLAY_TIME)
    }
  }, [isOpen, setOpen])

  return (
    <AlertContext.Provider value={{ setOpen, setMessage }}>
      <AnimatePresence>{isOpen && <Alert message={message} />}</AnimatePresence>
      {children}
    </AlertContext.Provider>
  )
}

type MessageProps = string

const useErrorEvent = ({ setOpen, setMessage }: AlertContextProps) => {
  useEffect(() => {
    on<MessageProps>('analyze-error', (_, message) => {
      setOpen(true)
      setMessage(message)
    })
  }, [])
}

type OpenAlertProps = {
  message: string
}

export const useAlert = () => {
  const { setOpen, setMessage } = useContext(AlertContext)

  const openAlert = ({ message }: OpenAlertProps) => {
    setOpen(true)
    setMessage(message)
  }

  return { openAlert }
}
