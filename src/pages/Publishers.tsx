import { useState, useEffect } from "react";
import { sampleBooks } from "@/lib/CatalogBooks";
import { Building2 } from "lucide-react";
import PublisherSelector from "@/components/PublisherPage/PublisherSelector";
import PublisherInfo from "@/components/PublisherPage/PublisherInfo";
import BookGrid from "@/components/PublisherPage/BookCard";
import BookCard from "@/components/PublisherPage/BookCard";


interface PublisherInfo {
  name: string;
  totalBooks: number;
  avgRating: number;
  establishedYear: number;
  location: string;
  email: string;
  description: string;
  logo: string;
}

const Publishers = () => {
  const [selectedPublisher, setSelectedPublisher] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [publishers, setPublishers] = useState<PublisherInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Extract publishers from sampleBooks
  useEffect(() => {
    const publisherMap = new Map<string, {
      books: typeof sampleBooks;
      totalRating: number;
    }>();

    sampleBooks.forEach(book => {
      if (!publisherMap.has(book.publisher)) {
        publisherMap.set(book.publisher, { books: [], totalRating: 0 });
      }
      const pub = publisherMap.get(book.publisher)!;
      pub.books.push(book);
      pub.totalRating += book.rating;
    });

    const publisherList: PublisherInfo[] = Array.from(publisherMap.entries()).map(([name, data]) => ({
      name,
      totalBooks: data.books.length,
      avgRating: data.totalRating / data.books.length,
      establishedYear: Math.min(...data.books.map(b => b.year)) - Math.floor(Math.random() * 20),
      location: `${data.books[0].country}`,
      email: `contact@${name.toLowerCase().replace(/\s+/g, '')}.com`,
      description: `Leading publisher specializing in ${data.books[0].subject.toLowerCase()} and diverse literary works.`,
      logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=059669&color=fff&size=200`
    }));

    setPublishers(publisherList);
    if (publisherList.length > 0) {
      setSelectedPublisher(publisherList[0].name);
    }
    setIsLoading(false);
  }, []);

  const selectedPublisherInfo = publishers.find(p => p.name === selectedPublisher);
  const publisherBooks = sampleBooks.filter(book => 
    book.publisher === selectedPublisher &&
    (searchTerm === "" || 
     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Building2 className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold">
            Book <span className="text-primary">Publishers</span>
          </h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover amazing publishers and explore their collection of books
        </p>
      </div>

      {/* Publisher Selection */}
      <PublisherSelector 
        publishers={publishers}
        selectedPublisher={selectedPublisher}
        onSelectPublisher={setSelectedPublisher}
      />

      {/* Publisher Info */}
      {selectedPublisherInfo && (
        <PublisherInfo publisher={selectedPublisherInfo} />
      )}

      {/* Books Section */}
      {selectedPublisher && (
        <BookCard
          books={publisherBooks}
          publisherName={selectedPublisher}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      )}
    </div>
  );
};

export default Publishers;