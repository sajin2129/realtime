import React from 'react';
import "./whatreltime.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faHeart, faBolt } from '@fortawesome/free-solid-svg-icons'; // Import icons from the solid category

const Whatreltime = () => {
    return (
        <div className="whatdeli">
            <h1>What Reltime Deliver</h1>
            <div className="delivercards  ">
                <div className="delecard1" data-aos="fade-up" data-aos-duration="2000">
                    <p> Web3 Ecosystem</p>
                    <ul>
                        <li>P2P, Joint Account</li>
                        <li>Lending and Borrowing</li>
                        <li>Swapping and Bridging</li>
                        <li>Your Own Web3 Financial App</li>
                        <li>Without Collateral and Interest</li>
                        <li>Anytime, Anyplace, Anywhere.</li>
                    </ul>
                </div>
                <div className="delecard2 " data-aos="fade-up" data-aos-duration="2000">
                    <p>Layer1 Proof Of Authority</p>
                    <ul>
                        <li>DApps</li>
                        <li>Smart Contracts</li>
                        <li>Open APIs</li>
                        <li>Storage of Digital Assets</li>
                        <li>Identity</li>
                        <li>Proof of Deposit</li>
                    </ul>
                </div>
                <div className="delecard3" data-aos="fade-up" data-aos-duration="2000">
                    <p>FastTrack to WEB3</p>
                    <ul>
                        <li>Web3 banking as a service</li>
                        <li>Three-week FastTrack to Web3</li>
                        <li>White Labeled, Custom built</li>
                        <li>Gateway to Over 150 countries</li>
                        <li>eKYC, AML, PEP</li>
                        <li>Regulatory Radar</li>
                        <li>Plugin For Financial Institution</li>
                    </ul>
                </div>
                <div className="circlegif">
                    <img src="assets/v5.gif" alt="Fluorescent loop" />
                </div>
                <div className="icon icon1" data-aos="fade-up" data-aos-duration="2000">
                    <FontAwesomeIcon icon={faWallet} />
                </div>
                <div className="icon icon2" data-aos="fade-up" data-aos-duration="2000">
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="icon icon3" data-aos="fade-up" data-aos-duration="2000">
                    <FontAwesomeIcon icon={faBolt} />
                </div>
            </div> 


            <div className="  meds">
                <div className="  med" data-aos="fade-up" data-aos-duration="2000">
                    <p> Web3 Ecosystem</p>
                    <ul>
                        <li>P2P, Joint Account</li>
                        <li>Lending and Borrowing</li>
                        <li>Swapping and Bridging</li>
                        <li>Your Own Web3 Financial App</li>
                        <li>Without Collateral and Interest</li>
                        <li>Anytime, Anyplace, Anywhere.</li>
                    </ul>
                </div>
                <div className="med" data-aos="fade-up" data-aos-duration="2000">
                    <p>Layer1 Proof Of Authority</p>
                    <ul>
                        <li>DApps</li>
                        <li>Smart Contracts</li>
                        <li>Open APIs</li>
                        <li>Storage of Digital Assets</li>
                        <li>Identity</li>
                        <li>Proof of Deposit</li>
                    </ul>
                </div>
                <div className="med" data-aos="fade-up" data-aos-duration="2000">
                    <p>FastTrack to WEB3</p>
                    <ul>
                        <li>Web3 banking as a service</li>
                        <li>Three-week FastTrack to Web3</li>
                        <li>White Labeled, Custom built</li>
                        <li>Gateway to Over 150 countries</li>
                        <li>eKYC, AML, PEP</li>
                        <li>Regulatory Radar</li>
                        <li>Plugin For Financial Institution</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Whatreltime;
