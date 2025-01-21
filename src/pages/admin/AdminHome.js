import React from 'react'
import SideMenu from '../../components/admin/SideMenu'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <>
      <div id="dashboard">
        <SideMenu />
        <div class="dashboard-content text-center">
          <div className="row justify-content-center g-4">
            <div className="col-lg-10" style={{ height: `calc(100vh - 150px)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <h1>Luxury Stay Hospitality</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium, culpa consectetur nesciunt quaerat, optio, cupiditate eius excepturi voluptates provident eaque. Repudiandae architecto harum in eum saepe, quibusdam, tenetur at earum nam inventore et, libero veritatis accusantium debitis deleniti ipsam ex repellat dolorem sapiente? Perferendis excepturi doloribus odio voluptates dolore!</p>
              <Link to='/' className='btn btn-black'>Back to Website</Link>
            </div>
          </div>
        </div>
        <div class="copyrights">
          <p>2025 <i class="fa fa-copyright" aria-hidden="true"></i> Luxury Stay Hospitality by <a
            href="https://www.linkedin.com/in/ahzam-alam/" target="_blank">Ahzam Alam</a></p>
        </div>
      </div>
    </>
  )
}

export default AdminHome
