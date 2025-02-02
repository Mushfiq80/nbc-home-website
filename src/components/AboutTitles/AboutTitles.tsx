interface TitlesProps {
    titles: {
        title1: string;
        title2: string;
    };
}

const AboutTitles: React.FC<TitlesProps> = ({ titles }) => {
    const { title1, title2 } = titles; // ✅ Fixed prop destructuring
    return (
        <div className="text-center font-semibold">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">{title1}</h1>
            <h1 className="border-b-8 inline-block text-green-500 text-2xl md:text-3xl lg:text-4xl pb-4">{title2}</h1>
        </div>
    );
};

export default AboutTitles;
