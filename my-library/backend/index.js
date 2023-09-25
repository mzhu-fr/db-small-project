import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
})

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.json("IT IS NOT THE BACKEND, NaeazO")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json("NOT WORKING BOOKS DATA")
        return res.json(data);
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO `test`.`books` (`title`, `description`,`price`, `cover`) VALUES (?);"
    const books = [req.body.title, req.body.description, req.body.price, req.body.cover];
    db.query(q, [books], (err, data) => {
        if (err) return res.json(err)
        return res.json("book has been created");
    })
})

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE id = ?";

    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover
    ]
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("book has been updated succesfully");
    })
})


app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("livre bien supprimé");
    })
})

// CONNECTION BACKEND AU PORT 8800
app.listen(8800, () => {
    console.log("BACKEND CONNECTE");
})
