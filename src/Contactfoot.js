import React from 'react'
import './contactfoot.css'
import Contact from './landingpage/Contact'
import Footer from './landingpage/Footer'

const Contactfoot = () => {
  return (
    <div className='contactfoot'>
      <div className="contactfooter">
        Contact  us on
      </div>
      <div className="contsecback">
        <Contact />

      </div>
      <Footer />
    </div>
  )
}

export default Contactfoot