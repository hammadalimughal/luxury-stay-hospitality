import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/admin/SideMenu'

const AdminHotelList = () => {
    const [hotels, setHotels] = useState([])
    const fetchHotels = async () => {
        const response = await fetch('/api/hotel/fetchAll', {
            method: 'POST',
        })
        const result = await response.json()
        const { success, hotels, error } = result
        if (success) {
            setHotels(hotels)
        }
    }
    useEffect(() => {
        fetchHotels()
    }, [])
    const deleteHotel = async (id) => {
        /* eslint-disable no-restricted-globals */
        const confirmation = confirm("Do you want to delete this Hotel and all it's Room?");
        /* eslint-enable no-restricted-globals */
        if (confirmation) {
            try {
                const response = await fetch(`/api/hotel/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();

                if (result.success) {
                    alert(result.message);
                    fetchHotels();
                } else {
                    alert(`Failed to delete Hotel: ${result.error || "Unknown error"}`);
                }
            } catch (error) {
                console.error("Error deleting Hotel:", error);
                alert("An error occurred while trying to delete the room.");
            }
        }
    }
    return (
        <>
            <SideMenu />
            <div class="dashboard-content">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div class="dashboard-list-box dash-list margin-top-0">
                            <div class="row">
                                {hotels.map((item, ind) => {
                                    return (
                                        <div key={ind} class="col-sm-4">
                                            <div class="list-box-listing">
                                                <div class="list-box-listing-img">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div class="list-box-listing-content">
                                                    <div class="inner">
                                                        <h3>{item.name}</h3>
                                                        <span>{item.city}, {item.state}, {item.country}</span>
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <button onClick={() => deleteHotel(item._id)} class="button gray"><i class="sl sl-icon-close"></i> Delete</button>
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

export default AdminHotelList
