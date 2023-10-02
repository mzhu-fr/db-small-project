import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const register = (req, res) => {

    // res.json("REGISTER PAGE");
    // Check si l'utilisateur existe


    const query = "SELECT * FROM user WHERE email = ? OR username = ?";
    db.query(query, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(409).json(err);
        if (data.length > 0) {
            return res.status(409).json("L'utilisateur existe déjà.")
        };

        // Mot de passe crypté et créer l'utilisateur
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO user(`username`, `email`, `password`, `prenom`, `nom`, `adresse`, `codepost`) VALUES (?)"


        // req = request (requiert)
        // body = viens du body (html)
        // le formulaire a "name = ****" qui donne donc les infos à récup
        const values = [
            req.body.username,
            req.body.email,
            hash,
            req.body.prenom,
            req.body.nom,
            req.body.adresse,
            req.body.codepost
        ]

        db.query(q, [values], (err, data) => {
            console.log("hello");
            if (err) return res.json(err);
            return res.status(200).json("Utilisateur bien enregistré ! ");

        })

    })
}

export const login = (req, res) => {

    const query = "SELECT * FROM user WHERE username = ?";
    db.query(query, [req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return (res.status(400).json("Utilisateur inconnu"));

        // VA COMPARER LE MOT DE PASSE
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if (!isPasswordCorrect) return res.status(400).json("Mauvais utilisateur/mot de passe");

        const { password, ...other } = data[0]
        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(other)
    })
}

export const logout = (req, res) => {

    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,

    }).status(200).json("Vous avez bien été déconnecté")
}