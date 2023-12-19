import * as React from "react";
import { Link } from "react-router-dom";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { MainNavItem } from "@/types"

interface MainNavProps {
    items?: MainNavItem[]
    children?: React.ReactNode
}


export const MainNav: React.FC<MainNavProps> = ({ items }) => {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex-1 justify-between flex gap-3">
            <Link to="/" className="hidden space-x-2 md:flex">
                <Icons.logo className="text-primary" />
                <span className="hidden font-bold sm:inline-block">Foody</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
                {items?.map((item, index) => (
                    <Link
                        key={index}
                        to={item.disabled ? "#" : item.href}
                        className={cn(
                            "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                            item.disabled && "cursor-not-allowed opacity-80"
                        )}
                    >
                        {item.title}
                    </Link>
                ))}
            </nav>
            <Button
                className="flex items-center gap-2  md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Icons.close /> : <Icons.logo />}
            </Button>
            {showMobileMenu && <MobileNav />}
        </div>
    );
};
