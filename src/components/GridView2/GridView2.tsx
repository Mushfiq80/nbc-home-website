import { useEffect, useState } from "react";
import BookCarousel from "../BookCarousel/BookCarousel";

const GridView2 = () => {
  interface Book {
    id: number;
    writerName: string;
    bookTitle: string;
    ratings: number;
    bookCover: string;
  }

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("Books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-semibold">
        <span className="text-green-600 ">Non-Fiction</span> Books
      </h1>
      <p>
        Explore a world of imagination and storytelling with our collection of
        non-fiction books
      </p>
      <BookCarousel books={books} />
    </div>
  );
};

export default GridView2;