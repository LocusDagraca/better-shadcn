import SiteHeader from "@/components/custom/site-header";
import SiteSidebar from "@/components/custom/site-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex flex-col h-screen w-screen ">
                <SiteHeader />
                <div className="flex flex-1 overflow-hidden">
                    <SiteSidebar />
                    {children}
                </div>
            </div>
        </>
    )
}
