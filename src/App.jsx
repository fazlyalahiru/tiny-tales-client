import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl w-full mx-auto '>
        <Outlet></Outlet>
      </div >
      <Footer></Footer>
    </>

  )
}

export default App
