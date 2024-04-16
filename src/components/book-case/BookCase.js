import { useState } from "react";
import Book from "../book/Book";
import "./BookCase.css";

function BookCase({ booksProps }) {
	return (
		<div className="bookcase">
			{booksProps.map((book) => (
				<Book key={book.id} bookProps={book} inBookcase={book.inBookcase} />
			))}
		</div>
	);
}

export default BookCase;
