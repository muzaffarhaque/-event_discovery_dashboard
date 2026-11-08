import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import ImageHandler from './ImageHandler'

export default function EventCard({url}) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 180, damping: 22, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 180, damping: 22, mass: 0.6 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

  function handlePointerMove(event) {
    if (shouldReduceMotion || event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.article
      className='event-hero-card'
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
      }}
      whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.2 } }}>
       <ImageHandler url={url}/>
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
