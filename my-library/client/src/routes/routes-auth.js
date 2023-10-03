import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom";
import { Admin } from "../pages/admin/admin.js";

// Vérifie que l'utilisateur a bien le rôle admin, sinon redirige
export const PageAdmin = () => {
    const { currentUser } = useContext(AuthContext);

    if (currentUser && currentUser.role === 'admin') {
        return (
            <>
                <Admin />
            </>
        )
    }
    return <Navigate to="/" />
    // return (<Admin />)
}