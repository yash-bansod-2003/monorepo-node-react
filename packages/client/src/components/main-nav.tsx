import * as React from "react";
import { Link } from "react-router-dom";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav"

export const MainNav = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex gap-3">
            <Link to="/" className="hidden space-x-2 md:flex">
                <Icons.logo />
                <span className="hidden font-bold sm:inline-block">Foody</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
                <Link
                    to={"#"}
                    className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    )}
                >
                    Home
                </Link>
                <Link
                    to={"#"}
                    className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    )}
                >
                    About
                </Link>
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
