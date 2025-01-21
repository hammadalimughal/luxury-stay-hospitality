import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer>
        <div className="footer-top">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="footer-about">
                                <h4>Company Info</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius tellus vitae justo blandit ultrices.</p>
                            </div>
                            <div className="footer-payment">
                                <h4>We Accept</h4>
                                <ul>
                                    <li><img src="images/icons/visa.png" alt="image"/></li>
                                    <li><img src="images/icons/mastercard.png" alt="image"/></li>
                                    <li><img src="images/icons/americanexpress.png" alt="image"/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="quick-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about-us">About</Link></li>
                                    <li><Link to="/hotels">Hotels</Link></li>
                                    <li><Link to="/contact-us">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="footer-contact">
                                <h4>Contact info</h4>
                                <ul>
                                    <li>Tel: 977-222-444-6666</li>
                                    <li>Email: info@Gautama.com.np</li>
                                    <li>Fax: 977-222-444-666</li>
                                    <li>Address: 445 Mount Eden Road, Sundarbasti, Chakrapath</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="copyright-content text-center">
                    <p className="white">Copyright 2025. Made by <span><a href="https://www.linkedin.com/in/ahzam-alam/" target='_blank'>Ahzam Alam</a></span>. All Rights Reserved.</p>
                    <ul>
                        <li><a href="#" className="white"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="white"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="white"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#" className="white"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
