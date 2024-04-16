import Book from "../book/Book";
import "./BookList.css";

function BookList({ booksProps, addBook }) {
	if (booksProps.length === 0) {
		return "No Books Yet";
	}

	return (
		<div className="booklist">
			<h1>Suggested Reading</h1>
			{booksProps.map((book) => (
				<Book key={book.id} bookProps={book} addBook={addBook} />
			))}
		</div>
	);
}

export default BookList;
