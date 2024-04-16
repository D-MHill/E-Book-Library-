import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.PNG";

function Header() {
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="Logo" />
			</div>
			<div className="logo2">
				<h4>E-Book Library</h4>
			</div>

			<nav>
				<Link to="/" className="header-link">
					Home
				</Link>
				<Link to="/about" className="header-link">
					About
				</Link>
				<Link to="/bookcase" className="header-link">
					My Bookcase
				</Link>
				<Link to="/contact" className="header-link">
					Contact Us
				</Link>
			</nav>
		</header>
	);
}

export default Header;
