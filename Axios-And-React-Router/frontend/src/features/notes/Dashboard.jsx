import Form from './components/Form';
import Card from './components/Card';
import {useNotes} from './hooks/useNotes.js'

const Dashboard = () => {
  const {handleCreateNote, handleFetchNotes, handleDeleteNote, note} = useNotes();
  return (
    <div>
      <Form onCreateNote={handleCreateNote} />
      <Card onDeleteNote={handleDeleteNote}/>
    </div>
  )
}

export default Dashboard