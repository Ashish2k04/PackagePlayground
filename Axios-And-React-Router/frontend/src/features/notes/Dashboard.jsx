import { useState ,useEffect} from 'react';
import Form from './components/Form';
import Card from './components/Card';
import {useNotes} from './hooks/useNotes.js'

const Dashboard = () => {
  const {handleCreateNote, handleFetchNotes, handleDeleteNote, note, setNote} = useNotes();

  useEffect(()=>{
    async function getAllData(){
       const res = await handleFetchNotes();
      setNote(res.allNotes)
       console.log(res)
    }
    getAllData()
  }, [])
  return (
    <div>
      <Form onCreateNote={handleCreateNote} />
      {note?.map((e)=>{
        return <Card key={e._id} onDeleteNote={handleDeleteNote} title={e.title} description={e.description}/>
      })}
    </div>
  )
}

export default Dashboard