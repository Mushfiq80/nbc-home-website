import { useState } from "react";
import { sampleBooks, Book } from "@/lib/CatalogBooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, X } from "lucide-react";

interface SearchFieldsProps {
    onSearchResults: (books: Book[]) => void;
    onClearSearch: () => void;
}

const SearchFields = ({ onSearchResults, onClearSearch }: SearchFieldsProps) => {
    const [searchFilters, setSearchFilters] = useState({
        title: "",
        subject: "",
        publisher: "",
        author: "",
        isbn: "",
        status: "All"
    });

    // Extract unique values from books data
    const uniqueSubjects = [...new Set(sampleBooks.map(book => book.subject))];
    const uniquePublishers = [...new Set(sampleBooks.map(book => book.publisher))];
    const uniqueAuthors = [...new Set(sampleBooks.map(book => book.author))];

    const handleInputChange = (field: string, value: string) => {
        setSearchFilters(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSearch = () => {
        const filtered = sampleBooks.filter(book => {
            const titleMatch = !searchFilters.title ||
                book.title.toLowerCase().includes(searchFilters.title.toLowerCase());

            const subjectMatch = !searchFilters.subject || searchFilters.subject === "all" ||
                book.subject === searchFilters.subject;

            const publisherMatch = !searchFilters.publisher || searchFilters.publisher === "all" ||
                book.publisher === searchFilters.publisher;

            const authorMatch = !searchFilters.author || searchFilters.author === "all" ||
                book.author === searchFilters.author;

            const isbnMatch = !searchFilters.isbn ||
                book.isbn.toLowerCase().includes(searchFilters.isbn.toLowerCase());

            return titleMatch && subjectMatch && publisherMatch && authorMatch && isbnMatch;
        });

        onSearchResults(filtered);
    };

    const handleClear = () => {
        setSearchFilters({
            title: "",
            subject: "",
            publisher: "",
            author: "",
            isbn: "",
            status: "All"
        });
        onClearSearch();
    };

    return (
        <Card className="mb-8 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Book Title</label>
                        <Input
                            type="text"
                            placeholder="Enter title..."
                            value={searchFilters.title}
                            onChange={(e) => handleInputChange("title", e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Subject</label>
                        <Select value={searchFilters.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Subjects</SelectItem>
                                {uniqueSubjects.map((subject) => (
                                    <SelectItem key={subject} value={subject}>
                                        {subject}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Publisher</label>
                        <Select value={searchFilters.publisher} onValueChange={(value) => handleInputChange("publisher", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select publisher" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Publishers</SelectItem>
                                {uniquePublishers.map((publisher) => (
                                    <SelectItem key={publisher} value={publisher}>
                                        {publisher}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Author</label>
                        <Select value={searchFilters.author} onValueChange={(value) => handleInputChange("author", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select author" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Authors</SelectItem>
                                {uniqueAuthors.map((author) => (
                                    <SelectItem key={author} value={author}>
                                        {author}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">ISBN</label>
                        <Input
                            type="text"
                            placeholder="Enter ISBN..."
                            value={searchFilters.isbn}
                            onChange={(e) => handleInputChange("isbn", e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Status</label>
                        <Select value={searchFilters.status} onValueChange={(value) => handleInputChange("status", value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Available">Available</SelectItem>
                                <SelectItem value="Checked Out">Checked Out</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <Button
                        variant="outline"
                        onClick={handleClear}
                        className="flex items-center gap-2"
                    >
                        <X size={16} />
                        Clear
                    </Button>
                    <Button
                        onClick={handleSearch}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                    >
                        <Search size={16} />
                        Search Books
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SearchFields;