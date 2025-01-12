import React, { useEffect, useState } from 'react'
import SideMenu from '../../components/admin/SideMenu'
import imagePlaceholder from '../../images/image-placeholder.jpg'

const AddHotel = () => {
    const [imagePreview, setImagePreview] = useState(imagePlaceholder)
    const [socialLinks, setSocialLinks] = useState({
        website: "",
        facebook: "",
        instagram: "",
        email: ""
    })
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        category: "",
        keywords: [],
        country: "",
        address: "",
        state: "",
        city: "",
        zipCode: "",
        phone: "",
        socials: []
    });

    useEffect(() => {
        console.log('formData: ', formData)
    }, [formData])

    useEffect(() => {
        setFormData({ ...formData, socials: socialLinks })
    }, [socialLinks])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSocialChange = (event) => {
        const { name, value } = event.target;
        setSocialLinks({ ...socialLinks, [name]: value });
    };

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formToSubmit = new FormData();
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                formToSubmit.append(key, formData[key]);
            }
        }
        const response = await fetch('/api/hotel/new', {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formToSubmit
        })
        const result = await response.json()
        console.log('result', result)
    };

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
                                            <label>Title <i class="tip" data-tip-content="Name of your business">
                                                <div class="tip-content">Name of your business</div>
                                            </i></label>
                                            <input name='name' value={formData.name} onChange={handleChange} class="search-field" type="text" />
                                        </div>
                                    </div>
                                    <div class="row with-forms">
                                        <div class="col-md-6">
                                            <label>Category</label>
                                            <select name='category' value={formData.category} onChange={handleChange} class="chosen-select-no-single">
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
                                            <input name='keywords' value={formData.keywords.join(",")} onChange={(e) => { setFormData({ ...formData, keywords: e.target.value.split(',') }) }} type="text" placeholder="Keywords should be separated by commas" />
                                        </div>

                                    </div>
                                </div>
                                <div class="add-listing-section">
                                    <div class="add-listing-headline">
                                        <h3><i class="sl sl-icon-map"></i> Location</h3>
                                    </div>

                                    <div class="submit-section">
                                        <div class="row with-forms">
                                            <div class="col-12">
                                                <label>Country</label>
                                                <select name='country' value={formData.country} onChange={handleChange} class="chosen-select-no-single">
                                                    <option>Select City</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="India">India</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label>Address</label>
                                                <input name='address' value={formData.address} onChange={handleChange} type="text" placeholder="e.g. 964 School Street" />
                                            </div>
                                            <div class="col-md-6">
                                                <label>State</label>
                                                <input name='state' value={formData.state} onChange={handleChange} type="text" />
                                            </div>
                                            <div class="col-md-6">
                                                <label>Zip-Code</label>
                                                <input name='zipCode' value={formData.zipCode} onChange={handleChange} type="text" />
                                            </div>
                                            <div class="col-md-6">
                                                <label>City</label>
                                                <input name='city' value={formData.city} onChange={handleChange} type="text" />
                                            </div>
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
                                <div class="add-listing-section">
                                    <div class="add-listing-headline">
                                        <h3><i class="sl sl-icon-docs"></i> Details</h3>
                                    </div>
                                    <div class="form">
                                        <label>Description</label>
                                        <textarea class="WYSIWYG" name='description' value={formData.description} onChange={handleChange} cols="40" rows="3" id="summary" spellcheck="true"></textarea>
                                    </div>
                                    <div class="row with-forms">
                                        <div class="col-md-4">
                                            <label>Phone <span>(optional)</span></label>
                                            <input name='phone' value={formData.phone} onChange={handleChange} type="text" />
                                        </div>
                                        <div class="col-md-4">
                                            <label>Website <span>(optional)</span></label>
                                            <input name='website' value={socialLinks.website} onChange={handleSocialChange} type="text" />
                                        </div>
                                        <div class="col-md-4">
                                            <label>E-mail <span>(optional)</span></label>
                                            <input name='email' value={socialLinks.website} onChange={handleSocialChange} type="text" />
                                        </div>

                                    </div>
                                    <div class="row with-forms">
                                        <div class="col-md-4">
                                            <label class="fb-input"><i class="fab fa-facebook"></i> Facebook <span>(optional)</span></label>
                                            <input name='facebook' value={socialLinks.website} onChange={handleSocialChange} type="text" placeholder="https://www.facebook.com/" />
                                        </div>
                                        <div class="col-md-4">
                                            <label class="twitter-input"><i class="fab fa-instagram"></i> Instagram
                                                <span>(optional)</span></label>
                                            <input name='instagram' value={socialLinks.instagram} onChange={handleSocialChange} type="text" placeholder="https://www.instagram.com/" />
                                        </div>
                                    </div>
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

export default AddHotel
