import image1 from "../../../public/Assets/cardimage.png"

const InspireCard = () => {
    return (
        <div>
            <div className="w-[368px] h-[286px] bg-blue-100 relative">
                <img className="w-full rounded-2xl" src={image1} alt="" />

                <button className="bg-slate-200 p-4 absolute left-12 -bottom-8 rounded-2xl">Streamlining Book<br />Submission for Publishers<br /><span className="text-green-500">Readmore</span></button>
            </div>
        </div>
    );
};

export default InspireCard;