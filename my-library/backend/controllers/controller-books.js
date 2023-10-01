import { db } from "../db.js";

export const addBooks = (req, res) => {
    const q = "INSERT INTO `books`.`book` (`book_title`, `book_author`, `book_desc`,`book_price`, `book_cover`,  `book_quantite`, `cat`) VALUES (?);"
    const books = [
        req.body.book_title,
        req.body.book_author,
        req.body.book_desc,
        req.body.book_price,
        req.body.book_cover,
        req.body.book_quantite,
        req.body.cat
    ];
    db.query(q, [books], (err, data) => {
        if (err) return res.json(err)
        return res.json("book has been created");
    })
}

export const displayBooks = (req, res) => {
    const query = "SELECT * FROM books.book";
    // console.log("cc ???")
    db.query(query, (err, data) => {
        if (err) return res.json("Erreur de data livres")
        // console.log(data);
        return res.json(data)
    })
}

export const updateBook = (req, res) => {

    const bookId = req.params.id;
    const q = "UPDATE `books`.`book` SET `book_title` = ?, `book_author` = ?, `book_desc` = ?, `book_price` = ?, `book_cover` = ?,`book_quantite` = ?, `cat` = ?  WHERE book_id = ?";

    const values = [
        req.body.book_title,
        req.body.book_author,
        req.body.book_desc,
        req.body.book_price,
        req.body.book_cover,
        req.body.book_quantite,
        req.body.cat
    ]
    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("book has been updated succesfully");
    })

}

export const deleteBook = (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books.book WHERE book_id = ?";
    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err)
        return res.json("livre bien supprimé");
    })
}