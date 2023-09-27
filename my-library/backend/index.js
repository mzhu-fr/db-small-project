import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import postBooksRoot from './routes/routes-books.js';
import authRoot from './routes/routes-auth.js';
import userRoot from './routes/routes-users.js';

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors())

app.use("/api/books", postBooksRoot);
app.use("/api/auth", authRoot);
app.use("/api/user", userRoot);

// app.get("/", (req, res) => {
//     res.json("THIS IS THE BACKEND")
// })

// CONNECTION BACKEND AU PORT 8800
app.listen(8800, () => {
    console.log("BACKEND CONNECTE");
})
