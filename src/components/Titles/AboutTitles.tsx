import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TitlesProps {
  titles: {
    title1: string;
    title2: string[]; // title2 will now be an array of strings
  };
}

const AboutTitles: React.FC<TitlesProps> = ({ titles }) => {
  const { title1, title2 } = titles;

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % title2.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [title2.length]);

  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{title1}</h1>

      {/* Animated Dynamic Text */}
      <div className="relative h-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={title2[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full text-3xl text-green-500 font-medium"
          >
            {title2[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutTitles;
