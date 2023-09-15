import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiWhiteBook } from 'react-icons/gi'

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <Link to="/" className="logo-book"><GiWhiteBook /></Link>
                <navbar className="navbar-content">
                    <Link to="">MES LIVRES</Link>
                    <Link to="">Se connecter</Link>
                    <Link to="">S'enregistrer</Link>
                    <Link to=""></Link>
                </navbar>
                <div className="burger-menu"><RxHamburgerMenu /></div>
            </div>
        </div>
    )
}