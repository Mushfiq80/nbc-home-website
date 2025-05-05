import React from "react";
import { ChevronDown, BookOpen, MapPin, Calendar, Flag, Briefcase, ExternalLink, Linkedin, Twitter } from "lucide-react";

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
  linkedin?: string;
  xLink?: string;
  wikipedia?: string;
}

interface ProfileCardProps {
  authors: ProfileData[];
  onSelectWriter: (writer: ProfileData) => void;
  selectedWriter: ProfileData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ authors, onSelectWriter, selectedWriter }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const profile = authors.find((p) => p.id === Number(event.target.value)) || authors[0];
    onSelectWriter(profile);
  };

  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="flex items-center">
          <BookOpen className="mr-2" size={20} />
          <h2 className="text-xl font-bold">Author Profile</h2>
        </div>
      </div>

      {/* Author Selection */}
      <div className="p-6 bg-gray-50">
        <label className="block text-gray-700 font-medium mb-2">Select an Author</label>
        <div className="relative">
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
            onChange={handleSelectChange}
            value={selectedWriter.id}
          >
            {authors.map((profile) => (
              <option key={profile.id} value={profile.id}>
                {profile.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Author Profile */}
      {selectedWriter && (
        <div className="bg-white">
          <div className="flex flex-col md:flex-row p-6">
            {/* Author Image */}
            <div className="w-48 h-48 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg border-4 border-white ring-2 ring-green-100 flex-shrink-0 mb-6 md:mb-0">
              {selectedWriter.image ? (
                <img 
                  src={selectedWriter.image} 
                  alt={selectedWriter.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full bg-green-50 flex items-center justify-center">
                  <span className="text-green-600 font-medium">No Image</span>
                </div>
              )}
            </div>

            {/* Author Details */}
            <div className="flex-1 md:ml-8">
              <h2 className="text-3xl font-bold text-green-600 text-center md:text-left mb-1">{selectedWriter.name}</h2>
              <p className="text-gray-600 italic mb-6 text-center md:text-left">{selectedWriter.title}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedWriter.dob && (
                  <InfoBlock icon={<Calendar size={18} />} label="Born" value={selectedWriter.dob} />
                )}
                {selectedWriter.dateOfDeath && (
                  <InfoBlock icon={<Calendar size={18} />} label="Died" value={selectedWriter.dateOfDeath} />
                )}
                {selectedWriter.birthPlace && (
                  <InfoBlock icon={<MapPin size={18} />} label="Birth Place" value={selectedWriter.birthPlace} />
                )}
                {selectedWriter.nationality && (
                  <InfoBlock icon={<Flag size={18} />} label="Nationality" value={selectedWriter.nationality} />
                )}
                {selectedWriter.profession && (
                  <InfoBlock icon={<Briefcase size={18} />} label="Profession" value={selectedWriter.profession} />
                )}
              </div>
            </div>
          </div>

          {/* Biography Toggle */}
          <div className="border-t border-gray-100 px-6 py-4">
            <button 
              onClick={toggleExpand} 
              className="btn btn-sm btn-outline btn-success w-full flex items-center justify-center gap-2"
            >
              {isExpanded ? "Show Less" : "Read Biography"}
              <ChevronDown className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} size={16} />
            </button>
          </div>

          {/* Biography Content */}
          {isExpanded && (
            <div className="px-6 pb-6 animate-fadeIn">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold text-green-700 mb-4">About {selectedWriter.name}</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="whitespace-pre-line">{selectedWriter.description}</p>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {selectedWriter.linkedin && (
                    <SocialLink 
                      href={selectedWriter.linkedin} 
                      label="LinkedIn" 
                      icon={<Linkedin size={16} />}
                      color="bg-blue-100 text-blue-700 hover:bg-blue-200"
                    />
                  )}
                  {selectedWriter.xLink && (
                    <SocialLink 
                      href={selectedWriter.xLink} 
                      label="Twitter" 
                      icon={<Twitter size={16} />}
                      color="bg-gray-800 text-white hover:bg-gray-700"
                    />
                  )}
                  {selectedWriter.wikipedia && (
                    <SocialLink 
                      href={selectedWriter.wikipedia} 
                      label="Wikipedia" 
                      icon={<ExternalLink size={16} />}
                      color="bg-gray-100 text-gray-700 hover:bg-gray-200"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// InfoBlock with icon
const InfoBlock = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-colors duration-300">
    <div className="flex items-center mb-1">
      <span className="text-green-600 mr-2">{icon}</span>
      <p className="text-sm font-medium text-gray-500">{label}</p>
    </div>
    <p className="text-gray-800 font-medium pl-7">{value}</p>
  </div>
);

// Social Link component
const SocialLink = ({ href, label, icon, color }: { href: string; label: string; icon: React.ReactNode; color: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center px-3 py-2 ${color} rounded-lg text-sm transition-all duration-300 shadow-sm hover:shadow`}
  >
    <span className="mr-2">{icon}</span>
    {label}
  </a>
);

export default ProfileCard;