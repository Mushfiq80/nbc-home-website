import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

interface BookData {
  id: number;
  bookCover: string;
  writerName: string;
  bookTitle: string;
  publisherName: string; // Added publisherName field
  ratings: number;
}

interface PublisherBooksProps {
  publisherName: string;
  searchTerm: string;
}

const PublisherBooks: React.FC<PublisherBooksProps> = ({ publisherName, searchTerm }) => {
  const [books, setBooks] = useState<BookData[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookData[]>([]);
  const [displayCount, setDisplayCount] = useState(9);

  // Fetch all books
  useEffect(() => {
    fetch("/Books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  // Filter books based on publisher and search term
  useEffect(() => {
    if (publisherName) {
      const publisherBooks = books.filter(
        (book) => book.publisherName === publisherName
      );
      
      if (searchTerm) {
        const searchResults = publisherBooks.filter((book) =>
          book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.writerName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(searchResults);
      } else {
        setFilteredBooks(publisherBooks);
      }
    }
  }, [publisherName, books, searchTerm]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 9);
  };

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks
            .slice(0, displayCount)
            .map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="text-gray-600 col-span-full text-center py-12 bg-gray-100 rounded-lg">
            {searchTerm 
              ? "No books match your search criteria." 
              : "No books available for this publisher."}
          </p>
        )}
      </div>
      
      {filteredBooks.length > displayCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PublisherBooks;