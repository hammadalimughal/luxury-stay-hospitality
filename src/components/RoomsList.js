import React from 'react'
import { Link } from 'react-router-dom'

const RoomsList = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-12">
                        <div class="list-content">
                            <div class="list-grid">
                                <div class="room-grid">
                                    <div class="grid-image">
                                        <img src="images/room-list/grid1.jpg" alt="image" />
                                    </div>
                                    <div class="grid-content">
                                        <div class="room-title">
                                            <h4>Standard Suite</h4>
                                            <p class="price-ft mar-top-5"><i class="fa fa-tags"></i> $900 <span>/ per Night</span></p>
                                            <div class="deal-rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                            </div>
                                        </div>
                                        <div class="room-detail">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapie</p>
                                        </div>
                                        <div class="room-services">
                                            <div class="row">
                                                <div class="col-md-6 col-sm-6 col-xs-6">
                                                    <i class="fa fa-bed" aria-hidden="true"></i> 3 Bedrooms
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6">
                                                    <i class="fa fa-wifi" aria-hidden="true"></i> Quick Service
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid-btn mar-top-20">
                                            <Link to="/room-detail" class="btn btn-black mar-right-10">VIEW DETAILS</Link>
                                            <a href="#" class="btn btn-orange">BOOK NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation">
                            <ul class="pagination justify-content-end">
                                <li class="page-item "><button class="page-link" href="#"><i class="fas fa-chevron-left"></i></button></li>
                                <li class="page-item active"><button class="page-link" href="#">1</button></li>
                                <li class="page-item"><button class="page-link" href="#">2</button></li>
                                <li class="page-item"><button class="page-link" href="#">3</button></li>
                                <li class="page-item"><button class="page-link" href="#"><i class="fas fa-chevron-right"></i></button></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoomsList
