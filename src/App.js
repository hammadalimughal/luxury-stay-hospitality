import React, { useEffect } from 'react'
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Defaults.css'
import './Plugin.css'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import Hotels from './pages/Hotels';
import ContactUs from './pages/ContactUs';
import AdminHome from './pages/admin/AdminHome';
import AddRoom from './pages/admin/AddRoom';
import AdminRoomList from './pages/admin/AdminRoomList';
import AdminBookingList from './pages/admin/AdminBookingList';
import AdminHotelList from './pages/admin/AdminHotelList';
import AddHotel from './pages/admin/AddHotel';
import Toast from './components/Toast';

const App = () => {
  const location = useLocation()
  useEffect(function () {
    if (location.pathname.includes('dashboard')) {
      import('./Dashboard.css');
    }
  }, [location])
  return (
    <>
      {!location.pathname.includes('dashboard') && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotel/:id' element={<Rooms />} />
        <Route path='/room-detail' element={<RoomDetail />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/dashboard' element={<AdminHome />} />
        <Route path='/dashboard/addroom' element={<AddRoom />}/>
        <Route path='/dashboard/rooms' element={<AdminRoomList />}/>
        <Route path='/dashboard/addhotel' element={<AddHotel />}/>
        <Route path='/dashboard/hotels' element={<AdminHotelList />}/>
        <Route path='/dashboard/booking-list' element={<AdminBookingList />}/>
      </Routes>
      {!location.pathname.includes('dashboard') && <Footer />}
      <Toast />
    </>
  )
}

export default App