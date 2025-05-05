import { useState } from "react";
import ProfileCard from "@/components/AuthorProfile/ProfileCard";
import AuthorBooks from "@/components/AuthorProfile/AuthorBooks";
import { sampleAuthors } from "@/lib/Author";
import { Search, BookOpen } from "lucide-react";

const Authors = () => {
  // Get a random author for initial load
  const getRandomAuthor = () => {
    const randomIndex = Math.floor(Math.random() * sampleAuthors.length);
    return sampleAuthors[randomIndex];
  };

  const [selectedWriter, setSelectedWriter] = useState(getRandomAuthor());
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-600 to-green-700 text-white py-12 mb-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <BookOpen size={48} className="mb-4" />
            <h1 className="text-4xl font-bold">
              Book <span className="text-green-200">Authors</span>
            </h1>
            <p className="mt-2 text-green-100 max-w-xl">
              Explore our collection of renowned authors and their literary works
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Author Profile Card */}
        <div className="mb-12">
          <ProfileCard 
            authors={sampleAuthors}
            onSelectWriter={setSelectedWriter} 
            selectedWriter={selectedWriter}
          />
        </div>

        {/* Books Section */}
        {selectedWriter && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen size={24} className="text-green-600" />
                <h2 className="text-2xl font-bold">
                  <span className="text-green-600">Books by</span> {selectedWriter.name}
                </h2>
              </div>
              
              <div className="w-full md:w-64 relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <AuthorBooks 
              writerName={selectedWriter.name} 
              searchTerm={searchTerm}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Authors;