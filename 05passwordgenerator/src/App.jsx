import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "0123456789"
    if (charactersAllowed) str += "()*&^%$#@!"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, setPassword, charactersAllowed])

  useEffect(() => {
    passwordGenerator()
  },
    [passwordGenerator])

  const copyPasswordtoclipBoard = useCallback(() => {
    passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  }, [password])
  return (

    <>
      <h1 className="text-4xl text-center text-green-500">
        Password Generator
      </h1>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 p-4 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} ref={passwordRef} className='outline-none w-full py-1 px-3' placeholder='password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordtoclipBoard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
              
            />
            <label>length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charactersAllowed}
              id='characterInput'
              onChange={() => setCharactersAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
