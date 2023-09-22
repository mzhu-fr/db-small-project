import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ImCross } from "react-icons/im"
import { useDispatch } from 'react-redux';
import { hideSidebar } from '../store/actions/sidebar-action';

export default function Sidebar() {
    const dispatch = useDispatch();
    const sidebar = useSelector((state) => state.sidebar);
    const handleClick = () => {
        dispatch(hideSidebar());
    }
    return (
        <div className="sidebar" id={sidebar ? "display-sidebar" : "hide-sidebar"}>
            <div className="sidebar-close"><ImCross onClick={() => handleClick()} /></div>
            <div className="sidebar-links-list">
                <Link className="sidebar-link">sidebarLink</Link>
                <Link className="sidebar-link">Link1</Link>
                <Link className="sidebar-link">Link2</Link>
                <Link className="sidebar-link">Link3</Link>
                <Link className="sidebar-link">Link4</Link>
            </div>
        </div>
    )
}