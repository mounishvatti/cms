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

// This is sample data.
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
        },
        {
          title: "Manage users",
          url: "#",
        }
      ],
    },
    {
      title: "Course Management",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Courses",
          url: "#",
        },
        {
          title: "Lessons",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Blogs",
          url: "#",
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
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
