import { booksTitle } from "@/lib/Title";
import { sampleBooks, Book } from "@/lib/CatalogBooks";
import BookCard from "../BookCard/BookCard";

interface AllBooksProps {
    filteredBooks: Book[];
    isSearchActive: boolean;
}

const AllBooks = ({ filteredBooks, isSearchActive }: AllBooksProps) => {
    const title = booksTitle;
    const booksToShow = isSearchActive ? filteredBooks : sampleBooks;

    return (
        <div className="py-10">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                    {isSearchActive ? "Search Results" : title.title1}{" "}
                    <span className="text-primary">
                        {isSearchActive ? `(${filteredBooks.length} found)` : title.title2}
                    </span>
                </h2>
                {isSearchActive && filteredBooks.length === 0 && (
                    <p className="text-muted-foreground mt-4 text-lg">
                        No books found matching your criteria. Try adjusting your search filters.
                    </p>
                )}
            </div>
            
            {booksToShow.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {booksToShow.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllBooks;