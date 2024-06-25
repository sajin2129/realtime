import React, { useState } from 'react'
import "./aboutus.css"
import Contact from './landingpage/Contact'
import Footer from './landingpage/Footer'



const Aboutus = () => {

    const [Readone, setReadone] = useState(true)
    const [Readtwo, setReadtwo] = useState(true)

    const Readmoreone = () => {
        setReadone(!Readone);
        setReadtwo(true)
    };
    const Readmoretwo = () => {
        setReadtwo(!Readtwo);
        setReadone(true)
    };







    return (
        <div className='aboutsec '>
            <div className="aboutbanner sections" data-aos="fade-up" data-aos-duration="2000">

                <div className="aboutcont">
                    <h3>About us</h3>
                    <div className="contp">
                        <p>Reltime empowers individuals worldwide to reclaim control over their finances, challenging the dominance of traditional financial institutions. Users can manage their savings and transactions while earning on their financial assets - anytime, anywhere.</p>
                        <p>With its origins as a project at King's College London in 2018, Reltime headquartered in Oslo, is built on pillars of trust, performance, and security.</p>
                        <p>Presently, Reltime has offices in Norway, Lithuania, and Sweden.</p>

                    </div>

                    <div className="startcre">
                        <span>Start creating amazing things</span>
                    </div>
                </div>
                <div className="relabouimg">
                    <img src="assets/reltime-logo-1.png" alt="Reltime" />
                </div>

            </div>


            <div className="vissionsect sections" data-aos="fade-up" data-aos-duration="2000">
                <div className="visdiv">

                    <h3>VISSION</h3>
                    <div className="viscards" >
                        <div className="viscard" >At Reltime, our vision is to be the driving force behind the adoption and evolution of a secure and decentralized digital landscape. We envision a future where our Proof of Authority and Web 3 ecosystem empower individuals worldwide with a Non-Custodian wallet and Super app, providing them with unparalleled control over their digital lives.</div>
                        <div className="viscard" >We strive to be at the forefront of technological innovation, constantly pushing boundaries and exploring new horizons. By leveraging the power of blockchain technology, we aim to revolutionize the way individuals interact with the digital realm, enabling seamless and secure transactions, data ownership, and identity management.</div>
                        <div className="viscard" >Our vision extends beyond technological advancements. We strive to foster a global community that embraces the principles of collaboration, inclusivity, and shared success. By creating an environment that encourages active participation, we aim to unleash the creativity and innovation of developers, entrepreneurs, and users alike.</div>
                        <div className="viscard" >Reltime envisions a future where blockchain technology revolutionizes industries beyond finance, transforming commerce, governance, and social interactions. We see ourselves as catalysts for change, driving adoption and education to pave the way for a decentralized future that benefits all.</div>
                        <div className="viscard" >Through our unwavering commitment to excellence, continuous innovation, and user-centric approach, we aim to set new standards and become the leading force in the world of decentralized technologies. We invite you to join us on this exciting journey as we shape a future where digital freedom and empowerment are the norm, not the exception.</div>
                    </div>

                </div>
                <div className="visdiv">
                    <h3>MISSION</h3>

                    <div className="viscards" >
                        <div className="viscard" >At Reltime, our mission is to revolutionize the digital landscape by delivering a secure Proof of Authority and Web 3 ecosystem. We believe in empowering users with ultimate control over their digital assets and data through our Non-Custodian wallet and Super app.</div>
                        <div className="viscard" >Our commitment lies in creating a decentralized future that promotes transparency, privacy, and inclusivity. We envision a world where individuals can freely navigate the digital realm, confident in the knowledge that their personal information remains secure and their transactions are verifiable.</div>
                        <div className="viscard" >With our cutting-edge Proof of Authority protocol, we ensure the integrity and reliability of our ecosystem. By leveraging the power of blockchain technology, we eliminate the need for intermediaries and create a trustless environment where participants can transact directly, fostering efficiency and reducing costs.</div>
                        <div className="viscard" >We are dedicated to fostering a vibrant and collaborative community, encouraging active participation from users, developers, and businesses alike. By embracing open-source principles and promoting interoperability, we strive to create an ecosystem that thrives on innovation and creativity.</div>
                        <div className="viscard" >Join us on this transformative journey as we shape the future of finance, commerce, and social interactions. Together, let's unlock the true potential of the decentralized revolution.</div>
                    </div>
                </div>
            </div>

            <div className="managementsec sections" data-aos="fade-up" data-aos-duration="2000">
                <h1>Our Management Team</h1>
                <div className="manageteam">
                    <div className="managecard" data-aos="fade-up" data-aos-duration="1000">
                        <div className="coimage">
                            <img src="assets/person_2.jpg" alt="" />
                        </div>
                        <div className="managerole">
                            <h3>Marlene Julo</h3>
                            <h4>CEO & Co-Founder</h4>
                            <p>
                                <span>Marlene Julo is a seasoned investor when it comes to leading edge of technology companies. </span>
                                {!Readone ? (
                                    <span className='coread'> She has a proven track record in fundraising, investing and networking, building
                                        powerful partnerships with leading firms.  Marlene is representing Julo AS, which
                                        is the largest shareholder in and co-founder of Vopy AB (publ), Reltime AS as
                                        well as MedPring AS, a MedTech company with several granted patents. She studied
                                        Mathematics at the University of Oslo (UiO).Email:marlene@reltime.com
                                        <span className='readbtn' onClick={Readmoreone}>Read_less</span>
                                    </span>) : (<span>... <span className='readbtn' onClick={Readmoreone}>Read_more</span></span>
                                )}
                            </p>
                        </div>

                    </div>
                    <div className="managecard" data-aos="fade-up" data-aos-duration="3000">
                        <div className="coimage">
                            <img src="assets/person_3.jpg" alt="" />

                        </div>
                        <div className="managerole">
                            <h3>Bishwajit Choudhary</h3>
                            <h4>CCO</h4>
                            <p>
                                <span>Mr. Choudhary brings over two decades of commercial
                                    experience from the financial  </span>

                                {!Readtwo ? (<span className='coread'>
                                    and digital
                                    services industry where he held many
                                    leadership positions, notably Group SVP- Strategy
                                    at NETS (now Nexi Group), Chief Commercial Officer
                                    at UserTribe and Chief Revenue Officer at Zwipe. In all these
                                    functions his focus has been B2B Sales/ Partnerships/ Business
                                    Development, driving regional and global expansion.  He holds Bachelor of
                                    Engineering (Honors) from India, Diploma in Business Management
                                    (College Merit Award) from Switzerland and Master of Science in
                                    Marketing from Norway.Email:bc@reltime.com
                                    <span className='readbtn' onClick={Readmoretwo}>Read_Less</span>

                                </span>) : (<span>...<span className='readbtn' onClick={Readmoretwo}>Read_More</span></span>)}
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="officesec sections" data-aos="fade-up" data-aos-duration="2000" >
                <h1>Our Offices</h1>
                <div className="officecards">
                    <div className="officecard" data-aos="fade-up" data-aos-duration="1000">
                        <div className="flagimg">
                            <img src="assets/flag1.jpg" alt="Norwayflag" />
                        </div>
                        <div className="officeaddress">
                            <h4>Norway</h4>
                            <p>Reltime AS</p>
                            <p>Lilleakerveien 2C</p>
                            <p> N-0283 Oslo</p>
                            <p>Norway</p>
                        </div>
                    </div>
                    <div className="officecard" data-aos="fade-up" data-aos-duration="2000">
                        <div className="flagimg">
                            <img src="assets/flag2.jpg" alt="Lithuania flag" />
                        </div>
                        <div className="officeaddress">

                            <h4>Lithuania</h4>
                            <p>Reltime. UAB</p>
                            <p>Architektu g.56-101 </p>
                            <p>LT-04111 Vilnius</p>
                            <p>Lithuania</p>
                        </div>
                    </div>
                    <div className="officecard" data-aos="fade-up" data-aos-duration="3000">
                        <div className="flagimg">
                            <img src="assets/flag3.jpg" alt="Salvador flag" />
                        </div>
                        <div className="officeaddress">

                            <h5> Salvador</h5>
                            <p>Reltime LLC</p>
                            <p>Calle La Mascota #533</p>
                            <p>Colonia San Benito</p>
                            <p>El Salvador, C.A.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Aboutus