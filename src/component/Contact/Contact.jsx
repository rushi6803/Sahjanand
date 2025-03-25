import React from 'react'
import './Contact.css'
import msg from '../../assets/msg.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import loc from '../../assets/loc.png'
import arrow from '../../assets/Right.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2a37ec1c-08ad-4d28-8c33-d21f0b305832");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information 
                below.Your feedback,questions, and suggestion are important to us as we 
                strive to provide exceptional service to our School Community
            </p>
            <ul>
                <li> <img src={mail} alt="" />sahjanandvidyalaya@gmail.com</li>
                <li> <img src={phone} alt="" />9879958597</li>
                <li> <img src={loc} alt="" /> Tridev Park Shopping Center, Vastral Road, opp. swagat soc, Mahadev Nagar Tekra, Ahmedabad, Gujarat 382418</li>

            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile Number ' required/>
                <label>Write your message here</label>
                <textarea name="message" placeholder='Enter your message' row="10" required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>


        </div>
      
    </div>
  )
}

export default Contact
