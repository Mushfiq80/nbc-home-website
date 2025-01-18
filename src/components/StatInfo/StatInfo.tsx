import Stats from "../Stats/Stats";

const StatInfo = () => {
    return (
        <div className="mt-10 flex flex-col md:flex-row gap-14 justify-center md:py-8 lg:py-16 md:px-16 lg:px-32 bg-blue-100">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl">Helping Publisher and <br />Readers</h1>
                <h1 className="text-green-600 text-xl md:text-2xl lg:text-4xl">Connect Nationwide</h1>
                <p className="text-sm md:text-base lg:text-lg lg:w-2/3 text-gray-600">Book Publishers can now connect with readers nationwide and get their books published.</p>
            </div>
            <div>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default StatInfo;