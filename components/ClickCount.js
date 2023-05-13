import { useCallback, useState } from 'react'
import Button from './Button'

export default function ClickCount() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => { setCount((v) => v + 1 )}, [setCount])
  const decrement = useCallback(() => { setCount((v) => ( v>0 ? v - 1 : v))}, [setCount])
  // (v>0 ? v - 1 : 0) 
  return <div>
      <Button onClick={increment}> Add   </Button> 
      <b> [ {count} ] </b>
      <Button onClick={decrement}> Subt  </Button>
      </div>
}
