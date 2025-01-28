import Slider from "react-slick";
import AuthorCard from "../AuthorCard/AuthorCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface Author {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

function AuthorCarousal({ author }: { author: Author[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="dots-container flex justify-start mt-4">{dots}</div>
    ),
    prevArrow: (
      <div className="arrow-prev text-gray-800 cursor-pointer p-2">
        <IoIosArrowDropleft size={24} />
      </div>
    ),
    nextArrow: (
      <div className="arrow-next text-gray-800 cursor-pointer p-2">
        <IoIosArrowDropright size={24} />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {author.map((auth) => (
          <AuthorCard key={auth.id} author={auth} />
        ))}
      </Slider>

      <div className="dots-wrapper w-1/2">
          {/* Dots rendered automatically */}
        </div>
    </div>
  );
}

export default AuthorCarousal;
