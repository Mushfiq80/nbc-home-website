import { MarqueeDemo } from "../MarqueeDemo/MarqueeDemo";

const Publishers = () => {
    return (
        <div className=" text-center container mx-auto my-16 space-y-10">
            <h1 className="text-4xl font-semibold">Our publishers</h1>
            <p className="text-base text-gray-600">We have been working with some Fortune 2500+ Publisher</p>
            <div>
                <MarqueeDemo></MarqueeDemo>
            </div>
        </div>
    );
};

export default Publishers;