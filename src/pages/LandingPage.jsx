import { motion, useInView } from "framer-motion"
import PageHeader from "./components/PageHeader";
import { useRef } from "react";
import { DiAndroid, DiBitbucket, DiBootstrap, DiCodeigniter, DiComposer, DiCss3, DiDjango, DiGit, DiHtml5, DiJqueryLogo, DiJsBadge, DiMysql, DiNpm, DiPhonegap, DiPhotoshop, DiPhp, DiPython, DiReact, DiVisualstudio, DiYii } from "react-icons/di";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import hero from "@/assets/images/hero.jpg"
import { getProjects } from "@/data/data";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { RxPlusCircled } from "react-icons/rx";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

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

    const webLink = (link) => {
        window.location.href = link;
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
                <div className="flex flex-col items-center justify-center text-center pt-44">
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

                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {getProjects.map((item, key) => {
                                // console.log(item);
                                return (
                                    <div key={key}>
                                        <div className="project-container">
                                            <img src={item.src} className="project-image" />
                                            <div className="project-image-overlay overlay-fade font-mono text-white flex flex-col justify-center items-center">
                                                <Dialog>
                                                    <DialogTrigger>
                                                        <RxPlusCircled size={70} />
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>{item.title}</DialogTitle>
                                                            <img src={item.src} className="project-image" />
                                                            <DialogDescription>{item.desc}</DialogDescription>
                                                        </DialogHeader>
                                                        <div className="">
                                                            {item.tech.map((item, key1) => {
                                                                return (
                                                                    <small key={key1} className=" text-black font-mono">
                                                                        {key1 > 0 ? (" | ") : ("")}{item}
                                                                    </small>
                                                                )
                                                            })}

                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </div>
                                        <div className="text-left mt-1 gap-2">
                                            {item.isGithubLink ? (
                                                <Button onClick={() => webLink(item.link)}>
                                                    <GitHubLogoIcon className="h-4 w-4" />
                                                </Button>
                                            ) : (
                                                <Button onClick={() => webLink(item.link)}>
                                                    <ChevronRightIcon className="mr-2 h-4 w-4" /> Live Website
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
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

            <div className="text-center py-7">
                <label className="font-mono text-white">Made with ❤️ by John Benedict <span className="font-semibold">Santos</span> </label>
            </div>
        </>
    )
}