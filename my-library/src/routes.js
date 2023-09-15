import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Navbar from './composants/navbar';
import Sidebar from './composants/sidebar';

export default function AppRouting() {
    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    )
}