import { BrowserRouter, Routes, Route } from 'react-router-dom';//navlink enlever
import Navbar from './composants/navbar';
import Product from './pages/product';
import Home from './pages/home';
import Error from './pages/error'

export default function AppRouting() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/product" element={<Product />}  />
                <Route path="*" element={<Error />}  />
            </Routes>
        </BrowserRouter>
    )
}