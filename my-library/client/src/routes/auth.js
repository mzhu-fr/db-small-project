import express from 'express';
import { register, login, logout } from '../../../backend/auth';

const router = express.Router();

router.post("/register", register);
router.post("/register", login);
router.post("/register", logout);