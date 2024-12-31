import React from "react"
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardFooter
} from "@/components/ui/card"
import Button from "../Button"

type BlogCardProps = {
  title: string
  desc: string
}

export default function Blog({ title, desc }: BlogCardProps) {
  return (
    <Card className="hover:scale-105 transition-transform cursor-pointer flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        Posted by <span className="font-semibold">Nadeem Khan</span>
      </CardContent>
      <CardFooter>
        <Button
            content="View Details"
         />
      </CardFooter>
    </Card>
  )
}
