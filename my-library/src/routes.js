import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './component/sidebar'
import Navbar from './component/navbar';
import Product from './pages/product';
import Home from './pages/home';
import Error from './pages/error';

export default function AppRouting() {
    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
