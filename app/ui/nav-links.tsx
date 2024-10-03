"use client";

import {
    UserIcon,
    HomeIcon,
    PaperAirplaneIcon,
    BoltIcon,
    LifebuoyIcon,
    BuildingLibraryIcon,
    LightBulbIcon,
    PowerIcon
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

//map of links to display in the navigation
const mainLinks = [
    {
        name: 'HOME', href: '/', icon: HomeIcon
    }, 
    {
        name: 'PROFILE', href: '/profile', icon: UserIcon
    },
    {
        name: 'LIBRARY', href: '/library', icon: BuildingLibraryIcon
    },

];

const adminLinks = [
    {
        name: 'HOME', href: '/', icon: HomeIcon
    }, 
    {
        name: 'DASHBOARD', href: '/admin', icon: LifebuoyIcon
    },
    {
        name: 'CONTRIBUTORS', href: '/contributors', icon: BoltIcon
    },
    {
        name: 'LIBRARY', href: '/library', icon: BuildingLibraryIcon
    },
    
]

export default function NavLinks(){
    const pathname = usePathname();
    return (
        <>
            {mainLinks.map((link,index)=>{
                const LinkIcon = link.icon;
                return(
                    <div key={index}>
                        <Link
                        href={link.href}
                        className={clsx(
                            'group flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm  hover:text-slate-50 md:flex-none md:justify-start md:p-2 md:px-3 ',
                            {
                            'text-slate-50': pathname === link.href,
                            },
                        )}
                        >
                        <LinkIcon className="w-6" />
                        <p className="max-w-0 overflow-hidden group-hover:max-w-80 transition-max-width transition-slowest ease-in-out">{link.name}</p>
                        </Link>
                    </div>
                    
                );
            })}
            <form className="group">
                <button className="flex flex-row gap-2 justify-center items-center">
                    <PowerIcon className="w-6" />
                    <div className="max-w-0 overflow-hidden group-hover:max-w-80 transition-max-width transition-slowest ease-in-out">Sign Out</div>
                </button>
            </form>
        </>
    )
}

export function AdminLinks(){
    const pathname = usePathname();
    return (
        <>
            {adminLinks.map((alink,index)=>{

                const LinkIcon = alink.icon;
                return(
                    <div key={index}>
                        <Link
                        href={alink.href}
                        className={clsx(
                            'group flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm  hover:text-slate-50 md:flex-none md:justify-start md:p-2 md:px-3   ',
                            {
                            'text-slate-50': pathname === alink.href,
                            },
                        )}
                        >
                        <LinkIcon className="w-6" />
                        <p className="max-w-0 overflow-hidden group-hover:max-w-80 transition-max-width transition-slowest ease-in-out">{alink.name}</p>
                        </Link>
                    </div>
                    
                );
            })}
            <form className="group">
                <button className="flex flex-row gap-2 justify-center items-center">
                    <PowerIcon className="w-6" />
                    <div className="max-w-0 overflow-hidden group-hover:max-w-80 transition-max-width transition-slowest ease-in-out">Sign Out</div>
                </button>
            </form>
        </>
    )
}