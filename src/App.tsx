import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
// import Input from './components/Input'

function App() {
  return (
    <div className='m-0 w-full h-screen overflow-x-hidden overflow-y-hidden flex flex-col bg-black'>
      <Header />
      <div className='h-10' /> 
      <Hero />
      {/* <Input /> */}
    </div>
  )
}

export default App
