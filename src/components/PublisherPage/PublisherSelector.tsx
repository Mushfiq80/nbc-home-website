import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";

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

interface PublisherSelectorProps {
  publishers: Publisher[];
  selectedPublisher: string | null;
  onSelectPublisher: (publisher: string) => void;
}

const PublisherSelector = ({ publishers, selectedPublisher, onSelectPublisher }: PublisherSelectorProps) => {
  return (
    <Card className="border-2">
      <CardHeader className="bg-muted/50">
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Select Publisher
        </CardTitle>
        <CardDescription>Choose a publisher to explore their book collection</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Select value={selectedPublisher || ""} onValueChange={onSelectPublisher}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a publisher..." />
          </SelectTrigger>
          <SelectContent>
            {publishers.map((publisher) => (
              <SelectItem key={publisher.name} value={publisher.name}>
                <div className="flex items-center gap-3">
                  <img 
                    src={publisher.logo} 
                    alt={publisher.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{publisher.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {publisher.totalBooks} books
                    </div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

export default PublisherSelector;