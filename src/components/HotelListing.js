import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HotelListing = () => {
    const [hotels, setHotels] = useState([])
    const fetchHotels = async () => {
        const response = await fetch('/api/hotel/fetchAll', {
            method: 'POST',
            // headers: {
            //     "Content-Type": "multipart/form-data",
            // },
        })
        const result = await response.json()
        const {success,hotels,errro} = result
        if(success){
            setHotels(hotels)
        }
    }
    useEffect(()=>{
        fetchHotels()
    },[])
    return (
        <section className='py-5'>
            <div className="container">
                <div className="list-content">
                    <div className="row">
                        {hotels.map((item,key) => {
                            return (<div key={key} className="col-md-4 col-6">
                                <div className="room-item">
                                    <div className="room-image">
                                        <img src={item.image} alt="image" />
                                    </div>
                                    <div className="room-content">
                                        <div className="room-title">
                                            <h4>{item.name}</h4>
                                            {/* <p className="price-ft"><i className="fa fa-tags"></i> $2010 <span>/ per Night</span></p> */}
                                            <div className="deal-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                            </div>
                                        </div>
                                        <div className="room-services mar-bottom-15">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <i className="fa fa-bed" aria-hidden="true"></i> 3 Rooms
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <i className="fa fa-wifi" aria-hidden="true"></i> Quick Service
                                                </div>
                                            </div>
                                        </div>
                                        <p>{item.address}</p>
                                        <div className="room-btns">
                                            <Link to={`/hotel/${item._id}`} className="btn btn-black mar-right-10">VIEW Rooms</Link>
                                            {/* <a href="#" className="btn btn-orange">BOOK NOW</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelListing
