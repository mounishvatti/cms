"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Loading from "@/app/loading";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { TbHomeMove } from "react-icons/tb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Link href="/" className="underline"><TbHomeMove className="text-blue-500 text-xl" /></Link>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Admin Portal
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          Frequently used
          <div className="grid auto-rows-min gap-4 md:grid-cols-8">
            <div className="aspect-video rounded-xl bg-blue-950 border border-blue-600 flex items-center justify-center">
              <p className="text-blue-100 font-sans text-md font-normal">
                Add course
              </p>
            </div>
            <div className="aspect-video rounded-xl bg-yellow-950 border border-yellow-600 flex items-center justify-center">
              <p className="text-yellow-100 font-sans text-md font-normal">
                Update course
              </p>
            </div>

            <div className="aspect-video rounded-xl bg-green-950 border border-green-600 flex items-center justify-center">
              <p className="text-green-100 font-sans text-md font-normal">
                Add lesson
              </p>
            </div>
            <div className="aspect-video rounded-xl bg-stone-900 border border-stone-600 flex items-center justify-center">
              <p className="text-stone-100 font-sans text-md font-normal">
                Configure role
              </p>
            </div>
            <div className="aspect-video rounded-xl bg-red-950 border border-red-600 flex items-center justify-center">
              <p className="text-red-100 font-sans text-md font-normal">
                Block user
              </p>
            </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
