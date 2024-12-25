import { Facebook, FacebookIcon, GithubIcon, Link, LinkedinIcon } from "lucide-react";
import { Button } from "../ui/button";
import { FadeText } from "../ui/fade-text";
import { Badge } from "../ui/badge";
import dataSet from "@/data/data";
import { Card } from "../ui/card";
import Header from "../common/Header";
import { cn } from "@/lib/utils";
import DotPattern from "../ui/dot-pattern";
import hero from "@/assets/img/hero.jpg";
import react from "@/assets/react.svg";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function HomePage() {

    const homeRef = useRef(null);
    const projectRef = useRef(null);
    const workRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const homeInView = useInView(homeRef);
    const projectInView = useInView(projectRef);
    const workInView = useInView(workRef);
    const aboutInView = useInView(aboutRef);
    const contactInView = useInView(contactRef);

    const homeScroll = () => homeRef.current.scrollIntoView({ behavior: 'smooth' });
    const projectScroll = () => projectRef.current.scrollIntoView({ behavior: 'smooth' });
    const workScroll = () => workRef.current.scrollIntoView({ behavior: 'smooth' });
    const aboutScroll = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    const contactScroll = () => contactRef.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <Header
                homeScroll={homeScroll}
                projectScroll={projectScroll}
                workScroll={workScroll}
                aboutScroll={aboutScroll}
                contactScroll={contactScroll}
            />

            <ScrollProgress className="top-[65px]" />

            <div ref={homeRef} className="relative flex w-full flex-col items-center px-4 py-32 sm:px-6 sm:py-24 md:py-32 lg:px-8">
                <div className="flex w-full max-w-6xl flex-col space-y-4 overflow-hidden pt-8">
                    <FadeText
                        className="text-muted-foreground font-mono text-xl font-medium"
                        direction="up"
                        framerProps={{
                            show: { transition: { delay: 0.4 } },
                        }}
                        text="Hello, they call me Jayvee."
                    />
                    <FadeText
                        className="text-4xl max-w-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl"
                        direction="up"
                        framerProps={{
                            show: { transition: { delay: 0.6 } },
                        }}
                        text={(
                            <>Turning Ideas into <span className="text-primary">Functional</span> and <span className="text-primary">User-Centered</span> Web Solutions</>
                        )}
                    />
                    <FadeText
                        direction="up"
                        framerProps={{
                            show: { transition: { delay: 0.8 } },
                        }}
                        text={(
                            <div className="pt-8 flex space-x-8">
                                <Button onClick={projectScroll}>
                                    _projects
                                </Button>
                                <div className="space-x-2">
                                    {dataSet.socmed.map((item, i) => (
                                        <Button
                                            key={i}
                                            variant="secondary"
                                            size="icon"
                                            className="rounded-full bg-gray-600 hover:bg-gray-500 text-white"
                                            onClick={() => window.location.href = item.href}
                                        >
                                            <item.icon />
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}
                    />

                </div>
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>

            {/* projects */}
            <div ref={projectRef} className="relative flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
                <div className="flex w-full max-w-6xl flex-col space-y-4 overflow-hidden pt-8">
                    <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-2xl md:text-3xl">Featured Projects</h1>
                    <p className="text-primary font-mono font-bold">_selected_projects</p>
                    <div>
                        {dataSet.featuredProjects.map((item, i) => (
                            <FadeText
                                key={i}
                                direction="up"
                                framerProps={{
                                    show: { transition: { delay: 1 + i * 0.2 } },
                                }}
                                text={(
                                    <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-5 gap-4 pt-4">

                                        <div className="lg:col-span-3 md:col-span-3">
                                            <img
                                                src={item.img}
                                                alt="project1"
                                                className="rounded-lg border shadow"
                                            />
                                        </div>
                                        <div className="lg:col-span-2 md:col-span-2 space-y-4">
                                            <h2 className="text-3xl font-bold text-foreground">{item.title}</h2>
                                            <p className="text-muted-foreground font-mono text-lg">{item.description}</p>
                                            <div className="space-x-1 space-y-1">
                                                {item.tech.map((value, i) => (
                                                    <Badge key={i}>{value}</Badge>
                                                ))}
                                            </div>
                                            <div className="pt-6 flex space-x-2">
                                                <Button
                                                    className=""
                                                    disabled={item.links.live ? false : true}
                                                    onClick={() => {
                                                        if(item.links.live)
                                                            window.location.href = item.links.live
                                                        return null
                                                    }}
                                                >
                                                    take a look
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    className="rounded-full bg-gray-600 hover:bg-gray-500"
                                                    disabled={item.links.github ? false : true}
                                                    onClick={() => {
                                                        if(item.links.github)
                                                            window.location.href = item.links.github
                                                        return null
                                                    }}
                                                >
                                                    <GithubIcon />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
                <div className="flex w-full max-w-6xl flex-col space-y-4 overflow-hidden pt-8">
                    <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-2xl md:text-3xl">Noteworthy Projects</h1>
                    <p className="text-primary font-mono font-bold">_turning_ideas_into_reality</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 pt-4">
                        {dataSet.noteworthyProjects.map((item) => (
                            <Card key={item.id} className="p-7 bg-muted">
                                <div className="space-y-4">
                                    <div className="pt-6 flex justify-end space-x-2">
                                        <Button
                                            size="icon"
                                            className="rounded-full bg-gray-600 hover:bg-gray-500"
                                            disabled={item.links.live ? false : true}
                                        >
                                            <Link />
                                        </Button>
                                        <Button
                                            size="icon"
                                            className="rounded-full bg-gray-600 hover:bg-gray-500"
                                            disabled={item.links.github ? false : true}
                                        >
                                            <GithubIcon />
                                        </Button>
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
                                    <p className="text-muted-foreground font-mono text-lg text-justify">{item.description}</p>
                                    <div className="space-x-1 space-y-1">
                                        {item.tech.map((value, i) => (
                                            <Badge key={i}>{value}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* work experience */}
            <div ref={workRef} className="relative flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
                <div className="flex w-full max-w-6xl flex-col space-y-4 overflow-hidden pt-8">
                    <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-2xl md:text-3xl">Work Experiences</h1>
                    <p className="text-primary font-mono font-bold">_what_i_have_done?</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 pt-4">
                        {dataSet.workExperience.map((item) => (
                            <div key={item.id}>
                                <div className="space-y-3">
                                    <div>
                                        <h2 className="text-2xl font-light text-muted-foreground">{item.company}</h2>
                                        <span className="text-muted-foreground font-mono font-medium text-md">{item.title}</span>
                                    </div>
                                    <p className="text-muted-foreground font-mono font-medium text-md text-justify">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* about me */}
            <div ref={aboutRef} className="relative flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
                <div className="flex w-full max-w-6xl flex-col space-y-4 pt-8">
                    <div className="">
                        <Card className="p-7 bg-muted">
                            <div className="-mt-32 flex justify-end -mb-24">
                                <img src={hero} className="rounded-full h-52 shadow" />
                            </div>
                            <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-2xl md:text-3xl">About</h1>
                            <p className="text-primary font-mono font-bold">_what_i_love_to_do?</p>
                            <div className="pt-4 space-y-4">
                                {dataSet.about.map((item, i) => (
                                    <p key={i} className="text-muted-foreground font-mono font-medium text-md text-justify">{item}</p>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* contact */}
            <div ref={contactRef} className="relative flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
                <div className="flex w-full max-w-6xl flex-col space-y-4 pt-8 text-center">
                    <h1 className="text-2xl font-extrabold leading-tight text-foreground sm:text-2xl md:text-3xl">Get In Touch</h1>
                    <p className="text-primary font-mono font-bold">Feel free to reach out for collaborations or just a friendly chat!</p>
                    <div className="pt-4">
                        <Button onClick={() => window.location.href = 'mailto:zbenedictjhon97@gmail.com'}>Say Hello</Button>
                    </div>
                </div>
            </div>

            <footer className="relative flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
                <div className="flex w-full max-w-6xl flex-col space-y-4 pt-8">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6 pt-4">
                        <div className="text-center sm:flex space-x-2">
                            {dataSet.socmed.map((item, i) => (
                                <Button
                                    key={i}
                                    size="icon"
                                    className="rounded-full bg-gray-600 hover:bg-gray-500"
                                    onClick={() => window.location.href = item.href}
                                >
                                    <item.icon />
                                </Button>
                            ))}
                        </div>
                        <div className="text-center sm:flex justify-end">
                            <p className="text-center sm:flex items-center text-foreground font-mono font-bold text-md">
                                Created with
                                <img src={react} className="h-4 px-1 inline-block" />
                                by John Benedict Santos
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}   