'use client'

import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import useTabStore from "../store/tabs"
import Create from "../ui/Create"
import Blogs from "./Blogs"
import MyBlogs from "./MyBlogs"

export default function Dashboard() {
  const { currentTab } = useTabStore();
  console.log(currentTab)

  
  let content = <div></div>
   
  if (currentTab == "blogs") {
    content = <Blogs />
  } else if (currentTab == "create") {
    content = <Create  />
  } else if (currentTab == "my blogs") {
    content = <MyBlogs />
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {content}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
