import { useContext } from "react";
import { NoteContext } from "../note.context";
import { createNote, deleteNote } from "../services/api.service";

export function useNotes(){
    const context = useContext(NoteContext);
    const {note, setNote, loading, setLoading} = context;

    async function handleCreateNote(title, description) {
         setLoading(true)
        try{
            const data = await createNote(username, email, password)
            setUser(data.info);
            return data.info
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
            setUser(data.info);
            return data.info
            }
        catch(err){
            throw err
        }
        finally{
            setLoading(false)
        }
    }

}