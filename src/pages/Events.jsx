import { useMemo, useState } from 'react';
import { StaggeredGrid, StaggeredGridItem } from 'react-staggered-grid';
import { FiBookmark, FiCalendar, FiMapPin, FiSearch } from 'react-icons/fi';
import fallbackImage from '../assets/images/tengku-nadia-fz8_SONkBB8-unsplash.jpg';
import { useNavigate } from 'react-router-dom';
import SavedEventsButton from '../components/SavedEventsButton';
import { useSavedEvents } from '../context/SavedEventsContext';

const events = [
  {
    id: 1,
    title: 'Afterglow Festival',
    category: 'Music',
    date: 'Nov 14 · 6:00 PM',
    location: 'Pier 27, San Francisco',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85',
    height: 360,
    featured: true,
  },
  {
    id: 2,
    title: 'Designing Tomorrow',
    category: 'Art & Design',
    date: 'Nov 18 · 10:00 AM',
    location: 'The Glasshouse, New York',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=85',
    height: 290,
  },
  {
    id: 3,
    title: 'Sunday Table',
    category: 'Food & Drink',
    date: 'Nov 22 · 12:30 PM',
    location: 'Marigold Kitchen, Austin',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
    height: 330,
  },
  {
    id: 4,
    title: 'Future of AI Summit',
    category: 'Technology',
    date: 'Nov 26 · 9:00 AM',
    location: 'The Foundry, Seattle',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85',
    height: 310,
  },
  {
    id: 5,
    title: 'A Little More Yoga',
    category: 'Wellness',
    date: 'Nov 29 · 8:00 AM',
    location: 'Sunrise Studio, Los Angeles',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85',
    height: 350,
  },
  {
    id: 6,
    title: 'The Night Market',
    category: 'Food & Drink',
    date: 'Dec 02 · 5:00 PM',
    location: 'Old Town Market, Portland',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85',
    height: 280,
  },
  {
    id: 7,
    title: 'Indie Sounds Live',
    category: 'Music',
    date: 'Dec 05 · 7:30 PM',
    location: 'The Echo Room, Chicago',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85',
    height: 340,
  },
  {
    id: 8,
    title: 'Objects & Stories',
    category: 'Art & Design',
    date: 'Dec 08 · 11:00 AM',
    location: 'Studio 24, Brooklyn',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85',
    height: 300,
  },
];

const categories = ['All events', 'Music', 'Art & Design', 'Food & Drink', 'Technology', 'Wellness'];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All events');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { isEventSaved, toggleSavedEvent } = useSavedEvents();

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return events.filter((event) => {
      const matchesCategory = activeCategory === 'All events' || event.category === activeCategory;
      const matchesSearch = !query || `${event.title} ${event.category} ${event.location}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="events-page">


      <section className="events-intro" aria-labelledby="events-title">
        <div className="events-intro-actions">
          <button className="home-btn" type="button" onClick={() => navigate('/')}>Home</button>
          <SavedEventsButton />
        </div>
        <label className="events-search d-flex align-items-center gap-3 my-3">
          <FiSearch aria-hidden="true" />
          <input
            type="search"
            value={search}
            className='input-box border-0'
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search events, places, and more"
            aria-label="Search events"
          />
        </label>
      </section>

      <section className="events-gallery-section" aria-label="Explore events">
        <div className="events-gallery-toolbar">
          <div className="events-categories" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                className={`events-category${activeCategory === category ? ' is-active' : ''}`}
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="events-count">{filteredEvents.length} events to explore</p>
        </div>

        {filteredEvents.length > 0 ? (
          <StaggeredGrid
            className="events-grid"
            columnWidth={270}
            horizontalGap={16}
            verticalGap={18}
            useElementWidth
          >
            {filteredEvents.map((event, index) => (
              <StaggeredGridItem
                key={event.id}
                index={index}
                itemHeight={event.height}
                style={{ transition: 'left 0.35s ease, top 0.35s ease' }}
              >
                <article className={`event-tile${event.featured ? ' is-featured' : ''}`} style={{ height: activeCategory!=="All events"?"300px":event.height }}>
                  <img
                    className="event-tile-image"
                    src={event.image}
                    alt=""
                    loading="lazy"
                    onError={(imageEvent) => {
                      imageEvent.currentTarget.onerror = null;
                      imageEvent.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="event-tile-shade" />
                  <span className="event-tile-category">{event.category}</span>
                  <button
                    className={`event-tile-save${isEventSaved(`gallery-${event.id}`) ? ' is-saved' : ''}`}
                    type="button"
                    aria-pressed={isEventSaved(`gallery-${event.id}`)}
                    aria-label={`${isEventSaved(`gallery-${event.id}`) ? 'Remove' : 'Save'} ${event.title} ${isEventSaved(`gallery-${event.id}`) ? 'from' : 'to'} saved events`}
                    onClick={() => toggleSavedEvent({
                      id: `gallery-${event.id}`,
                      title: event.title,
                      category: event.category,
                      date: event.date,
                      location: event.location,
                      image: event.image,
                      source: 'gallery',
                    })}
                  >
                    <FiBookmark aria-hidden="true" />
                    <span>{isEventSaved(`gallery-${event.id}`) ? 'Saved' : 'Save'}</span>
                  </button>
                  <div className="event-tile-info">
                    <h2>{event.title}</h2>
                    <p><FiCalendar aria-hidden="true" />{event.date}</p>
                    <p><FiMapPin aria-hidden="true" />{event.location}</p>
                  </div>
                </article>
              </StaggeredGridItem>
            ))}
          </StaggeredGrid>
        ) : (
          <div className="events-empty-state">
            <h2>No events found</h2>
            <p>Try a different search or choose another category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
