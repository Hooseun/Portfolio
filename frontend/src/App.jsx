import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Project from './pages/Project'
import Admin from './pages/Admin'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element ={<Home />} />
            <Route path="/about" element ={<About />} />
            <Route path="/profile" element ={<Profile />} />
            <Route path="/login" element ={<Login />} />
            <Route path="/project" element ={<Project />} />
            <Route path="/admin" element ={<Admin />} />
          </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
