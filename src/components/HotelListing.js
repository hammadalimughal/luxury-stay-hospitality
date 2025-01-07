import React from 'react'

const HotelListing = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="list-content">
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <div className="room-item">
                                <div className="room-image">
                                    <img src="images/room-list/list1.jpg" alt="image" />
                                </div>
                                <div className="room-content">
                                    <div className="room-title">
                                        <h4>Royal Suite</h4>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                    <div className="room-btns">
                                        <a href="#" className="btn btn-black mar-right-10">VIEW DETAILS</a>
                                        {/* <a href="#" className="btn btn-orange">BOOK NOW</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelListing
