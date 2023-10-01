import React, { useContext, useState } from "react";
// import ReactDOM from "react";
import '../styles/styleLogin.css';

import axios from 'axios';
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

class Log extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }

    // pour le changement du return() afficher dans la page
    showLoginBox() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    render() {

        return (
            <div className="root-container">

                <div className="box-container">
                    <div className={"controller" + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
                        Login
                    </div>
                    <div className={"controller" + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
                        Register
                    </div>
                </div>
                <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}
                </div>
            </div>
        );

    }

}
export default Log;




// --------- bloc return 1 LOGIN
function LoginBox() {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })

    const [messageErreur, setMessageErreur] = useState(null)
    // console.log(inputs);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // const res = await axios.post("/auth/login", inputs)
            // console.log(res);
            await login(inputs);
            navigate("/admin/gestion")
        }
        catch (err) {
            setMessageErreur(err.response.data)
        }
    }

    return (
        <div className="inner-container">
            <div className="header">
                Login
            </div>
            <div className="box">

                <div className="input-group">
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" className="login-input" placeholder="username" onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" className="login-input" placeholder="password" onChange={handleChange} />
                </div>

                {messageErreur && <p>{messageErreur}</p>}
                <button type="button" className="login-btn" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}


// --------- bloc return 2 REGISTER
function RegisterBox() {


    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        prenom: "",
        nom: "",
        adresse: "",
        codepost: ""
    })

    const [messageErreur, setMessageErreur] = useState(null)
    // console.log(inputs);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth", inputs)
            console.log(res);
        }
        catch (err) {
            setMessageErreur(err.response.data)
        }
    }
    return (

        <div className="inner-container">
            <div className="header">
                Register
            </div>
            <div className="box">

                <div className="input-group">
                    <label htmlFor="username">Nom d'utilisateur : </label>
                    <input type="text" name="username" className="login-input" placeholder="nom d'utilisateur" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="username">Nom : </label>
                    <input type="text" name="nom" className="login-input" placeholder="nom" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="username">Prénom : </label>
                    <input type="text" name="prenom" className="login-input" placeholder="prénom" onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Email : </label>
                    <input type="email" name="email" className="login-input" placeholder="password" onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Mot de passe : </label>
                    <input type="password" name="password" className="login-input" placeholder="mot de passe" onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Adresse :</label>
                    <input type="text" name="adresse" className="login-input" placeholder="adresse" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Code Postal :</label>
                    <input type="text" name="codepost" className="login-input" placeholder="code postal" onChange={handleChange} />
                </div>
                {messageErreur && < p >{messageErreur}</p>}
                <button type="button" className="login-btn" onClick={handleSubmit}>Enregistrer</button>
            </div>
        </div >
    );

}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Log />);