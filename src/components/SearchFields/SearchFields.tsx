
const SearchFields = () => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Enter Title" className="input input-bordered w-full" />
                <select className="select select-bordered w-full">
                    <option disabled selected>Select Book Type</option>
                    <option>Fiction</option>
                    <option>Non-Fiction</option>
                    <option>Science</option>
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>Select a Publisher</option>
                    <option>Penguin</option>
                    <option>HarperCollins</option>
                    <option>Macmillan</option>
                </select>
                <select className="select select-bordered w-full">
                    <option disabled selected>Select Author</option>
                    <option>Author A</option>
                    <option>Author B</option>
                    <option>Author C</option>
                </select>
                <input type="text" placeholder="Enter ISBN" className="input input-bordered w-full" />
                <select className="select select-bordered w-full">
                    <option selected>All</option>
                    <option>Available</option>
                    <option>Checked Out</option>
                </select>
            </div>
            <div className="flex justify-end mt-4">
                <button className="btn btn-success">Search Books</button>
            </div>
        </div>
    );
};

export default SearchFields;