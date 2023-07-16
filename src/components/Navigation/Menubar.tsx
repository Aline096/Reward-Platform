'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Loader2Icon, LogOutIcon } from 'lucide-react';
import { useLogout } from '../hooks/useLogout';

interface NavigationMenuBarProps {
  setIsUserRewards: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAllRewards: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationMenuBar: React.FC<NavigationMenuBarProps> = ({
  setIsUserRewards,
  setIsAllRewards,
}) => {
  const { onSubmit: logOut, loading: loadLogout } = useLogout();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={() => {
                setIsAllRewards(true);
                setIsUserRewards(false);
              }}
            >
              All Rewards
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={() => {
                setIsUserRewards(true);
                setIsAllRewards(false);
              }}
            >
              Your Rewards
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              onClick={logOut}
            >
              {loadLogout ? (
                <Loader2Icon
                  size={20}
                  color="#00ff04"
                  className="animate-spin inline"
                />
              ) : (
                <LogOutIcon color="#ff8585" />
              )}
              {!loadLogout && 'Logout'}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
