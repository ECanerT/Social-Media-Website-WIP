import React from 'react'
import {NavLink,NavbarBrand, Navbar,Container,Nav, Badge} from 'react-bootstrap'
import './Navi.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navi() {
  return (
    <div className='Navi'>
       <Navbar expand="sm" className='navbar'>
            <Container>
            
             
             <Navbar.Collapse id='basic-navbar-nav'>
             <Container>
            <Nav className='navtabs' style={{background:'white',alignSelf:'center'}}>
                <NavLink title='Home' className='navtab' style={{}} href='/home'>
                  <HomeOutlinedIcon/>
                    Feed
                </NavLink>
                <NavLink title='Friends' className='navtab' style={{}} href='/friends'>
                   <PersonAddAltOutlinedIcon/> Friends
                </NavLink>
                <NavLink title='Groups' className='navtab' style={{}} href='/groups'>
                  <GroupsOutlinedIcon/>  Groups
                </NavLink>
                <NavLink title='Share' className='navtab' style={{}} href='/share'>
                   <CachedOutlinedIcon/>  Share
                </NavLink>
                <NavLink title='Swap' className='navtab' style={{}} href='/swap'>
                  <CachedOutlinedIcon/>  Swap
                </NavLink>
                {/* <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                <Navbar.Text>hey</Navbar.Text>
                </Navbar.Collapse> */}
                <NavbarBrand className='navbarbrand' >
                <div className='search-bar'>
              <i className='uil uil-search'></i>
              
              <input className='barsearchbar' type={'search'} placeholder={' Search ShareUp Members'}></input>
              <SearchOutlinedIcon style={{ marginTop:'10px'}}/>
              <div className='user-img'>
                <img
                src="https://shareup.s3.us-west-2.amazonaws.com/profile_picture/default.jpg"
                width="51.5"
                height="51.5"
                className="reactico"
                alt="user img"
                style={{}} >
                </img>

              </div>
              <div className='chat_msg'>
                <NavLink>

              <ChatBubbleOutlineOutlinedIcon>

              <div>
              <Badge className='notif_counter'>12</Badge>
              </div>
              </ChatBubbleOutlineOutlinedIcon>
                </NavLink>
              </div>

              <div className='notif'>
                <NavLink>

                  <NotificationsOutlinedIcon/> 
                </NavLink>
              </div>
              
            </div>
                <NavLink className='shareuplogo' title='notif' href='/newsfeed'>
            <img
              src="https://merge-test.d2ilwwxhdeyqlz.amplifyapp.com/assets/images/Mainlogo.png"
              width="45"
              height="45"
              className="reactico"
              alt="caner logo"
              style={{}}
            />  
                </NavLink>
             </NavbarBrand>
            
            
            </Nav>
             </Container>
             </Navbar.Collapse>
            
            </Container>
        {/* <Container className='container'> 
        <Nav style={{display:'flex',marginLeft:'auto', float:'right',marginRight:'10px'}}><NavLink >
            <img 
            src="https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/61b812be9cb997bdb94301bd_react%20logo%20transparent.png"
              width="60"
              height="60"
              className="reactico"
              alt='reactico'/>
              </NavLink>
              </Nav> 
        </Container>     */}
        </Navbar>
        </div>
  )
}

export default Navi