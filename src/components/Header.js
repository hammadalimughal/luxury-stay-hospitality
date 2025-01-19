import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const navLinks = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About Us',
            link: '/about-us'
        },
        {
            title: 'Hotels',
            link: '/hotels'
        },
        // {
        //     title: 'Rooms',
        //     link: '/rooms'
        // },
        {
            title: 'Contact Us',
            link: '/contact-us'
        },
    ]
    return (
        // <div>
        //     <header className="main_header_area">
        //         <div className="header-content">
        //             <div className="container">
        //                 <div className="links links-left">
        //                     <ul>
        //                         <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i> <span className="__cf_email__"> info@gautama.com</span></a>
        //                         </li>
        //                         <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i> 977-222-333-444</a></li>
        //                         <li>
        //                             <select>
        //                                 <option>Eng</option>
        //                                 <option>Fra</option>
        //                                 <option>Esp</option>
        //                             </select>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div className="links links-right pull-right">
        //                     <ul>
        //                         <li><a href="#" data-toggle="modal" data-target="#login"><i className="fa fa-user"
        //                             aria-hidden="true"></i> Login</a></li>
        //                         <li><a href="#" data-toggle="modal" data-target="#register"><i className="fa fa-pen"
        //                             aria-hidden="true"></i> Register</a></li>
        //                         <li>
        //                             <ul className="social-links">
        //                                 <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
        //                                 <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
        //                                 <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
        //                                 <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
        //                             </ul>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="header_menu affix-top">
        //             <nav className="navbar navbar-default">
        //                 <div className="container">
        //                     <div className="navbar-header">
        //                         <a className="navbar-brand" href="index.html">
        //                             <img alt="logo1" src={logo} className="logo-black" />
        //                         </a>
        //                     </div>
        //                     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        //                         <ul className="nav navbar-nav" id="responsive-menu">
        //                             <li className="dropdown submenu active">
        //                                 <a href="index.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Home<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li className="submenu dropdown">
        //                                         <a href="index.html" className="dropdown-toggle" data-toggle="dropdown"
        //                                             role="button" aria-haspopup="true" aria-expanded="false">Home Default<i
        //                                                 className="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="index.html">Home Default</a></li>
        //                                             <li><a href="index-1.html">Home Video</a></li>
        //                                             <li><a href="index-2.html">Home Slider</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li><a href="index-3.html">Home New 1</a></li>
        //                                     <li><a href="index-4.html">Home New 2</a></li>
        //                                     <li><a href="index-5.html">Home New 3</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="submenu dropdown">
        //                                 <a href="roomlist-2.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Rooms<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a href="roomlist-2.html">Room List</a></li>
        //                                     <li><a href="roomlist-1.html">Room Grid</a></li>
        //                                     <li><a href="detail-full.html">Room Detail</a></li>
        //                                     <li><a href="detail-sidebar.html">Room Detail Sidebar</a></li>
        //                                     <li><a href="availability.html">Check Availability</a></li>
        //                                     <li><a href="room-select.html">Select Room</a></li>
        //                                     <li><a href="booking.html">Booking Page</a></li>
        //                                     <li><a href="confirmation.html">Confirmation Page</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="submenu dropdown">
        //                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Pages<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li className="submenu dropdown">
        //                                         <a href="service.html" className="dropdown-toggle" data-toggle="dropdown"
        //                                             role="button" aria-haspopup="true" aria-expanded="false">Service<i
        //                                                 className="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="service.html">Service</a></li>
        //                                             <li><a href="service-detail.html">Service Detail</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="submenu dropdown">
        //                                         <a href="aboutus.html" className="dropdown-toggle" data-toggle="dropdown"
        //                                             role="button" aria-haspopup="true" aria-expanded="false">About Us<i
        //                                                 className="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="aboutus.html">About One</a></li>
        //                                             <li><a href="aboutus1.html">About Two</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="submenu dropdown">
        //                                         <a href="gallery.html" className="dropdown-toggle" data-toggle="dropdown"
        //                                             role="button" aria-haspopup="true" aria-expanded="false">Gallery<i
        //                                                 className="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="gallery.html">Gallery 1</a></li>
        //                                             <li><a href="gallery1.html">Gallery 2</a></li>
        //                                             <li><a href="gallery2.html">Gallery Masonry</a></li>
        //                                             <li><a href="gallery3.html">Gallery Lightbox</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="submenu dropdown">
        //                                         <a href="events.html" className="dropdown-toggle" data-toggle="dropdown"
        //                                             role="button" aria-haspopup="true" aria-expanded="false">Events<i
        //                                                 className="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="events.html">Events One</a></li>
        //                                             <li><a href="events1.html">Events Two</a></li>
        //                                             <li><a href="events-detail.html">Events Detail</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="submenu dropdown">
        //                                         <a href="contact.html" className="dropdown-toggle" data-toggle="dropdown"
        //                                             role="button" aria-haspopup="true" aria-expanded="false">Contact Us<i
        //                                                 className="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="contact.html">Contact One</a></li>
        //                                             <li><a href="contact1.html">Contact Two</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="submenu dropdown">
        //                                         <a href="404.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                             aria-haspopup="true" aria-expanded="false">Error<i className="fa fa-angle-right"
        //                                                 aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="404.html">Error Page 1</a></li>
        //                                             <li><a href="404-1.html">Error Page 1</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li className="submenu dropdown">
        //                                         <a href="comingsoon.html" className="dropdown-toggle" data-toggle="dropdown"
        //                                             role="button" aria-haspopup="true" aria-expanded="false">Comming Soon<i
        //                                                 className="fa fa-angle-right" aria-hidden="true"></i></a>
        //                                         <ul className="dropdown-menu">
        //                                             <li><a href="comingsoon.html">Coming Soon 1</a></li>
        //                                             <li><a href="comingsoon-1.html">Coming Soon 2</a></li>
        //                                         </ul>
        //                                     </li>
        //                                     <li><a href="testimonial.html">Testimonials</a></li>
        //                                     <li><a href="pricing.html">Pricing</a></li>
        //                                     <li><a href="faq.html">Faq</a></li>
        //                                     <li><a href="terms.html">Terms and Conditions</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="submenu dropdown">
        //                                 <a href="restaurant.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Restaurant<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a href="restaurant.html">Home</a></li>
        //                                     <li><a href="restaurant-about.html">About Us</a></li>
        //                                     <li><a href="restaurant-menu.html">Menu</a></li>
        //                                     <li><a href="restaurant-reserve.html">Reservation</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="submenu dropdown">
        //                                 <a href="flight.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Flights<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li> <a href="flight.html">Flight Homepage</a></li>
        //                                     <li> <a href="flight-grid-view.html">Grid View</a></li>
        //                                     <li><a href="flight-list-view.html">List View</a></li>
        //                                     <li><a href="flight-detail.html">Detail Page</a></li>
        //                                     <li><a href="flight-booking.html">Booking</a></li>
        //                                     <li><a href="flight-confirm.html">Thank You</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="submenu dropdown">
        //                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Shop<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a href="shop.html">Shop List</a></li>
        //                                     <li><a href="shop-detail.html">Shop Single</a></li>
        //                                     <li><a href="cart.html">Cart</a></li>
        //                                     <li><a href="checkout.html">Checkout</a></li>
        //                                     <li><a href="login.html">Account</a></li>
        //                                     <li><a href="forgot-password.html">Forgot Password</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="submenu dropdown">
        //                                 <a href="blog-full.html" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Blog<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a href="blog-full.html">Blog Fullwidth</a></li>
        //                                     <li><a href="blog-left.html">Blog Left</a></li>
        //                                     <li><a href="blog-right.html">Blog Right</a></li>
        //                                     <li><a href="blog-masonry.html">Blog Masonry</a></li>
        //                                     <li><a href="single-full.html">Blog Single</a></li>
        //                                     <li><a href="single-left.html">Single Left</a></li>
        //                                     <li><a href="single-right.html">Single Right</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="submenu dropdown">
        //                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
        //                                     aria-haspopup="true" aria-expanded="false">Dashboard<i className="fa fa-angle-down"
        //                                         aria-hidden="true"></i></a>
        //                                 <ul className="dropdown-menu">
        //                                     <li><a href="dashboard.html">Dashboard</a></li>
        //                                     <li><a href="dashboard-my-profile.html">Dashboard Profile</a></li>
        //                                     <li><a href="dashboard-booking.html">Dashboard Bookings</a></li>
        //                                     <li><a href="dashboard-history.html">Dashboard History</a></li>
        //                                     <li><a href="dashboard-list.html">Dashboard Listing</a></li>
        //                                     <li><a href="dashboard-addtour.html">Dashboard Add Tour</a></li>
        //                                     <li><a href="dashboard-reviews.html">Dashboard Reviews</a></li>
        //                                 </ul>
        //                             </li>
        //                             <li className="dropdown submenu">
        //                                 <a href="cart.html" className="mt_cart"><i className="fa fa-shopping-cart"></i><span
        //                                     className="number-cart">1</span></a>
        //                             </li>
        //                         </ul>
        //                         <div className="nav-btn">
        //                             <a href="#" className="btn btn-orange">Book Now</a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div id="slicknav-mobile"></div>
        //             </nav>
        //         </div>
        //     </header>
        // </div>
        <header className='header-main'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img className='img-fluid' src={logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            {navLinks.map((item, ind) => {
                                return (<li class="nav-item">
                                    <Link class="nav-link" to={item.link}>{item.title}</Link>
                                </li>)
                            })}
                            <li className="nav-item">
                                <Link to="/" className="nav-link nav-btn">Book Now</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
