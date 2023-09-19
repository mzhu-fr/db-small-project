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
                <p className="logo-titre">MES LIVRES MOMO</p>
                <div className="navbar-content">
                    <Link className="navbar-links" to="">MES LIVRES</Link>
                    <Link className="navbar-links" to="">Se connecter</Link>
                    <Link className="navbar-links" to="">S'enregistrer</Link>
                    <Link className="navbar-links" to=""></Link>
                </div>
                <div onClick={() => handleClick()} className="burger-menu"><GiHamburgerMenu /></div>
            </div>
        </div>
    )
}