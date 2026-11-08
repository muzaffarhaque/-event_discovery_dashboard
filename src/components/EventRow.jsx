import userImage from "../assets/images/user.jfif";
import { IoLocationOutline, IoMusicalNotesOutline } from 'react-icons/io5';

export default function EventRow() {
  return (
       <div className="event-row">

                          <div className="event-info">
                            <div className="event-image-box">
                              <img src={userImage} alt="event image" />
                            </div>
                            <div className="event-details">
                               <h6 className='fs-16-13'>Minimal Echoes Tour</h6>
                               <p className='fs-14-12'><IoLocationOutline  className='icon' /> <span className=''>70 kM</span> &nbsp;&nbsp;<IoMusicalNotesOutline  className='icon' /> <span className=''>House</span> </p>
                            </div>
                          </div>

                          <div className="event-host-info">
                              <div className="user-box"><img src={userImage} alt="User image" /></div>
                          </div>

                          <button className='track-btn animated_btn'>
                            
                                  Tracks
                          </button>

                        </div>
  )
}
