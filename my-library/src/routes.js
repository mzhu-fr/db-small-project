import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';

export function webRouting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={App}></Route>
            </Routes>
        </BrowserRouter>
    )
}