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
}

const PublisherCard: React.FC<PublisherCardProps> = ({ onSelectPublisher }) => {
    const [publishers, setPublishers] = useState<PublisherData[]>([]);
    const [selectedPublisher, setSelectedPublisher] = useState<PublisherData | null>(null);
    const [divisions, setDivisions] = useState<string[]>([]);
    const [districts, setDistricts] = useState<string[]>([]);
    const [selectedDivision, setSelectedDivision] = useState<string>("");
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");

    useEffect(() => {
        fetch("/Publishers.json")
            .then((response) => response.json())
            .then((data: PublisherData[]) => {
                setPublishers(data);
                const uniqueDivisions = Array.from(new Set(data.map((p: PublisherData) => p.division)));
                setDivisions(uniqueDivisions);
            });
    }, []);

    useEffect(() => {
        if (selectedDivision) {
            const uniqueDistricts = Array.from(new Set(publishers
                .filter(p => p.division === selectedDivision)
                .map(p => p.district)));
            setDistricts(uniqueDistricts);
        }
    }, [selectedDivision, publishers]);

    const handleDivisionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDivision(event.target.value);
        setSelectedDistrict("");
        setSelectedPublisher(null);
    };

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDistrict(event.target.value);
        setSelectedPublisher(null);
    };

    const handlePublisherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const publisher = publishers.find((p) => p.id === Number(event.target.value)) || null;
        setSelectedPublisher(publisher);
        onSelectPublisher(publisher?.name || "");
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2">Select Division</label>
                <select
                    className="w-full border-gray-300 rounded-md p-2 bg-gray-100"
                    onChange={handleDivisionChange}
                    value={selectedDivision}
                >
                    <option value="">-- Select Division --</option>
                    {divisions.map((division, index) => (
                        <option key={index} value={division}>{division}</option>
                    ))}
                </select>
            </div>

            {selectedDivision && (
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm mb-2">Select District</label>
                    <select
                        className="w-full border-gray-300 rounded-md p-2 bg-gray-100"
                        onChange={handleDistrictChange}
                        value={selectedDistrict}
                    >
                        <option value="">-- Select District --</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                </div>
            )}

            {selectedDistrict && (
                <div className="mb-4">
                    <label className="block text-gray-600 text-sm mb-2">Select Publisher</label>
                    <select
                        className="w-full border-gray-300 rounded-md p-2 bg-gray-100"
                        onChange={handlePublisherChange}
                    >
                        <option value="">-- Select Publisher --</option>
                        {publishers
                            .filter(p => p.division === selectedDivision && p.district === selectedDistrict)
                            .map((publisher) => (
                                <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
                            ))}
                    </select>
                </div>
            )}

            {selectedPublisher && (
                <div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-40 h-40 border rounded-lg overflow-hidden">
                            {selectedPublisher.logo ? (
                                <img
                                    src={selectedPublisher ?  selectedPublisher.logo : "https://i.ibb.co.com/Wvc3tCYv/image-5.png"}
                                    alt={selectedPublisher.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200"></div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold">{selectedPublisher.name}</h2>
                            <p className="text-gray-600">{selectedPublisher.tagLine}</p>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <InputField label="Email" value={selectedPublisher.email} />
                        <InputField label="Thana" value={selectedPublisher.thana} />
                    </div>
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold">Short Description</h3>
                        <p className="p-4 bg-green-100 rounded-md">{selectedPublisher.shortDescription}</p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Long Description</h3>
                        <p className="p-4 bg-green-100 rounded-md">{selectedPublisher.longDescription}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const InputField: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <label className="block text-gray-600 text-sm mb-1">{label}</label>
        <input
            type="text"
            value={value}
            readOnly
            className="w-full border-gray-300 rounded-md p-2 bg-gray-100"
        />
    </div>
);

export default PublisherCard;