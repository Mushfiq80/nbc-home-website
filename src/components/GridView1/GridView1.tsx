import BookCard from "../BookCard/BookCard";

const GridView1 = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl"><span className="text-green-600">Fiction</span> Books</h1>
            <p>Explore a wolrd of imagination and storytelling with our collection of fiction books</p>
            <BookCard></BookCard>
        </div>
    );
};

export default GridView1;