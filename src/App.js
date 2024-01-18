import './App.css'
import Login from './components/Login'
import useToken from './components/useToken'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Details from './routes/Details'
import Gallery from './routes/Gallery'

import React from 'react'
import { Routes, Route } from "react-router-dom"

export default function App() {
  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div class="app">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/details" element={ <Details /> } />
          <Route path="/gallery" element={ <Gallery /> } />
        </Routes>
    </div>
  )
}

// NEXT
// move url
  // finish home page
  // refactor navbar
  // details page
  // gallery page
  // mobile formatting


/* NEXT... */
/* git committed and urls sorted and tell lily she can test qr codes now  */

/* then once login page looks good, go fix styles on home page that got messed up */
/* then could clean up and deploy new url  */






// THEN
  // features
    // faq collapsing questions
    // instagram thing
      // set up hashtags
    // embedded map in details

  // styles
    // need to clean css sheet big time
    // fix details page
    // login screen
    // countdown
      // have labels for day hour minute
    // fonts
    // transition animations?
    // fix background scaling??
    // check full screen
    // favixon on rsvp link
    // hover colors

  // backend
    // move urls
      // change here, commit
      // chanfw in github on weird branch
      // pull here
      // deploy?
      // wgen to change on github foirm? do i need to?
    // can get undefined error if trying to access with url situation

  // mobile
    // click anywhere offnavbar to collapse menu
    // make menu opaque
    // check styles & fix anything weird

  // baby photos?
  // accent color?