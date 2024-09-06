//import Link from 'next/link';
import {AdminLinks} from './nav-links';
import {PowerIcon} from '@heroicons/react/24/outline';
//import logo
//import signOut from auth


export default function AdminNav(){
    return (
        <div className="flex w-full justify-center justify-between items-center flex-col">
            

            {/*
            <Link
                href="/"
            >
            </Link>
            */}

            <div className="flex w-full justify-center  items-center flex-row gap-5">
                <AdminLinks />
                <form>
                    <button className="flex flex-row gap-2 justify-center items-center">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}