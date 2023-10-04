import React from 'react'
import { Route, Routes } from 'react-router'
import Header from './components/Header'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './components/NotFound'
import Loading from './components/Loading'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut/>} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='login' element={<Loading />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
