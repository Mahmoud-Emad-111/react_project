import React from "react";
import './style.css';
const Contact=()=>{
    return(
        <div className="contact">
            <div className="contener">
                <div className="main">
                    
                <h1>Drop Me A line</h1>
                <form>
                    <input type='text' placeholder='Your Name'></input>
                    <input type='text' placeholder='Your Email'></input>
                    <input type='text' placeholder='Your Subject'></input>
                    <textarea rows="10" cols="30" placeholder="Your masge"></textarea>
                </form>

                </div>
                
            </div>
        </div>
    )
}
export default Contact;
