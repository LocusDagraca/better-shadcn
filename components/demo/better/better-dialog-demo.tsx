import { BetterButton } from "@/components/ui/better-button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/better-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BetterDialogDemo() {
  return (
    <Dialog queryKey="demoDialog">
      <form>
        <DialogTrigger asChild>
          <BetterButton variant="outline">Open Dialog</BetterButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 px-6 ">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <BetterButton variant="ghost" size="lg">Cancel</BetterButton>
            </DialogClose>
            <BetterButton type="submit" variant="betterDefault" size="lg">Save changes</BetterButton>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
