import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Feed from './Feed/Feed'
import Navi from './Nav/Navi'
import Sidebar from './SideBar/Sidebar'
import Sidetabs from './SideTabs/Sidetabs'
import Router from './Router/Router'

function Home() {
  return (
    <div className='Home'>
         <Row>
          <Col>

          </Col>
          <Col>
          
          </Col>
        </Row>
        <div >
        <Sidebar/>
        </div>

        <div >
        <Feed/>
        </div>

        <div>
        <Sidetabs/>
        </div>
    </div>
  )
}

export default Home