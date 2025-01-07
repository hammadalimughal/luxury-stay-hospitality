import React from 'react'
import country1 from '../images/dt-1.jpg'
import country2 from '../images/dt-2.jpg'
import country3 from '../images/dt-3.jpg'
import country4 from '../images/dt-4.jpg'

const TopHotels = () => {
    const countryWiseHotels = [
        {
            image: country1,
            country: 'Maldives',
            noOfHotels: 40
        },
        {
            image: country2,
            country: 'Africa',
            noOfHotels: 40
        },
        {
            image: country3,
            country: 'Egypt',
            noOfHotels: 40
        },
        {
            image: country4,
            country: 'South Africa',
            noOfHotels: 40
        },
    ]
    return (
        <section className="top-hotel">
            <div className="container">
                <div className="top-title">
                    <div className="row justify-content-between">
                        <div className="col-md-8 col-sm-8 col-12">
                            <h2>top <span>Hotels</span></h2>
                            <p className="mar-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis</p>
                        </div>
                        <div className="col-md-4 col-sm-4 col-12">
                            <a href="#" className="btn btn-black ms-auto">Explore More</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {countryWiseHotels.map((item, ind) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="top-hotels-ii">
                                    <img src={item.image} alt={item.country} />
                                    <h4>{item.country}</h4>
                                    <div className="pp-details yellow">
                                        <span className="pull-left">{item.noOfHotels} Hotels</span>
                                        <span className="pp-tour-ar">
                                            <a href="#"><i className="fa fa-angle-right pad-0"></i></a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TopHotels
