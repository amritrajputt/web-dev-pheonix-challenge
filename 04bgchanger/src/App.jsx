import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('green')
  
  return (
    <div className='w-full h-screen duratin-200 bg-black' style={{
      backgroundColor:color
    }}>
      <div className='fixed flex flex-wrap justify-center buttom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black bg-red-500'>red</button>
          <button onClick={() => setColor('blue')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black bg-blue-500'>blue</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black bg-green-500'>green</button>
          <button onClick={() => setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black bg-olive-500'>olive</button>
          <button onClick={() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black bg-black-500'>black</button>
          <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black bg-pink-500'>pink</button>
        </div>
      </div>

    </div>
  )
}

export default App
