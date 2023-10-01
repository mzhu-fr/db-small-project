export const addBooks = (req, res) => {
    res.json("from controller")
}

export const displayBooks = (req, res) => {
    res.json("ALOHA");
}


// app.get("/books", (req, res) => {
//     const q = "SELECT * FROM books";
//     db.query(q, (err, data) => {
//         if (err) return res.json("NOT WORKING BOOKS DATA")
//         return res.json(data);
//     })
// })

// app.post("/books", (req, res) => {
//     const q = "INSERT INTO `books`.`book` (`book_title`, `book_author`, `book_desc`,`book_price`, `book_cover`,  `book_quantite`) VALUES (?);"
//     const books = [
//         req.body.book_title,
//         req.body.book_author,
//         req.body.book_desc,
//         req.body.book_price,
//         req.body.book_cover,
//         req.body.book_quantite
//     ];
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
