import React from 'react'
import SideMenu from '../../components/admin/SideMenu'

const AddRoom = () => {
    return (
        <>
            <SideMenu />
            <div className="dashboard-content">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <div id="add-listing">
                            <div class="add-listing-section">
                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-doc"></i> Basic Informations</h3>
                                </div>
                                <div class="row with-forms">
                                    <div class="col-md-12">
                                        <label>Listing Title <i class="tip" data-tip-content="Name of your business">
                                            <div class="tip-content">Name of your business</div>
                                        </i></label>
                                        <input class="search-field" type="text" value="" />
                                    </div>
                                </div>
                                <div class="row with-forms">
                                    <div class="col-md-6">
                                        <label>Category</label>
                                        <select class="chosen-select-no-single">
                                            <option label="blank">Select Category</option>
                                            <option>Eat &amp; Drink</option>
                                            <option>Shops</option>
                                            <option>Hotels</option>
                                            <option>Restaurants</option>
                                            <option>Fitness</option>
                                            <option>Events</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Keywords <i class="tip"
                                            data-tip-content="Maximum of 15 keywords related with your business">
                                            <div class="tip-content">Maximum of 15 keywords related with your business</div>
                                        </i></label>
                                        <input type="text" placeholder="Keywords should be separated by commas" />
                                    </div>

                                </div>
                            </div>
                            <div class="add-listing-section">
                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-map"></i> Location</h3>
                                </div>

                                <div class="submit-section">
                                    <div class="row with-forms">
                                        <div class="col-md-6">
                                            <label>Address</label>
                                            <input type="text" placeholder="e.g. 964 School Street" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>State</label>
                                            <input type="text" placeholder="e.g. 964 School Street" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Zip-Code</label>
                                            <input type="text" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>City</label>
                                            <select class="chosen-select-no-single">
                                                <option label="blank">Select City</option>
                                                <option>New York</option>
                                                <option>Los Angeles</option>
                                                <option>Chicago</option>
                                                <option>Houston</option>
                                                <option>Phoenix</option>
                                                <option>San Diego</option>
                                                <option>Austin</option>
                                            </select>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div class="add-listing-section">
                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-picture"></i> Gallery</h3>
                                </div>
                                <div class="submit-section">
                                    <form action="/file-upload" class="dropzone"></form>
                                </div>
                            </div>
                            <div class="add-listing-section">
                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-docs"></i> Details</h3>
                                </div>
                                <div class="form">
                                    <label>Description</label>
                                    <textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary"
                                        spellcheck="true"></textarea>
                                </div>
                                <div class="row with-forms">
                                    <div class="col-md-4">
                                        <label>Phone <span>(optional)</span></label>
                                        <input type="text" />
                                    </div>
                                    <div class="col-md-4">
                                        <label>Website <span>(optional)</span></label>
                                        <input type="text" />
                                    </div>
                                    <div class="col-md-4">
                                        <label>E-mail <span>(optional)</span></label>
                                        <input type="text" />
                                    </div>

                                </div>
                                <div class="row with-forms">
                                    <div class="col-md-4">
                                        <label class="fb-input"><i class="fab fa-facebook"></i> Facebook <span>(optional)</span></label>
                                        <input type="text" placeholder="https://www.facebook.com/" />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="twitter-input"><i class="fab fa-twitter"></i> Twitter
                                            <span>(optional)</span></label>
                                        <input type="text" placeholder="https://www.twitter.com/" />
                                    </div>
                                    <div class="col-md-4">
                                        <label class="gplus-input"><i class="fab fa-google-plus"></i> Google Plus
                                            <span>(optional)</span></label>
                                        <input type="text" placeholder="https://plus.google.com" />
                                    </div>

                                </div>
                                <label class="margin-top-30 margin-bottom-10">Amenities <span>(optional)</span></label>
                                <div class="checkboxes in-row margin-bottom-20">

                                    <input id="check-a" type="checkbox" name="check" />
                                    <label for="check-a">Elevator in building</label>

                                    <input id="check-b" type="checkbox" name="check" />
                                    <label for="check-b">Friendly workspace</label>

                                    <input id="check-c" type="checkbox" name="check" />
                                    <label for="check-c">Instant Book</label>

                                    <input id="check-d" type="checkbox" name="check" />
                                    <label for="check-d">Wireless Internet</label>

                                    <input id="check-e" type="checkbox" name="check" />
                                    <label for="check-e">Free parking on premises</label>

                                    <input id="check-f" type="checkbox" name="check" />
                                    <label for="check-f">Free parking on street</label>

                                    <input id="check-g" type="checkbox" name="check" />
                                    <label for="check-g">Smoking allowed</label>

                                    <input id="check-h" type="checkbox" name="check" />
                                    <label for="check-h">Events</label>

                                </div>
                            </div>
                            <div class="add-listing-section switcher-on">
                                <div class="add-listing-headline">
                                    <h3><i class="sl sl-icon-book-open"></i> Pricing</h3>
                                    <label class="switch"><input type="checkbox" checked="" /><span class="slider round"></span></label>
                                </div>
                                <div class="switcher-content">

                                    <div class="row">
                                        <div class="col-md-12">
                                            <table id="pricing-list-container">
                                                <tbody>
                                                    <tr class="pricing-list-item pattern">
                                                        <td>
                                                            <div class="fm-move"><i class="sl sl-icon-cursor-move"></i></div>
                                                            <div class="fm-input pricing-name"><input type="text" placeholder="Title" />
                                                            </div>
                                                            <div class="fm-input pricing-ingredients"><input type="text"
                                                                placeholder="Description" /></div>
                                                            <div class="fm-input pricing-price"><input type="text" placeholder="Price"
                                                                data-unit="USD" /></div>
                                                            <div class="fm-close"><a class="delete" href="#"><i
                                                                class="fa fa-remove"></i></a></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a href="#" class="button add-pricing-list-item">Add Item</a>
                                            <a href="#" class="button add-pricing-submenu">Add Category</a>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <a href="#" class="button preview">Preview <i class="fa fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRoom
