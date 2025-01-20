import React from 'react'
import bannerVideo from '../videos/banner-home.mp4'

const HomeBanner = () => {
  return (
    <div>
<section className="banner">
        <div className="slider video-slider" 
        // style="height: 422.1px;"
        >
            <div className="banner-outer">
                <div className="video-banner">
                    <video autoPlay loop id="vid">
                        <source src={bannerVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="video-banner-content swiper-content">
                    <h3 data-animation="animated fadeInUp">The lap of Luxury</h3>
                    <h1 data-animation="animated fadeInUp">Welcome to <span>Hotel Gautama</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio odio. Aliquam laoreet eleifend orci, ut dignissim tellus.</p>  
                </div>
            </div>
            <div className="overlay"></div>
        </div>

        {/* <div className="banner-form form-style-1">
            <div className="container">
                <div className="form-content text-center">
                    <div className="table-item">
                        <label>Check In</label>
                        <div className="form-group form-icon">
                            <select className="niceSelect" 
                            style={{display: 'none'}}
                            >
                                <option value="1">05/Jan</option>
                                <option value="2">06/Jan</option>
                                <option value="3">07/Jan</option>
                                <option value="4">08/Jan</option>
                                <option value="5">09/Jan</option>
                            </select><div className="nice-select niceSelect" tabIndex="0"><span className="current">05/Jan</span><ul className="list"><li data-value="1" className="option selected">05/Jan</li><li data-value="2" className="option">06/Jan</li><li data-value="3" className="option">07/Jan</li><li data-value="4" className="option">08/Jan</li><li data-value="5" className="option">09/Jan</li></ul></div>
                        </div>
                    </div>
                    <div className="table-item">
                        <label>Check Out</label>
                        <div className="form-group form-icon">
                            <select className="niceSelect" 
                            style={{display: 'none'}}
                            >
                                <option value="1">05/Jan</option>
                                <option value="2">06/Jan</option>
                                <option value="3">07/Jan</option>
                                <option value="4">08/Jan</option>
                                <option value="5">09/Jan</option>
                            </select><div className="nice-select niceSelect" tabIndex="0"><span className="current">05/Jan</span><ul className="list"><li data-value="1" className="option selected">05/Jan</li><li data-value="2" className="option">06/Jan</li><li data-value="3" className="option">07/Jan</li><li data-value="4" className="option">08/Jan</li><li data-value="5" className="option">09/Jan</li></ul></div>
                        </div>
                    </div>
                    <div className="table-item">
                        <label>Guests</label>
                        <div className="form-group form-icon">
                            <select className="niceSelect" 
                            style={{display: 'none'}}
                            >
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                            </select><div className="nice-select niceSelect" tabIndex="0"><span className="current">01</span><ul className="list"><li data-value="1" className="option selected">01</li><li data-value="2" className="option">02</li><li data-value="3" className="option">03</li><li data-value="4" className="option">04</li><li data-value="5" className="option">05</li></ul></div>
                        </div>
                    </div>
                    <div className="table-item">
                        <label>Nights</label>
                        <div className="form-group form-icon">
                            <select className="niceSelect" 
                            style={{display: 'none'}}
                            // style={{display: 'none'}}
                            >
                                <option value="1">05</option>
                                <option value="2">06</option>
                                <option value="3">07</option>
                                <option value="4">08</option>
                                <option value="5">09</option>
                            </select><div className="nice-select niceSelect" tabIndex="0"><span className="current">05</span><ul className="list"><li data-value="1" className="option selected">05</li><li data-value="2" className="option">06</li><li data-value="3" className="option">07</li><li data-value="4" className="option">08</li><li data-value="5" className="option">09</li></ul></div>
                        </div>
                    </div>
                    <div className="table-item">
                        <div className="form-btn mar-top-35">
                            <a className="btn btn-orange">Check Availability</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>      
    </div>
  )
}

export default HomeBanner
