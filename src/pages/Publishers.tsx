import AuthorBooks from "@/components/AuthorProfile/AuthorBooks";
import PublisherCard from "@/components/PublisherProfile/PublisherCard";
import { useState } from "react";

const Publishers = () => {

    const [selectedPublisher, setSelectedWPublisher] = useState<string | null>(null);

    return (
        <div>
            <PublisherCard onSelectPublisher={setSelectedWPublisher}/>
            {selectedPublisher && <AuthorBooks writerName={selectedPublisher} />}
        </div>
    );
};

export default Publishers;