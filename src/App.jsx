import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Events, Home } from './pages';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { ThemeProvider, useTheme } from './context/ThemeContext';

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
            <ToastContainer />
        </>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
