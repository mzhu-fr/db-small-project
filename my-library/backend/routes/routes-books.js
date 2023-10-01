import express from 'express';
import { addBooks, displayBooks } from '../controllers/controller-books.js';

const router = express.Router();

router.get("/add-books", addBooks)
router.get("/book-list", displayBooks)

export default router