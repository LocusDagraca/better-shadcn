import { cn } from "@/lib/utils"
import { SidebarTrigger } from "../ui/sidebar"
import SiteLogo from "./site-logo"
import { BetterButton } from "../ui/better-button"
import { ModeToggle } from "./toggle-mode"
import { Separator } from "../ui/separator"

export default function SiteHeader ({ className }: { className?: string }) {
    return <>
        <div className={cn("flex items-center justify-between bg-secondary sticky top-0 z-50 h-16 w-full border-b", className)}>
            
            <div className="w-[16rem] h-full border-r flex items-center justify-between px-4 gap-2 ">
                <div className="flex items-center gap-2">
                    <SiteLogo />
                    <h1>Better-Shadcn</h1>
                </div>
                <SidebarTrigger />
            </div>

            <div className="flex-1 px-4 flex items-center justify-between">
                <div className="flex items-center gap-0">
                    <BetterButton variant="ghost" className="hover:bg-foreground/10 dark:hover:bg-foreground/10">
                        How to use
                    </BetterButton>
                    <BetterButton variant="ghost" className="hover:bg-foreground/10 dark:hover:bg-foreground/10">
                        Docs
                    </BetterButton>
                    <BetterButton variant="ghost" className="hover:bg-foreground/10 dark:hover:bg-foreground/10">
                        Components
                    </BetterButton>
                </div>

                <div className="flex items-center gap-4">
                    <ModeToggle />
                    {/* <div className="h-6 w-[1px] bg-foreground/10 mx-1" /> */}
                    <BetterButton size="better" variant="betterOutline">
                        CTA
                    </BetterButton>
                    <BetterButton size="better" variant="betterDefault">
                        Github
                    </BetterButton>
                </div>

            </div>

        </div>
    </>
}