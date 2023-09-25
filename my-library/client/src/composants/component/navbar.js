import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiWhiteBook } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { showSidebar } from '../store/actions/sidebar-action';

export default function Navbar() {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(showSidebar());
    }
    return (
        <div className="navbar color">
            <div className="navbar-wrapper">
                <Link to="/" className="logo-book"><GiWhiteBook /></Link>
                <h1>La Librairie d'Angélique</h1>
                <div className="navbar-content">
                    <Link className="navbar-links" to="/product">Mes livres</Link>
                    <Link className="navbar-links" to="/signin">Se connecter</Link>
                    <Link className="navbar-links" to="/signup">S'enregistrer</Link>
                    <Link className="navbar-links" to="/panier">Panier</Link>
                </div>
                <div onClick={() => handleClick()} className="burger-menu"><GiHamburgerMenu /></div>
            </div>
        </div>
    )
}