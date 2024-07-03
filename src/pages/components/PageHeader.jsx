import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion"

import logo from '@/assets/images/logo.png';

export default function PageHeader(params) {

    let { homeScroll, aboutScroll, projectScroll, contactScroll, messageMe } = params;

    const { scrollY } = useScroll();
    const [scaleY, setScaleY] = useState(0);
    const [scrollUp, setScrollUp] = useState(true);

    useEffect(() => {
        function updateWidth() {
            if (window.innerWidth <= 515) {
                setScaleY(0);
                setScrollUp(false);
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

    return (
        <motion.div
            className="navbar"
            animate={{
                width: scrollUp ? '70%' : '310px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
            }}
        >
            <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
            <div className="navbar-items">
                <ul style={{ display: scrollUp ? 'flex block' : 'none' }}>
                    <li onClick={homeScroll}>Home</li>
                    <li onClick={aboutScroll}>About</li>
                    <li onClick={projectScroll}>Projects</li>
                    <li onClick={contactScroll}>Contact</li>
                </ul>
                <button className="btn btn-secondary" onClick={messageMe} style={{ display: scrollUp ? 'none' : 'block' }}>Contact</button>
            </div>
        </motion.div>
    );
}