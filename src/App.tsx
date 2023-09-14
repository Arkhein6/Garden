import React from "react";
import { Footer, Header, HeroSection } from "./Components";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const App = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<main>
				<section className="first">
					<div className="container">
						<div className="text">
							<h2>
								The Europa Report<br></br>
								My Stories under the Ice
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Numquam architecto dolorem
								autem voluptas veritatis tempore eum, id fugiat,
								nesciunt eos impedit quod eveniet excepturi
								adipisci ipsum, sunt magni distinctio
								repudiandae.
							</p>
							<a>Read More</a>
						</div>
						<FontAwesomeIcon icon={faArrowRight} size="2x" beat />
					</div>
				</section>
				<section className="second">
					<div className="container">
						<div className="text">
							<span>CONTACTS</span>
							<h2>
								Let's get <br></br>acquainted
							</h2>
							<p>
								<span>Visit us</span>
								<br></br>Obuasi Akaporiso, KB4356<br></br>
								Kumasi, Ayeduase Site<br></br>
								Fully Lytem Lore<br></br>
								Ghana, Accra
							</p>

							<p>
								<span>Email</span>
								<br></br>johnsmith@gmail.com
							</p>

							<p>
								{" "}
								<span>Phone</span>
								<br></br>+233504776758
							</p>
							<a>Message us</a>
						</div>
					</div>
				</section>
				<section className="third">
					<div className="container">
						<div className="text">
							<h2>
								Beautifully Scented<br></br>
								Plants for the Kitchen
							</h2>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Tempore saepe eaque placeat
								voluptatem inventore ab. Facilis officia minima
								deserunt hic fugit qui. Pariatur, doloribus
								voluptas nisi itaque modi necessitatibus vero
							</p>
							<a>More details</a>
						</div>
						<div className="link">
							<a>Next </a>
							<FontAwesomeIcon icon={faArrowRight} size="2x" />
						</div>
					</div>
				</section>
				<section className="fourth">
					<div className="container">
						<div className="image"></div>
						<div className="text">
								<h3>
									How To Create A Plant<br></br>
									Looking Home
								</h3>
								<div className="table">
									<div className="col1">
										<p>
                    Lorem ipsum dolor sit amet
											consect adipisicing elit. Eius,
											esse architect voluptatum
											necessitatibus temporibu, hic vero
											impedit.
										</p>{" "}
										<p>
											Lorem ipsum dolor sit amet
											consect adipisicing elit. Eius,
											esse architect voluptatum
											necessitatibus temporibu, hic vero
											impedit.
										</p>{" "}
										<p>
                    Lorem ipsum dolor sit amet
											consect adipisicing elit. Eius,
											esse architect voluptatum
											necessitatibus temporibu, hic vero
											impedit.
										</p>
									</div>
									<div className="col2">
										<p>
                    Lorem ipsum dolor sit amet
											consect adipisicing elit. Eius,
											esse architect voluptatum
											necessitatibus temporibu, hic vero
											impedit.
										</p>{" "}
										<p>
                    Lorem ipsum dolor sit amet
											consect adipisicing elit. Eius,
											esse architect voluptatum
											necessitatibus temporibu, hic vero
											impedit.
										</p>{" "}
										<p>
                    Lorem ipsum dolor sit amet
											consect adipisicing elit. Eius,
											esse architect voluptatum
											necessitatibus temporibu, hic vero
											impedit.
										</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default App;
