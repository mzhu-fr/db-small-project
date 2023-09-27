import express from 'express';
import { addBooks } from '../controllers/controller-books.js';

const router = express.Router();

router.get("/addbooks", addBooks)



// app.get("/books", (req, res) => {
//     const q = "SELECT * FROM books";
//     db.query(q, (err, data) => {
//         if (err) return res.json("NOT WORKING BOOKS DATA")
//         return res.json(data);
//     })
// })

// app.post("/books", (req, res) => {
//     const q = "INSERT INTO `test`.`books` (`title`, `description`,`price`, `cover`) VALUES (?);"
//     const books = [req.body.title, req.body.description, req.body.price, req.body.cover];
//     db.query(q, [books], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("book has been created");
//     })
// })

// app.put("/books/:id", (req, res) => {
//     const bookId = req.params.id;
//     const q = "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? WHERE id = ?";

//     const values = [
//         req.body.title,
//         req.body.description,
//         req.body.price,
//         req.body.cover
//     ]
//     db.query(q, [...values, bookId], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("book has been updated succesfully");
//     })
// })


// app.delete("/books/:id", (req, res) => {
//     const bookId = req.params.id;
//     const q = "DELETE FROM books WHERE id = ?";
//     db.query(q, [bookId], (err, data) => {
//         if (err) return res.json(err)
//         return res.json("livre bien supprimé");
//     })
// })


export default router