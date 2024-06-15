import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Input from './components/Input'

function App() {
  return (
    <div className='m-0 w-full overflow-x-hidden flex flex-col'>
      <Header />
      <Hero />
      <Input />
    </div>
  )
}

export default App
