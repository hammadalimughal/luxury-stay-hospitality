import React from 'react'
import { Link } from 'react-router-dom'

const InnerBanner = ({ title, breadCrumps }) => {
    return (
        <section class="breadcrumb-outer">
            <div class="container">
                <div class="breadcrumb-content">
                    <h2>{title}</h2>
                    <nav aria-label="breadcrumb">
                        <ul class="breadcrumb justify-content-center">
                            {breadCrumps?.map((item, ind) => {
                                return (
                                    !item.current ? <li class="breadcrumb-item">
                                        <Link to={item.link}>{item.title}</Link>
                                    </li> : <li class="breadcrumb-item active" aria-current="page">{item.title}</li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default InnerBanner
