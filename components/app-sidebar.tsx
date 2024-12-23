"use client"
import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Mounish Vatti",
    email: "mounishvatti@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "coursera - main",
      logo: GalleryVerticalEnd,
      plan: "cms",
    },
    {
      name: "coursera - beta",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "coursera - dev",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Admin Console",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Configure role",
          url: "#",
          key: "Configure-roles",
        },
        {
          title: "Manage users",
          url: "#",
          key: "Manage-users",
        }
      ],
    },
    {
      title: "Course Management",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Add Courses",
          url: "#",
          key: "Add-course",
        },
        {
          title: "Update Courses",
          url: "#",
          key: "Update-course",
        },
        {
          title: "Delete Courses",
          url: "#",
          key: "Delete-course",
        },
        {
          title: "Blogs",
          url: "#",
          key: "blogs",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
          key: "general",
        },
        {
          title: "Team",
          url: "#",
          key: "team",
        },
        {
          title: "Billing",
          url: "#",
          key: "billing",
        },
        {
          title: "Limits",
          url: "#",
          key: "limits",
        },
      ],
    },
  ]
}

export function AppSidebar({onFunctionSelect, ...props }: React.ComponentProps<typeof Sidebar> & { onFunctionSelect: (key: string) => void }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
      <NavMain items={data.navMain} onFunctionSelect={onFunctionSelect} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
