import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star, BookOpen, Users } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  year: number;
  rating: number;
  publisher: string;
  isbn: string;
  pages: number;
  subject: string;
  description: string;
  country: string;
}

interface BookCardProps {
  books: Book[];
  publisherName: string;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const BookCard = ({ books, publisherName, searchTerm, onSearchChange }: BookCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={12} fill="#FFD700" color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-3 h-3">
          <Star size={12} className="absolute text-gray-300" />
          <div className="absolute overflow-hidden w-1/2">
            <Star size={12} fill="#FFD700" color="#FFD700" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={12} className="text-gray-300" />);
    }

    return <div className="flex items-center gap-0.5">{stars}</div>;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Books by <span className="text-primary">{publisherName}</span>
        </h3>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search books or authors..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border hover:border-primary/20">
              <div className="w-full h-[420px] aspect-[3/4] overflow-hidden">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-3 space-y-2">
                <div>
                  <h4 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">by {book.author}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {renderStars(book.rating)}
                    <span className="text-xs font-medium">{book.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{book.year}</span>
                </div>
                
                <div className="flex gap-1">
                  <Button size="sm" className="flex-1 text-xs py-1 h-7 bg-green-500 text-white hover:bg-green-600 transition-colors">
                    Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs py-1 h-7">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-2 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-8 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mb-3" />
            <h4 className="text-lg font-semibold mb-2">No Books Found</h4>
            <p className="text-muted-foreground text-sm">
              {searchTerm 
                ? "No books match your search criteria. Try adjusting your search term."
                : "This publisher doesn't have any books in our collection yet."}
            </p>
            {searchTerm && (
              <Button 
                variant="outline" 
                className="mt-3"
                onClick={() => onSearchChange("")}
              >
                Clear Search
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BookCard;