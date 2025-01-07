import React from 'react'
import InnerBanner from '../components/InnerBanner'
import HotelListing from '../components/HotelListing'

const Hotels = () => {
  return (
    <>
     <InnerBanner title={'Hotel Listing'} breadCrumps={[{ title: 'Home', link: '/' }, { title: 'Hotels', current: true }]} /> 
     <HotelListing />
    </>
  )
}

export default Hotels
