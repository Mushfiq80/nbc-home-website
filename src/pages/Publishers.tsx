import PublisherCard from "@/components/PublisherProfile/PublisherCard";
import { useState } from "react";

const Publishers = () => {

    const [selectedPublisher, setSelectedWPublisher] = useState<string | null>(null);

    return (
        <div>
            <PublisherCard onSelectPublisher={setSelectedWPublisher}/>
        </div>
    );
};

export default Publishers;