import { FiBookmark } from 'react-icons/fi';
import { useSavedEvents } from '../context/SavedEventsContext';

export default function Button({ event }) {
  const { isEventSaved, toggleSavedEvent } = useSavedEvents();
  const isSaved = isEventSaved(event.id);

  return (
    <button
      className={`save-event-btn${isSaved ? ' is-saved' : ''}`}
      type="button"
      aria-pressed={isSaved}
      aria-label={`${isSaved ? 'Remove' : 'Save'} ${event.title} ${isSaved ? 'from' : 'to'} saved events`}
      onClick={() => toggleSavedEvent(event)}
    >
      <FiBookmark className="bookmark-icon" aria-hidden="true" />
      <span>{isSaved ? 'Saved' : 'Save event'}</span>
    </button>
  )
}
