import { useContext } from "react";
import { NoteContext } from "../note.context";
import { createNote, deleteNote, getNotes } from "../services/api.service";

export function useNotes(){
    const context = useContext(NoteContext);
    const {note, setNote, loading, setLoading} = context;

    async function handleCreateNote(title, description) {
         setLoading(true)
        try{
            const data = await createNote(title, description)
            setNote(data.info);
            return data.info
            }
        catch(err){
            throw err
        }
        finally{
            setLoading(false)
        }
    }

    async function handleFetchNotes() {
         setLoading(true)
        try{
            const data = await getNotes()
            setNote(data);
            return data
            }
        catch(err){
            throw err
        }
        finally{
            setLoading(false)
        }
    }

    async function handleDeleteNote(noteId) {
         setLoading(true)
        try{
            const data = await deleteNote(noteId)
            setNote(data.info);
            return data.info
            }
        catch(err){
            throw err
        }
        finally{
            setLoading(false)
        }
    }

    return({handleCreateNote, handleDeleteNote, handleFetchNotes, note, setNote})

}