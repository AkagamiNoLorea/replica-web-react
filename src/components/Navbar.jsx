import Listanavbar from "./moleculas/Listanavbar"
import Logo from "./moleculas/Logo"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <Logo />
                <Listanavbar />
            </nav>
        </>
    )
}

export default Navbar