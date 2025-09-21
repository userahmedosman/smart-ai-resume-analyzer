import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar shadow-2xl">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMATE</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
