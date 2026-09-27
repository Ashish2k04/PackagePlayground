import {createContext, useState} from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(false);


    return (
    <NoteContext.Provider value={{note, setNote, loading, setLoading}}>
         {children}
    </NoteContext.Provider>
    )
}