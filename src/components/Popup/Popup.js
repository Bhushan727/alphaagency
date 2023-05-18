import React from 'react'
import './Popup.css'

const Popup = (props) => {
  return (
    <div className='popContainer'>
        <div className="popCard">
            <h1 className='popHead'>Thank You for Submission</h1>
            <h3 className='popName'>Welcome ✨ {props.name}</h3>
            <button className='popBtn' onClick={e=>props.setPop(false)} >Done</button>
        </div>
    </div>
  )
}

export default Popup