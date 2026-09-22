import {createBrowserRouter} from 'react-router';
import Dashboard from '../features/notes/Dashboard';

export const routes = createBrowserRouter([
    {
      element: <Dashboard />,
      path: '/'
    }
])