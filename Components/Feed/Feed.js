import React from 'react'
import './Feed.css'
import Feeditem from './Feeditem'

function Feed() {
  return (
    <div className='Feed'>
      <div className='grid-container'>
      <div className='feed-user'>
                <img
                src="https://shareup.s3.us-west-2.amazonaws.com/profile_picture/default.jpg"
                width="74"
                height="75"
                className='feed-user-img'
                alt="user img"
                style={{}} >
                </img>
                <div className='feed-text'>
                <h2>

                Are you new?
                </h2>
                <h3 style={{fontWeight:'normal',textAlign:'left'}}>
                Here are some suggestions!
                </h3>
                </div>
              </div>
      </div>
      <div className='items'>
        
     <Feeditem/>
     <Feeditem/>
     <Feeditem/>
     <Feeditem/>
     <Feeditem/>
      
      </div>
      </div>
  )
}

export default Feed