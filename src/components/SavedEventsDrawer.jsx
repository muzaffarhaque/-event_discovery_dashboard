import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiBookmark, FiCalendar, FiMapPin, FiTrash2, FiX } from 'react-icons/fi';
import { useSavedEvents } from '../context/SavedEventsContext';
import fallbackImage from '../assets/images/tengku-nadia-fz8_SONkBB8-unsplash.jpg';

export default function SavedEventsDrawer() {
  const {
    savedEvents,
    isDrawerOpen,
    closeSavedEvents,
    removeSavedEvent,
  } = useSavedEvents();
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isDrawerOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    previouslyFocusedRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeSavedEvents();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = drawerRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [isDrawerOpen, closeSavedEvents]);

  const drawerTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.button
            className="saved-events-backdrop"
            type="button"
            aria-label="Close saved events"
            onClick={closeSavedEvents}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={drawerTransition}
          />
          <motion.aside
            ref={drawerRef}
            className="saved-events-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="saved-events-title"
            initial={shouldReduceMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: shouldReduceMotion ? 0 : '100%' }}
            transition={drawerTransition}
          >
            <header className="saved-events-header">
              <div>
                <p className="saved-events-eyebrow">YOUR COLLECTION</p>
                <h2 id="saved-events-title">Saved events <span>{savedEvents.length}</span></h2>
              </div>
              <button
                ref={closeButtonRef}
                className="saved-events-close"
                type="button"
                aria-label="Close saved events"
                onClick={closeSavedEvents}
              >
                <FiX aria-hidden="true" />
              </button>
            </header>

            {savedEvents.length ? (
              <ul className="saved-events-list">
                {savedEvents.map((event) => (
                  <li className="saved-event-item" key={event.id}>
                    <img
                      src={event.image || fallbackImage}
                      alt=""
                      onError={(imageEvent) => {
                        imageEvent.currentTarget.onerror = null;
                        imageEvent.currentTarget.src = fallbackImage;
                      }}
                    />
                    <div className="saved-event-details">
                      <p className="saved-event-category">{event.category || 'Event'}</p>
                      <h3>{event.title}</h3>
                      {event.date && <p><FiCalendar aria-hidden="true" />{event.date}</p>}
                      {event.location && <p><FiMapPin aria-hidden="true" />{event.location}</p>}
                    </div>
                    <button
                      className="saved-event-remove"
                      type="button"
                      aria-label={`Remove ${event.title} from saved events`}
                      onClick={() => removeSavedEvent(event.id)}
                    >
                      <FiTrash2 aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="saved-events-empty">
                <span><FiBookmark aria-hidden="true" /></span>
                <h3>No saved events yet</h3>
                <p>Save an event you like and it will be waiting here.</p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
