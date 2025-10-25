import BetterNav, { BetterNavVariant3 } from "@/components/custom/better-nav";
import { BetterButton } from "@/components/ui/better-button";
import { ArrowRightIcon } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="flex flex-col  justify-baseline min-h-screen p-8 px-20 gap-4 w-full">
            {/* <h1>Components / Docs</h1> */}  
            <div className="flex items-center justify-between w-full">

                <BetterNavVariant3 base="Components" page="Button" />
                <BetterButton variant="ghost" disabled> 
                    Dialog
                    <ArrowRightIcon className="size-4" />
                </BetterButton>
            </div>
            <div>

            <p className="text-2xl font-medium uppercase bg-gradient-to-r from-primary to-muted/0 bg-clip-text text-transparent ">Button</p>
            </div>
        </div>
    )
}