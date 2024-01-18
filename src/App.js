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
  // finish home page .. styles got all whacked
  // keep refactoring styles
  // refactor navbar
  // details page
  // gallery page
  // mobile formatting
  // updtae the embedded link for rsvp form

// THEN
    // faq collapsing questions??
    // instagram thing
      // set up hashtags
    // embedded map in details

  // styles
    // need to clean css sheet big time
    // fix details page
    // countdown
      // have labels for day hour minute
    // fonts
    // transition animations?
    // fix background scaling??
    // check full screen
    // favixon on rsvp link
    // hover colors

  // mobile fomrmatting..
    // click anywhere offnavbar to collapse menu
    // make menu opaque
    // check styles & fix anything weird

  // baby photos?
  // accent color?