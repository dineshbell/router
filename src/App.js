import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" exact component={Home}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/about" exact component={About}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
