import React from 'react';
import "./fastrack.css";

const Fasttrack = () => {
  return (
    <div className="fastsec"data-aos="fade-up"
    data-aos-duration="2000">
      <div className="fasthead" >
        <h1>Fasttrack for Web3</h1>
        <p>Web3 development can be quite complex. Simplify the process with our proven expertise in top-notch, prompt and affordable project delivery. Experience the real deal as we guide you through our streamlined 3-week process, delivering results beyond an MVP.</p>
      </div>

      <div className="fastcards" >
        <div className="fastcard" >
        <div className="point" ></div>
          <h2> Requirement</h2>
          <p>
            <strong>Join forces with Reltime to transform your project dreams into reality. We work together to understand your project idea and craft a bespoke user experience through our designer programs. Our engineers meticulously build a secure and seamless app architecture, ensuring smooth operations.</strong>
          </p>
        </div>

        <div className="fastcard">
        <div className="point"></div>
          <h2> Sprint Development & Customization</h2>
          <p>
            <strong>We then proceed with building, customising, and deploying, adhering to strict guidelines. Our comprehensive documentation provides a solid foundation for your future endeavours, supported by our ready-to-use open API.</strong>
          </p>
        </div>

        <div className="fastcard">
        <div className="point"></div>
          <h2> Deployment</h2>
          <p>
            <strong>After careful development, we are prepared for deployment. The Reltime app goes beyond simple source code, offering a robust platform with a global reach and an unparalleled user experience resulting from a meticulous deployment process.</strong>
          </p>
        </div>

        <div className="fastcard">
        <div className="point"></div>
          <h2> SLA & Upgrade</h2>
          <p>
            <strong>Once your product is live, it evolves with the market. As the user feedback drives rapid service improvement for industry dominance, we provide support, SLA, and deliver innovative services worldwide in seconds.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fasttrack;
