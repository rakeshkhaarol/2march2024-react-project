//1. import area
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RestaurantCreate } from './components/RestaurantCreate'

import Home from './pages/Home'
import { NevBar } from './components/NevBar'
import RestaurantUpdate from './components/RestaurantUpdate'
import RestaurantSearch from './components/RestaurantSearch'
import RestaurantList from './components/RestaurantList'
import { RestaurantDetail } from './components/RestaurantDetail'


//2. definetion area

function App() {
  //2.1 hooks area


  //2.2 function definetion area



  //2.3 return statments
  return (

    <h1>
      <NevBar />
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
          <Route path='create' element={<RestaurantCreate/>}></Route>
          <Route path='update' element={<RestaurantUpdate/>}></Route>
          <Route path='list' element={<RestaurantList/>}></Route>
          <Route path='detail' element={<RestaurantDetail/>}></Route>
          <Route path='search' element={<RestaurantSearch/>}></Route>
      </Routes>
    </h1>
  )
}

//3. export area
export default App