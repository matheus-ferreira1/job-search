import day from "dayjs";
import {
  BriefcaseBusiness,
  CalendarDays,
  FilePen,
  MapPinned,
  Trash2,
} from "lucide-react";

import { Job } from "@/contexts/jobs-context";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const {
    company,
    jobLocation,
    jobLocationType,
    jobStatus,
    position,
    updatedAt,
  } = job;

  const date = day(updatedAt).format("MMM DD, YYYY");

  return (
    <Card className="w-full hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>{company.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <CardTitle>{position}</CardTitle>
            <CardDescription>@ {company}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Separator />
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-muted-foreground">
              <MapPinned className="size-5" />
              <span>{jobLocation ? jobLocation : "N/A"}</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <BriefcaseBusiness className="size-5" />
              <span className="capitalize">
                {jobLocationType.toLowerCase()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <CalendarDays className="size-5" />
            <span>{date.toString()}</span>
          </div>
          <Badge className="bg-yellow-400/80 text-black px-3 py-1 font-medium">
            {jobStatus}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end gap-2">
        <Button variant="outline">
          <FilePen className="size-4 mr-2" />
          Edit
        </Button>
        <Button variant="destructive">
          <Trash2 className="size-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
