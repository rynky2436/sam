import { useState } from "react";
import { 
  Home, 
  Briefcase, 
  Calendar, 
  Users, 
  Phone,
  Heart,
  Award,
  GraduationCap,
  Building2,
  Gift,
  Star,
  ChevronDown,
  ChevronRight,
  Baby,
  PartyPopper
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Services", url: "/services", icon: Briefcase },
  { title: "About", url: "/about", icon: Users },
  { title: "Portfolio", url: "/portfolio", icon: Award },
  { title: "Blog", url: "/blog", icon: GraduationCap },
  { title: "Areas We Serve", url: "/areas-we-serve", icon: Building2 },
  { title: "Contact", url: "/contact", icon: Phone },
];

const eventItems = [
  { title: "Weddings", url: "/events/weddings", icon: Heart },
  { title: "Anniversaries", url: "/events/anniversaries", icon: Heart },
  { title: "Baby Showers", url: "/events/baby-showers", icon: Baby },
  { title: "Retirement Parties", url: "/events/retirement-parties", icon: PartyPopper },
  { title: "Corporate Events", url: "/events/corporate-events", icon: Building2 },
  { title: "Graduations", url: "/events/graduations", icon: GraduationCap },
  { title: "Holiday Events", url: "/events/holiday-events", icon: Calendar },
  { title: "Special Celebrations", url: "/events/special-celebrations", icon: Gift },
  { title: "Grand Openings", url: "/events/grand-openings", icon: Star },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [eventsOpen, setEventsOpen] = useState(currentPath.startsWith("/events"));

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-muted text-primary font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Events & Occasions */}
        <SidebarGroup>
          <SidebarGroupLabel 
            className="cursor-pointer flex items-center justify-between"
            onClick={() => setEventsOpen(!eventsOpen)}
          >
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Events & Occasions</span>
            </div>
            {eventsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </SidebarGroupLabel>
          
          {eventsOpen && (
            <SidebarGroupContent>
              <SidebarMenu>
                {eventItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavCls}>
                        <item.icon className="mr-2 h-4 w-4" />
                        <span className="text-sm">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}