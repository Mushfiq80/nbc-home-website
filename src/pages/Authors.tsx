import AuthorBooks from "@/components/AuthorProfile/AuthorBooks";
import ProfileCard from "@/components/AuthorProfile/ProfileCard";
import { useState } from "react";

const Authors = () => {

  const [selectedWriter, setSelectedWriter] = useState<string | null>(null);

  return (
    <div>
      <ProfileCard onSelectWriter={setSelectedWriter} />
      {selectedWriter && <AuthorBooks writerName={selectedWriter} />}
    </div>
  );
};

export default Authors;