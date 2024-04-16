import React, { useState } from "react";
import Header from "../components/header/Header";
import BookCase from "../components/book-case/BookCase";

function BookPage({ books }) {
	return (
		<div>
			<Header />
			<h1>My Book Case</h1>
			<div>
				<BookCase booksProps={books} inBookcase />
			</div>
		</div>
	);
}

export default BookPage;

//add books in the library and add rem

//use a condition to remove the
