require('dotenv').config()
const express =require('express');
const morgan=require('morgan')

const app=express()
app.use(morgan('common'));

app.use(function validateBearerToken(req,res,next){

const apiToken = process.env.API_TOKEN
const authToken=req.get('Authorization')

if (!authToken || authToken.split(' ')[1] !== apiToken){
    return res.status(401).json({error:'Unauthorized request'})
}
next()
})

function handleGetMovies(req,res){
    res.send('Hello, Movie!')
}
app.get('/movie', handleGetMovies)

const PORT = 8000

app.listen(PORT, () =>{
    console.log(`Server Listening at http://localhost:${PORT}`)
})