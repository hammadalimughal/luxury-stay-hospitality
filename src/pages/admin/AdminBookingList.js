import React from 'react'
import SideMenu from '../../components/admin/SideMenu'

const AdminBookingList = () => {
    return (
        <>
            <SideMenu />
            <div class="dashboard-content">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="dashboard-list-box">
                            <h4 class="gray">All Bookings</h4>
                            <div class="table-box">
                                <table class="basic-table booking-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Date</th>
                                            <th>Booking ID</th>
                                            <th>Destination</th>
                                            <th>No of Tickets</th>
                                            <th>Payment</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Ricky Ponting</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C253</td>
                                            <td>Greece - Zakynthos</td>
                                            <td>7</td>
                                            <td><span class="paid t-box">Paid</span></td>

                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Micheal</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C023</td>
                                            <td>Bulgary - Sunny Beach</td>
                                            <td>2</td>
                                            <td><span class="unpaid t-box">Unpaid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jim Morrison</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">E453</td>
                                            <td>Washington</td>
                                            <td>11</td>
                                            <td><span class="paid t-box">Paid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Michelle</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C253</td>
                                            <td>Tokyo, Japan</td>
                                            <td>3</td>
                                            <td><span class="paid t-box">Paid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ricky Ponting</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C253</td>
                                            <td>Brussels</td>
                                            <td>7</td>
                                            <td><span class="unpaid t-box">Unpaid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ricky Ponting</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C253</td>
                                            <td>Greece - Zakynthos</td>
                                            <td>7</td>
                                            <td><span class="paid t-box">Paid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Micheal</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C023</td>
                                            <td>Bulgary - Sunny Beach</td>
                                            <td>2</td>
                                            <td><span class="unpaid t-box">Unpaid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jim Morrison</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">E453</td>
                                            <td>Washington</td>
                                            <td>11</td>
                                            <td><span class="paid t-box">Paid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Michelle</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C253</td>
                                            <td>Tokyo, Japan</td>
                                            <td>3</td>
                                            <td><span class="paid t-box">Paid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ricky Ponting</td>
                                            <td>2019/01/18</td>
                                            <td class="t-id">C253</td>
                                            <td>Brussels</td>
                                            <td>7</td>
                                            <td><span class="unpaid t-box">Unpaid</span></td>
                                            <td>
                                                <a href="#" class="button gray"><i class="sl sl-icon-pencil"></i></a>
                                                <a href="#" class="button gray"><i class="sl sl-icon-close"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="pagination-container">
                            <nav class="pagination">
                                <ul>
                                    <li><a href="#" class="current-page">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#"><i class="sl sl-icon-arrow-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBookingList
