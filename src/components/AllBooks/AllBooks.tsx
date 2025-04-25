import { booksTitle } from "@/lib/Title";
import BookCard from "../BookCard/BookCard";
import { useEffect, useState } from "react";

const AllBooks = () => {
    const title = booksTitle;
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch("Books.json")
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    return (
        <div className="py-10">
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl py-6">
                {title.title1} <span className="text-green-500">{title.title2}</span>
            </h1>
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    books.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))
                }    
            </div> 
        </div>
    );
};

export default AllBooks;