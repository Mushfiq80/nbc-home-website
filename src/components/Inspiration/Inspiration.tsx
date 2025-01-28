import InspirationHead from "./InspirationHead";
import InspireCard from "./InspireCard";


const Inspiration = () => {
    return (
        <div className="mt-20 space-y-5">
            <div>
                <InspirationHead></InspirationHead>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16 justify-items-center md:px-16 lg:px-32">
                <InspireCard></InspireCard>
                <InspireCard></InspireCard>
                <InspireCard></InspireCard>
            </div>
        </div>
    );
};

export default Inspiration;