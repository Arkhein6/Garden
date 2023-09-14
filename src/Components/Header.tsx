import {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const Modal = useRef(null)

	const modalHandler: () => void = () => {
		const container = document.getElementsByClassName("links")
		console.log(container)
		
	}
	
	return (
		<header className="header">
			<div className="container">
				<div className="Logo">
					<h2>Garden</h2>
				</div>
                <div className="links">
                    <a href="">Blog</a>
                    <a href="">About Us</a>
                    <a href="">Gallery</a>
                </div>
				<div onClick={modalHandler}>
					<FontAwesomeIcon icon={faHamburger} />
				</div>

			</div>
		</header>
	);
};

export default Header;
