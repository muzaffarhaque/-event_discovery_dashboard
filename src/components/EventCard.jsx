import React from 'react'
import ImageHandler from './ImageHandler'

export default function EventCard() {
  return (
    <div className='event-hero-card'>
       <ImageHandler/>
        <span className="name-tag">Manuster</span>
        <div className="event-content-box">
            <h6>NOva Black</h6>
            <div className="event-details">
            <p className=''>!2 Live event</p>
            <p>Location </p>
            </div>
        </div>
        
    </div>
  )
}
