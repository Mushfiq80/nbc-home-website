import AllBooks from "@/components/AllBooks/AllBooks";
import SearchFields from "@/components/SearchFields/SearchFields";

const Books = () => {
    return (
        <div className="p-6">
            <SearchFields />
            <AllBooks />

        </div>
    );
};

export default Books;