import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import {Link} from "@radix-ui/react-navigation-menu";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const LayoutMain: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <header className="flex justify-between">
                <p>Title</p>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link href="/">Item One</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link href="/">Item Two</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link href="/">Item Three</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
            <main>
                {children}
            </main>
            <footer>
                2025
            </footer>
        </>
    );
};

export default LayoutMain;