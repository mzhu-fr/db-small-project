import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiWhiteBook } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { showSidebar } from '../store/actions/sidebar-action';
import { FaCartArrowDown } from 'react-icons/fa';
import { BiSolidUserCircle } from 'react-icons/bi'
import { TbSquareLetterM, TbSquareLetterO, TbSquareLetterE } from 'react-icons/tb';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { AiOutlineDisconnect } from 'react-icons/ai'

export default function Navbar() {

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(showSidebar());
    }

    const { currentUser, logout } = useContext(AuthContext)
    return (
        <div className="navbar color">
            <div className="navbar-wrapper">
                {/* <Link to="/" className="logo-book"><GiWhiteBook /></Link> */}
                <Link className="logo-book" to="/home">Librairie <TbSquareLetterM />< TbSquareLetterO /><TbSquareLetterM /><TbSquareLetterE /></Link>
                <div className="navbar-content">
                    <Link className="navbar-links" to="/product"><GiWhiteBook /></Link>
                    {currentUser ? (<span className="navbar-links" onClick={logout}>DECO <AiOutlineDisconnect /></span>) : (<Link className="navbar-links" to="/signin">SE CO<BiSolidUserCircle /></Link>)}
                    <Link className="navbar-links" to="/panier"><FaCartArrowDown /></Link>
                </div>
                <div onClick={() => handleClick()} className="burger-menu"><GiHamburgerMenu /></div>
            </div>
        </div>
    )
}