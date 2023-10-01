import mysql from "mysql";
import express from 'express';
import { login, logout, register } from "./controllers/controller-auth.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { addBooks, displayBooks } from "./controllers/controller-books.js";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "books"
})

export function createBackendServer(port) {
    const app = express();
    app.use(express.json());

    app.use(cookieParser())

    app.use(cors())


    // CRUD
    app.post("/api/add-books", addBooks);
    app.post("/api/book-list", displayBooks)

    // AUTHENTIFICATION
    app.post("/api/auth", register);
    app.post("/api/login", login);
    app.post("/api/logout", logout);
    app.listen(port, () => {
        console.log('backend is at port : ' + port);
    })
}