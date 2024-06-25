import React, { useState } from 'react';
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faTelegram,faYoutube,faLinkedin,faApple,faGooglePlay } from '@fortawesome/free-brands-svg-icons'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    email: "",
    phoneNumber: "",
    message: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

  }; 

  return (
    <div className="contactsection">
      <div className="form" data-aos="fade-up" data-aos-duration="2000">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form2">
            <div className="names">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First Name' />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last Name' />
            </div>
            <div className="msg">
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder='Company Name' />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Address' />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='E-mail' />
              <div className="atm">
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Phone no' />
              </div>
              <textarea rows="4" cols="50" name="message" value={formData.message} onChange={handleChange} placeholder="Write Your Message here"></textarea><br />
              <div className="agree">
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                <label htmlFor=""> By proceeding you agree to the <span>Business term of service</span> and our <span>privacy policy</span></label>
              </div>
              <div className="submitbtn">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="contactadress" data-aos="fade-up" data-aos-duration="2000">
        <div className="addlogo">
            <img src="assets/reltime-logo-1.png" alt="logo" />
        </div> 
        <address>
            Headquarter: <br />
            Reltime AS <br />
            Lilleakerveien 2C <br />
            N-0283 Oslo <br />
            Norway
        </address>
        <div className="maillocation">
            <p>Support E-mail: support@reltime.com</p>
            <p>Location: Norway, Lithuania, El Salvador</p>
      
          


        </div>
        <div className="mediaicons">
            <a href="https://example.com">
                <FontAwesomeIcon icon={faTwitter} beat />
            </a>
            <a href="https://example.com">
            <FontAwesomeIcon icon={faTelegram} beat />
            </a>
            <a href="https://example.com">
            <FontAwesomeIcon icon= {faYoutube} beat />
            </a>
            <a href="https://example.com">
            <FontAwesomeIcon icon={faLinkedin} beat />
            </a>
            <a href="https://example.com">
            <FontAwesomeIcon icon={faApple} beat />
            </a>
            <a href="https://example.com">
            <FontAwesomeIcon icon={faGooglePlay} beat />
            </a>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
