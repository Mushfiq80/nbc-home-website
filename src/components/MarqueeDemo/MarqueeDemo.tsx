import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import logo1 from "../../../public/Assets/Logo1.png";
import logo2 from "../../../public/Assets/Logo2.png";
import logo3 from "../../../public/Assets/Logo3.png";
import logo4 from "../../../public/Assets/Logo4.png";
import logo5 from "../../../public/Assets/Logo5.png";
import logo6 from "../../../public/Assets/Logo6.png";
import logo7 from "../../../public/Assets/Logo7.png";

const reviews = [
  {
    img: logo1,
  },
  {
    img: logo2,
  },
  {
    img: logo3,
  },
  {
    img: logo4,
  },
  {
    img: logo5,
  },
  {
    img: logo6,
  },
  {
    img: logo7,
  }
];

const firstRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({img}: {img: string;}) => {
  return (
    <figure className={cn("relative w-16 md:w-48 overflow-hidden")}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="48" height="48" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative h-[100px] flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:6s] lg:[--duration:20s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
