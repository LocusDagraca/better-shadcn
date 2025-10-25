import { Separator } from "../ui/separator";
import { Sidebar, SidebarContent, SidebarGroupLabel, SidebarGroup, SidebarHeader, SidebarTrigger, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupContent,  } from "../ui/sidebar";

export default function SiteSidebar() {


    const data = {
        versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
        navMain: [
          {
            title: "1. Getting Started",
            url: "#",
            items: [
              {
                title: "Why Better-Shadcn?",
                url: "#",
              },
              {
                title: "Installation",
                url: "#",
              },
              {
                title: "Project Structure",
                url: "#",
              },
            ],
          },
          {
            title: "2. Components",
            url: "#",
            items: [
              {
                title: "Button",
                url: "#",
              },
              {
                title: "Sheet",
                url: "#",
              },
              {
                title: "Dialog",
                url: "#",
              },
            ],
          },
          {
            title: "3. UX Design",
            url: "#",
            items: [
              {
                title: "Design System",
                url: "#",
              },
              {
                title: "UX Patterns",
                url: "#",
              },
              {
                title: "UX Guidelines",
                url: "#",
              },
            ],
          },
        ],
      }



    return (
        <Sidebar collapsible="offcanvas" className="bg-sidebar top-16 h-[calc(100svh-4rem)]">
            <SidebarContent className="p-3 pt-6">
            {/* We create a SidebarGroup for each parent. */}
            {data.navMain.map((item, index) => (
                <SidebarGroup key={item.title}>
                    {index !== 0 && <Separator className="mb-2 opacity-70" />}
                    <SidebarGroupLabel className="text-xs px-1 uppercase opacity-50 font-normal">{item.title}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {item.items.map((item) => (
                            <SidebarMenuItem key={item.title} >
                                <SidebarMenuButton asChild isActive={false} className="hover:bg-transparent justify-start" >
                                  <a href={item.url}>
                                    <span className="px-2 py-1 rounded group-hover/menu-item:bg-sidebar-accent">{item.title}</span>
                                  </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            ))}
        </SidebarContent>
        </Sidebar>
    )
}