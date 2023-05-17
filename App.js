import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './App.css'
import Feed from './Components/Feed/Feed'
import Home from './Components/Home'
import Navi from './Components/Nav/Navi'

import Router from './Components/Router/Router'

function App() {
  return (
    <div className='App'>
        
        <div className='app_body'>
        <Navi/>
        
        </div>
        <Router/>
    </div>
    
  )
}

export default App