import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import { IoHomeOutline, IoLocationOutline, IoMusicalNotesOutline, IoWalletOutline } from 'react-icons/io5';
import { LuListFilter } from 'react-icons/lu';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useTheme } from '../context/ThemeContext';
import { EventCard } from '../components';
import userImage from "../assets/images/user.jfif";
import EventRow from '../components/EventRow';

export default function Home() {
    const { theme, toggleTheme } = useTheme();
  return (
    <main className='main-section-container'>
      <nav className='vertical-nave-bar'>
         <div className="logo-box"></div>
         <ul>
          <li><button className="icon-vl-box"> <IoHomeOutline  className='icon' /> </button></li>
          <li><button className="icon-vl-box"> <IoWalletOutline  className='icon' /> </button></li>
          <li><button className="icon-vl-box"> <IoLocationOutline  className='icon' /> </button></li>
          <li><button className="icon-vl-box"> <IoMusicalNotesOutline  className='icon' /> </button></li>
         </ul>
      </nav>
      <div className='main-content-wrapper'>
          <header className='header-frame'>
            <div className="search-box-wrapper">
              <input type="search" placeholder='Search' name="search" id="" className='serch-input' autocomplete="off"/>
              <button className="filter-btn">Filter <span className='filter-icon'> <LuListFilter className='icon' />   </span>  </button>
            </div>


             
              <button className="theme-toggle"  type="button" onClick={toggleTheme}
                 aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} >
                    <span className="theme-toggle-icon" aria-hidden="true">
                      {theme === 'light' ? '🌙' : '☀️'}
                    </span>
                    <span className="theme-toggle-text">
                      {theme === 'light' ? 'Dark mode' : 'Light mode'}
                    </span>
               </button>



             <div className="profile-icon">
              <MdKeyboardArrowDown  className="down-arrow"/>
              <FaRegUser className='icon' />
             </div>


          </header>


          <section className='hero-event-wrapper'>
            <div className="event-card-frame">
              {[...Array(4)].map((_,i)=>{
                return(
                  <EventCard/>
                )
              })}
            </div>


            <div className="friends-activity">
              <h6 className='fs-18-14'>Friends Activity</h6>
              {
                [...Array(5)].map((ele,i)=>{
                  return(
                        <div key={i} className="friends-content">
                          <div className="userImage">
                            <img src={userImage} alt="Friends image " />
                          </div>
                          <div className="friends-information">
                            <p className='fs-14-12'>Eva star</p>
                            <p>Has  <IoWalletOutline  className='icon' />  for 2 events nearby</p>
                          </div>
                        </div>
                  )
                })
              }


            </div>


          </section>



          <section className='event_details-section'>
                 <div className="event-genre">
                    
                      <h5 className='fs-24-16 fw-bold'>Event by Genre</h5>
                      {[...Array(3)].map((_,i)=>{
                        return(
                            <div key={i} className="genre-box">
                              <h6 className='fs-16-13'>Minimal</h6>
                              <p className='fs-14-12'>23s Live Event <IoLocationOutline  className='icon' /> <span className=''>7 Nasuby</span> </p>
                            </div>
                        )
                      })}


                 </div>
                 <div className="event-of-month">
                      <h5 className='fs-24-16 fw-bold'>Event of the Month</h5>
                      <div className="monthly-event-box">


                     <EventRow/>
                     <EventRow/>
                     <EventRow/>
                     <EventRow/>


                      </div>



                 </div>
                 <div className="best-venues">
                      <h5 className='fs-24-16 fw-bold'>Best Venue</h5>
                   <div className="venues-card-wrapper">
                          {[...Array(6)].map((_,i)=>{
                            return(
                                <div key={i} className="venue-box">
                                  <img src={userImage} alt="image" className=''/>
                                  <div className="venue-info">
                                      <p>Pulled Reconts</p>
                                      <p className='location'> <IoLocationOutline/> Jasparen</p>
                                  </div>
                                
                                </div>
                            )
                          })}
                   </div>
           

                      
                  

                 </div>
          </section>
      </div>
    </main>
  )
}
