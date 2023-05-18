import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>

        <div className="footerOne">
            <h2 className='fOneHead'>Best Solution From</h2>
            <img src={process.env.PUBLIC_URL+'./logo-wh.png'} alt="" />
        </div>

        <div className="footerTwo">
            <h2 className="fTwoPara">DOL Max Overlaminate Films</h2>
            <h2 className="fTwoPara">Why us</h2>
            <h2 className="fTwoPara">Enquire now</h2>
        </div>

        <div className="footerThree">
            <p className="fThreePara">Avery Dennison Overlaminate</p>
            <p className="fThreePara">Avery Dennison Overlaminate Films</p>
            <p className="fThreePara">Avery Dennison Digital Overlaminate Films</p>
            <p className="fThreePara">Avery Dennison DOL Max</p>
        </div>

    </div>
  )
}

export default Footer