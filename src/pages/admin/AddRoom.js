import React, { useState, useEffect } from 'react'
import SideMenu from '../../components/admin/SideMenu'
import imagePlaceholder from '../../images/image-placeholder.jpg'

const AddRoom = () => {
    const [hotels, setHotels] = useState([])
    const [imagePreview, setImagePreview] = useState(imagePlaceholder)
    const [formData, setFormData] = useState({
        title: "",
        type: "",
        number: "",
        hotel: "",
        price: "",
        image: null
    })

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            setFormData({ ...formData, image: file });
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const fetchHotels = async () => {
        const response = await fetch('/api/hotel/fetchAll', {
            method: 'POST',
        })
        const result = await response.json()
        const { success, hotels, error } = result
        if (success) {
            setHotels(hotels)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formToSubmit = new FormData();

        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                formToSubmit.append(key, formData[key]);
            }
        }

        const response = await fetch('/api/room/new', {
            method: 'POST',
            body: formToSubmit
        })

        const result = await response.json()
        console.log('result', result)

        if (result.success) {
            alert('New Room Added Successfully')
            setFormData({
                title: "",
                type: "",
                number: "",
                hotel: "",
                price: "",
                description: "",
                image: null
            })
            setImagePreview(imagePlaceholder)
        } else {
            alert(result.error)
        }
    }

    useEffect(() => {
        fetchHotels()
    }, [])

    return (
        <>
            <SideMenu />
            <div className="dashboard-content">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <form onSubmit={handleSubmit}>
                            <div id="add-listing">
                                <div class="add-listing-section">
                                    <div class="add-listing-headline">
                                        <h3><i class="sl sl-icon-doc"></i> Basic Informations</h3>
                                    </div>
                                    <div class="row with-forms">
                                        <div class="col-md-12">
                                            <label>Title </label>
                                            <input name='title' onChange={handleChange} value={formData.title} class="search-field" type="text" required />
                                        </div>
                                    </div>
                                    <div class="row with-forms">
                                        <div class="col-md-6">
                                            <label>Type</label>
                                            <select name='type' onChange={handleChange} value={formData.type} class="chosen-select-no-single">
                                                <option value='single'>Single</option>
                                                <option value='double'>Double</option>
                                                <option value='suite'>Suite</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label>Room No </label>
                                            <input name='number' onChange={handleChange} value={formData.number} type="number" required />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Hotel </label>
                                            <select name='hotel' onChange={handleChange} value={formData.hotel} class="chosen-select-no-single">
                                                {hotels.map((item, ind) => <option key={ind} value={item._id}>{item.name} {item.city}</option>)}
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label>Price </label>
                                            <input type="number" name='price' onChange={handleChange} value={formData.price} />
                                        </div>
                                        <div className="col-12">
                                            <label>Description</label>
                                            <textarea name='description' onChange={handleChange} value={formData.description}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="add-listing-section">
                                    <div class="add-listing-headline">
                                        <h3><i class="sl sl-icon-picture"></i> Image</h3>
                                    </div>
                                    <label htmlFor='hotel-image' class="img-upload">
                                        <img className='w-100' src={imagePreview} alt="" />
                                        <input accept="image/jpeg, image/png, image/gif, image/webp" onChange={handleImageUpload} type="file" name="" id="hotel-image" />
                                    </label>
                                </div>
                                <button type='submit' class="button preview">Submit <i class="fa fa-arrow-circle-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRoom