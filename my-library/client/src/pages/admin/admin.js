import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import ImageUn from '../../image/livre.jpg';

import "../../styles/admin.css"
// import styled from 'styled-components'

// const Button = styled.button`
//     border-radius: 16px;
// 	border: 2px solid black;
// 	background-color: #DACA3B;
// 	color: #FFFFFF;
// 	font-size: 12px;
// 	font-weight: bold;
// 	padding: 15px 45px;
//     margin-bottom: 20px;
// 	letter-spacing: 1px;
// 	text-transform: uppercase;
// 	transition: transform 80ms ease-in;
//     cursor:pointer;
// `

const Add = () => {

    const navigate = useNavigate();

    const [book, setBook] = useState({
        book_title: "",
        book_author: "",
        book_desc: "",
        book_price: null,
        book_cover: "",
        book_quantite: null,
        cat: "divers"
    })

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    // console.log(book);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/books", book)
            window.location.reload()
        } catch (err) {
            console.log("error")
            console.log(err);
            console.log("error")
        }
    }
    return (
        <>
            <div className="form">

                <h2>Ajouter un nouveau livre</h2>

                <input type="text" placeholder='titre' onChange={handleChange} name="book_title" />

                <input type="text" placeholder='auteur' onChange={handleChange} name="book_author" />

                <input type="text" placeholder='description' onChange={handleChange} name="book_desc" />

                <input type="number" placeholder='prix' onChange={handleChange} name="book_price" />

                {/* <input type="file" accept="image/png, image/jpeg" placeholder='cover' onChange={handleChange} name="book_cover" /> */}

                <input type="number" placeholder='quantite' onChange={handleChange} name="book_quantite" />


                <div className="elementForm">
                    <select className="select" name="cat" onChange={handleChange}>
                        <option value="divers">Divers</option>
                        <option value="fantastique">Fantastique</option>
                        <option value="jeunesse">Jeunesse</option>
                        <option value="roman">Roman</option>
                    </select>
                    <button onClick={handleClick}>Ajouter le livre</button>
                </div>
            </div >
        </>
    )
}



const DisplayBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("/books")
                setBooks(res.data)
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchBooks();
    }
        , []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("/books/" + id)
            window.location.reload()
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="list-livres">
                <div className="fondBooks">
                    {books.map(book => (
                        <div className="book" key={book.book_id}>
                            {/* {book.book_cover && <img src="" alt="" />} */}
                            <img src={ImageUn} alt={ImageUn} />
                            <h3>{book.book_title}</h3>
                            <p>{book.book_desc}</p>
                            <p>Prix : {book.book_price}€</p>
                            <p>Quantité : {book.book_quantite}</p>
                            <button className="delete" onClick={() => handleDelete(book.book_id)}>Supprimer</button>
                            <button className="update" >< Link to={`/admin/update/${book.book_id}`}>Mettre à jour</Link></button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}





export const Admin = () => {
    axios.defaults.withCredentials = true;

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="pageAdmin">

            <div className="titre-admin"><h2>Bienvenue {currentUser?.username} sur la page admin</h2></div>

            <div className="containerAdmin1">
                < Add />
            </div>

            <div className="containerAdmin2">
                <h2 className="titre-admin">TOUS LES LIVRES</h2>

                < DisplayBooks />

            </div>
        </div >
    )

}