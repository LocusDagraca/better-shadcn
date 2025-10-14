import { BetterButton } from "@/components/ui/better-button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BetterSheet, BetterSheetTrigger, BetterSheetContent, BetterSheetTitle, BetterSheetDescription, BetterSheetFooter, BetterSheetClose, BetterSheetHeader } from "@/components/ui/better-sheet";
import { EllipsisIcon } from "lucide-react";

export function BetterSheetDemo() {
    return (
        <BetterSheet queryKey="demoSheet">
        <BetterSheetTrigger asChild>
          <BetterButton variant="tech">Click me</BetterButton>
        </BetterSheetTrigger>
        <BetterSheetContent better>
          <BetterSheetHeader>
            <BetterSheetTitle className="flex items-center justify-between">
                Better Sheet
                <BetterButton variant="ghost" size="icon-sm" className="rounded-full">
                    <EllipsisIcon className="" />
                </BetterButton>
            </BetterSheetTitle>
            <BetterSheetDescription>
                This sheet persists on refresh. Try refreshing the page.
            </BetterSheetDescription>
          </BetterSheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-6">
                <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">Name</Label>
                    <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Username</Label>
                    <Input id="sheet-demo-username" defaultValue="@peduarte" />
                </div>
            </div>
          <BetterSheetFooter className="flex gap-2 flex-row justify-end bg-secondary/30 ">

            <BetterSheetClose asChild>
              <BetterButton variant="ghost" className="" size="lg">
                Cancel
              </BetterButton>
            </BetterSheetClose>
            <BetterButton className="" size="lg">
              Save changes
            </BetterButton>
          </BetterSheetFooter>
        </BetterSheetContent>
      </BetterSheet>

    )
}