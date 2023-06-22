import Link from "next/link"
import { useState } from 'react'

export default function Testing() {

  const [ toggle, setToggle ] = useState(true);

  return (
    <div className="container mx-auto">
      <Link className="text-blue-700 bg-slate-600" href="/">Home LInk</Link>
      <div>this is a new test</div>
      <div>value={toggle ? 'Yes' : 'NO'}</div>
      <button onClick={() => setToggle(!toggle)}>
        Click me
      </button>


    </div>
  )
}
