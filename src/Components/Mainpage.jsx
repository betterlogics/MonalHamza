import React from 'react'
import Aboutus from './Aboutus/Aboutus'
import Landing from './Landing/Landing'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'
import Start from './Start/Start'

function Mainpage() {
  return (
    <div>
        <Navbar />
        <Landing />
        <Aboutus />
        <Services />
        <Start />

    </div>
  )
}

export default Mainpage