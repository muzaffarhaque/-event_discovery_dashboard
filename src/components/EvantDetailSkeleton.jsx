import { motion, useReducedMotion } from 'framer-motion';

export default function EvantDetailSkeleton() {
    const shouldReduceMotion = useReducedMotion();

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
        </motion.div>
    )
}
