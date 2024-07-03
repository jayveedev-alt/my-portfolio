import { motion, useInView } from "framer-motion"

import PageHeader from "./components/PageHeader";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { DiAndroid, DiBitbucket, DiBootstrap, DiCodeigniter, DiComposer, DiCss3, DiDjango, DiGit, DiHtml5, DiJqueryLogo, DiJsBadge, DiMysql, DiNpm, DiPhonegap, DiPhotoshop, DiPhp, DiPython, DiReact, DiVisualstudio, DiYii } from "react-icons/di";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import hero from "@/assets/images/hero.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProjects } from "@/data/data";

export default function LandingPage() {

    const homeRef = useRef(null);
    const homeInView = useInView(homeRef);

    const aboutRef = useRef(null);
    const aboutInView = useInView(aboutRef);

    const projectRef = useRef(null);
    const projectInView = useInView(projectRef);

    const contactRef = useRef(null);
    const contactInView = useInView(contactRef);

    const homeScroll = () => homeRef.current.scrollIntoView({ behavior: 'smooth' });
    const aboutScroll = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    const projectScroll = () => projectRef.current.scrollIntoView({ behavior: 'smooth' });
    const contactScroll = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });

    const messageMe = () => {
        window.location.href = 'mailto:zbenedictjhon97@gmail.com';
    }

    return (
        <>
            <PageHeader aboutScroll={aboutScroll} homeScroll={homeScroll} projectScroll={projectScroll} contactScroll={contactScroll} messageMe={messageMe} />

            <section className="home" ref={homeRef}>
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <motion.img src={hero} className="hero mb-10" />
                    <motion.p
                        className="text-2xl font-semibold text-white"
                        animate={{ y: homeInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        I'm John Benedit Santos
                    </motion.p>
                    <motion.h1
                        className="font-bold max-w-sm md:max-w-2xl lg:max-w-3xl text-3xl md:text-5xl lg:text-7xl text-white"
                        animate={{ scale: homeInView ? 1.2 : 1 }}
                        transition={{ delay: 0.3, ease: 'linear' }}
                    >
                        A Freelance Full-stack Developer
                    </motion.h1>
                    <div className="mt-10 flex items-center">
                        <motion.button
                            onClick={aboutScroll}
                            className="bg-white text-primary rounded-full py-3"
                            animate={{ width: homeInView ? '200px' : '120px', }}
                            transition={{ delay: 0.3, ease: 'linear' }}
                            whileHover={{ scale: 1.2 }}
                            style={{ width: '120px' }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </div>
            </section>

            <section className="about" ref={aboutRef} >
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <motion.h1
                        className="font-bold text-white text-2xl lg:text-5xl md:text-4xl"
                        animate={{ y: aboutInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        About Me
                    </motion.h1>
                    <motion.small
                        className="text-justify text-white"
                        animate={{ y: aboutInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        Explore Now
                    </motion.small>
                    <motion.p
                        className="mt-7 max-w-sm md:max-w-2xl lg:max-w-3xl text-white font-mono"
                        animate={{ y: aboutInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        Your friendly software engineer with a natural talent for turning web and mobile development into digital magic.
                        As a full-stack developer, I don't just write code – I aim to create seamless and amazing user experiences
                    </motion.p>
                    <motion.p
                        className="mt-3 max-w-sm md:max-w-2xl lg:max-w-3xl text-white font-mono"
                        animate={{ y: aboutInView ? -10 : 10 }}
                        transition={{ delay: 0.6, ease: 'easeOut' }}
                    >
                        I honed my skills as a full-stack developer at Tranzend Solution and Trading Corporation,
                        where I gained several years of experience in system creation and had the wonderful opportunity to be part of the IT dream team.
                        Through my work on the detailed aspects of full-stack development, I have specialized in building robust and scalable solutions.
                    </motion.p>
                    <Carousel className="text-white mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl">
                        <CarouselContent className="">
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiJsBadge className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiYii className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiReact className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiMysql className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiGit className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20 ">
                                <DiBitbucket className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20 ">
                                <DiBootstrap className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiCodeigniter className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiNpm className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiCss3 className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiPython className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiHtml5 className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiJqueryLogo className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiVisualstudio className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiPhotoshop className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiPhp className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiPhonegap className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiDjango className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiComposer className="icon-skills" />
                            </CarouselItem>
                            <CarouselItem className="pl-1 basis-1/20">
                                <DiAndroid className="icon-skills" />
                            </CarouselItem>


                        </CarouselContent>
                    </Carousel>
                </div>
            </section>

            <section className="project" ref={projectRef} >
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <motion.h1
                        className="font-bold text-white text-2xl lg:text-5xl md:text-4xl"
                        animate={{ y: projectInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        Projects
                    </motion.h1>
                    <motion.small
                        className="text-justify text-white mb-7"
                        animate={{ y: projectInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        Explore Now
                    </motion.small>

                    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl">
                        <CarouselContent>
                            {getProjects.map((item, key) => {
                                return (
                                    <CarouselItem key={key}>
                                        <div>
                                            <h1 className="font-bold text-white text-2xl">{item.title}</h1>
                                            <p className="text-white font-mono">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="bg-white p-1 shadow-2xl mt-2">
                                            <img src={item.src} />
                                        </div>
                                        <div className="mt-2 text-right">
                                            {item.tech.map((item, key1) => {
                                                return (<small key={key1} className="bg-white py-1 px-2 text-xs text-black font-mono ml-2">{item}</small>)
                                            })}
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>

            <section className="contact" ref={contactRef} >
                <div className="h-screen flex flex-col items-center justify-center text-center">
                    <motion.h1
                        className="font-bold text-white text-2xl lg:text-5xl md:text-4xl"
                        animate={{ y: contactInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        className="max-w-sm md:max-w-2xl lg:max-w-3xl my-7 text-white font-mono"
                        animate={{ y: contactInView ? -10 : 10 }}
                        transition={{ delay: 0.3, ease: 'easeOut' }}
                    >
                        Any type of questions or discussion let's talk. My inbox is always open. Whether you have a question or just want to say hi.
                    </motion.p>
                    <motion.button
                        onClick={messageMe}
                        className="bg-white text-primary rounded-full py-3"
                        animate={{ width: contactInView ? '220px' : '130px', }}
                        transition={{ delay: 0.3, ease: 'linear' }}
                        whileHover={{ width: '130px' }}
                        style={{ width: '220px' }}
                    >
                        Say Hello
                    </motion.button>
                </div>
            </section>
        </>
    )
}