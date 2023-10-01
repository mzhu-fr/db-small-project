import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Add = () => {

    const navigate = useNavigate();

    const [book, setBook] = useState({
        book_title: "",
        book_author: "",
        book_desc: "",
        book_price: null,
        book_cover: "",
        book_quantite: null
    })

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    console.log(book);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/books", book)
            navigate("/");
        } catch (err) {
            console.log("error")
            console.log(err);
            console.log("error")
        }
    }
    return (
        <div className="form">
            <h1>Add new stuff</h1>
            <input type="text" placeholder='titre' onChange={handleChange} name="book_title" />
            <input type="text" placeholder='auteur' onChange={handleChange} name="book_author" />
            <input type="text" placeholder='description' onChange={handleChange} name="book_desc" />
            <input type="number" placeholder='prix' onChange={handleChange} name="book_price" />
            <input type="file" accepet="image/png, image/jpeg" placeholder='cover' onChange={handleChange} name="book_cover" />
            <input type="number" placeholder='quantite' onChange={handleChange} name="book_quantite" />
            <button onClick={handleClick}>Add stuff</button>
        </div >
    )
}


export const Admin = () => {
    axios.defaults.withCredentials = true;

    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <h1>Bienvenue {currentUser?.username} sur la page admin</h1>
            < Add />
        </>
    )

}