import React, {useEffect, useState} from 'react'
import {FaRegUser} from 'react-icons/fa';
import {IoHomeOutline, IoLocationOutline, IoMusicalNotesOutline, IoWalletOutline} from 'react-icons/io5';
import {LuListFilter} from 'react-icons/lu';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {useTheme} from '../context/ThemeContext';
import {Button, EvantDetailSkeleton, EventCard, EventDetailsCard} from '../components';
import userImage from "../assets/images/user.jfif";
import eventImage from "../assets/images/ev-1.jpg";
import EventRow from '../components/EventRow';
import eventsData from '../mock-events.json';
import { useNavigate } from 'react-router-dom';

export default function Home() {
   const navigate = useNavigate()
    const {theme, toggleTheme} = useTheme();
    const [loading,setLoading] = useState(false);
    const [saveEvent,setSaveEvent] = useState([])

    async function defaultLoder() {
        await new Promise((res) => setTimeout(res, 1600));
        setLoading(true);
    }
    useEffect(() => {
        defaultLoder()
    }, [])
    return (
        <main >

            <div className="main-section-container">
                <nav className='vertical-nave-bar'>
                    <div className="logo-box"></div>
                    <ul>
                        <li>
                            <button className="icon-vl-box">
                                <IoHomeOutline className='icon'/>
                            </button>
                        </li>
                        <li>
                            <button onClick={()=>navigate('/events')} className="icon-vl-box">
                                <IoWalletOutline className='icon'/>
                            </button>
                        </li>
                        <li>
                            <button className="icon-vl-box">
                                <IoLocationOutline className='icon'/>
                            </button>
                        </li>
                        <li>
                            <button className="icon-vl-box">
                                <IoMusicalNotesOutline className='icon'/>
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className='main-content-wrapper'>

                    <header className='header-frame'>
                        <div className="search-box-wrapper">
                            <input
                                type="search"
                                placeholder='Search'
                                name="search"
                                id=""
                                className='serch-input'
                                autocomplete="off"/>
                            <button className="filter-btn">Filter
                                <span className='filter-icon'>
                                    <LuListFilter className='icon'/>
                                </span>
                            </button>
                        </div>

                        <button
                            className="theme-toggle"
                            type="button"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${theme === 'light'
                            ? 'dark'
                            : 'light'} mode`}>
                            <span className="theme-toggle-icon" aria-hidden="true">
                                {theme === 'light'
                                    ? '🌙'
                                    : '☀️'}
                            </span>
                            <span className="theme-toggle-text">
                                {theme === 'light'
                                    ? 'Dark mode'
                                    : 'Light mode'}
                            </span>
                        </button>

                        <div className="profile-icon">
                            <MdKeyboardArrowDown className="down-arrow"/>
                            <FaRegUser className='icon'/>
                        </div>

                    </header>

                    <section className='hero-event-wrapper'>
                        <div className="event-card-frame">
                            {[...Array(4)].map((_, i) => {
                                return (loading
                                    ? <EventCard/>
                                    : <div className="skeleton-card shimmer"></div>)
                            })}
                        </div>

                        <div className="friends-activity">
                            <h6 className='fs-18-14'>Friends Activity</h6>
                            {[...Array(5)].map((ele, i) => {
                                return (loading
                                    ? <div key={i} className="friends-content">
                                            <div className="userImage">
                                                <img src={userImage} alt="Friends image "/>
                                            </div>
                                            <div className="friends-information">
                                                <p className='fs-14-12'>Eva star</p>
                                                <p>Has
                                                    <IoWalletOutline className='icon'/>
                                                    for 2 events nearby</p>
                                            </div>
                                        </div>
                                    : <div key={i} className="friends-content">
                                        <div className="userImage shimmer"></div>
                                        <div className="friends-information mw-150">
                                            <p className='fs-14-12 mw-150 shimmer p-1'></p>
                                            <p className='mw-101 shimmer p-1 '></p>
                                        </div>
                                    </div>)
                            })
}

                        </div>

                    </section>

                    <section className='event_details-section'>
                        <div className="event-genre">

                            <h5 className='fs-24-16 fw-bold'>Event by Genre</h5>
                            {[...Array(3)].map((_, i) => {
                                return (loading
                                    ? <div key={i} className="genre-box">
                                            <h6 className='fs-16-13'>Minimal</h6>
                                            <p className='fs-14-12'>23s Live Event
                                                <IoLocationOutline className='icon'/>
                                                <span className=''>7 Nasuby</span>
                                            </p>
                                        </div>
                                    : <div className="genre-box skeleton">
                                        <h6 className='fs-16-13 mw-150 shimmer p-2'></h6>
                                        <p className='fs-14-12 mw-101 shimmer p-1'></p>
                                    </div>)
                            })}

                        </div>
                        <div className="event-of-month">
                            <h5 className='fs-24-16 fw-bold'>Event of the Month</h5>
                            <div className="monthly-event-box">

                                {[...Array(4)].map((_, i) => {
                                    return (loading
                                        ? <EventRow/>
                                        : <div className="event-row">
                                            <div className="event-info w-50">
                                                <div className="event-image-box shimmer"></div>
                                                <div className="event-details w-100">
                                                    <h6 className='fs-16-13 shimmer p-2 mw-520'></h6>
                                                    <p className='fs-14-12 shimmer p-1 mw-150'></p>
                                                </div>
                                            </div>
                                        </div>)
                                })}

                            </div>

                        </div>
                        <div className="best-venues">
                            <h5 className='fs-24-16 fw-bold'>Best Venue</h5>
                            <div className="venues-card-wrapper">
                                {[...Array(6)].map((_, i) => {
                                    return (loading
                                        ? <div key={i} className="venue-box">
                                                <img src={userImage} alt="image" className=''/>
                                                <div className="venue-info">
                                                    <p>Pulled Reconts</p>
                                                    <p className='location'>
                                                        <IoLocationOutline/>
                                                        Jasparen</p>
                                                </div>

                                            </div>
                                        : <div className="venue-box skeleton">
                                            <div className="venue-info">
                                                <p className='shimmer p-1 w-75'></p>
                                                <p className='location shimmer p-1 w-50'></p>
                                            </div>

                                        </div>)
                                })}
                            </div>

                        </div>
                    </section>

                    <section className='event-card-wrapper'>
                        <h5 className='fs-24-16 fw-bold'>All Event</h5>

                        <div className="event-cardd-frame">

                            {loading
                                ? (eventsData.events
                                    ?.map((ele, i) => {
                                        console.log(ele)
                                        return (<EventDetailsCard data={ele}/>)
                                    }))
                                :(
                                  [...Array(8)].map((ele,i)=>{
                                    return(
                                      <EvantDetailSkeleton/>
                                    )
                                  })
                                )}

                        </div>

                    </section>

                </div>
            </div>

            {/* <Button/> */}

        </main>
    )
}
