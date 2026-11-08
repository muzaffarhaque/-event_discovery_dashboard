import { motion, useReducedMotion } from 'framer-motion';
import Button from './Button';
import userImage from "../assets/images/ev-5.jpg";
import eventImage from "../assets/images/ev-2.jpg";
export default function EventDetailsCard({data=""}) {
const shouldReduceMotion = useReducedMotion();

const formattedDate = new Date(data?.start || "2026-03-15T09:00:00Z").toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "UTC"
}).replace(",", " at");


    return (
        <motion.div
          className="event-card-box"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0, y: 18, scale: 0.98 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
          }}>
            <div className="event-image">
                <img src={eventImage} alt=""/>
            </div>
            <div className="event-card-details">
                <p className='fs-18-14 event-name'>{data?.title || "Event Name"}</p>
                <p className='fs-14-12 mb-1 date-time'>{formattedDate} </p>
                <p className='fs-14-12 date-time'>{data?.location}</p>
                <div className="price-booked">
                    <div className="booked-users">
                        <ul className="book-user-img-box">
                            <li><img src={userImage} alt="image"/></li>
                            <li><img src={userImage} alt="image"/></li>
                            <li><img src={userImage} alt="image"/></li>

                        </ul>
                        <h4 className='fs-18-14'>{data?.price?`$${data?.price}`:"Free"}</h4>
                        <button className='booked-btn'>Booked</button>

                    </div>
                    <Button/>
                </div>

            </div>
        </motion.div>
    )
}
