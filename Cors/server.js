import app from "./src/app";

const PORT = 3000 || 8000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})