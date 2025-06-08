import { Book } from "@/lib/CatalogBooks";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, User, BookOpen } from "lucide-react";

interface BookCardProps {
    book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card border-0 shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {book.subject}
                    </Badge>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{book.rating}</span>
                </div>
            </div>
            
            <CardContent className="p-4 space-y-3">
                <div>
                    <h3 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {book.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                        <User size={12} />
                        <span className="line-clamp-1">{book.author}</span>
                    </div>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{book.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <BookOpen size={12} />
                            <span>{book.pages}p</span>
                        </div>
                    </div>
                    
                    <div className="text-xs">
                        <span className="font-medium">Publisher:</span> {book.publisher}
                    </div>
                    
                    <div className="text-xs">
                        <span className="font-medium">ISBN:</span> {book.isbn}
                    </div>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {book.description}
                </p>
            </CardContent>
        </Card>
    );
};

export default BookCard;