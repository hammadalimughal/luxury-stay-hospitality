import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SideMenu = () => {
    const location = useLocation()
  return (
    <>
      <div className="dashboard-nav">
          <div className="dashboard-nav-inner">
            <ul>
              <li><Link to="/"><i className="sl sl-icon-settings"></i> Website</Link></li>
              <li className={location.pathname === '/dashboard' ? 'active': ''}><Link to="/dashboard"><i className="sl sl-icon-settings"></i> Dashboard</Link></li>
              {/* <li className={location}><Link to="/dashboard/dashboard-my-profile"><i className="sl sl-icon-user"></i> Edit Profile</Link></li> */}
              <li className={location.pathname === '/dashboard/addroom' ? 'active': ''}><Link to="/dashboard/addroom"><i className="sl sl-icon-plus"></i> Add Room</Link></li>
              <li className={location.pathname === '/dashboard/rooms' ? 'active': ''}>
                <Link to="/dashboard/rooms"><i className="sl sl-icon-layers"></i> Rooms Listing</Link>
              </li>
              <li className={location.pathname === '/dashboard/addhotel' ? 'active': ''}><Link to="/dashboard/addhotel"><i className="sl sl-icon-plus"></i> Add Hotel</Link></li>
              <li className={location.pathname === '/dashboard/hotels' ? 'active': ''}>
                <Link to="/dashboard/hotels"><i className="sl sl-icon-layers"></i> Hotel Listing</Link>
              </li>
              <li className={location.pathname === '/dashboard/booking-list' ? 'active': ''}><Link to="/dashboard/booking-list"><i className="sl sl-icon-list"></i> Booking List</Link></li>
              {/* <li className={location}><Link to="/dashboard/dashboard-history"><i className="sl sl-icon-folder"></i> History</Link></li> */}
              {/* <li className={location}><Link to="/dashboard/dashboard-reviews"><i className="sl sl-icon-star"></i> Reviews</Link></li> */}
              <li><Link to="/"><i className="sl sl-icon-power"></i> Logout</Link></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default SideMenu
