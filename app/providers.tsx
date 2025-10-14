import { ThemeProvider } from "@/components/custom/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NuqsAdapter>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider>
                    {children}
                </SidebarProvider>
            </ThemeProvider>
        </NuqsAdapter>
    )
}
