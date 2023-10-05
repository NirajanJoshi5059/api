import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './components/NotFound'
import MovieByCategory from './pages/Movie/MovieByCategory'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='movie/:category' element={<MovieByCategory />} />
        {/* <Route path='mealApi/category' element={<MealPage />} /> */}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
