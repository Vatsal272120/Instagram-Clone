import React, { useState, useEffect } from "react";
import "./App.css";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InstagramEmbed from "react-instagram-embed";

import { Avatar, IconButton, Button, Input } from "@material-ui/core";

import Post from "./Components/Post";
import { db, auth } from "./firebase";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    height: "300px",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [profilePic, setprofilePic] = useState("");
  // modal states
  const [open, setOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        console.log(authUser);
        setUser(authUser);
      }
    });
  }, [user]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
    );
  }, []);

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((e) => alert(e.message));

    setOpen(false);
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((e) => alert(e.messagemessage));

    setRegisterOpen(false);
  };

  return (
    <div className='app'>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='app__login'>
            <center>
              <img
                className='app__headerImage'
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt=''
              />
            </center>

            <Input
              placeholder='email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={login}>Login</Button>
          </form>
        </div>
      </Modal>

      {/* Header */}
      <div className='app__header'>
        <div className='app__headerLeft'>
          <img
            className='app__headerImage'
            src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
            alt=''
            onClick={() => setOpen(true)}
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
              <Avatar
                src={profilePic}
                fontSize='medium'
                onClick={() => setRegisterOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='app__login'>
            <center>
              <img
                className='app__headerImage'
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt=''
              />
            </center>
            <Input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder='email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='profile picture'
              type='text'
              value={profilePic}
              onChange={(e) => setprofilePic(e.target.value)}
            />
            <Input
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={register}>Register</Button>
          </form>
        </div>
      </Modal>

      {/* Posts X n */}

      <div className='app__posts'>
        <div className='app__postsLeft'>
          {posts.map(({ post, id }) => (
            <Post
              key={id}
              username={post.username}
              imageUrl={post.imageUrl}
              profilePic={post.profilePic}
              caption={post.caption}
            />
          ))}
        </div>
        <div className='app__postsRight'>
          {" "}
          <InstagramEmbed
            url='https://www.instagram.com/p/BxVWpyiAJzo/'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
