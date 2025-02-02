import React from "react";

interface SectionProps {
  title?: string; // Optional title like "Our Commitment"
  data: { title: string; description: string }[];
  highlightTitle?: string; // If a part of the title needs special styling
}

const SectionList: React.FC<SectionProps> = ({ title, highlightTitle, data }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Optional Section Title */}
      {title && (
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          {title} {highlightTitle && <span className="text-green-600">{highlightTitle}</span>}
        </h2>
      )}
      
      {/* Content Grid */}
      <div className="mt-4 border-t">
        {data.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b last:border-b-0">
            <div className="font-bold text-gray-800">{item.title}</div>
            <div className="md:col-span-2 text-gray-600">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionList;
