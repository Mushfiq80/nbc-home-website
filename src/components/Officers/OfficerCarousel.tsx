
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OfficersCard from './OfficersCard';

import { FC } from 'react';

interface Officer {
  id: number;
  image: string;
  name: string;
  position: string;
}

interface OfficerCarouselProps {
  officers: Officer[];
}

const OfficerCarousel: FC<OfficerCarouselProps> = ({ officers }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4">
      <Slider {...settings}>
        {officers.map((officer) => (
          <div key={officer.id} className="px-2">
            <OfficersCard officer={officer} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfficerCarousel;