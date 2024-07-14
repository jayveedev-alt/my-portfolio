import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion"
import logo from '@/assets/images/logo.png';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";

export default function PageHeader(params) {

    let { homeScroll, aboutScroll, projectScroll, contactScroll, messageMe } = params;

    const { scrollY } = useScroll();
    const [scaleY, setScaleY] = useState(0);
    const [scrollUp, setScrollUp] = useState(true);
    const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        function updateWidth() {
            if (window.innerWidth <= 600) {
                // setScaleY(0);
                setScrollUp(false);
                setIsMobileView(true);
            }
        }

        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, [scaleY]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        scaleY > latest ? setScrollUp(true) : setScrollUp(false);
        setScaleY(latest);
    });

    const mobileMenu = () => {
        if (isMobileView) {
            setIsDrawerMenuOpen(true);
        }
    }

    const handleScrollAndClose = (scrollFunc) => {
        setIsDrawerMenuOpen(false);
        setTimeout(() => {
            scrollFunc()
        }, 500)
    };

    return (
        <motion.div
            className="navbar"
            animate={{
                width: scrollUp ? '70%' : '310px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
            }}
        >
            <div className="logo" onClick={mobileMenu} style={{ backgroundImage: `url(${logo})` }}></div>
            <div className="navbar-items">
                <ul style={{ display: scrollUp ? 'flex block' : 'none' }}>
                    <li onClick={homeScroll}>Home</li>
                    <li onClick={aboutScroll}>About</li>
                    <li onClick={projectScroll}>Projects</li>
                    <li onClick={contactScroll}>Contact</li>
                </ul>
                <button className="btn btn-secondary" onClick={messageMe} style={{ display: scrollUp ? 'none' : 'block' }}>Contact</button>
            </div>

            <Drawer placement="right" open={isDrawerMenuOpen} onClose={() => setIsDrawerMenuOpen(false)}>
                <DrawerOverlay />
                <DrawerContent className="bg-white h-full w-[300px]">
                    <DrawerHeader>
                        <DrawerTitle>
                            <Button onClick={() => setIsDrawerMenuOpen(false)}>
                                <RxCross2 className="mr-2 h-4 w-4" /> Close
                            </Button>
                        </DrawerTitle>
                        <DrawerDescription />
                    </DrawerHeader>
                    <div className="flex flex-col p-3">
                        <div className="mobile-menu">
                            <ul>
                                <li onClick={() => handleScrollAndClose(homeScroll)}>Home</li>
                                <li onClick={() => handleScrollAndClose(aboutScroll)}>About</li>
                                <li onClick={() => handleScrollAndClose(projectScroll)}>Projects</li>
                                <li onClick={() => handleScrollAndClose(contactScroll)}>Contact</li>
                            </ul>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </motion.div>
    );
}