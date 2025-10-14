import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect } from "react"

const useThrottle = (loading?: boolean, throttle?: number) => {
  const [displayLoading, setDisplayLoading] = React.useState(loading)
  const loadingStartTimeRef = React.useRef<number | null>(null)

  useEffect(() => {
    if (loading) {
      // When loading starts, immediately show loading and record start time
      setDisplayLoading(true)
      loadingStartTimeRef.current = Date.now()
    } else {

      console.log("loading:", loading)
      
      if (throttle && loading === undefined){
        console.log("throttling")
        setDisplayLoading(true)
        loadingStartTimeRef.current = Date.now()
      }
      // When loading ends, check if minimum time has passed
      if (loadingStartTimeRef.current && throttle) {
        const elapsedTime = Date.now() - loadingStartTimeRef.current
        const remainingTime = throttle - elapsedTime

        if (remainingTime > 0) {
          // Wait for remaining time before hiding loading
          const timeoutId = setTimeout(() => {
            setDisplayLoading(false)
            loadingStartTimeRef.current = null
          }, remainingTime)

          return () => clearTimeout(timeoutId)
        } else {
          // Minimum time already passed, hide loading immediately
          setDisplayLoading(false)
          loadingStartTimeRef.current = null
        }
      } else {
        // No minimum time or no start time recorded, hide loading immediately
        setDisplayLoading(false)
        loadingStartTimeRef.current = null
      }
    }
  }, [loading, throttle])

  return displayLoading
}

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/90`,
        betterDefault: `bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/82`,
        tech: `bg-tech text-neutral-50 hover:bg-tech/90 active:bg-tech/82`,
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        betterOutline:
          "border-[1.5px] border-primary bg-background shadow-xs hover:bg-foreground/5 active:bg-foreground/8 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        better: "h-9 px-6 py-2 has-[>svg]:px-5",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function BetterButton({
  className,
  variant,
  size,
  asChild = false,
  loading = undefined,
  throttle,
  feedback = true,
  loaderText,
  tooltip,
  tooltipSide = "right",
  tooltipDelay = 0,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    loading?: boolean
    throttle?: number
    feedback?: boolean
    loaderText?: string
    tooltip?: string
    tooltipSide?: "top" | "right" | "bottom" | "left"
    tooltipDelay?: number
  }) {
  const displayLoading = useThrottle(loading, throttle)
  const Comp = asChild ? Slot : "button"

  const button = (
    <Comp
      data-slot="button"
      disabled={displayLoading}
      className={
        cn(buttonVariants({ variant, size, className }),
        feedback && "cursor-pointer active:scale-[0.985]",
        size === "icon" && "active:scale-[0.97]",
        size === "icon-sm" && "active:scale-[0.97]",
        size === "icon-lg" && "active:scale-[0.97]",
      )}
      {...props}
    >
      {displayLoading ?
        loaderText ?
          <>
            <span className="opacity-0">{props.children}</span>
            <span className="absolute inset-0 flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              {loaderText}
            </span>
          </>
         :
          <>
            <Loader2 className="absolute inset-0 m-auto w-4 h-4 animate-spin" />
            <span className="opacity-0">{props.children}</span>
          </>
       :
        props.children
      }
    </Comp>
  )

  if (tooltip) {
    return (
      <Tooltip delayDuration={tooltipDelay}>
        <TooltipTrigger asChild>
          {button}
        </TooltipTrigger>
        <TooltipContent side={tooltipSide} className="pb-1">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    )
  }

  return button
}

export { BetterButton, buttonVariants }
