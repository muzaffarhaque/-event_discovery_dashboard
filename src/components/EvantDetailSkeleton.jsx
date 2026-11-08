import React from 'react'

export default function EvantDetailSkeleton() {
    return (
        <div className="event-card-box">
            <div className="event-image shimmer "></div>
            <div className="event-card-details">
                <p className='fs-18-14 event-name shimmer w-75 p-2'></p>
                <p className='fs-14-12 mb-1 date-time w-50 shimmer p-2'></p>
                <p className='fs-14-12 date-time w-25 shimmer p-2'></p>
                <div className="price-booked">
                    <div className="booked-users gap-2">
                        <ul className="book-user-img-box">
                            <li className='shimmer p-1'></li>

                        </ul>
                        <h4 className='fs-18-14 shimmer p-2 my-2 w-50'></h4>
                        <button className='booked-btn shimmer p-1 w-25'></button>

                    </div>
                    <div className='shimmer p-4  rounded-4 w-100'></div>
                </div>

            </div>
        </div>
    )
}
