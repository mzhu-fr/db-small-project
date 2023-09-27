import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from '../composants/sidebar'
import Navbar from '../composants/navbar';
import Product from '../pages/product';
import Home from '../pages/home';
// import SignIn from './pages/signIn';
import Log from '../pages/login';
import SignUp from '../pages/signUp';
import Panier from '../pages/panier';
import Error from '../pages/error';

export default function AppRouting() {
    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/signin" element={<Log />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
