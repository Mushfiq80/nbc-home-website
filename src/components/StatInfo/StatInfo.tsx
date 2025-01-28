import Stats from "../Stats/Stats";

const StatInfo = () => {
    return (
        <div className="mt-10 flex flex-col items-center md:flex-row gap-14 justify-evenly md:py-8 lg:py-16 md:px-16 lg:px-32 bg-blue-100">
            <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Helping Publisher and <br />Readers</h1>
                <h1 className="text-green-600 text-xl md:text-2xl lg:text-4xl font-semibold">Connect Nationwide</h1>
                <p className="text-sm md:text-base lg:text-lg lg:w-2/3 text-gray-600">Book Publishers can now connect with readers <br className="md:hidden"/> nationwide and get their books published.</p>
            </div>
            <div>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default StatInfo;