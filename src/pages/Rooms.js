import React from 'react'
import InnerBanner from '../components/InnerBanner'
import RoomsList from '../components/RoomsList'

const Rooms = () => {
    return (
        <>
            <InnerBanner title={'Room Listing'} breadCrumps={[{ title: 'Home', link: '/' }, { title: 'Rooms', current: true }]} />
            <RoomsList />
        </>
    )
}

export default Rooms
