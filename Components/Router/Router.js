import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Home'
import NoPage from '../NoPage/NoPage'

function Router() {
  return (
    <div className='router'>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>} />
          
          <Route path="*" element={<NoPage/>}/> 
        </Routes>
        </BrowserRouter>
        </div>
  )
}

export default Router