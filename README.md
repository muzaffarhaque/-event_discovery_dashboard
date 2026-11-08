# Spinach Events

A React event-discovery interface built with Vite. The app has a dashboard at `/` and a searchable, category-filtered staggered event gallery at `/events`.

**Live demo:** [https://idyllic-lollipop-aaab76.netlify.app/](https://event-dashboard1.netlify.app/)

## Requirements

- Node.js (an active LTS release is recommended)
- npm

## Setup

From the project directory, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

Other useful commands:

```bash
npm run lint       # Run ESLint
npm run build      # Create a production build in dist/
npm run preview    # Preview the production build locally
```

Run `npm run build` before `npm run preview`.

## How the application works

### Application entry and routing

`src/main.jsx` mounts the React application into the root element from `index.html`. `src/App.jsx` sets up React Router routes:

- `/` renders the Home dashboard.
- `/events` renders the Events gallery.

The app wraps its routes in `ThemeProvider` and mounts a shared toast notification container. Bootstrap's CSS and the app's Sass entry point are also loaded here.

### Home dashboard

`src/pages/Home.jsx` is the dashboard layout. It presents featured event cards, friends' activity, event genres, monthly event rows, venue cards, and an all-events section. It navigates to `/events` from the wallet-shaped sidebar button.

The dashboard uses a short timer to show skeleton placeholders before rendering its sample content. Framer Motion scroll-reveal animations are limited to the `.event-hero-card`, `.genre-box`, and `.event-card-box` cards. The featured `.event-hero-card` also tilts gently in 3D with mouse or pen pointer movement and springs back when the pointer leaves; touch and reduced-motion preferences disable tilt. Other page sections, friends' activity, monthly event rows, and venue cards are not animated. Users can save or unsave dashboard event cards, and open the shared Saved Events drawer from the header. Its layout and reusable element styles are in `src/assets/css/home.scss` and `src/assets/css/style.scss`. Some dashboard cards are presentation examples rather than live data-backed features.

### Events gallery

`src/pages/Events.jsx` contains the gallery's sample event records and UI. Each record includes a title, category, date, location, image URL, and card height. The page:

1. Uses `StaggeredGrid` and `StaggeredGridItem` from `react-staggered-grid` to arrange cards into responsive columns.
2. Uses React state to track the search text and selected category.
3. Uses `useMemo` to filter by category and by title, category, or location.
4. Shows an empty state when no records match.
5. Loads event photos from Unsplash and uses a bundled image if a photo fails to load.
6. Provides a Home button that navigates back to `/`.
7. Lets users save or unsave gallery events and open the shared Saved Events drawer.

Gallery styles live in `src/assets/css/events.scss`, imported through `src/App.scss`. The styles use the shared theme CSS variables and include mobile and reduced-motion behavior.

The gallery data is currently defined directly in `Events.jsx`; it is not fetched from a service. To add or edit sample cards, update that event list and keep the category values in sync with the `categories` list.

### Theme

`src/context/ThemeContext.jsx` provides the current light/dark theme and a toggle function. It sets `data-theme` on the document root; shared CSS variables in `src/assets/css/style.scss` and theme-specific selectors use that attribute to choose colors.

### Saved events

`src/context/SavedEventsContext.jsx` owns saved event state shared across both routes. It persists saved records in browser `localStorage` under `spinach-saved-events`, using distinct `dashboard-` and `gallery-` IDs so items from the two sample data sets cannot collide. The save controls add or remove a card, and the shared `SavedEventsDrawer` lets users review or remove saved events. The drawer closes with Escape, its close button, or the backdrop, traps keyboard focus while open, and locks background scrolling.

### Sample data and reusable code

- `src/mock-events.json` holds a separate mock dataset used by the Home dashboard's event cards. It has fields such as `title`, `start`, `location`, `price`, and `attendees`.
- `src/components/` contains reusable dashboard elements: event cards, event rows, save button, image handler, and skeleton placeholder.
- `src/hooks/FeatchData.js` and `src/server/Api.js` are an Axios-based data-fetching helper and API wrapper. They are not currently the data source for the Home or Events route; the visible pages use local sample data.
- `src/utils/reusableFunction.js` contains generic `groupBy` and `debounce` helpers.
- `src/assets/images/` contains local image assets used by the dashboard and as an event-image fallback.

## Project structure

```text
src/
  App.jsx                   Router, shared providers, global CSS imports
  App.scss                  Sass entry point
  main.jsx                  React application mount
  mock-events.json          Sample event records for the dashboard
  assets/
    css/                    Global, dashboard, contact, and gallery styles
    images/                 Local image assets and fallbacks
  components/               Reusable cards, rows, buttons, and skeletons
    SavedEventsDrawer.jsx   Shared saved-items drawer
    SavedEventsButton.jsx   Shared saved-items drawer launcher
  context/
    ThemeContext.jsx        Light/dark theme state
    SavedEventsContext.jsx  Shared persistent saved-event state
  hooks/FeatchData.js       Axios data-fetching hook
  pages/
    Home.jsx                Dashboard route
    Events.jsx              Event discovery gallery route
  server/Api.js             Axios GET helper
  utils/                    Reusable utility functions
```

## Project decisions and current scope

- **Client-side demo:** Event data is local sample content; there is no event API, database, authentication, or booking backend configured. Saved events persist locally in the current browser.
- **Separate data sets:** The Home dashboard uses `mock-events.json`; the Events gallery uses its own gallery-specific records in `Events.jsx`. These are not synchronized.
- **Staggered layout:** `react-staggered-grid` is used for the gallery's varied-height cards rather than a fixed row grid.
- **Remote images with a local fallback:** Gallery photos use Unsplash URLs to keep the repository's asset bundle smaller. The page falls back to a checked-in image if a URL fails. Remote photos therefore require an internet connection.
- **Styling:** Sass is used for component/page styling, with CSS custom properties supporting the shared light/dark theme. Bootstrap CSS is loaded for existing utility classes and base styles.
- **Navigation:** React Router handles the two application routes; navigation within the pages uses its navigation hook.

The sample content, event dates, and visual controls should not be treated as live event listings or completed transactions. Saved events are browser-local and do not sync across devices. Integrating a real backend, booking flow, or account-based synchronization would require additional implementation.

## Main dependencies

- **React and React DOM** provide the component UI and browser rendering.
- **Vite** runs the local development server and creates production builds.
- **React Router** handles navigation between `/` and `/events`.
- **Sass** compiles the app's `.scss` stylesheets.
- **Framer Motion** provides Home page entrance, scroll-reveal, and card animations with reduced-motion support.
- **react-staggered-grid** lays out variable-height gallery cards.
- **react-icons** supplies interface icons.
- **Bootstrap / React Bootstrap** are available for existing layout and UI styling; Bootstrap CSS is imported by the app.
- **Axios** supports the data-fetching helper.
- **React Toastify** provides the shared toast container.

The complete dependency and script definitions are in `package.json`; `package-lock.json` records the installed dependency tree.
