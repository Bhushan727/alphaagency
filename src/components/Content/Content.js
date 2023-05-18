import React from 'react'
import './Content.css';

const Content = ({scroll}) => {
  return (
    <div className='contentContainer'>
        <div className="contentLeft">
            <h1 className="content-head">
                DOL Max Overlaminate Films
            </h1>
            <p className="content-para">
                Printed graphics deserve maximum protection, DOL Max is the solution.
            </p>

            <h3 className="content-benefits">
                Features & Benefits:
            </h3>

            <ul className='content-lists'>
                <li className="content-para">
                    Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.
                </li>
                <li className="content-para">
                    The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.
                </li>
                <li className="content-para">
                    Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.
                </li>
            </ul>

            <button className='content-btn' onClick={scroll}>
                Inquire Now 
                <i className="fa-sharp fa-solid fa-arrow-right" />
            </button>
        </div>
    </div>
  )
}

export default Content