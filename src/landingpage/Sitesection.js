import React from 'react'
import "./sitesection.css"

const Sitesection = () => {
    return (
        <div className="sitesec">
 
            <div className="site-content" data-aos="fade-up"
                    data-aos-duration="2000">
                <h1>Why Reltime</h1>
                <p>Reltime is the world's first to develop the layer-1 proof of authority (which is the latest generation) blockchain platform, offering a cutting-edge solution for digital banking, payment, cross-border transactions, and digital services.</p>

                <div className="sitelist">
                    <ul>
                        <li>Dedicated Customer Onboarding</li>
                        <li>Master Access Control Panel</li>
                        <li>Regulatory Reporting</li>
                        <li>White-label applications</li>
                        <li>Payment</li>
                        <li>Remittance</li>
                        <li>Lending</li>
                        <li>E-KYC</li>
                    </ul>
                    <ul>
                        <li>Currency Exchange</li>
                        <li>DEcentralised Exchange</li>
                        <li>Identity Verification </li>
                        <li>Seamless payment</li>
                        <li>Empowering Innovation</li>
                        <li>High ROI with zero transation fee</li>
                        <li>Loyalty</li>
                        <li>QR codes</li>
                    </ul>
                </div>
            </div>
            <div className="sitemob-vid">
            <img src="assets/v3.gif" alt="gif" />

            </div>
        </div>

    )
}

export default Sitesection