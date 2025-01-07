import React from 'react'
import InnerBanner from '../components/InnerBanner'

const ContactUs = () => {
    return (
        <>
            <InnerBanner title={'Contact Us'} breadCrumps={[{ title: 'Home', link: '/' }, { title: 'Contact', current: true }]} />
            <section class="contact contact1 py-5">
                <div class="container">
                    <div class="contact-support">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="support-item">
                                    <h4>Costumer Support</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit facilisis nisi.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="support-item">
                                    <h4>Technical Support</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit facilisis nisi.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="support-item">
                                    <h4>Booking Queries</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit facilisis nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="contact-info">
                                    <div class="info-item mar-bottom-30">
                                        <div class="info-icon">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                        <div class="info-content">
                                            <p>445 Mount Eden Road, Mt Eden</p>
                                            <p>Basundhara Chakrapath</p>
                                        </div>
                                    </div>
                                    <div class="info-item info-item-or mar-bottom-30">
                                        <div class="info-icon">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <div class="info-content">
                                            <p>977-444-666-888</p>
                                            <p>977-444-222-000</p>
                                        </div>
                                    </div>
                                    <div class="info-item">
                                        <div class="info-icon">
                                            <i class="fa fa-envelope"></i>
                                        </div>
                                        <div class="info-content">
                                            <p><a style={{ color: '#fff' }} href="mailto: abc@gmail.com">abc@gmail.com</a></p>
                                            <p><a style={{ color: '#fff' }} href="mailto: abc@gmail.com">abc@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div id="contact-form" class="contact-form">
                                    <h3>Keep in Touch</h3>

                                    <div id="contactform-error-msg"></div>

                                    <form method="post" action="#" name="contactform" id="contactform">
                                        <div class="form-group">
                                            <input type="text" name="first_name" class="form-control" id="fname" placeholder="First Name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="last_name" class="form-control" id="lname" placeholder="Last Name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="phone" class="form-control" id="phnumber" placeholder="Phone" />
                                        </div>
                                        <div class="textarea">
                                            <textarea name="comments" placeholder="Enter a message"></textarea>
                                        </div>
                                        <div class="comment-btn text-right">
                                            <input type="submit" class="btn btn-orange" id="submit" value="Send Message" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
