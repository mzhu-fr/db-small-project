import express from 'express';
import { addBooks, deleteBook, displayBooks, updateBook } from '../controllers/controller-books.js';

const router = express.Router();

router.get("/books", displayBooks);

router.post("/books", addBooks);
router.delete("/books/:id", deleteBook);
router.put("/books/:id", updateBook);

export default router