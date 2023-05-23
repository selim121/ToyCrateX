import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import phone from '../../../assets/images/icon/phone.svg';
import email from '../../../assets/images/icon/email.svg';
import location from '../../../assets/images/icon/location.svg';
import { Form, InputGroup } from 'react-daisyui';


const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-[#ce8c8c66] text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p>Best service is our promise. <br /> Promises distribute all over the country.</p>
                </div>
                <div>
                    <span className="footer-title text-[#612500f1]">Connect Us</span>
                    <a href='https://twitter.com/selim_hossain1' target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                    </a>
                    <a href='https://www.facebook.com/selimhossain.sh1/' target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                    </a>
                    <Form className="my-1">
                        <InputGroup>
                            <input type="email" placeholder="Your email" className='w-1/2 p-1 rounded-l-lg'/>
                            <input type="submit" value="Send" className='bg-[#612500f1] text-white p-1 rounded-r-lg'/>
                        </InputGroup>
                    </Form>
                </div>
                <div>
                    <span className="footer-title text-[#612500f1]">Company</span>
                    <Link to={'/'} className="link link-hover">Home</Link>
                    <Link to={'/all-toys'} className="link link-hover">All Toys</Link>
                    <Link to={'/blog'} className="link link-hover">Blogs</Link>
                    <Link to={'/'} className="link link-hover">Gallery</Link>
                </div>
                <div className='space-y-2'>
                    <span className="footer-title text-[#612500f1]">Contact Us</span>
                    <div className="flex">
                        <img className='w-5 me-2' src={phone} alt="" />
                        <p>+880 1639 523282</p>
                    </div>
                    <div className="flex">
                        <img className='w-5 me-2' src={email} alt="" />
                        <p>selimhossain.sh1@gmail.com</p>
                    </div>
                    <div className="flex">
                        <img className='w-5 me-2' src={location} alt="" />
                        <p>10/7, Shekhertek, Adabor,<br /> Mohammadpur, Dhaka - 1207</p>
                    </div>
                </div>
            </footer>
            <footer className="flex justify-center text-sm py-4 border-t bg-[#ce8c8c66] text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <p>Copyright &copy; 2023 <Link className='text-[#612500f1] link link-hover' to={'/'}>ToyCrateX</Link>. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;