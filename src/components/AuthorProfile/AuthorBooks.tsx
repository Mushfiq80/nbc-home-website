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

const AuthorBooks: React.FC<AuthorBooksProps> = ({ writerName }) => {
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
    <div className="container mx-auto px-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p className="text-gray-600 col-span-full text-center">No books available for this author.</p>
      )}
    </div>
  );
};

export default AuthorBooks;
