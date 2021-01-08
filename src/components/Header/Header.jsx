import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
function Header () {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://images.techhive.com/images/article/2014/09/outlook-logo-100457446-large.jpg" alt="logo"/>
            </div>

            <div className="header__middle">
            <SearchIcon/>
            <input placeholder="Search Mail" type="text" />
            <IconButton>
                <ArrowDropDownIcon className="header__inputCaret"/>
            </IconButton>
            
            </div>

            <div className="header__right">
            <IconButton>
                <AppsIcon/>
            </IconButton>  
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>  
            <Avatar/>
            
            </div>
        </div>
    );
}

export default Header
