import Header from "../components/header/Header";
import ContactForm from "../components/contact-form/Contactform";

function Contact() {
	return (
		<div>
			<Header />
			<h2 style={{ textAlign: "center" }}>Get in toutch!</h2>
			<p style={{ textAlign: "center" }}>We would love to hear from you.</p>
			<ContactForm />
		</div>
	);
}

export default Contact;