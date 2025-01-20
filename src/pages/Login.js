import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { userContext } from '../context/User'

const Login = () => {
        const { setAuthToken } = useContext(userContext)
        const [formData, setFormData] = useState({
            email: "", password: ""
        })
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState('')
    
        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({ ...formData, [name]: value })
        }
        const handleSubmit = async (e) => {
            e.preventDefault()
            const response = await fetch('/api/auth/login', {
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
                setError(error)
                alert(error)
            }
        }
    return (
        <section className='py-lg-5 py-3'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div class="contact-form">
                            <h3 className='text-center'>Log In</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div class="form-group">
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} class="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="form-group">
                                            <input type="password" name="password" value={formData.password} onChange={handleChange} class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="d-flex justify-content-between">
                                        <Link to="/register">Creat an Account!</Link>
                                            <input type="submit" class="btn btn-orange" id="submit" value="Login" />
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

export default Login
