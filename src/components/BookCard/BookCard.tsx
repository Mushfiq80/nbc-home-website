import Rating from "./Rating";
// import PropTypes from "prop-types";

interface Book {
    writerName: string;
    bookTitle: string;
    ratings: number;
    bookCover: string;
}

const BookCard = ({ book }: { book: Book }) => {
    const { writerName, bookTitle, ratings, bookCover } = book;
    return (
        <div className="w-full h-[400px] mt-10 border border-gray-100 shadow-lg bg-slate-100 p-2 flex flex-col justify-between">
            <div className="flex flex-col items-center space-y-2">
                <img src={bookCover} alt="book1" className="w-40 h-60 object-cover" />
                <Rating key={ratings}></Rating>
                <h2 className="text-center">{bookTitle}</h2>
                <p className="text-gray-600">{writerName? writerName:"Author Unlisted"}</p>
            </div>
            <button className="btn btn-success w-10/12 btn-sm mt-2 self-center">Add to My List</button>
        </div>
    );
};

// BookCard.propTypes = {
//     book: PropTypes.object.isRequired,
//     writerName: PropTypes.string.isRequired,
//     bookTitle: PropTypes.string.isRequired,
//     ratings: PropTypes.number.isRequired,
//     bookCover: PropTypes.string.isRequired
// };

export default BookCard;