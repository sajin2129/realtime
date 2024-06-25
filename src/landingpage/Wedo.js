import React from 'react'
import "./wedo.css"

const Wedo = () => {
    return (
        <div className="wedosec">
            <div className="wedo-top dex" data-aos="fade-up" data-aos-duration="2000">
                <h1>What we do</h1>
                <p>We support business to build smartContract and Apps on top of the
                    Reltime PoA blockchain with aim of sharing the benefits of
                    our Layer-1 blockchain. We consult the concept
                    with you on the Blockchain space and give
                    structure to your vision and dream into reality.</p>
            </div>
            <div className="wedo-cards">
                <div className="wedocard" data-aos="fade-up"
                    data-aos-duration="2000"> 
                    <h3>Layer1 PoA Blockchain</h3>
                    <p>launch your defi lending platform in just
                        a few dayfa-spinwith white-label solutions.</p>
                </div>
                <div className="wedocard" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h3>Web3 DEX </h3>
                    <p>        your business entity with our white-label solutions, enabling seamless launches and upgrades.         </p>
                </div>
                <div className="wedocard" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h3>Web3 Developme   </h3>
                    <p> Our expertise in blockchain technologies include solutions such as Smart Business Contracts and much more.     </p>
                </div>
                <div className="wedocard" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h3>    CBDC/Digital assets box  </h3>
                    <p>  CBDC (Central Bank Digital Currency) and digital assets ensures instant and secure transactions in the digital financial ecosystem, enhancing financial efficiency and accessibility.</p>
                </div>
                <div className="wedocard" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h3>    API  </h3>
                    <p>   API that serves all your Web3 needs offers seamless access to blockchain data, smart contracts, and decentralized applications, simplifying development and integration in the blockchain space. </p>
                </div>
                <div className="wedocard" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h3>
                        Non Custody
                    </h3>
                    <p>
                        Non-custodial solutions give users full control over their assets and protect them from exchange hacks or third-party mishandling, enhancing security and trust in the cryptocurrency ecosystem.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Wedo