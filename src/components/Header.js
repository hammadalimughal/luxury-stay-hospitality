import React, { useContext } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { userContext } from '../context/User'
import Cookies from 'js-cookie'

const Header = () => {
    const { userData, setAuthToken } = useContext(userContext)
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
        {
            title: 'Contact Us',
            link: '/contact-us'
        },
    ]
    return (
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
                                { userData ? <button onClick={() => {Cookies.remove('authtoken');setAuthToken(null) }} className="nav-link nav-btn">Log Out</button> : <Link to="/login" className="nav-link nav-btn">Login</Link>}
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
