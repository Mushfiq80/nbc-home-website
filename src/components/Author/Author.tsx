import { useEffect, useState } from "react";
import AuthorCarousal from "../AuthorCarousal/AuthorCarousal";

const Author = () => {
  interface Author {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
  }

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    fetch("Author.json")
      .then((response) => response.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-semibold">
        <span className="text-green-600 ">Authors</span> List
      </h1>
      <p>
        Explore a world of imagination and storytelling with our collection of
        non-fiction books
      </p>
      <AuthorCarousal author={authors} />
    </div>
  );
};

export default Author;