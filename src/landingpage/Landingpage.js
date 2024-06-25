import React from 'react'
import "./landingpage.css"
// import Head from './Head'
import Banner from './Banner'
import Home from './Home'
import Controlpanel from './Controlpanel'
import Contact from './Contact'
import Footer from './Footer'
import Sitesection from './Sitesection'
import Whatreltime from './Whatreltime'
import Wedo from './Wedo'
import Fastrack from './Fasttrack'

const Landingpage = () => {
  return (
    <div className='landingpag'>
       {/* <Head/> */}
     <Banner/>
     <Home/>
     <Sitesection/>
     <Whatreltime/>
    <Wedo/>
    <Fastrack/>
     <Controlpanel/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Landingpage