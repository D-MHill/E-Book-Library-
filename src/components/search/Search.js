import "./Search";

function Search({ searchValueProps, setSearchValueProps, searchBookProps }) {
	const handleSubmit = (event) => {
		event.preventDefault();

		// function that will update the book
		searchBookProps(searchValueProps);
	};
	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			style={{ textAlign: "center", marginTop: "20px" }}>
			<label
				htmlFor="searchInput"
				style={{
					marginRight: "10px",
					fontSize: "25px",
					fontWeight: "bold",
					color: "black",
					display: "inline-block",
					marginBottom: "10px",
				}}>
				Find Book
			</label>
			<input
				id="searchInput"
				type="text"
				value={searchValueProps}
				onChange={(e) => setSearchValueProps(e.target.value)}
				placeholder="Search for title, author or subject"
				style={{
					width: "50%",
					padding: "10px",
					fontSize: "15px",
					borderRadius: " 5px",
				}}
			/>
		</form>
	);
}
export default Search;
