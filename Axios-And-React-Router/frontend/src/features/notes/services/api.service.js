import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

export async function createNote({title, description}){
    const response = await api.post("/api/create-note", {title, description});
    return response.data
}

export async function deleteNote({noteId}){
    const response = await api.delete(`/api/delete-note/${noteId}`);
    return response.data
}