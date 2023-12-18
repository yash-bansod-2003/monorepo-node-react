import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Icons } from "@/components/icons";

interface MobileNavProps {
    children?: React.ReactNode;
}

export const MobileNav: React.FC<MobileNavProps> = ({ children }) => {
    return (
        <div
            className={cn(
                "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <Link to="/" className="flex items-center space-x-2">
                    <Icons.logo />
                    <span className="font-bold">Foody</span>
                </Link>
                <nav className="grid grid-flow-row auto-rows-max text-sm">
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
                {children}
            </div>
        </div>
    );
};
