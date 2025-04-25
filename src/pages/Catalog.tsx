import { useState, useEffect } from 'react';
import { Search, Star, Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import { sampleBooks } from '@/lib/CatalogBooks';

// Subject options
const subjectOptions = [
  "All", 
  "Fiction", 
  "Non-Fiction", 
  "Poetry", 
  "Drama", 
  "Mystery", 
  "Science Fiction", 
  "Fantasy", 
  "Biography", 
  "History", 
  "Self-Help", 
  "Spiritual", 
  "Health", 
  "Business"
];

// Year range options
const yearOptions = [
  "All",
  "2023-2025",
  "2020-2022",
  "2015-2019",
  "2010-2014",
  "2000-2009",
  "Before 2000"
];

// Rating options
const ratingOptions = [
  "All",
  "5 stars",
  "4+ stars",
  "3+ stars",
  "2+ stars",
  "1+ star"
];

export default function BookCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subject, setSubject] = useState("All");
  const [year, setYear] = useState("All");
  const [rating, setRating] = useState("All");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const [orderBy, setOrderBy] = useState("Featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // For filtered books
  const [filteredBooks, setFilteredBooks] = useState(sampleBooks);
  
  // For dropdown suggestions
  const [authorSuggestions, setAuthorSuggestions] = useState<string[]>([]);
  const [publisherSuggestions, setPublisherSuggestions] = useState<string[]>([]);
  const [showAuthorSuggestions, setShowAuthorSuggestions] = useState(false);
  const [showPublisherSuggestions, setShowPublisherSuggestions] = useState(false);
  
  // To track if any filter is active
  const [hasActiveFilters, setHasActiveFilters] = useState(false);
  
  // Extract unique authors and publishers
  const uniqueAuthors = [...new Set(sampleBooks.map(book => book.author))];
  const uniquePublishers = [...new Set(sampleBooks.map(book => book.publisher))];

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Handle search and filtering
  const handleSearch = () => {
    applyFilters();
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm("");
    setSubject("All");
    setYear("All");
    setRating("All");
    setPublisher("");
    setAuthor("");
    setOrderBy("Featured");
    setFilteredBooks(sampleBooks);
    setHasActiveFilters(false);
  };

  // Check if any filters are active
  useEffect(() => {
    const isActive = 
      searchTerm !== "" || 
      subject !== "All" || 
      year !== "All" || 
      rating !== "All" || 
      publisher !== "" || 
      author !== "";
    
    setHasActiveFilters(isActive);
  }, [searchTerm, subject, year, rating, publisher, author]);

  // Filter books based on all criteria
  const applyFilters = () => {
    let results = [...sampleBooks];
    
    // Search term filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term) || 
        book.isbn.toLowerCase().includes(term) ||
        book.description.toLowerCase().includes(term)
      );
    }
    
    // Subject filter
    if (subject !== "All") {
      results = results.filter(book => book.subject === subject);
    }
    
    // Author filter
    if (author) {
      results = results.filter(book => 
        book.author.toLowerCase().includes(author.toLowerCase())
      );
    }
    
    // Publisher filter
    if (publisher) {
      results = results.filter(book => 
        book.publisher.toLowerCase().includes(publisher.toLowerCase())
      );
    }
    
    // Year filter
    if (year !== "All") {
      if (year === "2023-2025") {
        results = results.filter(book => book.year >= 2023 && book.year <= 2025);
      } else if (year === "2020-2022") {
        results = results.filter(book => book.year >= 2020 && book.year <= 2022);
      } else if (year === "2015-2019") {
        results = results.filter(book => book.year >= 2015 && book.year <= 2019);
      } else if (year === "2010-2014") {
        results = results.filter(book => book.year >= 2010 && book.year <= 2014);
      } else if (year === "2000-2009") {
        results = results.filter(book => book.year >= 2000 && book.year <= 2009);
      } else if (year === "Before 2000") {
        results = results.filter(book => book.year < 2000);
      }
    }
    
    // Rating filter
    if (rating !== "All") {
      if (rating === "5 stars") {
        results = results.filter(book => book.rating === 5);
      } else if (rating === "4+ stars") {
        results = results.filter(book => book.rating >= 4);
      } else if (rating === "3+ stars") {
        results = results.filter(book => book.rating >= 3);
      } else if (rating === "2+ stars") {
        results = results.filter(book => book.rating >= 2);
      } else if (rating === "1+ star") {
        results = results.filter(book => book.rating >= 1);
      }
    }
    
    // Sort results
    switch (orderBy) {
      case "Title A-Z":
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Title Z-A":
        results.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Newest":
        results.sort((a, b) => b.year - a.year);
        break;
      case "Oldest":
        results.sort((a, b) => a.year - b.year);
        break;
      case "Rating High-Low":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "Rating Low-High":
        results.sort((a, b) => a.rating - b.rating);
        break;
      default: // Featured
        // No sorting for featured (using default order)
        break;
    }
    
    setFilteredBooks(results);
  };
  
  // Generate author suggestions based on input
interface AuthorChangeProps {
    value: string;
}

const handleAuthorChange = (value: AuthorChangeProps['value']): void => {
    setAuthor(value);
    if (value.trim()) {
        const filteredAuthors: string[] = uniqueAuthors.filter((a: string) => 
            a.toLowerCase().includes(value.toLowerCase())
        );
        setAuthorSuggestions(filteredAuthors);
        setShowAuthorSuggestions(true);
    } else {
        setAuthorSuggestions([]);
        setShowAuthorSuggestions(false);
    }
};
  
  // Generate publisher suggestions based on input
interface PublisherChangeProps {
    value: string;
}

const handlePublisherChange = (value: PublisherChangeProps['value']): void => {
    setPublisher(value);
    if (value.trim()) {
        const filteredPublishers: string[] = uniquePublishers.filter((p: string) => 
            p.toLowerCase().includes(value.toLowerCase())
        );
        setPublisherSuggestions(filteredPublishers);
        setShowPublisherSuggestions(true);
    } else {
        setPublisherSuggestions([]);
        setShowPublisherSuggestions(false);
    }
};
  
  // Apply filters whenever any filter changes
  useEffect(() => {
    applyFilters();
  }, [subject, year, rating, orderBy]);

  // Function to render star ratings
interface RenderStarsProps {
    rating: number;
}

const renderStars = ({ rating }: RenderStarsProps): JSX.Element => {
    const stars: JSX.Element[] = [];
    const fullStars: number = Math.floor(rating);
    const hasHalfStar: boolean = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} size={14} fill="#FFD700" color="#FFD700" />);
    }
    
    if (hasHalfStar) {
        stars.push(
            <div key="half" className="relative w-3.5 h-3.5">
                <Star size={14} className="absolute text-gray-300" />
                <div className="absolute overflow-hidden w-1/2">
                    <Star size={14} fill="#FFD700" color="#FFD700" />
                </div>
            </div>
        );
    }
    
    const remainingStars: number = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<Star key={`empty-${i}`} size={14} className="text-gray-300" />);
    }
    
    return (
        <div className="flex items-center">
            {stars}
            <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
        </div>
    );
};

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Book Catalog</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search books by title, author, ISBN..."
              className="w-full p-3 pl-10 border rounded-l focus:outline-none focus:ring-1 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <div className="absolute left-3 top-3 text-gray-400">
              <Search size={20} />
            </div>
            {searchTerm && (
              <button 
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm("")}
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button 
            className="bg-green-500 text-white px-6 py-3 rounded-r hover:bg-green-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button 
          onClick={toggleMobileFilters}
          className="w-full flex justify-between items-center bg-gray-100 p-3 rounded"
        >
          <div className="flex items-center">
            <Filter size={18} className="mr-2" />
            <span>Filters</span>
          </div>
          {showMobileFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
      
      {/* Filters Section */}
      <div className={`md:block ${showMobileFilters ? 'block' : 'hidden'} mb-8`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Subject Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Subject:</label>
            <select 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              {subjectOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          {/* Author Filter with Suggestions */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Author:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Author name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                value={author}
                onChange={(e) => handleAuthorChange(e.target.value)}
                onFocus={() => author && setShowAuthorSuggestions(true)}
                onBlur={() => setTimeout(() => setShowAuthorSuggestions(false), 200)}
              />
              {author && (
                <button 
                  className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setAuthor("")}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {showAuthorSuggestions && authorSuggestions.length > 0 && (
              <div className="absolute z-10 bg-white w-full mt-1 border rounded shadow-lg max-h-40 overflow-y-auto">
                {authorSuggestions.map((suggestion, index) => (
                  <div 
                    key={index} 
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setAuthor(suggestion);
                      setShowAuthorSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Year Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Year:</label>
            <select 
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              {yearOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          {/* Publisher Filter with Suggestions */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Publisher:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Publisher name"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                value={publisher}
                onChange={(e) => handlePublisherChange(e.target.value)}
                onFocus={() => publisher && setShowPublisherSuggestions(true)}
                onBlur={() => setTimeout(() => setShowPublisherSuggestions(false), 200)}
              />
              {publisher && (
                <button 
                  className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setPublisher("")}
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {showPublisherSuggestions && publisherSuggestions.length > 0 && (
              <div className="absolute z-10 bg-white w-full mt-1 border rounded shadow-lg max-h-40 overflow-y-auto">
                {publisherSuggestions.map((suggestion, index) => (
                  <div 
                    key={index} 
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setPublisher(suggestion);
                      setShowPublisherSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Rating:</label>
            <select 
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              {ratingOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          
          {/* Order By Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Order By:</label>
            <select 
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-green-500"
            >
              <option value="Featured">Featured</option>
              <option value="Title A-Z">Title A-Z</option>
              <option value="Title Z-A">Title Z-A</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Rating High-Low">Rating High-Low</option>
              <option value="Rating Low-High">Rating Low-High</option>
            </select>
          </div>
        </div>
        
        {/* Buttons Row */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button 
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Apply Filters
          </button>
          
          {hasActiveFilters && (
            <button 
              onClick={clearAllFilters}
              className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-50 transition flex items-center"
            >
              <X size={16} className="mr-1" /> Clear Filters
            </button>
          )}
        </div>
      </div>
      
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            
            {subject !== "All" && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                Subject: {subject}
                <button 
                  className="ml-1 text-green-800 hover:text-green-900"
                  onClick={() => setSubject("All")}
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {year !== "All" && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                Year: {year}
                <button 
                  className="ml-1 text-green-800 hover:text-green-900"
                  onClick={() => setYear("All")}
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {rating !== "All" && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                Rating: {rating}
                <button 
                  className="ml-1 text-green-800 hover:text-green-900"
                  onClick={() => setRating("All")}
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {author && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                Author: {author}
                <button 
                  className="ml-1 text-green-800 hover:text-green-900"
                  onClick={() => setAuthor("")}
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {publisher && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                Publisher: {publisher}
                <button 
                  className="ml-1 text-green-800 hover:text-green-900"
                  onClick={() => setPublisher("")}
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {searchTerm && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                Search: "{searchTerm}"
                <button 
                  className="ml-1 text-green-800 hover:text-green-900"
                  onClick={() => setSearchTerm("")}
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            <button 
              onClick={clearAllFilters}
              className="text-green-600 text-xs hover:text-green-800 flex items-center ml-2"
            >
              Clear all
            </button>
          </div>
        </div>
      )}
      
      {/* Results heading */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-xl font-semibold">
          <span className="text-green-500">Books</span> (ordered by {orderBy.toLowerCase()})
        </h2>
        <span className="text-sm text-gray-500">{filteredBooks.length} results</span>
      </div>
      
      {/* Book List */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mb-8">
          {filteredBooks.map(book => (
            <div key={book.id} className="flex border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              {/* Book Cover */}
              <div className="w-1/3 md:w-1/4 bg-gray-100 flex items-center justify-center">
                <img
                  src={book.coverImage}
                  alt={`Cover of ${book.title}`}
                  className="object-cover h-full w-full"
                />
              </div>
              
              {/* Book Details */}
              <div className="w-2/3 md:w-3/4 p-4">
                <h3 className="font-bold text-lg mb-1 text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                
                <div className="flex flex-wrap gap-y-2">
                  <div className="w-full sm:w-1/2">
                    <div className="mb-1 flex items-center">
                      {renderStars({ rating: book.rating })}
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 text-sm text-gray-600">
                    {book.year} • {book.pages} pages
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mt-2 line-clamp-2">{book.description}</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {book.subject}
                  </span>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    ISBN: {book.isbn}
                  </span>
                </div>
                
                <div className="mt-3 flex space-x-2">
                  <button className="bg-green-500 text-white text-sm px-4 py-1 rounded hover:bg-green-600 transition">
                    View Details
                  </button>
                  <button className="border border-green-500 text-green-500 text-sm px-4 py-1 rounded hover:bg-green-50 transition">
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <div className="text-lg text-gray-600 mb-2">No books match your search criteria</div>
          <p className="text-gray-500">Try adjusting your filters or search term</p>
          <button 
            onClick={clearAllFilters}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
          >
            Clear All Filters
          </button>
        </div>
      )}
      
      {/* Pagination - only show if we have results */}
      {filteredBooks.length > 0 && (
        <div className="flex justify-center space-x-1">
          <button className="px-4 py-2 bg-green-500 text-white rounded">1</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">2</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">3</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">4</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">5</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">...</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Next »</button>
        </div>
      )}
    </div>
  );
}