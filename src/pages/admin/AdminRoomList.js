import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/admin/SideMenu'

const AdminRoomList = () => {
    const [rooms, setRooms] = useState([])
    const fetchAllRooms = async () => {
        const response = await fetch('/api/room/fetchAllRooms', {
            method: 'POST'
        })
        const result = await response.json()
        const { success, rooms, error } = result
        if (success) {
            setRooms(rooms)
        }
    }
    useEffect(()=>{
        fetchAllRooms()
    },[])
    return (
        <>
            <SideMenu />
            <div class="dashboard-content">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="dashboard-list-box dash-list margin-top-0">

                            <div class="row">
                                {rooms.map((item,ind)=>{
                                    return (
                                        <div class="col-sm-4">
                                        <div class="list-box-listing">
                                            <div class="list-box-listing-img">
                                                <a href="#"><img src={item.image} alt={item.title} /></a>
                                            </div>
                                            <div class="list-box-listing-content">
                                                <div class="inner">
                                                    <a href="dashboard-listdetail.html"><h3>{item.title}</h3></a>
                                                    <span>{item.hotel.name}</span>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>        
                                    )
                                })}


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminRoomList
