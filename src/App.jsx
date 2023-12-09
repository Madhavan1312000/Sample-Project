import React from 'react'
import Login from './Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>}/>
            <Route path='/home' element={<Home></Home>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App