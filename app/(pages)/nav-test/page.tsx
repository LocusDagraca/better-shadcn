'use client'

import BetterNav from "@/components/custom/better-nav"

export default function DocsPage() {
    return (
        <div className="flex flex-col items-center justify-baseline min-h-screen py-36 gap-4">
            <BetterNav base="App" page="Docs" description="Documentation for the Better-Shadcn library" />
            <BetterNav base="app" page="docs" />
            {/* <h1>Docs</h1> */}
        </div>
    )
}
