import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Events, Home } from './pages';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { SavedEventsProvider } from './context/SavedEventsContext';
import SavedEventsDrawer from './components/SavedEventsDrawer';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/events",
        element: <Events />
    },
]);

function AppContent() {
  

    return (
        <>
            <RouterProvider router={router} />
            <SavedEventsDrawer />
            <ToastContainer />
        </>
    );
}

function App() {
    return (
        <ThemeProvider>
            <SavedEventsProvider>
                <AppContent />
            </SavedEventsProvider>
        </ThemeProvider>
    );
}

export default App;
