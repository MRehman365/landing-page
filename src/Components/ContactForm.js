import React from 'react'
import '../App.css'
import { AiOutlineUpload } from "react-icons/ai";

const ContactForm = () => {
  return (
    <div>
      <div class="contact-container" id="contact">
  <div class="contact-content px-12">
    <h2 className='text-4xl font-bold'>Get Started with <span>Maxify Solutions</span></h2>
    <p className='text-sm text-justify'>Are you ready to take your business to new heights? Contact Maxify Solutions
today to find out how we can help you in achieving your goals. We're here to
help you find a trusted website development company in Noida or the best
digital marketing services provider in Noida. Let's partner to capitalize on
new opportunities and drive your company to the next step.</p>
    <form>
      <input type="text" id="contact-name" name="contact-name" placeholder="Contact name" required />
      
      <input type="text" id="street" name="street" placeholder="Street" required />
      
      <div class="form-group">
        <div class="input-half">
          <input type="text" id="city" name="city" placeholder="City" required />
        </div>
        <div class="input-half">
          <input type="text" id="postcode" name="postcode" placeholder="Postcode" required />
        </div>
      </div>
      
      <input type="text" id="phone" name="phone" placeholder="Contact Phone" required />
      
      <input type="email" id="email" name="email" placeholder="E-mail" required />
      
      <textarea id="idea" name="idea" placeholder="Let's talk about your idea" required></textarea>
<label htmlFor="file-upload" className='curser'>
      <div className=" h-[200px] flex justify-center items-center gap-3 border-dashed border-[2px]">
      
        <AiOutlineUpload size={24} className="text-gray-600" />
        <p className=" text-gray-600" style={{marginBottom:'0px'}}>Upload Additional File</p>
      <input 
        id="file-upload" 
        type="file" 
        className="hidden"
      />
    </div>
    </label>
      
      
      <label class="checkbox-label">
        <input type="checkbox" name="nda" id="nda" />
        I want to protect my data by signing an NDA
      </label>
      
      <button type="submit">SUBMIT</button>
    </form>
  </div>
  
  <div class="map-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108852.64967372696!2d74.3243776!3d31.506432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919051cb6d08ffd%3A0x5a61626c98977248!2sJoyland!5e0!3m2!1sen!2s!4v1720365561236!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  </div>
</div>
    </div>
  )
}

export default ContactForm
