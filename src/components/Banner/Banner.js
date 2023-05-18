import React from 'react'
import './Banner.css'




const Banner = () => {
  return (
    <div className='bannerContainer'>

        <div className="bannerContent">
            <img className='bannerLogo' src={process.env.PUBLIC_URL+'/logo-banner.png'} alt="" />
            <p className='bannerHeading'>Take your graphics protection to the next level with DOL Max overlaminates</p>
            <p className="bannerPara">Pair with MPI 1105 wrapping film for ramped up protection</p>

            <div className="banner-features-Container">
                <div className="bannerFeature">
                    <div className="featureCircle">
                        <img src={process.env.PUBLIC_URL+'./checked.png'} alt="" className="featureIcon" />
                    </div>
                    <p className="featureDetails">Maximum Durability</p>
                </div>
                <div className="bannerFeature">
                <div className="featureCircle">
                        <img src={process.env.PUBLIC_URL+'./shield.png'} alt="" className="featureIcon" />
                    </div>
                    <p className="featureDetails">Enhanced Appearance</p>
                </div>
                <div className="bannerFeature">
                <div className="featureCircle">
                        <img src={process.env.PUBLIC_URL+'./gloss.png'} alt="" className="featureIcon" />
                    </div>
                    <p className="featureDetails">High Gloss Finish</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Banner