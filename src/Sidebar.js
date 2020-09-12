import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import './Sidebar.css'
import { IconButton, Avatar, Input } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://gravatar.com/avatar/90adb4808c7711ad088ab20d4dec501d?s=400&d=robohash&r=x"/>
                <div className="sidebar__headerRight">
                 <IconButton>           
                   <DonutLargeIcon />
                 </IconButton>  
                  <IconButton>           
                   <ChatIcon />
                 </IconButton>  
                 <IconButton>           
                   <MoreVertIcon />
                 </IconButton>      
                </div>
            </div>
            <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                <SearchIcon />
                <input type="text" placeholder="search or start a new chat"/>
              </div>
            </div>
            <div className="sidebar__chats">
              <SidebarChat />
              <SidebarChat />
              <SidebarChat />


            </div>
        </div>
    )
}

export default Sidebar
