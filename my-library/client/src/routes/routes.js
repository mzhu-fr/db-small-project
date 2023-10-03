import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from '../composants/sidebar'
import Navbar from '../composants/navbar';
import Product from '../pages/product';
import Home from '../pages/home';
import Log from '../pages/login';
import Panier from '../pages/panier';
import Error from '../pages/error';
import Footer from '../composants/footer'
import { PageAdmin } from './routes-auth';
import { Update } from '../pages/admin/update';

export default function AppRouting() {
    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Routes>

                {/* S'affichera que l'utilisateur soit connecté ou non */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />

                {/* Ne s'affichera plus si l'utilisateur est connecté */}
                <Route path="/signin" element={<Log />} />


                <Route path="/panier" element={<Panier />} />

                {/* Ne s'affichera que si le role est admin */}
                <Route path="/admin" >
                    <Route path="/admin/gestion" element={<PageAdmin />} />
                    <Route path="/admin/update/:id" element={< Update />} />
                </Route>

                <Route path="*" element={<Error />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}
