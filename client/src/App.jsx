import { useState } from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter , Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
