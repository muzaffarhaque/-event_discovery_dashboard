import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'spinach-saved-events';
const SavedEventsContext = createContext(null);

function readSavedEvents() {
  try {
    const storedEvents = window.localStorage.getItem(STORAGE_KEY);
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    return Array.isArray(parsedEvents) ? parsedEvents : [];
  } catch (error) {
    console.error('Unable to load saved events from local storage.', error);
    return [];
  }
}

export function SavedEventsProvider({ children }) {
  const [savedEvents, setSavedEvents] = useState(readSavedEvents);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedEvents));
    } catch (error) {
      console.error('Unable to save events to local storage.', error);
    }
  }, [savedEvents]);

  const removeSavedEvent = useCallback((eventId) => {
    setSavedEvents((currentEvents) => currentEvents.filter((event) => event.id !== eventId));
  }, []);

  const toggleSavedEvent = useCallback((event) => {
    setSavedEvents((currentEvents) => (
      currentEvents.some((savedEvent) => savedEvent.id === event.id)
        ? currentEvents.filter((savedEvent) => savedEvent.id !== event.id)
        : [...currentEvents, event]
    ));
  }, []);

  const isEventSaved = useCallback((eventId) => (
    savedEvents.some((event) => event.id === eventId)
  ), [savedEvents]);
  const openSavedEvents = useCallback(() => setIsDrawerOpen(true), []);
  const closeSavedEvents = useCallback(() => setIsDrawerOpen(false), []);

  const value = {
    savedEvents,
    isDrawerOpen,
    removeSavedEvent,
    toggleSavedEvent,
    isEventSaved,
    openSavedEvents,
    closeSavedEvents,
  };

  return (
    <SavedEventsContext.Provider value={value}>
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  const context = useContext(SavedEventsContext);
  if (!context) {
    throw new Error('useSavedEvents must be used within a SavedEventsProvider');
  }
  return context;
}
