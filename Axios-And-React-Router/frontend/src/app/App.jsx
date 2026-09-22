import {RouterProvider} from 'react-router';
import { routes } from './app.routes';

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App