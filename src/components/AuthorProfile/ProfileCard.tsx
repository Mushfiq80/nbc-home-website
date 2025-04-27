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

interface ProfileCardProps {
  onSelectWriter: (writer: string) => void;
  defaultSelected?: string | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ onSelectWriter, defaultSelected }) => {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetch("/Author.json")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
        
        // Handle default selection if provided
        if (defaultSelected && data.length > 0) {
          const defaultProfile = data.find(p => p.name === defaultSelected);
          if (defaultProfile) {
            setSelectedProfile(defaultProfile);
          }
        }
      });
  }, [defaultSelected]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const profile = profiles.find((p) => p.id === Number(event.target.value)) || null;
    setSelectedProfile(profile);
    onSelectWriter(profile?.name || "");
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold text-green-600">Author Profile</h2>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Select an Author</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleSelectChange}
            value={selectedProfile?.id || ""}
          >
            <option value="">-- Select Author --</option>
            {profiles.map((profile) => (
              <option key={profile.id} value={profile.id}>{profile.name}</option>
            ))}
          </select>
        </div>
      </div>

      {selectedProfile && (
        <div className="border-t border-gray-200">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-40 h-40 border rounded-lg overflow-hidden shadow-md flex-shrink-0">
                {selectedProfile.image ? (
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">No Image</span>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-green-600">{selectedProfile.name}</h2>
                <p className="text-gray-600 italic mt-1">{selectedProfile.title}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {selectedProfile.dob && (
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                      <p className="text-gray-800">{selectedProfile.dob}</p>
                    </div>
                  )}
                  {selectedProfile.dateOfDeath && (
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium text-gray-500">Date of Death</p>
                      <p className="text-gray-800">{selectedProfile.dateOfDeath}</p>
                    </div>
                  )}
                  {selectedProfile.birthPlace && (
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium text-gray-500">Birth Place</p>
                      <p className="text-gray-800">{selectedProfile.birthPlace}</p>
                    </div>
                  )}
                  {selectedProfile.nationality && (
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium text-gray-500">Nationality</p>
                      <p className="text-gray-800">{selectedProfile.nationality}</p>
                    </div>
                  )}
                  {selectedProfile.profession && (
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium text-gray-500">Profession</p>
                      <p className="text-gray-800">{selectedProfile.profession}</p>
                    </div>
                  )}
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
                  <h3 className="text-lg font-semibold mb-2">About {selectedProfile.name}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{selectedProfile.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-3">
                    {selectedProfile.linkedin && (
                      <a 
                        href={selectedProfile.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                    {selectedProfile.xLink && (
                      <a 
                        href={selectedProfile.xLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-700 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        Twitter
                      </a>
                    )}
                    {selectedProfile.wikipedia && (
                      <a 
                        href={selectedProfile.wikipedia} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .084-.039.142-.103.142-.125.005-.539.03-.763.146-.224.115-.284.286-.224.603.144.752.471 1.284 1.306 3.114h3.781L10.6 6.262c.533-1.021.426-1.289.2-1.456-.226-.167-.539-.198-.763-.198h-.3c-.09 0-.12-.044-.12-.129v-.407c0-.084.045-.129.09-.129h4.328c.09 0 .134.045.134.13v.407c0 .084-.045.129-.134.129h-.36c-.72 0-1.006.179-1.486.645-.313.274-1.037 1.51-1.709 2.583zM15.787 5.534c4.536.543 7.825 4.398 7.825 9.014 0 4.997-4.044 9.034-9.068 9.034-5.025 0-9.069-4.037-9.069-9.034 0-3.022 1.51-5.83 3.969-7.483l.385.659c-2.163 1.453-3.571 3.93-3.571 6.641 0 4.402 3.606 7.98 8.05 7.98s8.051-3.578 8.051-7.98c0-4.145-3.234-7.577-7.393-7.937l.302-.669z"/>
                        </svg>
                        Wikipedia
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;