"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    MessageSquare,
    ImageIcon,
    VideoIcon,
    Music, Settings, Code
} from "lucide-react";

import { FreeCounter } from "@/components/free-counter";
import { Montserrat } from 'next/font/google'




const poppins = Montserrat({
    weight: "600",
    subsets: ["latin"]

});

const routes = [{

    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
},

{
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-700"
},

{
    label: "Image Generation",
    icon: ImageIcon,
    href: "/iamge",
    color: "text-pink-700"
},


{
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700"
},



{
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerlad-700"
},


{
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700"
},

{
    label: "Settings",
    icon: Settings,
    href: "/settings",
},






];


export const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
  }: {
    apiLimitCount: number;
    isPro: boolean;
  }) => {

    const pathname = usePathname();
  

    return (

        <div className=" space-y-4 flex flex-col h-full bg-[#112827] text-white ">
            <div className="px-3 py-2 flex-1">

                <Link href="/dashboard" className="flex items-center pl-3 mb-14" >
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill alt="Logo"
                        src="/logo.png" />
                    </div>
                    <h1 className={cn("text-2xl font-bold", poppins.className)}>

                        Afsa</h1>
                </Link>



                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3w-full justify-start font-medium+ cursor-pointer  hover:text-white hover:bg-white/10 rounded-lg transition" ,pathname===route.href ? "text-white bg-white/10":"text-zinc-400")}
                    
                    
                    >

                    <div className=" flex items-center flex-1 " >

                        <route.icon className={cn(" h-5 w-5 mr-3, route.color",route.color)} />

                        {route.label}
                    </div>

                </Link>


                )
                
                )}


            </div>
           
        </div>
        <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}/>

    </div >
);
};
