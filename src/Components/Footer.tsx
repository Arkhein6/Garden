import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="newsletter">
					<h3>Get Emails you'll love.</h3>
					<div className="inputbox">
						<input placeholder="john@gmail.com" />
						<div>
							{" "}
							<a>Sign Up</a>
						</div>
					</div>
                    
				</div>
				<div className="links">
					<div className="link_section">
						<h3>Links</h3>
						<a href="">About Us</a>
						<a href="">FAQ</a>
						<a href="">Our Services</a>
						<a href="">Contact</a>
						<a href="">Terms and Conditions</a>
					</div>
					<div className="featured_section">
						<h3>Featured</h3>
						<a href="">Partnership</a>
						<a href="">Gift Ideas</a>
						<a href="">Press</a>
						<a href="">Blog</a>
					</div>
				</div>
				<div className="social">
					<div className="icons">
						<FontAwesomeIcon icon={faFacebookF} size="2x" />
						<FontAwesomeIcon icon={faTwitter} size="2x" />
						<FontAwesomeIcon icon={faInstagram} size="2x" />
					</div>
					<p>
						Get connected with us on our<br></br> social media
						platforms
					</p>
					
				</div>
			</div>
		</footer>
	);
};

export default Footer;
