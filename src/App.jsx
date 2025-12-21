import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutMemo from './components/Layout'
import HomePageMemo from './pages/home/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMemo/>}>
          <Route path='/' element={<HomePageMemo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App