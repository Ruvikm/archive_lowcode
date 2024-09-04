import { FormInstance } from 'antd'
import { createContext } from 'react'

const InspectorContext = createContext<{ form: FormInstance | null }>({
  form: null,
})

export { InspectorContext }
