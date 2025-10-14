"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BetterButton } from "@/components/ui/better-button";
import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BetterSheet, BetterSheetClose, BetterSheetContent, BetterSheetDescription, BetterSheetFooter, BetterSheetTitle, BetterSheetTrigger } from "@/components/ui/better-sheet";
import { Save, Trash2, Settings } from "lucide-react";
import { SheetDemo } from "@/components/demo/shadcn/sheet-demo";
import { BetterSheetDemo } from "@/components/demo/better/better-sheet-demo";
import { DialogDemo } from "@/components/demo/shadcn/dialog-demo";
import { BetterDialogDemo } from "@/components/demo/better/better-dialog-demo";
import BetterNav from "@/components/custom/better-nav";

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [loading3, setLoading3] = useState(false)
  const handleClick = (time?: number) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, time || 1000)
  }
  const handleClick2 = (time?: number) => {
    setLoading2(true)
    setTimeout(() => {
      setLoading2(false)
    }, time || 1000)
  }
  const handleClick3 = (time?: number) => {
    setLoading3(true)
    setTimeout(() => {
      setLoading3(false)
    }, time || 1000)
  }
  return (
    <div className=" flex flex-col gap-4 items-center justify-center min-h-screen w-full bg-neutral-50 py-36">

      <div className="flex flex-col items-center justify-center gap-2">
        <Badge variant="secondary">Now available</Badge>

        <h1 className="text-4xl font-bold">Better-Shadcn</h1>

        <p className="text-lg text-foreground/80 text-center flex">
        Small tweaks of Shadcn UI components, for real-world <span className="bg-neutral-900 text-lime-300 px-1.5 rounded-md font-medium rotate-6 mx-1">UX</span> & <span className="bg-neutral-900 text-rose-300 px-1.5 rounded-md font-medium -rotate-3 mx-1">DX</span> needs.
        </p>

        <div className="flex items-center justify-center gap-2 my-4">
          <BetterButton className="px-8" variant="betterDefault">
            Browse components
          </BetterButton>
          <BetterButton className="px-8" variant="betterOutline">
            <PulseSignal />
            Is it for me?
          </BetterButton>
        </div>
      </div>

      <div>
        <pre className="text-sm max-w-3xl bg-neutral-800 text-white p-4 rounded-md">
          {`UX tips:
            - The main goal of UX is user clarity
            - Use big px values for main buttons
            - Use icon buttons with tooltips
            - Use animations equal or less than 300ms
            - longer loading states can increase perceived value / weight of a async action
            - Use query params so Sheets & Dialogs persist on reload
            - Prefer sheets over dialogs in general
            - Prefer dialogs for BIG things (confirmations & alerts/errors)`}
        </pre>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <table className="w-full   rounded-2xl ">
          <thead>
            <tr className="bg-muted">
              <th className="border  px-6 py-3 text-center font-medium">Example</th>
              <th className="border  px-6 py-3 text-center font-medium">Better Button</th>
              <th className="border  px-6 py-3 text-center font-medium">Normal Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border  px-6 py-4 text-center font-medium max-w-44">Default: Click feedback, more width</td>
              <td className="border  px-6 py-4 text-center space-x-2">
                <BetterButton variant="betterDefault" size="better">Click me</BetterButton>
                <BetterButton variant="betterOutline" size="better">Click me</BetterButton>
              </td>
              <td className="border  px-6 py-4 text-center space-x-2">
                <Button>Click me</Button>
                <Button variant="outline">Click me</Button>
              </td>
            </tr>
            <tr>
              <td className="border  px-6 py-4 text-center font-medium">Built-in loading state</td>
              <td className="border  px-6 py-4 text-center space-x-2">
                <BetterButton  throttle={1000} onClick={() => {}} loaderText="Thinking..." className="min-w-40">
                  Click me 
                </BetterButton>
                <BetterButton loading={loading2} throttle={1000}  onClick={() => handleClick2(50)} loaderText="Thinking..." className="min-w-40">
                  Spam me
                </BetterButton>
                {/* <BetterButton loading={loading} onClick={handleClick} variant="secondary">Click me</BetterButton> */}
              </td>
              <td className="border  px-6 py-4 text-center">
                <Button variant="secondary">Click me</Button>
              </td>
            </tr>
            <tr>
              <td className="border  px-6 py-4 text-center font-medium">Tooltip integration</td>
              <td className="border  px-6 py-4 text-center space-x-2">
                <BetterButton loading={loading} throttle={600} tooltip="Save your changes" size="icon" >
                  <Save />
                </BetterButton>
                <BetterButton loading={loading} tooltip="Delete this item"  variant="destructive" size="icon">
                  <Trash2 />
                </BetterButton>
                <BetterButton tooltip="Edit settings" className="rounded-full" variant="ghost" size="icon">
                  <Settings />
                </BetterButton>
              </td>
              <td className="border  px-6 py-4 text-center">
                <Button variant="outline">No tooltip</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



      <div className="w-full max-w-3xl mt-8">
        <table className="w-full   rounded-2xl ">
          <thead>
            <tr className="bg-muted">
              <th className="border  px-6 py-3 text-center font-medium">Example</th>
              <th className="border  px-6 py-3 text-center font-medium">Better Sheet</th>
              <th className="border  px-6 py-3 text-center font-medium">Normal Sheet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border  px-6 py-4 text-center font-medium max-w-44">
                Open/Close animations, build-in query states, better UI (wider sheet + footer emphasis + bigger title etc)
              </td>
              <td className="border  px-6 py-4 text-center ">
                <BetterSheetDemo />
              </td>
              <td className="border  px-6 py-4 text-center">
                <SheetDemo />
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="w-full max-w-3xl mt-8">
        <table className="w-full   rounded-2xl ">
          <thead>
            <tr className="bg-muted">
              <th className="border  px-6 py-3 text-center font-medium">Example</th>
              <th className="border  px-6 py-3 text-center font-medium">Better Dialog</th>
              <th className="border  px-6 py-3 text-center font-medium">Normal Dialog</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border  px-6 py-4 text-center font-medium max-w-44">
                Open/Close animations, build-in query states, better UI (wider sheet + footer emphasis + bigger title etc)
              </td>
              <td className="border  px-6 py-4 text-center ">
                <BetterDialogDemo />
              </td>
              <td className="border  px-6 py-4 text-center">
                <DialogDemo />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <BetterNav base="app" page="docs" />

    </div>
  );
}


export function PulseSignal(){
  return (
      <div className="relative">
        <div className="w-2 h-2 bg-green-400 rounded-full relative animate-ping" />
        <div className="w-2 h-2 bg-green-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
  )
}

