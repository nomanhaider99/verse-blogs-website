import { currentUser } from '@/app/actions/currentUser';
import { authenticatedLinksData, linksData } from '@/data/links';
import Link from 'next/link';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavLinks = async () => {
  const user = await currentUser();
  const navigationData = user ? authenticatedLinksData : linksData;

  return (
    <div className="flex items-center gap-8">
      {navigationData.map((item, index) => (
        item.dropdown ? (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger asChild>
              <span className="cursor-pointer text-zinc-800 hover:text-darkblue">
                {item.link}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[15vw] flex flex-col gap-1'>
              {item.dropdown.map((subItem, subIndex) =>
                subItem?.dropdown ? (
                  // Nested dropdowns
                  <DropdownMenu key={subIndex}>
                    <DropdownMenuTrigger asChild>
                      <DropdownMenuItem>
                        {subItem.link}
                      </DropdownMenuItem>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {subItem.dropdown.map((nestedItem, nestedIndex) => (
                        <DropdownMenuItem key={nestedIndex} asChild>
                          <Link href={nestedItem.route || ''}>
                            {nestedItem.link}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <DropdownMenuItem key={subIndex} asChild>
                    <Link href={subItem.route || ''}>
                      {subItem.link}
                    </Link>
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            className="text-zinc-800 hover:text-darkblue"
            href={item.route || ''}
            key={index}
          >
            {item.link}
          </Link>
        )
      ))}
    </div>
  );
};

export default NavLinks;
