import React, { useState, useEffect } from "react";
import "./App.css";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Post from "./Components/Post";

function App() {
  return (
    <div className='app'>
      {/* Header */}
      <div className='app__header'>
        <div className='app__headerLeft'>
          <img
            className='app__headerImage'
            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
            alt=''
          />
        </div>

        <div className='app__headerRight'>
          <div className='app__headerIcons'>
            <div className='headerIcon'>
              <HomeIcon fontSize='medium' />
            </div>
            <div className='headerIcon'>
              <TelegramIcon fontSize='medium' />
            </div>
            <div className='headerIcon'>
              <ExploreIcon fontSize='medium' />
            </div>
            <div className='headerIcon'>
              <FavoriteBorderIcon fontSize='medium' />
            </div>
            <div className='headerIcon'>
              <Avatar src='' fontSize='medium' />
            </div>
          </div>
        </div>
      </div>

      {/* Posts X n */}
      <Post />
    </div>
  );
}

export default App;
