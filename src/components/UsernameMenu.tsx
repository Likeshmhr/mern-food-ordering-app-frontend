import { useAuth0 } from '@auth0/auth0-react';
import { CircleUserRound, } from 'lucide-react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Separator } from './ui/separator';
// import React from 'react'

export default function UsernameMenu() {
    const { user, logout } =useAuth0();
    
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2" >
            <CircleUserRound className="text-orange-500" />
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuItem>        
            <Link to="/Manage-restaurant" className="font-bold hover:text-orange-500">
            Manage Restaurant
            </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>        
            <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
            </Link>
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
                <Button onClick={() => logout()}
                className="flex flex-1 font-bold bg-orange-500 rounded-xl hover:bg-gray-500">
                    Log Out
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};
