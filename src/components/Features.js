import React from 'react'
import aboutImg1 from '../images/about1.jpg'
import aboutImg2 from '../images/about2.jpg'

const Features = () => {
  return (
    <div>
      <section className="about-us">
        <div className="container">
            <div className="why-us-box mar-bottom-80">
                <div className="row">
                    <div className="col-md-4">
                        <div className="why-us-item text-center">
                            <div className="why-us-icon">
                                <i className="fa fa-tags"></i>
                            </div>
                            <div className="why-us-content">
                                <h4>Competetive Pricing</h4>
                                <p>With 500+ suppliers and the purchasing power of 300 million members</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="why-us-item text-center">
                            <div className="why-us-icon">
                                <i className="fa fa-award"></i>
                            </div>
                            <div className="why-us-content">
                                <h4>Award Winning Service</h4>
                                <p>Travel worry free knowing that we're here if you need us, 24 hours a day</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="why-us-item text-center">
                            <div className="why-us-icon">
                                <i className="fa fa-globe"></i>
                            </div>
                            <div className="why-us-content">
                                <h4>Worldwide Coverage</h4>
                                <p>Over 1,200,000 hotels in more than 200 countries and regions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-outer">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-content">
                            <h2 className="mar-bottom-30">Redefines the <span>luxury hospitality</span> experience.</h2>
                            <p>This charming private 19th century mansion, which originally belonged to the family, has been completely renovated with care &amp; passion while respecting the spirit of place.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius iaculis gravida. Nunc vel maximus libero. Quisque ligula nisi, hendrerit et scelerisque et, scelerisque vitae magna. Integer sollicitudin, ex auctor iaculis tempor, mauris odio accumsan odio.</p>
                            <a className="btn btn-orange mar-top-25">KNOW MORE ABOUT US <i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image">
                            <div className="image-box">
                                <div className="image-1 abt-image">
                                    <img src={aboutImg1} alt="image" />
                                </div>
                                <div className="image-2 abt-image">
                                    <img src={aboutImg2} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Features
