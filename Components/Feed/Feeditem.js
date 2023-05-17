import React from 'react'

function Feeditem() {
  return (
    <div className='item1'>
      <img
                src="https://shareup.s3.us-west-2.amazonaws.com/profile_picture/default.jpg"
                width="60"
                height="60"
                className='feed-item-img'
                alt="user img"
                style={{}} >
                </img>
                <div className='feed-item-name'>
        Caner Taşkın
      </div>
      <button className='feed-item-button'>
        Send Request
      </button>
      </div>
  )
}

export default Feeditem