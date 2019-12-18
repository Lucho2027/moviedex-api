const app = require('./app')
const PORT = 8000

app.listen(PORT, () =>{
    console.log(`Server Listening at http://localhost:${PORT}`)
})