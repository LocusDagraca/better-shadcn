"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { useQueryState, parseAsBoolean } from "nuqs"

import { cn } from "@/lib/utils"
import { BetterButton } from "./better-button"

interface BetterSheetProps extends React.ComponentProps<typeof SheetPrimitive.Root> {
  queryKey?: string
}

function BetterSheet({ queryKey, ...props }: BetterSheetProps) {
  // Only use URL state when queryKey is provided
  const [isOpen, setIsOpen] = queryKey ? useQueryState(queryKey, parseAsBoolean.withDefault(false)) : [undefined, undefined]

  // If queryKey is provided, use controlled state from URL
  // Otherwise, use uncontrolled state (default Radix behavior)
  const controlledProps = queryKey ? {
    open: isOpen,
    onOpenChange: setIsOpen,
  } : {}

  return <SheetPrimitive.Root data-slot="sheet" {...controlledProps} {...props} />
}

function BetterSheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function BetterSheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function BetterSheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function BetterSheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function BetterSheetContent({
  className,
  children,
  side = "right",
  better,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left",
  better?: true,
}) {
  return (
    <BetterSheetPortal>
      <BetterSheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-80 data-[state=open]:slide-in-from-80 inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-[38vw] sm:min-w-lg",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-[38vw] sm:min-w-lg",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",

          better && "data-[state=closed]:duration-200 data-[state=open]:duration-200 data-[state=open]:fade-in data-[state=closed]:fade-out-0",
                  
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-tech focus:ring-ring/50 p-2 bg-foreground absolute top-4 -left-9 rounded-md opacity-90 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
            <XIcon className="size-4 text-background" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </BetterSheetPortal>
  )
}

function BetterSheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4 px-6", className)}
      {...props}
    />
  )
}

function BetterSheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4 px-6 border-t", className)}
      {...props}
    />
  )
}

function BetterSheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold text-lg", className)}
      {...props}
    />
  )
}

function BetterSheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  BetterSheet,
  BetterSheetTrigger,
  BetterSheetClose,
  BetterSheetContent,
  BetterSheetHeader,
  BetterSheetFooter,
  BetterSheetTitle,
  BetterSheetDescription,
}
