"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { BetterButton } from "../ui/better-button"

export function ModeToggle() {
  const {theme, setTheme } = useTheme()

  return (
    <BetterButton
      variant="ghost"
      className="hover:bg-foreground/10 dark:hover:bg-foreground/10"
      tooltip="Switch theme"
      tooltipSide="bottom"
      size="icon"
      onClick={() => {
        console.log("theme:", theme)
        setTheme(theme === "dark" ? "light" : "dark")
    }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </BetterButton>
  )
}
