import React from 'react'
import "./home.css"
import Aboutvid from "./Aboutvid"



const Home = () => {
    return (
        <div className="main-home">
            <div className="home-section dex">
                <div className="content" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1>
                        <p>SuperApp</p>
                        
                    </h1>
                    <p>
                        Seamlessly Transfer, Mint, Swap, and
                        More <br />
                        All in One Platform. Fast, Flexible, and
                        Secure
                    </p>
                </div>

                <div className="homeimg">
                    <img src="../assets/p1.png" alt="superapp" />
                </div>
            </div>



            <div className="home-sections dex">

                <div className="homeimg hi">
                    <img src="../assets/p2.png" alt="superapp" />
                </div>


                <div className="content2" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1>
                        <p>Self-Custody <br />
                        Solutions:</p>
                        

                    </h1>
                    <p>
                        Take control of your assets and CBDC with our non-custodial wallet <br />
                        Full compatibility with Reltime Layer 1 and all EVM assets
                    </p>
                </div>
            </div>


            <div className="home-section">
                <div className="content" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1>
                        <p>
                        Metaverse & Identity Gateway
                        </p>

                    </h1>
                    <p>
                        Connect, Transact, Share, and
                        Communicate with Ease

                    </p>
                </div>

                <div className="homeimg">
                    <img src="../assets/p3.png" alt="superapp" />
                </div>
            </div>

            <div className="home-sections">

                <div className="homevideo">
                    <video width="70%" autoPlay loop muted>
                        <source src="assets/v1.mp4" type="video/mp4" />

                    </video>
                </div>
                <div className="content2" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1> <p>
                        Unlock the Potential of
                        <br />
                        Over 240 APIs: </p> </h1>
                    <p> Dive into our extensive library to craft
                        your custom <br />
                        application exactly to your specifications!
                    </p>
                </div>
            </div>




            <div className="home-section dex">

                <div className="content cont" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1> <p>
                        DEX </p> </h1>
                    <p> Empowering Everyone with Seamless SWAP,
                        Bridge, IDO, Farming, Winning, Minting, and More Services!

                    </p>
                </div>
                <div className="homegif">
                    <img src="assets/v2.gif" alt="gif" />
                </div>
            </div>

            <div className="about">
                <Aboutvid />

            </div>



            <div className="home-section ">

                <div className="content" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1> <p>
                        Security is 
                        Paramount </p> </h1>
                    <p> Rest Asured,your private keys & seeds <br />
                        Pharses are Securely encrypted
                        <br />
                        stored locally within the app

                    </p>
                </div>
                <div className="homevid">
                    <video width="70%" height="700px" autoPlay loop muted>
                        <source src="assets/facevid.mp4" type="video/mp4" />

                    </video>
                </div>
            </div>

            <div className="home-sections">

<div className="homeimgs">
    <img src="../assets/p4.png" alt="superapp" />
</div>


<div className="content2" data-aos="fade-up"
    data-aos-duration="2000">
    <h1>
        <p>
        Express Your 
        Uniqueness
        </p>
      

    </h1>
    <p>
        Rest assured, your private keys and seed
        Tailor Your Wallet Experience to Fit Your Style!
    </p>
</div>
</div>
 

<div className="home-section">
                <div className="content" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1>
                        <p>
                            Direct Control,
                            No Middleman
                        </p>

                    </h1>
                    <p>
                    Rest assured, Your private keeys and seed <br />
                    Your digital assets remain exclusively <br />
                    yours, Reltime operates with full <br />
                    regulatory compliance, integrating <br />
                    robust security and KYC standards <br />
                    without intermediating in your <br />
                    transactions

                    </p>
                </div>

                <div className="homeimgs">
                    <img src="../assets/p5.png" alt="superapp" />
                </div>
            </div>
 

        </div>
    )
}

export default Home