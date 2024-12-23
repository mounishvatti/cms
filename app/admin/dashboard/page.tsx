"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { useUser } from "@/store/userContext";
import {
  AddCourse,
  DeleteCourse,
  UpdateCourse,
} from "@/components/admin/coursefunctions/index";

import { ConfigureRoles, BlockUsers } from "@/components/admin/usermanagement/index";
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
import { JSX } from "react";
import { useState } from "react";

export default function Page() {
  const { isLoggedIn, role } = useUser();
  const [currentView, setCurrentView] = useState<string>("dashboard");
  const views: { [key: string]: JSX.Element } = {
    dashboard: (
      <div className="text-gray-400 p-4 text-xl">
        Welcome to the Admin Dashboard, select functionality to begin with.
      </div>
    ),

    "Add-course": <AddCourse />,
    "Delete-course": <DeleteCourse />,
    "Update-course": <UpdateCourse />,
    "Configure-roles": <ConfigureRoles />,
    "Manage-users": <BlockUsers />,
  };
  if (role === "ADMIN" && isLoggedIn) {
    return (
      <SidebarProvider>
        <AppSidebar onFunctionSelect={setCurrentView} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Link href="/" className="underline">
                <TbHomeMove className="text-blue-500 text-xl" />
              </Link>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/admin/dashboard">
                      Admin Portal
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {currentView.replace("-", " ")}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            Frequently used
            <div className="grid auto-rows-min gap-4 md:grid-cols-8">
              <div className="aspect-video rounded-xl bg-blue-950 border border-blue-600 flex items-center justify-center cursor-pointer" onClick={() => setCurrentView("Add-course")}>
                <p className="text-blue-100 font-sans text-md font-normal">
                  Add course
                </p>
              </div>
              <div className="aspect-video rounded-xl bg-yellow-950 border border-yellow-600 flex items-center justify-center cursor-pointer" onClick={() => setCurrentView("Update-course")}>
                <p className="text-yellow-100 font-sans text-md font-normal">
                  Update course
                </p>
              </div>

              <div className="aspect-video rounded-xl bg-green-950 border border-green-600 flex items-center justify-center cursor-pointer" onClick={() => setCurrentView("Delete-course")}>
                <p className="text-green-100 font-sans text-md font-normal">
                  Add lesson
                </p>
              </div>
              <div className="aspect-video rounded-xl bg-stone-900 border border-stone-600 flex items-center justify-center cursor-pointer" onClick={() => setCurrentView("Configure-roles")}>
                <p className="text-stone-100 font-sans text-md font-normal">
                  Configure role
                </p>
              </div>
              <div className="aspect-video rounded-xl bg-red-950 border border-red-600 flex items-center justify-center cursor-pointer" onClick={() => setCurrentView("Manage-users")}>
                <p className="text-red-100 font-sans text-md font-normal">
                  Block user
                </p>
              </div>
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              {views[currentView] || (
                <p className="text-gray-600">Page not found</p>
              )}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  } else {
    return (
      <>
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-2 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <h1>You are not authorized to access this page</h1>
          </div>
        </div>
      </>
    );
  }
}
