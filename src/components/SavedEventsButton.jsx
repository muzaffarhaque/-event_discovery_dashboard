import { FiBookmark } from 'react-icons/fi';
import { useSavedEvents } from '../context/SavedEventsContext';

export default function SavedEventsButton() {
  const { savedEvents, openSavedEvents } = useSavedEvents();

  return (
    <button
      className="saved-events-trigger"
      type="button"
      onClick={openSavedEvents}
      aria-label={`Open saved events, ${savedEvents.length} saved`}
    >
      <FiBookmark aria-hidden="true" />
      <span>Saved events</span>
      <span className="saved-events-trigger-count" aria-hidden="true">{savedEvents.length}</span>
    </button>
  );
}
