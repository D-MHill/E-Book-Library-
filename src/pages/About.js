import React from "react";
import Header from "../components/header/Header.js";
import ebook from "../images/about.png";

function About() {
	return (
		<div style={{ height: "100vh" }}>
			<Header />
			<h1
				style={{ textAlign: "center", marginLeft: "22%", marginRight: "25%" }}>
				Welcome to our e-book library!
			</h1>
			<img
				style={{
					height: "300px",
					width: "27%",
					marginLeft: "35%",
					marginRight: "25%",
					borderRadius: "5px",
				}}
				src={ebook}
				alt="Reading adventure"
			/>
			<p
				style={{
					textAlign: "justify",
					fontSize: "15px",
					marginLeft: "25%",
					marginRight: "25%",
				}}>
				Here stories come to life in the digital realm! We're all about
				celebrating the magic of reading and making it easy for you to dive into
				awesome books whenever and wherever you want. In a world that's always
				buzzing with notifications and distractions, we're here to offer you a
				chill space where you can escape into the coolest adventures, deepest
				mysteries, and most mind-blowing ideas, all with just a few taps on your
				screen. Let's be real, reading isn't just for school assignments or when
				you're stuck waiting in line. It's a vibe, a whole mood, and an amazing
				way to level up your brain game. Whether you're into sci-fi, fantasy,
				romance, or memoirs that feel like scrolling through your favorite
				influencer's feed, we've got something for you. So, what are you waiting
				for? Let's get started! Trust us, once you get hooked, there's no going
				back. Happy reading!
			</p>
		</div>
	);
}

export default About;
