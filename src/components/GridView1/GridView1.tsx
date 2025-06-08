import { sampleBooks } from "@/lib/CatalogBooks";
import BookCarousel from "../BookCarousel/BookCarousel";

const GridView1 = () => {
  // Filter fiction books from the catalog
  const fictionBooks = sampleBooks.filter(book => book.subject === "Fiction");

  return (
    <div className="py-16 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Fiction</span> Books
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a world of imagination and storytelling with our collection of fiction books
          </p>
        </div>
        <BookCarousel books={fictionBooks} />
      </div>
    </div>
  );
};

export default GridView1;