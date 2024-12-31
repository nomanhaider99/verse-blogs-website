import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Button from "../Button";
import { MoreHorizontal, Edit, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type BlogCardProps = {
  title: string;
  desc: string;
};

export default function MyBlog({ title, desc }: BlogCardProps) {
  return (
    <Card className="hover:scale-105 transition-transform cursor-pointer flex flex-col justify-between relative p-1">
      <div className="w-full flex justify-end">
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 rounded-full hover:bg-muted focus:outline-none">
              <MoreHorizontal />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem
              onClick={() => alert("Edit clicked")}
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert("Delete clicked")}
              className="flex items-center gap-2 text-red-600"
            >
              <Trash className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        Posted by <span className="font-semibold">Nadeem Khan</span>
      </CardContent>
      <CardFooter>
        <Button content="View Details" />
      </CardFooter>
    </Card>
  );
}
