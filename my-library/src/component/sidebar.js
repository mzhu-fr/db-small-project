import '../styles/sidebar.css';
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-links-list">
                <Link className="sidebar-link">Link</Link>
                <Link className="sidebar-link">Link</Link>
                <Link className="sidebar-link">Link</Link>
                <Link className="sidebar-link">Link</Link>
                <Link className="sidebar-link">Link</Link>
            </div>
        </div>
    )
}