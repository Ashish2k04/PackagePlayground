import { useContext } from "react";
import { NoteContext } from "../note.context";
import { createNote, deleteNote } from "../services/api.service";

export function useNotes(){
    const context = useContext(NoteContext);
    const {note, setNote, loading, setLoading} = context;

    async function handleCreateNote({title, description}) {
        setLoading(true);
    }
}