import { useEffect, useRef, useState } from "react";
import Rating from "./Rating";
// import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

interface Book {
    writerName: string;
    bookTitle: string;
    ratings: number;
    bookCover: string;
}

const BookCard = ({ book }: { book: Book }) => {
    const { writerName, bookTitle, ratings, bookCover } = book;
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    // Check if the title is overflowing
    useEffect(() => {
        if (titleRef.current) {
            setIsOverflowing(titleRef.current.scrollWidth > titleRef.current.clientWidth);
        }
    }, [bookTitle]);

    return (
        <div className="w-full h-[420px] mt-10 border border-gray-200 shadow-md bg-white rounded-lg p-4 flex flex-col justify-between overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-3">
                <img
                    src={bookCover}
                    alt={bookTitle}
                    className="w-40 h-60 object-cover rounded-md shadow-sm overflow-hidden"
                />
                <Rating key={ratings} />
                <div className="max-h-[60px] overflow-hidden text-center w-full">
                    {isOverflowing ? (
                        <Marquee gradient={false} speed={50} className="w-full">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {bookTitle}
                            </h2>
                        </Marquee>
                    ) : (
                        <h2
                            ref={titleRef}
                            className="text-lg font-semibold text-gray-800 truncate"
                        >
                            {bookTitle}
                        </h2>
                    )}
                    <p className="text-gray-500 text-sm truncate overflow-hidden text-ellipsis">
                        {writerName || "Author Unlisted"}
                    </p>
                </div>
            </div>
            <button className="btn btn-success w-full btn-sm mt-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                Add to My List
            </button>
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