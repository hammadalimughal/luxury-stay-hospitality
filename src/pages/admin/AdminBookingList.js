import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/admin/SideMenu'

const AdminBookingList = () => {
    const [bookings, setBookings] = useState([])
    const fetchAllBooking = async (e) => {
        const response = await fetch('/api/booking/fetchAll', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await response.json()
        console.log('result', result)
        const { success, bookings, error } = result
        if (success) {
            setBookings(bookings)
        } else {
            alert(error)
        }
    }



    const handlePaymentStatus = async (e) => {
        const value = e.target.value === "true";
        const bookingId = e.target.getAttribute('data-id')
        const response = await fetch('/api/booking/payment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: bookingId, paid: value })
        })
        const result = await response.json()
        console.log(result)
        const { success, error } = result
        if (success) {
            e.target.classList.remove("paid", "unpaid");
            if (value) {
                e.target.classList.add("paid");
            } else {
                e.target.classList.add("unpaid");
            }
        } else {
            alert(error)
        }
    };
    useEffect(() => {
        fetchAllBooking()
    }, [])
    return (
        <>
            <SideMenu />
            <div class="dashboard-content">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="dashboard-list-box">
                            <h4 class="gray">All Bookings</h4>
                            <div class="table-box">
                                <table class="basic-table booking-table w-100">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Guest Email</th>
                                            <th>Hotel</th>
                                            <th>Room</th>
                                            <th>Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.map((item, ind) => {
                                            return (
                                                <tr>
                                                    <td>{new Date(item.date).toDateString()}</td>
                                                    <td><a href={'mailto:' + item.user.email}>{item.user.email}</a></td>
                                                    <td>{item.room.hotel.name}</td>
                                                    <td class="t-id">{item.room.number}</td>
                                                    <td>
                                                        <select className={'t-box ' + (item.paid ? 'paid' : 'unpaid')} data-id={item._id} onChange={handlePaymentStatus} name="">
                                                            <option value="true" selected={item.paid}>Paid</option>
                                                            <option value="false" selected={!item.paid}>Un Paid</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBookingList
