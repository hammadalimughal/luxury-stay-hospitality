import React, { useEffect, useState, useContext } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import InnerBanner from '../components/InnerBanner';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../context/User'

const RoomAvailablity = () => {
  const navigate = useNavigate()
  const { userData } = useContext(userContext)
  console.log(userData)
  const { id } = useParams()
  const [loading, setLoading] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [formData, setFormData] = useState({ room: id, date: selectedDate, user: userData?._id })
  const [currentTab, setCurrentTab] = useState(1);
  // const bookedDates = [
  //   new Date(2025, 0, 30).toDateString(), // Jan 30, 2025
  //   new Date(2025, 0, 20).toDateString(), // Jan 20, 2025
  //   new Date(2025, 0, 25).toDateString(), // Jan 25, 2025
  // ];

  useEffect(() => {
    setFormData({ room: id, date: selectedDate, user: userData?._id })
  }, [id, userData, selectedDate])

  useEffect(() => {
    if (selectedDate) {
      setCurrentTab(2)
    }
  }, [selectedDate])
  const isTileDisabled = ({ date }) => {
    return bookedDates.includes(date.toDateString());
  };

  const fetchBookedDates = async (e) => {
    const response = await fetch('/api/booking/fetchBookedDates', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ room: id })
    })
    const result = await response.json()
    console.log('result', result)
    const { success, bookedDates, error } = result
    if (success) {
      setBookedDates(bookedDates)
      setLoading(false)
    } else {
      alert(error)
    }
  }

  useEffect(() => {
    fetchBookedDates()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/booking/new', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    const result = await response.json()
    if(result.success){
      alert('Room Booked Successfully')
      navigate('/')
    }
    console.log('result', result)
  }

  return (
    <>
      <InnerBanner title={'Room Availablity'} breadCrumps={[{ title: 'Home', link: '/' }, { title: 'Availablity', current: true }]} />
      {!loading && <section className='py-lg-5 py-3'>
        <h2 className='text-center'>Make Your <span>Reservation</span></h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="date-select" style={{ display: currentTab == 1 ? 'block' : 'none' }}>
                <div class="form-title">
                  <span>1</span>
                  <h4 class="">Select Booking Date</h4>
                </div>
                <Calendar
                  className='availablity-calendar'
                  onChange={setSelectedDate}
                  value={selectedDate}
                  tileDisabled={isTileDisabled}
                  minDate={new Date()}
                />
              </div>
              <div class="card-info mar-top-50" style={{ display: currentTab == 2 ? 'block' : 'none' }}>
                <div class="form-title">
                  <span>2</span>
                  <h4 class="mar-bottom-30">Payment Information</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="row g-4 align-items-center">
                    <div class="col-12">
                      <div class="form-group">
                        <select name="">
                          <option value="Cash">Cash (Pay before 12am)</option>
                        </select>
                      </div>
                    </div>
                    <div class="card-btn d-flex justify-content-between">
                      <button class="btn btn-black" type='button' onClick={() => { setCurrentTab(1) }}>Change Date</button>
                      <button class="btn btn-orange" type='submit'>CONFIRM BOOKING</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>}

    </>
  )
}

export default RoomAvailablity
