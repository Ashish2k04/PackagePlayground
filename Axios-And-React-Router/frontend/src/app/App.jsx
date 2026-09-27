import { NoteProvider } from '../features/notes/note.context';
import {RouterProvider} from 'react-router';
import { routes } from './app.routes';

const App = () => {
  return (
    <div>
      <NoteProvider>
      <RouterProvider router={routes} />
      </NoteProvider>
    </div>
  )
}

export default App