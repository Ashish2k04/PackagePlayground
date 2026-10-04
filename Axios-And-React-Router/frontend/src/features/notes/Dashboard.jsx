import Form from './components/Form';
import Card from './components/Card';
import {useNotes} from './hooks/useNotes.js'

const Dashboard = () => {
  const {handleCreateNote, handleDeleteNote} = useNotes();
  return (
    <div>
      <Form onCreateNote={handleCreateNote} />
      <Card />
    </div>
  )
}

export default Dashboard