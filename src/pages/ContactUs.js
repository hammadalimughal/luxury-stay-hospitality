import React, { useState } from 'react'
import InnerBanner from '../components/InnerBanner'
import { isValidEmail, isValidName, isValidPhone, isValidMsg } from '../helper/validation'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.preventDefault()
        if (!isValidName(formData.firstName)) {
            alert(`Enter Valid First Name`)
            return
        }
        if (!isValidName(formData.lastName)) {
            alert(`Enter Valid Last Name`)
            return
        }
        if (!isValidEmail(formData.email)) {
            alert(`Enter Valid Email Address`)
            return
        }
        if (!isValidPhone(formData.phone)) {
            alert(`Enter Valid Phone Number`)
            return
        }
        if (!isValidMsg(formData.message)) {
            alert(`Enter Valid Message`)
            return
        }
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json()
        console.log('result', result)
        const { success, error } = result
        if (success) {
            alert('Form Submitted Successfully')
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: ""
            })
        } else {
            alert(error)
        }
    }

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

                                    <form onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} class="form-control" id="fname" placeholder="First Name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} class="form-control" id="lname" placeholder="Last Name" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} class="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} class="form-control" id="phnumber" placeholder="Phone" />
                                        </div>
                                        <div class="textarea">
                                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter a message"></textarea>
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
