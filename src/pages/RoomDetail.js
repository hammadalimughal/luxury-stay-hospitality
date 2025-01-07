import React from 'react'
import Slider from "react-slick";
const RoomDetail = () => {
    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
       <section className="details">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="detail-slider">
                        <Slider {...sliderSettings} className="slider-1 slider-for">
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider1.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider2.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider3.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider4.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider5.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider6.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider7.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider8.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider9.jpg" alt="image" />
                            </div>
                        </Slider>
                        <div className="slider-1 slider-nav">
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider1.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider2.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider3.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider4.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider5.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider6.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider7.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider8.jpg" alt="image" />
                            </div>
                            <div className="detail-slider-item">
                                <img src="images/detail-slider/slider9.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="detail-content">
                        <div className="detail-title">
                            <div className="title-left">
                                <h3>Luxury King Room</h3>
                                <div className="rating">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                            </div>
                            <div className="title-right pull-right">
                                <ul>
                                    <li className="facebook"><i className="fab fa-facebook"></i></li>
                                    <li className="twitter"><i className="fab fa-twitter"></i></li>
                                    <li className="linkedin"><i className="fab fa-linkedin"></i></li>
                                    <li className="pinterest"><i className="fab fa-pinterest"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div id="exTab1"> 
                            <ul  className="nav nav-pills">
                                <li className="active"><a  href="#1a" data-toggle="tab">Overview</a></li>
                                <li><a href="#2a" data-toggle="tab">Price/Rate</a></li>
                                <li><a href="#3a" data-toggle="tab">Places Around</a></li>
                                <li><a href="#4a" data-toggle="tab">Location/Map</a></li>
                                <li><a href="#5a" data-toggle="tab">Reviews(3)</a></li>
                            </ul>

                            <div className="tab-content clearfix">
                                <div className="tab-pane active" id="1a">
                                  <div className="detail-overview detail-box">
                                        <h4>Overview and Amenities</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius ligula non tellus euismod fermentum. Nulla quis enim ut est dapibus luctus quis quis enim. Ut bibendum ultricies nisl ut aliquam. Ut in arcu id nunc elementum ultricies eu eget lacus nam at neque lorem.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius ligula non tellus euismod fermentum. Nulla quis enim ut est dapibus luctus quis quis enim. Ut bibendum ultricies nisl ut aliquam. Ut in arcu id nunc elementum ultricies eu eget lacus. Nam at neque lorem. Vivamus faucibus ex et hendrerit venenatis. Donec quis dignissim purus nullam semper ullamcorper odio vitae dictum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius ligula non tellus euismod fermentum. Nulla quis enim ut est dapibus luctus quis quis enim. Ut bibendum ultricies nisl ut aliquam. Ut in arcu id nunc elementum ultricies eu eget lacus nam at neque lorem.</p>
                                        <ul className="amenities">
                                            <li><i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms</li>
                                            <li><i className="fa fa-wifi" aria-hidden="true"></i> Wifi</li>
                                            <li><i className="fa fa-tv" aria-hidden="true"></i> Telivision</li>
                                            <li><i className="fa fa-bath" aria-hidden="true"></i> Hot Water</li>
                                            <li><i className="fa fa-utensil-spoon" aria-hidden="true"></i> Dinner</li>
                                            <li><i className="fa fa-cogs" aria-hidden="true"></i> Quick Service</li>
                                            <li><i className="fa fa-thermometer" aria-hidden="true"></i> AC</li>
                                            <li><i className="fa fa-bath" aria-hidden="true"></i> Laundry Service</li>
                                            <li><i className="fa fa-car" aria-hidden="true"></i> Airport Taxi</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tab-pane" id="2a">
                                    <div className="price-table detail-box">
                                        <h4>Price and Rates(/Night)</h4>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <td>Sun</td>
                                                    <td>Mon</td>
                                                    <td>Tues</td>
                                                    <td>Wed</td>
                                                    <td>Thurs</td>
                                                    <td>Fri</td>
                                                    <td>Sat</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>$1200</td>
                                                    <td>$1200</td>
                                                    <td>$1200</td>
                                                    <td>$1200</td>
                                                    <td>$1200</td>
                                                    <td>$1200</td>
                                                    <td>$1200</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane" id="3a">
                                    <div className="detail-places detail-box">
                                        <h4>Places Around</h4>
                                        <div className="service-outer">
                                            <div className="row">
                                                <div className="col-md-4 col-sm-12 col-xs-12">
                                                    <div className="service-item">
                                                        <div className="service-image">
                                                            <img src="images/service1.jpg" alt="Image" />
                                                        </div>
                                                        <div className="service-content">
                                                            <h3>Restaurant</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-xs-12">
                                                    <div className="service-item">
                                                        <div className="service-image">
                                                            <img src="images/service2.jpg" alt="Image" />
                                                        </div>
                                                        <div className="service-content">
                                                            <h3>Massage</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 col-xs-12">
                                                    <div className="service-item">
                                                        <div className="service-image">
                                                            <img src="images/service3.jpg" alt="Image" />
                                                        </div>
                                                        <div className="service-content">
                                                            <h3>Swimming Pool</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="tab-pane" id="4a">
                                    <div className="detail-map detail-box">
                                        <div className="detail-location">
                                            <h4>Location and Map</h4>
                                            <div className="location-item">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <p>445 Mount Eden Road, Sundarbasti, Chakrapath</p>
                                            </div>
                                            <div className="location-item">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                                <p>977- 222 - 444 - 666</p>
                                                <p>977- 222 - 444 - 666</p>
                                            </div>
                                            <div className="location-item">
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2c45424a436c6b4d59584d41024f434102425c">[email&#160;protected]</a></p>
                                                <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="81e9e4edf1c1c6e0f4f5e0ecafe2eeecafeff1">[email&#160;protected]</a></p>
                                            </div>
                                        </div>
                                        <div id="map"></div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="5a">
                                    <div className="detail-review">
                                        <h4>Reviews(3)</h4>
                                        <div className="review-outer">
                                            <ul>
                                                <li>
                                                    <div className="review-item">
                                                        <div className="review-image">
                                                            <img src="images/review1.jpg" alt="image" />
                                                        </div>
                                                        <div className="review-content">
                                                            <h5>Micheal Clordy</h5>
                                                            <a href="#"><i className="fa fa-reply" aria-hidden="true"></i> Reply</a>
                                                            <p className="date">November 10,2018 at 3:10 pm</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id iaculis arcu. Aenean non dolor magna. In sed consectetur nisi. Sed venenatis, nibh sit amet sodales ullamcorper, ipsum orci condimentum tortor, et cursus veli.tturpis at justo. Vivamus pellentesque volutpat urna vel eleifend. </p>
                                                        </div>
                                                    </div>
                                                     <ul>
                                                        <li>
                                                            <div className="review-item">
                                                                <div className="review-image">
                                                                    <img src="images/review2.jpg" alt="image" />
                                                                </div>
                                                                <div className="review-content">
                                                                    <h5>Micheal Clordy</h5>
                                                                    <a href="#"><i className="fa fa-reply" aria-hidden="true"></i> Reply</a>
                                                                    <p className="date">November 10,2018 at 3:10 pm</p>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id iaculis arcu. Aenean non dolor magna. In sed consectetur nisi. Sed venenatis, nibh sit amet sodales ullamcorper, ipsum orci condimentum tortor, et cursus veli.tturpis at justo. Vivamus pellentesque volutpat urna vel eleifend. </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="review-item">
                                                        <div className="review-image">
                                                            <img src="images/review3.jpg" alt="image" />
                                                        </div>
                                                        <div className="review-content">
                                                            <h5>Micheal Clordy</h5>
                                                            <a href="#"><i className="fa fa-reply" aria-hidden="true"></i> Reply</a>
                                                            <p className="date">November 10,2018 at 3:10 pm</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id iaculis arcu. Aenean non dolor magna. In sed consectetur nisi. Sed venenatis, nibh sit amet sodales ullamcorper, ipsum orci condimentum tortor, et cursus veli.tturpis at justo. Vivamus pellentesque volutpat urna vel eleifend. </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="comment-box">
                                            <h4>Leave a message</h4>
                                            <form>
                                                <div className="row">
                                                    <div className="form-group col-xs-6">
                                                        <input type="text" className="form-control" id="fname" placeholder="First Name" />
                                                    </div>
                                                    <div className="form-group col-xs-6">
                                                        <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                                                    </div>
                                                    <div className="form-group col-xs-6">
                                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                                    </div>
                                                    <div className="form-group col-xs-6">
                                                        <input type="text" className="form-control" id="phnumber" placeholder="Phone" />
                                                    </div>
                                                    <div className="textarea col-xs-12">
                                                        <textarea placeholder="Enter a message"></textarea>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <div className="comment-btn">
                                                            <a href="#" className="btn btn-orange">Submit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="detail-sidebar">
                        <div className="sidebar-form reservation-form">
                            <div className="form-price">
                                <div className="title-price">
                                    <h2>$1200<span>/Night</span></h2>
                                </div>
                            </div>

                            <div className="banner-form form-style-2">

                                <div className="form-content">
                                    <div className="form-content-inner">
                                        <div className="table-item">
                                            <label>Check In</label>
                                             <div className="form-group">
                                                <div className="date-range-inner-wrapper">
                                                    <input id="date-range2" className="form-control" value="Check In" />
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-item">
                                            <label>Check Out</label>
                                             <div className="form-group">
                                                <div className="date-range-inner-wrapper">
                                                    <input id="date-range3" className="form-control" value="Check Out" />
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-item">
                                            <label>Guests</label>
                                            <div className="form-group form-icon">
                                                <select>
                                                    <option value="1">0</option>
                                                    <option value="2">1</option>
                                                    <option value="3">2</option>
                                                    <option value="4">3</option>
                                                    <option value="5">4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="table-item">
                                            <label>Nights</label>
                                            <div className="form-group form-icon">
                                                <select>
                                                    <option value="1">0</option>
                                                    <option value="2">1</option>
                                                    <option value="3">2</option>
                                                    <option value="4">3</option>
                                                    <option value="5">4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="table-item">
                                            <div className="form-btn">
                                                <a className="btn btn-orange">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-support">
                            <h3>Help and Support</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut arnare</p>
                            <p><i className="fa fa-phone"></i>  977 - 222 - 444 - 666</p>
                        </div>
                        <div className="sidebar-room">
                            <div className="sr-image">
                                <img src="images/sr1.jpg" alt="image" />
                            </div>
                            <div className="room-title sr-content">
                                <h3>Super Deluxe</h3>
                                <p>$1200/Night</p>
                                <div className="deal-rating">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="related-rooms">
        <div className="container">
            <div className="section-title">
                <h2>Explore <span>Rooms</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis</p>
            </div>
            <div className="room-outer">
                <div className="row team-slider">
                    <div className="col-md-4">
                        <div className="room-item">
                            <div className="room-image">
                                <img src="images/room1.jpg" alt="image" />
                            </div>
                            <div className="room-content">
                                <div className="room-title">
                                    <h4>Super Deluxe</h4>
                                    <p><i className="fa fa-tag"></i> $1000/Night</p>
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
                                            <i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <i className="fa fa-wifi" aria-hidden="true"></i> Quick Service
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <div className="room-btns">
                                    <a href="#" className="btn btn-black mar-right-10">VIEW DETAILS</a>
                                    <a href="#" className="btn btn-orange">BOOK NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="room-item">
                            <div className="room-image">
                                <img src="images/room2.jpg" alt="image" />
                            </div>
                            <div className="room-content">
                                <div className="room-title">
                                    <h4>Junior Suite</h4>
                                    <p><i className="fa fa-tag"></i> $500/Night</p>
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
                                            <i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <i className="fa fa-wifi" aria-hidden="true"></i> Quick Service
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <div className="room-btns">
                                    <a href="#" className="btn btn-black mar-right-10">VIEW DETAILS</a>
                                    <a href="#" className="btn btn-orange">BOOK NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="room-item">
                            <div className="room-image">
                                <img src="images/room3.jpg" alt="image" />
                            </div>
                            <div className="room-content">
                                <div className="room-title">
                                    <h4>Executive Suite</h4>
                                    <p><i className="fa fa-tag"></i> $8120/Night</p>
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
                                            <i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <i className="fa fa-wifi" aria-hidden="true"></i> Quick Service
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <div className="room-btns">
                                    <a href="#" className="btn btn-black mar-right-10">VIEW DETAILS</a>
                                    <a href="#" className="btn btn-orange">BOOK NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="room-item">
                            <div className="room-image">
                                <img src="images/room4.jpg" alt="image" />
                            </div>
                            <div className="room-content">
                                <div className="room-title">
                                    <h4>Royal Suite</h4>
                                    <p><i className="fa fa-tag"></i> $1500/Night</p>
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
                                            <i className="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <i className="fa fa-wifi" aria-hidden="true"></i> Quick Service
                                        </div>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh.</p>
                                <div className="room-btns">
                                    <a href="#" className="btn btn-black mar-right-10">VIEW DETAILS</a>
                                    <a href="#" className="btn btn-orange">BOOK NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default RoomDetail
