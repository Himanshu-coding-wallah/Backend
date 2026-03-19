// const express = require('express')
// require('dotenv').config()
// import dotenv from "dotenv"
// import "dotenv/config"
import express from "express"
const app = express()
const port = process.env.PORT || 3000

app.get("/api/jokes", (req,res)=>{
    const jokes = [
        {
            id: 1,
            joke: "joke A",
        },
        {
            id: 2,
            joke: "joke B",
        },
        {
            id: 3,
            joke: "joke C",
        },
    ]

    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`welcome, server is working at http://localhost:${port}`);
  
})