import React from 'react'
import './Form.css';

const Form = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setEnable(false);
        props.setPop(true);
    }

  return (
    <div className='formContainer' id='formMain'>

        <form className='form' action="" onSubmit={handleSubmit}>
            <h2 className='formHead'>Connect with us</h2>
            <p className="formHeadPara">for outstanding protective overlaminates</p>
            <div className="inputContainer">
                <div className="inputUnit">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" required onChange={(e)=>props.setName(e.target.value)}/>
                </div>
                <div className="inputUnit">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" required />
                </div>
            </div>
            <div className="inputContainer">
                <div className="inputUnit">
                    <label htmlFor="email">Email</label>
                    <input type="email" required />
                </div>
                <div className="inputUnit">
                    <label htmlFor="contact">Contact</label>
                    <input type="tel" required />
                </div>
            </div>
            <div className="inputContainer">
                <div className="inputUnit">
                    <label htmlFor="email">Company</label>
                    <input type="text" required />
                </div>
                <div className="inputUnit">
                    <label htmlFor="state">State</label>
                    <select name="state" id="state" required>
                        <option hidden>Select state</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
            <div className="inputContainer">
                <div className="inputUnitTwo">
                    <label htmlFor="describe">How would you describe yourself?</label>
                    <select name="describe" id="describe" required>
                        <option hidden>Select</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                </div>
            </div>
            <div className="inputContainer">
                <div className="inputUnitTwo">
                    <label htmlFor="distributor">Preffered Distributor</label>
                    <select name="distributor" id="distributor" required>
                        <option hidden>Select Option</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                </div>
            </div>
            <div className="inputContainer">
                <div className="inputUnitThree">
                    <label htmlFor="additional">Additional Information</label>
                    <input type="text" />
                </div>
            </div>
            <input type="checkbox" className='check' />
            <label htmlFor="" className='checkLabel'>I'd like to receive promotions, product information and service offers from Avery Dennison.</label>

            <div className="inputBtnContainer">
                <input type="submit" /><i className="submit-btn fa-sharp fa-solid fa-arrow-right" />
            </div>
        </form>
        
    </div>
  )
}

export default Form