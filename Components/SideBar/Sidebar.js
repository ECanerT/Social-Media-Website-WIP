import React from 'react'
import { NavLink } from 'react-bootstrap'
import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';

function Sidebar() {
  return (
    <div className='Sidebar'>
    <div className='side-user'>
    <img
                src="https://shareup.s3.us-west-2.amazonaws.com/profile_picture/default.jpg"
                width="60"
                height="60"
                className='side-user-img'
                alt="user img"
                style={{}} >
                </img>
                <div className='side-user-name'>
        Caner Taşkın
      </div>
    </div>
                <div className='sidebars'>

                <NavLink title='Home' className='sidebartab' style={{}} href='/home'>
                  <HomeOutlinedIcon/>
                    ShareFeed
                </NavLink>
                </div>

                <div className='sidebars'>

                <NavLink title='Home' className='sidebartab' style={{}} href='/home'>
                  <HomeOutlinedIcon/>
                    Share Something
                </NavLink>
                </div>

                <div className='sidebars'>

                <NavLink title='Home' className='sidebartab' style={{}} href='/home'>
                  <PersonAddAltOutlinedIcon/>
                    ShareFriends
                </NavLink>
                </div>

                <div className='sidebars'>
                <NavLink title='Friends' className='sidebartab' style={{}} href='/products'>
                   <PersonAddAltOutlinedIcon/> Add Friends
                </NavLink>
                </div>

                <div className='sidebars'>
                <NavLink title='Groups' className='sidebartab' style={{}} href='threejs'>
                  <GroupsOutlinedIcon/> Join Groups
                </NavLink>
                </div>

                <div className='sidebars'>
                <NavLink title='Share' className='sidebartab' style={{}} href='models'>
                   <CachedOutlinedIcon/> HangShares
                </NavLink>
                </div>

                <div className='sidebars'>
                <NavLink title='Swap' className='sidebartab' style={{}} href='menu'>
                  <CachedOutlinedIcon/>  Swap Point
                </NavLink>
                </div>
    </div>
  )
}

export default Sidebar