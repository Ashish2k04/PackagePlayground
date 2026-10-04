import {useEffect} from 'react';
import Form from './components/Form';
import Card from './components/Card';
import {useNotes} from './hooks/useNotes.js'

const Dashboard = () => {
  const {handleCreateNote, handleFetchNotes, handleDeleteNote, note} = useNotes();

  useEffect( async ()=>{
    const res = await handleFetchNotes();
    console.log(res)
  }, [])
  return (
    <div>
      <Form onCreateNote={handleCreateNote} />
      {note.map((e, idx)=>{
        <Card onDeleteNote={handleDeleteNote}/>
      })}
    </div>
  )
}

export default Dashboard