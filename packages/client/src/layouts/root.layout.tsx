import { Link, Outlet } from "react-router-dom";

import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { navConfig } from "@/config/nav";
import { Button } from "@/components/ui/button";

export const RootLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6 gap-6">
                    <MainNav items={navConfig.mainNav} />
                    <nav className="flex items-center gap-2">
                        <Link
                            to="/login"
                            className={cn(
                                buttonVariants({
                                    variant: "secondary",
                                    size: "sm",
                                }),
                                "px-4",
                            )}
                        >
                            Login
                        </Link>

                        <Button variant="ghost" size="icon">
                            <Icons.cart />
                        </Button>
                    </nav>
                </div>
            </header>
            <main className="flex-1">{<Outlet />}</main>
        </div>
    );
};
