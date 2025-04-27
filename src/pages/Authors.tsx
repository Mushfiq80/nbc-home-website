import { useState, useEffect } from "react";
import ProfileCard from "@/components/AuthorProfile/ProfileCard";
import AuthorBooks from "@/components/AuthorProfile/AuthorBooks";

const Authors = () => {
  const [selectedWriter, setSelectedWriter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load a default author when the component mounts
  useEffect(() => {
    // Fetch authors and set a default one
    fetch("/Author.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          // Select the first author as default
          setSelectedWriter(data[0].name);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error loading authors:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="layout px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        Book <span className="text-neutral-800">Authors</span>
      </h1>
      
      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <>
          <ProfileCard 
            onSelectWriter={setSelectedWriter} 
            defaultSelected={selectedWriter}
          />
          
          {selectedWriter && (
            <>
              <div className="mt-8 mb-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="text-2xl font-semibold text-green-600">
                    Books by <span className="text-neutral-800">{selectedWriter}</span>
                  </h2>
                  <div className="w-full md:w-64">
                    <input
                      type="text"
                      placeholder="Search books..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <AuthorBooks 
                writerName={selectedWriter} 
                searchTerm={searchTerm}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Authors;