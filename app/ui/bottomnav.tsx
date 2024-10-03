//import Link from 'next/link';
import NavLinks from './nav-links';
import {PowerIcon} from '@heroicons/react/24/outline';
//import logo
//import signOut from auth


export default function BottomNav(){
    return (
        <div className="flex w-full justify-center justify-between items-center flex-col">
            

            {/*
            <Link
                href="/"
            >
            </Link>
            */}

            <div className="flex w-full justify-center  items-center flex-row gap-2">
                <NavLinks />
            </div>
        </div>
    )
}