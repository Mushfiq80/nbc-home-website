import { useEffect, useState } from "react";
import { Book, AlertCircle, ChevronDown } from "lucide-react";

interface BookData {
  id: number;
  bookCover: string;
  writerName: string;
  bookTitle: string;
  ratings: number;
}

interface AuthorBooksProps {
  writerName: string;
  searchTerm?: string;
}

const AuthorBooks: React.FC<AuthorBooksProps> = ({ writerName, searchTerm = "" }) => {
  const [books, setBooks] = useState<BookData[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookData[]>([]);
  const [displayCount, setDisplayCount] = useState(6);
  const [loading, setLoading] = useState(true);

  // Fetch all books
  useEffect(() => {
    setLoading(true);
    fetch("/Books.json")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  // Filter books based on writer and search term
  useEffect(() => {
    if (writerName) {
      const writerBooks = books.filter((book) => book.writerName === writerName);
      
      if (searchTerm) {
        const searchResults = writerBooks.filter((book) =>
          book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(searchResults);
      } else {
        setFilteredBooks(writerBooks);
      }
      
      // Reset display count when changing authors or search
      setDisplayCount(6);
    }
  }, [writerName, books, searchTerm]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  // Render star ratings
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`star-${i}`} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half-star" className="text-yellow-400">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return (
      <div className="flex text-lg" aria-label={`${rating} out of 5 stars`}>
        {stars}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Book Grid */}
      {filteredBooks.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.slice(0, displayCount).map((book) => (
              <div 
                key={book.id} 
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
              >
                {/* Book Cover Image */}
                <div className="relative h-64 overflow-hidden bg-green-50">
                  {book.bookCover ? (
                    <img 
                      src={book.bookCover} 
                      alt={book.bookTitle} 
                      className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Book size={64} className="text-green-200" />
                    </div>
                  )}
                </div>
                
                {/* Book Details */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {book.bookTitle}
                  </h3>
                  
                  <div className="mt-auto pt-3">
                    {/* Ratings */}
                    <div className="flex items-center">
                      {renderRatingStars(book.ratings)}
                      <span className="ml-2 text-sm text-gray-600">({book.ratings})</span>
                    </div>
                    
                    {/* Action Button */}
                    <button className="btn btn-sm btn-success w-full mt-4 text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {filteredBooks.length > displayCount && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="btn btn-outline btn-success px-8 flex items-center gap-2"
              >
                Load More Books
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-info flex items-center justify-center p-8 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg">
          <AlertCircle className="mr-2" size={24} />
          <div>
            {searchTerm 
              ? "No books match your search criteria." 
              : "No books available for this author."}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorBooks;