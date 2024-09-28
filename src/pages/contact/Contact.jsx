import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contactTitle'>Contact Us</h1>
      <form className='contactForm'>
        <div className='contactFormGroup'>
          <label htmlFor='name' className='contactLabel'>Name</label>
          <input type='text' id='name' placeholder='Your Name' className='contactInput' required />
        </div>
        <div className='contactFormGroup'>
          <label htmlFor='email' className='contactLabel'>Email</label>
          <input type='email' id='email' placeholder='Your Email' className='contactInput' required />
        </div>
        <div className='contactFormGroup'>
          <label htmlFor='message' className='contactLabel'>Message</label>
          <textarea id='message' placeholder='Your Message' className='contactTextarea' required></textarea>
        </div>
        <button type='submit' className='contactSubmit'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
