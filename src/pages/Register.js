import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { userContext } from '../context/User'
import { isValidEmail, isValidName, isValidPhone } from '../helper/validation'

const Register = () => {
    const { setAuthToken } = useContext(userContext)
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phone: "", password: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
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
        if (formData.password.length < 8) {
            alert('Enter valid password of 8 or more characters')
            return
        }
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json()
        console.log('result', result)
        const { success, error, authtoken } = result
        if (success) {
            Cookies.set('authtoken', authtoken)
            setAuthToken(authtoken)
        } else {
            alert(error)
            setError(error)
        }
    }

    return (
        <section className='py-lg-5 py-3'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div class="contact-form">
                            <h3 className='text-center'>Register</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-lg-6 col-12">
                                        <div class="form-group">
                                            <input type="text" onChange={handleChange} value={formData.firstName} name="firstName" class="form-control" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div class="form-group">
                                            <input type="text" onChange={handleChange} value={formData.lastName} name="lastName" class="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="form-group">
                                            <input type="email" onChange={handleChange} value={formData.email} name="email" class="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="form-group">
                                            <input type="phone" onChange={handleChange} value={formData.phone} name="phone" class="form-control" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="form-group">
                                            <input type="password" onChange={handleChange} value={formData.password} name="password" class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="d-flex justify-content-between">
                                            <Link to="/login">Log in to existing account!</Link>
                                            <input type="submit" class="btn btn-orange" id="submit" value="Register" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register
