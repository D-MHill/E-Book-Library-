import PropTypes from "prop-types";
import "./Book.css";
import { useState } from "react";

function Book({ bookProps, addBook, inBookcase }) {
	const {
		volumeInfo: { title, authors, description, imageLinks },
	} = bookProps;

	if (!title || !authors || !description || !imageLinks) {
		return null;
	}

	const smallThumbnail = imageLinks.smallThumbnail;
	if (!smallThumbnail) {
		return null;
	}

	return (
		<div className="book-box">
			<div class="book-container">
				<div class="book-image">
					<img src={smallThumbnail} alt="Book cover" />
				</div>
				<div class="book-details">
					<h2 class="book-title">{title}</h2>
					<p class="book-author">by {authors.join(", ")}</p>
					<p>{description}</p>
					{inBookcase ? (
						""
					) : (
						<button
							type="submit"
							className="btn-add"
							onClick={(e) => addBook(bookProps)}>
							Add +
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

Book.propTypes = {
	bookProps: PropTypes.shape({
		volumeInfo: PropTypes.shape({
			title: PropTypes.string.isRequired,
			authors: PropTypes.arrayOf(PropTypes.string).isRequired,
			description: PropTypes.string.isRequired,
			imageLinks: PropTypes.shape({
				smallThumbnail: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
	addBook: PropTypes.func.isRequired,
};

export default Book;
