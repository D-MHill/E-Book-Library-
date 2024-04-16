import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [formError, setFormError] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!name || !email || !message) {
			setFormError("Please fill in all the fields.");
		} else {
			// Form submission logic here (e.g., sending data to server)
			alert("Thank you " + name + "! " + "Your message was sent successfully.");
			// Reset form fields after successful submission
			setName("");
			setEmail("");
			setMessage("");
			setFormError("");
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="form-container">
				<div>
					<label>
						Name
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Full Name"
						/>
					</label>
				</div>
				<div>
					<label> Email:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Your Email"
					/>
				</div>

				<div>
					<label>Message </label>
					<textarea
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Your Message Here "
						// rows={4}
						// cols={200}
					/>
				</div>
				{formError && <p className="error">{formError}</p>}
			</div>
			<button className="submit">Submit</button>
		</form>
	);
}

export default ContactForm;
