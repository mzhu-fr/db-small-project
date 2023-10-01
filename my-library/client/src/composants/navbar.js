import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

// Pour la barre de navigation en mobile
import { useDispatch } from 'react-redux';
import { showSidebar } from '../store/actions/sidebar-action';

// Pour checker si l'utilisateur est connecté ou non
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

// Les logos
import { FaCartArrowDown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { TbSquareLetterM, TbSquareLetterO, TbSquareLetterE } from 'react-icons/tb';
import { VscLibrary } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';

export default function Navbar() {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(showSidebar());
    }
    const navigate = useNavigate();

    const { currentUser, logout } = useContext(AuthContext)

    const handleLogout = async () => {
        await logout(AuthContext);
        navigate("/");
        console.log("deconnexion et redirection !");
    }

    return (
        <div className="navbar color">

            <div className="navbar-wrapper">

                <Link className="logo-book" to="/home">Librairie <TbSquareLetterM />< TbSquareLetterO /><TbSquareLetterM /><TbSquareLetterE /></Link>

                <div className="navbar-content">

                    <Link className="navbar-links" to="/product"><VscLibrary /></Link>

                    {currentUser && currentUser.role === "admin" ? <Link className="navbar-links" to="/admin/gestion"><AiFillSetting /></Link> : ""}

                    {currentUser ?
                        (<span className="navbar-links" onClick={handleLogout}> < RiLogoutCircleRFill /></span>)
                        : (<Link className="navbar-links" to="/signin"><FaUser /></Link>)}
                    <Link className="navbar-links" to="/panier"><FaCartArrowDown /></Link>

                </div>

                <div onClick={() => handleClick()} className="burger-menu"><GiHamburgerMenu /></div>

            </div>
        </div >
    )
}