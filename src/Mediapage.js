import React from 'react'
import "./mediapage.css"
import Footer from './landingpage/Footer'


const Mediapage = () => {
  return (
    <div className="mediasec">
      <div className="mediahead">
        <h2>RELTIME IN MEDIA</h2>
      </div>

      <div className="mediacards">
        <div className="mediacard">

          <div className="mediacardimg">
            <img src="assets/media/media1.png" alt=" news" />
          </div>
          <div className="mediacardcont">
            <h4>
              <span>October 26, 2023 :  </span>
              Web 3's Impact: A Perspective from Business Trends #113 Edition
            </h4>
            <p>
              Oslo-based fintech Re/time  is dedicated to reshaping the global financial landscape
              through its state-of-the-art  Web3 platform enabled with wide ranging digital applications.
              The company is building the next generation financial and digital
              service platform that is controlled by the end-users without any
              intermediaries .
            </p>
            <a className='medialink' href="https://www.example.com">( More )</a>
          </div>

        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Mediapage