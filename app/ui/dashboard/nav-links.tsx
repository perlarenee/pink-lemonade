"use client";

import {
    UserIcon,
    UserGroupIcon,
    HomeIcon,
    PaperAirplaneIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

//map of links to display in the navigation
const links = [
    {
        name: 'HOME', href: '/', icon: HomeIcon
    }, 
    {
        name: 'PROFILE', href: '/profile', icon: UserIcon
    },
    {
        name: 'CONTRIBUTORS', href: '/contributors', icon: PaperAirplaneIcon
    },
];

export default function NavLinks(){
    const pathname = usePathname();
    return (
        <>
            {links.map((link)=>{
                const LinkIcon = link.icon;
                return(
                    <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm  hover:text-slate-50 md:flex-none md:justify-start md:p-2 md:px-3   ',
                        {
                          'text-slate-50': pathname === link.href,
                        },
                      )}
                    >
                    <LinkIcon className="w-6" />
                    <p className="">{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}