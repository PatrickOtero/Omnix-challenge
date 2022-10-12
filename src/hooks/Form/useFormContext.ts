import { useContext } from 'react'
import formContext from '../../contexts/formContext'

function useFormContext() {
  return useContext(formContext)
}

export default useFormContext
