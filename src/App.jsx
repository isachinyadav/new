import React from 'react'
import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Home from './pages/homee';
import Signin from './pages/siignin';
import SignOut from './pages/signoout';
import About from './pages/aboutt';
import Profile from './pages/profile';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-out' element={<SignOut/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App