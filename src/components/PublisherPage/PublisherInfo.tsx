import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, MapPin, Star } from "lucide-react";

interface Publisher {
  name: string;
  totalBooks: number;
  avgRating: number;
  establishedYear: number;
  location: string;
  email: string;
  description: string;
  logo: string;
}

interface PublisherInfoProps {
  publisher: Publisher;
}

const PublisherInfo = ({ publisher }: PublisherInfoProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={14} fill="#FFD700" color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-3.5 h-3.5">
          <Star size={14} className="absolute text-gray-300" />
          <div className="absolute overflow-hidden w-1/2">
            <Star size={14} fill="#FFD700" color="#FFD700" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={14} className="text-gray-300" />);
    }

    return <div className="flex items-center gap-1">{stars}</div>;
  };

  return (
    <Card className="border-2 overflow-hidden">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg flex-shrink-0 border-4 border-white">
            <img
              src={publisher.logo}
              alt={publisher.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-primary">{publisher.name}</h2>
              <p className="text-muted-foreground mt-2">{publisher.description}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/80 p-3 rounded-lg text-center">
                <div className="flex items-center justify-center gap-1 text-primary mb-1">
                  <BookOpen size={16} />
                  <span className="font-semibold text-lg">{publisher.totalBooks}</span>
                </div>
                <p className="text-xs text-muted-foreground">Total Books</p>
              </div>
              
              <div className="bg-white/80 p-3 rounded-lg text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {renderStars(publisher.avgRating)}
                </div>
                <p className="text-xs text-muted-foreground">Avg Rating</p>
              </div>
              
              <div className="bg-white/80 p-3 rounded-lg text-center">
                <div className="flex items-center justify-center gap-1 text-primary mb-1">
                  <Calendar size={16} />
                  <span className="font-semibold text-lg">{publisher.establishedYear}</span>
                </div>
                <p className="text-xs text-muted-foreground">Established</p>
              </div>
              
              <div className="bg-white/80 p-3 rounded-lg text-center">
                <div className="flex items-center justify-center gap-1 text-primary mb-1">
                  <MapPin size={16} />
                  <span className="font-semibold text-sm">{publisher.location}</span>
                </div>
                <p className="text-xs text-muted-foreground">Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PublisherInfo;