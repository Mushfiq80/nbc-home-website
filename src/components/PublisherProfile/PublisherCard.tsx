import React, { useEffect, useState } from "react";

interface PublisherData {
  id: number;
  name: string;
  tagLine: string;
  email: string;
  division: string;
  district: string;
  thana: string;
  shortDescription: string;
  longDescription: string;
  logo: string;
}

interface PublisherCardProps {
  onSelectPublisher: (publisher: string) => void;
  defaultSelected?: string | null;
}

const PublisherCard: React.FC<PublisherCardProps> = ({ onSelectPublisher, defaultSelected }) => {
  const [publishers, setPublishers] = useState<PublisherData[]>([]);
  const [selectedPublisher, setSelectedPublisher] = useState<PublisherData | null>(null);
  const [divisions, setDivisions] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [selectedDivision, setSelectedDivision] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Load publishers data
  useEffect(() => {
    fetch("/Publishers.json")
      .then((response) => response.json())
      .then((data: PublisherData[]) => {
        setPublishers(data);
        const uniqueDivisions = Array.from(new Set(data.map((p: PublisherData) => p.division)));
        setDivisions(uniqueDivisions);

        // Handle default selection if provided
        if (defaultSelected && data.length > 0) {
          const defaultPublisher = data.find(p => p.name === defaultSelected);
          if (defaultPublisher) {
            setSelectedDivision(defaultPublisher.division);
            setSelectedDistrict(defaultPublisher.district);
            setSelectedPublisher(defaultPublisher);
          }
        }
      });
  }, [defaultSelected]);

  // Update districts when division changes
  useEffect(() => {
    if (selectedDivision) {
      const uniqueDistricts = Array.from(
        new Set(
          publishers
            .filter((p) => p.division === selectedDivision)
            .map((p) => p.district)
        )
      );
      setDistricts(uniqueDistricts);
    }
  }, [selectedDivision, publishers]);

  const handleDivisionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDivision(event.target.value);
    setSelectedDistrict("");
    setSelectedPublisher(null);
    onSelectPublisher("");
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(event.target.value);
    setSelectedPublisher(null);
    onSelectPublisher("");
  };

  const handlePublisherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const publisher = publishers.find((p) => p.id === Number(event.target.value)) || null;
    setSelectedPublisher(publisher);
    if (publisher) {
      onSelectPublisher(publisher.name);
    } else {
      onSelectPublisher("");
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold text-green-600">Find Publisher</h2>
      </div>
      
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Division
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleDivisionChange}
              value={selectedDivision}
            >
              <option value="">-- Select Division --</option>
              {divisions.map((division, index) => (
                <option key={index} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              District
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleDistrictChange}
              value={selectedDistrict}
              disabled={!selectedDivision}
            >
              <option value="">-- Select District --</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Publisher
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handlePublisherChange}
              value={selectedPublisher?.id || ""}
              disabled={!selectedDistrict}
            >
              <option value="">-- Select Publisher --</option>
              {publishers
                .filter(
                  (p) =>
                    p.division === selectedDivision && p.district === selectedDistrict
                )
                .map((publisher) => (
                  <option key={publisher.id} value={publisher.id}>
                    {publisher.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {selectedPublisher && (
        <div className="border-t border-gray-200">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-40 h-40 border rounded-lg overflow-hidden shadow-md flex-shrink-0">
                {selectedPublisher.logo ? (
                  <img
                    src={selectedPublisher.logo}
                    alt={selectedPublisher.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">No Logo</span>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-green-600">{selectedPublisher.name}</h2>
                <p className="text-gray-600 italic mt-1">{selectedPublisher.tagLine}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-gray-800">{selectedPublisher.email}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-gray-800">{selectedPublisher.thana}, {selectedPublisher.district}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-700">{selectedPublisher.shortDescription}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                onClick={toggleExpand}
                className="flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                {isExpanded ? "Show Less" : "Read More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-1 transform ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {isExpanded && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">About {selectedPublisher.name}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{selectedPublisher.longDescription}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublisherCard;