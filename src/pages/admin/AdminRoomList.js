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
    useEffect(() => {
        fetchAllRooms()
    }, [])

    const deleteRoom = async (id) => {
        /* eslint-disable no-restricted-globals */
        const confirmation = confirm("Do you want to delete this Room?");
        /* eslint-enable no-restricted-globals */
        if (confirmation) {
            try {
                const response = await fetch(`/api/room/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();

                if (result.success) {
                    alert("Room deleted successfully!");
                    fetchAllRooms();
                } else {
                    alert(`Failed to delete room: ${result.error || "Unknown error"}`);
                }
            } catch (error) {
                console.error("Error deleting room:", error);
                alert("An error occurred while trying to delete the room.");
            }
        }
    };

    return (
        <>
            <SideMenu />
            <div class="dashboard-content">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="dashboard-list-box dash-list margin-top-0">

                            <div class="row">
                                {rooms.map((item, ind) => {
                                    return (
                                        <div class="col-sm-4" key={ind}>
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
                                                    <button onClick={() => deleteRoom(item._id)} class="button gray"><i class="sl sl-icon-close"></i> Delete</button>
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
