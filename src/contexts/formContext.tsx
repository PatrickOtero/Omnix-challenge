import { createContext } from 'react'
import { ICompProps, IFormContext } from '../@Types/context/formContext'
import useFormContextProvider from '../hooks/Form/useFormContextProvider'

const formContext = createContext({} as IFormContext)

export function FormContextProvider({ children }: ICompProps) {
  const FormContextProvider = useFormContextProvider()
  return (
    <formContext.Provider value={FormContextProvider}>
      {children}
    </formContext.Provider>
  )
}

export default formContext