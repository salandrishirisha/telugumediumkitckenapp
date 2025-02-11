// import contactImg from '../images/contact-banner.jpeg'



import contactImg from '../Images/hireme.png';


const Contact = () => {
    return (
        // <h3>This is contact section</h3>
        <div className='contact-main'>
            <div className='contact-img'>
                <img src={contactImg} alt="Hire me" />
            </div>
            <div className='personal-details'>
                <h2>Contact Information</h2>
                <p className='p1'>
                    Hello fellow human, I am <span>Salandri Shirisha</span>, a <span>Front End Developer</span>. 
                    You've just stumbled upon my little corner of the internet where I geek out about the 
                    fascinating world of computer engineering. If you're looking for a joker, well you're lucky! Hire me
                </p>
                <p className='p2'>Connect with me on:</p>
                <p className='p3'>
                    LinkedIn: <a href='https://www.linkedin.com/in/shirisha-salandri' target="_blank" rel="noopener noreferrer">Click here</a>
                </p>
                <p className='p4'>
                    Gmail: <a href="mailto:shirisha@gmail.com">shirisha@gmail.com</a>
                </p>
            </div>
        </div>
    )
}
export default Contact;
 

