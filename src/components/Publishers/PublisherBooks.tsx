import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";


interface BookData {
  id: number;
  bookCover: string;
  writerName: string;
  bookTitle: string;
  ratings: number;
}

interface AuthorBooksProps {
  writerName: string;
}

const PublisherBooks: React.FC<AuthorBooksProps> = ({ writerName }) => {
  const [books, setBooks] = useState<BookData[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookData[]>([]);

  useEffect(() => {
    fetch("/Books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    if (writerName) {
      setFilteredBooks(books.filter((book) => book.writerName === writerName));
    }
  }, [writerName, books]);

  return (

    <div className="py-10">
        <h1 className="text-2xl font-semibold text-green-500 text-center">Author's <span className="text-neutral">Books</span></h1>
        <div className="container mx-auto px-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p className="text-gray-600 col-span-full text-center">No books available for this author.</p>
      )}
    </div>
    </div>
  );
};

export default PublisherBooks;
