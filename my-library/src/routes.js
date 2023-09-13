import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import Navbar from './composants/navbar';

export default function AppRouting() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route></Route>
            </Routes>
        </BrowserRouter>
    )
}