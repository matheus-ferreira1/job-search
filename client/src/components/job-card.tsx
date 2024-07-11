import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const JobCard: React.FC = () => {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="grid gap-6">
        <div className="flex items-center gap-4">
          <Avatar className="bg-primary text-primary-foreground">
            <AvatarFallback>FE</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="text-lg font-semibold">
              Senior Frontend Developer
            </div>
            <div className="text-muted-foreground">Vercel</div>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            {/* <MapPinIcon className="w-4 h-4" /> */}
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            {/* <BriefcaseIcon className="w-4 h-4" /> */}
            <span>Full-time</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            {/* <CalendarIcon className="w-4 h-4" /> */}
            <span>Submitted on 2023-05-15</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Badge
              variant="solid"
              className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-md text-xs font-medium"
            >
              Pending
            </Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end gap-2">
        <Button variant="outline" size="sm">
          {/* <FilePenIcon className="w-4 h-4 mr-2" /> */}
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          {/* <TrashIcon className="w-4 h-4 mr-2" /> */}
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
