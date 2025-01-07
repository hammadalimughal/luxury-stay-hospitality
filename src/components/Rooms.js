import React from 'react'
import room1 from '../images/room-b1.jpg'
const Rooms = () => {
    const rooms = [
        {
            title: 'Super Delux',
            pricePerNight: 2010,
            bedrooms: 3,
            rating: 5,
            image: room1,
            wifiAvailable: true
        }
    ]
    return (
        <section className="rooms">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-4">
                        <div className="section-title">
                            <h5>DISCOVER OUR ROOMS</h5>
                            <h2>Explore <span>Rooms & Suits</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis<br /><br />
                                To start the day in the best way, enjoying the extraordinary buffet breakfast in the quiet of our courtyard caressed by the</p>
                            <a href="#" className="btn btn-black mar-top-30">Explore More Rooms</a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="room-outer">
                            <div className="row room-slider">
                                {rooms.map((item, ind) => {
                                    return (
                                        <div key={ind} className="col-lg-6 col-6 col-xs-6">
                                            <div className="room-item">
                                                <div className="room-image">
                                                    <img src={item.image} alt={item.title} />
                                                    <a href="#"><i className="fa fa-heart"></i></a>
                                                </div>
                                                <div className="room-content">
                                                    <div className="room-title">
                                                        <h4>{item.title}</h4>
                                                        <p className="price-ft">${item.pricePerNight} <span>/ per Night</span></p>
                                                        <div className="deal-rating">
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star"></span>
                                                        </div>
                                                    </div>
                                                    <div className="room-services mar-bottom-15">
                                                        <ul>
                                                            <li><i className="fa fa-bed" aria-hidden="true"></i> {item.bedrooms} Bedrooms</li>
                                                            {item.wifiAvailable && <li><i className="fa fa-wifi" aria-hidden="true"></i> Wifi</li>}
                                                        </ul>
                                                    </div>
                                                    <div className="room-btns mar-top-20">
                                                        <a href="#" className="btn btn-black mar-right-10">VIEW DETAILS</a>
                                                        <a href="#" className="btn btn-orange">BOOK NOW</a>
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
        </section>
    )
}

export default Rooms
