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
                isActive: true,
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
            <SidebarContent className="p-3">
            {/* We create a SidebarGroup for each parent. */}
            {data.navMain.map((item) => (
                <SidebarGroup key={item.title}>
                    <SidebarGroupLabel className="text-xs px-1">{item.title}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {item.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild isActive={item.isActive}>
                                <a href={item.url}>{item.title}</a>
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