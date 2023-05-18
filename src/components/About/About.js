import React from 'react'
import './About.css'

const About = ({scroll}) => {
  return (
    <div className='aboutContainer'>
        <div className="imgContainer"></div>
        <div className="aboutContentContainer">
            <h1 className="aboutHeader">
                Why us?
            </h1>

            <div className="aboutParaContainer">
                <div className="aboutLogoCont">
                    <img src={process.env.PUBLIC_URL+'./checked-bk.png'} alt="" />
                </div>
                <div className="aboutPara">
                    <h3 className="aboutParaHead">Quality Products</h3>
                    <p className="aboutParagraph">
                    Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.
                    </p>
                </div>
            </div>

            <div className="aboutParaContainer">
                <div className="aboutLogoCont">
                    <img src={process.env.PUBLIC_URL+'./multiple.png'} alt="" />
                </div>
                <div className="aboutPara">
                    <h3 className="aboutParaHead">Multiple Options</h3>
                    <p className="aboutParagraph">
                    We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.
                    </p>
                </div>
            </div>

            <div className="aboutParaContainer">
                <div className="aboutLogoCont">
                    <img src={process.env.PUBLIC_URL+'./msg-support.png'} alt="" />
                </div>
                <div className="aboutPara">
                    <h3 className="aboutParaHead">Expertise and Support</h3>
                    <p className="aboutParagraph">
                        Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.
                    </p>
                </div>
            </div>

            <div className="aboutParaContainer">
                <div className="aboutLogoCont">
                    <img src={process.env.PUBLIC_URL+'./checked-bk.png'} alt="" />
                </div>
                <div className="aboutPara">
                    <h3 className="aboutParaHead">Durability Assurance</h3>
                    <p className="aboutParagraph">
                        Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.
                    </p>
                </div>
            </div>

            <button className='about-btn' onClick={scroll}>
                Request a call
                <i className="fa-sharp fa-solid fa-arrow-right" />
            </button>

        </div>
    </div>
  )
}

export default About