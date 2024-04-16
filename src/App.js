import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Book from "./components/book/Book";
import data from "./models/book.json";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import Header from "./components/header/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import BookCase from "./components/book-case/BookCase";

function App() {
	const [books, setBooks] = useState([]);
	const [searchKeyword, setSearchKeyword] = useState("");
	const [myBookCase, setMyBookCase] = useState([]);

	useEffect(() => {
		const loadBooks = async () => {
			const results = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=food&filter=paid-ebooks&print-type=books&projection=lite`
			).then((res) => res.json());

			if (!results.error) {
				setBooks(results.items);
			}
		};

		loadBooks();
	}, []);

	const handleBookSearch = async () => {
		const results = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${searchKeyword}&filter=paid-ebooks&print-type=books&projection=lite`
		).then((res) => res.json());

		if (!results.error) {
			setBooks(results.items);
		}
	};

	const addBook = (bookProps) => {
		console.log("Iam Here");
		books.map((item) => {
			console.log(item);
			console.log("test");
			item.inBookcase = true;
		});
		setMyBookCase((prev) => [...prev, bookProps]);
		// window.location.href = "/bookcase";
		// return
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Home
					books={books}
					addBook={addBook}
					searchValue={searchKeyword}
					setSearchValue={setSearchKeyword}
					searchBook={handleBookSearch}
				/>
			),
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/bookcase",
			element: <BookPage books={myBookCase} />,
		},
		{
			path: "/contact",
			element: <Contact />,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
