import React, { useEffect, useState } from "react";

interface ProfileData {
  id: number;
  image: string;
  name: string;
  title: string;
  description: string;
  dob?: string;
  dateOfDeath?: string;
  birthPlace?: string;
  nationality?: string;
  profession?: string;
  linkedin: string;
  xLink: string;
  wikipedia: string;
}

const ProfileCard: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    fetch("Author.json")
      .then((response) => response.json())
      .then((data) => setProfiles(data));
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const profile = profiles.find((p) => p.id === Number(event.target.value)) || null;
    setSelectedProfile(profile);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-600 text-sm mb-2">Select a Writer</label>
        <select
          className="w-full border-gray-300 rounded-md p-2 bg-gray-100"
          onChange={handleSelectChange}
        >
          <option value="">-- Select --</option>
          {profiles.map((profile) => (
            <option key={profile.id} value={profile.id}>{profile.name}</option>
          ))}
        </select>
      </div>

      {selectedProfile && (
        <div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-40 h-40 border rounded-lg overflow-hidden">
              {selectedProfile.image ? (
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200"></div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{selectedProfile.name}</h2>
              <p className="text-gray-600">{selectedProfile.title}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <InputField label="Date of Birth" value={selectedProfile.dob || ""} />
            <InputField label="Date of Death" value={selectedProfile.dateOfDeath || ""} />
            <InputField label="Birth Place" value={selectedProfile.birthPlace || ""} />
            <InputField label="Nationality" value={selectedProfile.nationality || ""} />
            <InputField label="Profession" value={selectedProfile.profession || ""} />
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="p-4 bg-green-100 rounded-md">{selectedProfile.description}</p>
          </div>
          <div className="mt-4 flex gap-4">
            {selectedProfile.linkedin && <a href={selectedProfile.linkedin} target="_blank" className="text-blue-500">LinkedIn</a>}
            {selectedProfile.xLink && <a href={selectedProfile.xLink} target="_blank" className="text-blue-500">Twitter</a>}
            {selectedProfile.wikipedia && <a href={selectedProfile.wikipedia} target="_blank" className="text-blue-500">Wikipedia</a>}
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

export default ProfileCard;