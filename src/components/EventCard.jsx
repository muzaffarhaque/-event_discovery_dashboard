import { motion, useReducedMotion } from 'framer-motion';
import ImageHandler from './ImageHandler'

export default function EventCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className='event-hero-card'
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}>
       <ImageHandler/>
        <span className="name-tag">Manuster</span>
        <div className="event-content-box">
            <h6>NOva Black</h6>
            <div className="event-details">
            <p className=''>!2 Live event</p>
            <p>Location </p>
            </div>
        </div>
        
    </motion.article>
  )
}
