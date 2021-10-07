import { useCallback, useState } from 'react'
import Editor from './editor'

function App() {
const [doc, setDoc] = useState<string>('const hello = 12356\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])

  return (
  <Editor onChange={handleDocChange} initialDoc={doc} />
  )
}

export default App
