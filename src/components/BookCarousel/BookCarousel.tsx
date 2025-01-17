import BookCard from "../BookCard/BookCard";
import Slider from "react-slick";
import { FaCircleArrowRight, FaCircleArrowLeft  } from "react-icons/fa6"; // Importing the arrows from react-icons

interface Book {
  id: number;
  writerName: string;
  bookTitle: string;
  ratings: number;
  bookCover: string;
}

const BookCarousel = ({ books }: { books: Book[] }) => {
  // Slick slider settings
  const settings = {
    // dots: true, // Show dots for navigation
    infinite: true, // Loop through the slides
    speed: 500, // Transition speed
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 2, // Number of slides to scroll at a time
    nextArrow: <SampleNextArrow />, // Custom Next Arrow
    prevArrow: <SamplePrevArrow />, // Custom Prev Arrow
    customPaging: function () {
      return (
        <div className="w-3 h-3 mx-1 rounded-full bg-gray-800 cursor-pointer" />
      );
    },
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For screens <= 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
import { CustomArrowProps } from "react-slick";

const SampleNextArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-gray-800 bg-white rounded-full`}
      style={{
        display: "block",
        right: "10px",
        width: "40px",
        height: "40px",
        zIndex: 1,
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaCircleArrowRight size={30} color="#4A4A4A" />
    </div>
  );
};

// Custom Previous Arrow Component
const SamplePrevArrow = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-gray-800 bg-white rounded-full`}
      style={{
        display: "block",
        left: "10px",
        width: "40px",
        height: "40px",
        zIndex: 1,
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <FaCircleArrowLeft size={30} color="#4A4A4A" />
    </div>
  );
};

export default BookCarousel;
