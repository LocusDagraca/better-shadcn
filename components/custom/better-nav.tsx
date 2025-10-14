import Link from "next/link"
import { BetterButton } from "../ui/better-button"
import { ChevronLeft, ChevronRight, EllipsisIcon, EllipsisVertical, HomeIcon, Info, InfoIcon, Settings, Sidebar, User, UserRound } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"



type BetterNavProps = {
    base?: string,
    page: string,
    description?: string,
}

export default function BetterNav({ base, page, description }: BetterNavProps) {


    

    return (
        <div className=" flex flex-col gap-8">

        
            <div className="flex flex-col items-center justify-center gap-1 text-lg ">

                <div className=" flex items-center gap-3  bg-secondary/60 p-1 rounded-full px-5 text-center py-3">
                    {/* <BetterButton variant="ghost" size="icon-sm">
                        <Sidebar />
                    </BetterButton> */}
                
                    <BetterButton variant="ghost" size="icon-sm" className="text-muted-foreground rounded-full " tooltip="Home">
                        <HomeIcon />
                        {/* <UserRound /> */}
                        {/* <User /> */}
                        {/* <ChevronLeft /> */}
                    </BetterButton>

                    <div className="flex items-center gap-1.5 pb-0.5">
                        {/* <Separator /> */}
                        {base && 
                            <>
                                <a href={base} className="text-muted-foreground hover:text-foreground px-1">
                                        {base}
                                </a>
                                <Separator />
                            </>
                        }
                        <p className="px-1">
                            {page}
                        </p>

                    </div>
                    <BetterButton variant="ghost" size="icon" className=" rounded-full" tooltip="Page settings">
                        {/* <EllipsisIcon /> */}
                        <Settings className="size-4" />
                    </BetterButton>
                </div>

                {description && <div className="flex items-center justify-center gap-1 text-muted-foreground text-base  ">
                    
                    <div className="p-1 bg-tech/10 rounded-full"><InfoIcon className="size-3.5 text-tech" /></div>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-40 ">{description}</p>
                </div>}
            </div>




            <div className="flex flex-col items-center justify-center gap-1 text-xl ">

                <div className=" flex items-center gap-3  bg-secondary/0 p-1 rounded-full px-5 text-center py-3">
                    {/* <BetterButton variant="ghost" size="icon-sm">
                        <Sidebar />
                    </BetterButton> */}
                
                    <BetterButton variant="ghost" size="icon-sm" className="text-muted-foreground rounded-full " tooltip="Back home">
                        <HomeIcon />
                        {/* <UserRound /> */}
                        {/* <ChevronLeft /> */}
                    </BetterButton>

                    <div className="flex items-center gap-1 pb-0.5">
                        {/* <Separator /> */}
                        {base && 
                            <>
                                <a href={base} className="text-muted-foreground hover:text-foreground px-1">
                                        {base}
                                </a>
                                <Separator2 />
                            </>
                        }
                        <p className="px-1">
                            {page}
                        </p>

                    </div>
                    {/* <BetterButton variant="ghost" size="icon" className=" rounded-full" tooltip="Page settings">
                        <Settings className="size-4" />
                    </BetterButton> */}
                    <BetterButton variant="ghost" size="icon" className=" rounded-full" tooltip="Page settings">
                        <EllipsisIcon />
                    </BetterButton>
                </div>

                {description && <div className="flex items-center justify-center gap-1 text-muted-foreground text-base  ">
                    
                    <div className="p-1 bg-tech/10 rounded-full"><InfoIcon className="size-3.5 text-tech" /></div>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-40 ">{description}</p>
                </div>}
            </div>



            <div className="flex flex-col items-center justify-center gap-1 text-xl ">

                <div className=" flex items-center gap-3  bg-secondary/0 p-1 rounded-full px-5 text-center py-3">
                
                    <BetterButton variant="ghost" size="icon-sm" className="text-muted-foreground rounded-full " tooltip="Back home">
                        <Sidebar />
                    </BetterButton>
                    {/* <BetterButton variant="ghost" size="icon-sm" className="text-muted-foreground rounded-full " tooltip="Back home">
                        <HomeIcon />
                    </BetterButton> */}

                    <div className="flex items-center gap-1 pb-0.5">
                        <Breadcrumb className="">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/docs/components" className="text-xl">{base}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="size-4 text-muted-foreground/40 pt-1" />
                                <BreadcrumbItem className="flex items-center gap-1 bg-secondary pl-0.5 pr-3 py-0.5 rounded-full">
                                    <BetterButton variant="ghost" size="icon-sm" className=" rounded-full" tooltip="Page settings">
                                        <InfoIcon />
                                        {/* <EllipsisVertical /> */}
                                    </BetterButton>
                                    <BreadcrumbPage className="text-xl">{page}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                    <BetterButton variant="ghost" size="icon" className=" rounded-full" tooltip="Page settings">
                        <EllipsisIcon />
                        {/* <EllipsisVertical /> */}
                    </BetterButton>
                </div>

                {description && <div className="flex items-center justify-center gap-1 text-muted-foreground text-base  ">
                    
                    <div className="p-1 bg-tech/10 rounded-full"><InfoIcon className="size-3.5 text-tech" /></div>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-40 ">{description}</p>
                </div>}
            </div>

        </div>
    )
}

function Separator() {
    return (
        <span className="text-muted-foreground/40">/</span>
    )
}
function Separator2() {
    return (
        <span className="text-muted-foreground/40 pt-1">
            <ChevronRight className="size-4" />
        </span>
    )
}