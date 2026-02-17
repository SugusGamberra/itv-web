import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Grado from '../../pages/Grado';
import SeleccionAsignaturas from '../../pages/SeleccionAsignaturas';
import AsignaturaDashboard from '../../pages/AsignaturaDashboard';
import TestMode from '../../pages/TestMode';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/:gradoID',
        element: <Grado />,
    },
    {
        path: '/:gradoID/:year', 
        element: <SeleccionAsignaturas />,
    },
    {
        path: '/:gradoID/:year/:asignaturaID',
        element: <AsignaturaDashboard />,
    },
    {
        path: '/:gradoID/:year/:asignaturaID/test/:modo',
        element: <TestMode />,
    },
]);