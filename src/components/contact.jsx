import React from "react";
import  "./contact.css"
import Footer from "./Footer"

export default function Contact(){
   const name = "Abdirizak";
   const [formData , setFormData] = React.useState({
    firstName: "",
    secondName: "",
    email: "",
    comments: "",
    shareData: false
   })
 function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prevState =>{ 
        return {
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }})
 }
    function handleSubmit(event){
        // event.preventDefault()
    }


    return(
      <div className="myContact">

        <div className="contact-data">

         <div className="contact-head">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
         </div>

         <form className="form-data" onSubmit={handleSubmit}>
               <div className="names-data"> 
                  <div> 
                     <label htmlFor="first_name" >First name</label>
                     <br/>
                     <input 
                        id="first_name"
                        type="text" 
                        placeholder="Enter your first name" 
                        onChange={handleChange} 
                        name="firstName" 
                        value={formData.firstName}
                        />
                  </div>
      
                     <div>
                     <label htmlFor="last_name" >Last name</label>
                     <br/>
                     <input 
                        id="last_name"
                        type="text" 
                        placeholder="Enter your last name" 
                        onChange={handleChange} 
                        name="secondName" 
                        value={formData.secondName}
                        />
                     </div>
                     
               </div>

            <div className="email-data">    
                <label htmlFor="email" >Email</label>
                <br/>
                <input 
                   id="email"
                   type="text" 
                   placeholder="yourname@email.com" 
                   onChange={handleChange} 
                   name="email" 
                   value={formData.email}
                   
                   />
            </div>       
                
            <div>
                <label htmlFor="message" >Message</label>
                <br/>
                <textarea 
                   id="message"
                   placeholder="Send me a message and I'll reply you as soon as possible..." 
                   onChange={handleChange} 
                   name="comments" 
                   value={formData.comments} 
                   
                   />
            </div>

            <div className="checker">
                <input 
                   type="checkbox" 
                   checked={formData.shareData} 
                   id="shareData" 
                   name="shareData" 
                   onChange={handleChange} 
                   />
                <label htmlFor="shareData" >You agree to providing your data to {name} who may contact you.</label>
            </div>

            <button id="btn__submit">Send message</button>

          </form>
        </div>
    <Footer/>
    </div>
    )
}