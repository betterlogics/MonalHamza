import React from 'react'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Google from './Google/Google'
import Islamabad from './Islamabad/Islamabad'
import Landing from './Landing/Landing'
import Header from './Header/Header'
import Mainheader from './Mainheader/Mainheader'

const Home = () => {
  return (
    <div>
      <Mainheader/>
      {/* <Header/> */}
      < Landing / > 
        <About/>
      <Islamabad/>
      <Google/>
    
    </div>
  )
}

export default Home
