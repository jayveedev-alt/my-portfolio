import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { FadeText } from "../ui/fade-text";


interface headerProps {
    homeScroll: () => void;
    aboutScroll: () => void;
    projectScroll: () => void;
    workScroll: () => void;
    contactScroll: () => void;
}

export default function Header({ homeScroll, aboutScroll, projectScroll, workScroll, contactScroll }: headerProps) {
    return (
        <header className="relative sticky top-0 z-50 py-4 bg-background/60 backdrop-blur">
            <FadeText
                direction="down"
                framerProps={{
                    show: { transition: { delay: 0.2, duration: 0.2 } },
                }}
                text={(
                    <div className="flex justify-between items-center w-11/12 md:w-4/5 mx-auto">
                        <p className="relative mr-6 flex items-center space-x-2 text-primary">
                            <span className="font-bold text-xl">@jayveedev.alt</span>
                        </p>
                        <div className="hidden lg:block">
                            <div className="flex items-center">
                                <NavigationMenu className="mr-10">
                                    <NavigationMenuList>
                                        <NavigationMenuItem onClick={homeScroll}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                home
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem onClick={projectScroll}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                projects
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem onClick={workScroll}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                experiences
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem onClick={aboutScroll}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                about
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem onClick={contactScroll}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                contact
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                <div className="gap-2 flex">
                                    <Button
                                        variant="destructive"
                                        onClick={() => window.location.href = 'mailto:zbenedictjhon97@gmail.com'}
                                    >
                                        !debug
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            />
        </header>
    )
}