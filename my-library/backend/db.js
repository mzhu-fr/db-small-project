import mysql from "mysql";
import express from 'express';
import { login, logout, register } from "./controllers/controller-auth.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { addBooks, deleteBook, displayBooks, updateBook } from "./controllers/controller-books.js";
import multer from "multer";

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

    // const storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         cb(null, '../client/src/image')
    //     },
    //     filename: function (req, file, cb) {
    //         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //         cb(null, Date.now() + file.originalname)
    //     }
    // })

    // const upload = multer({ storage: storage })

    // CRUD - Create Read Update Delete
    // Créer, lire les données, mettre à jour, supprimer
    app.get("/api/books", displayBooks)
    app.post("/api/books", addBooks)
    app.delete("/api/books/:id", deleteBook)
    app.put("/api/books/:id", updateBook)

    // AUTHENTIFICATION
    app.post("/api/auth", register);
    app.post("/api/login", login);
    app.post("/api/logout", logout);

    app.listen(port, () => {
        console.log('backend is at port : ' + port);
    })
}