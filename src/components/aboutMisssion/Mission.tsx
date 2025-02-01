import { mission } from "@/lib/Title";

const InfoSection = () => {
  
    const data = mission;

  return (
    <div className="max-w-3xl mx-auto p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 border-b last:border-b-0"
        >
          <div className="font-bold text-gray-800">{item.title}</div>
          <div className="md:col-span-2 text-gray-600">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;
