import AllBooks from "@/components/AllBooks/AllBooks";
import SearchFields from "@/components/SearchFields/SearchFields";
import { Book } from "@/lib/CatalogBooks";
import { useState } from "react";

const Books = () => {
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleSearchResults = (books: Book[]) => {
        setFilteredBooks(books);
        setIsSearchActive(true);
    };

    const handleClearSearch = () => {
        setFilteredBooks([]);
        setIsSearchActive(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Book <span className="text-primary">Catalog</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our vast collection of books across various genres and authors
                    </p>
                </div>
                
                <SearchFields 
                    onSearchResults={handleSearchResults}
                    onClearSearch={handleClearSearch}
                />
                
                <AllBooks 
                    filteredBooks={filteredBooks}
                    isSearchActive={isSearchActive}
                />
            </div>
        </div>
    );
};

export default Books;