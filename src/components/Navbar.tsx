"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
    // const path = window.location.pathname;
    const path = usePathname();
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);

    return (
        <>
            <header className="fixed rounded-b-[50px] top-0 inset-x-0 z-[100] hidden md:block w-full h-20 md:px-20 font-sulpher font-bold text-[18px]">
                <nav className="w-full h-full flex items-center justify-evenly">
                    <div className="h-full flex items-center justify-center gap-12">
                        <Link
                            href="/"
                            className={` ${path === "/" && "text-[#feca00]"}`}
                            // onClick={() => (window.location.pathname = "/")}
                        >
                            Home
                        </Link>
                        <Link
                            href="/events"
                            className={` ${path.includes("/events") && "text-[#feca00]"}`}
                            // onClick={() => (window.location.pathname = "/events")}
                        >
                            Events
                        </Link>
                        {/* <Link
                    href="/merchandise"
                    className={` ${path === "/merchandise" && "text-yellow-400"}`}
                >
                    Merchandise
                </Link> */}
                        <Link
                            href="/gallery"
                            className={`${path === "/gallery" && "text-[#feca00]"}`}
                            // onClick={() => (window.location.pathname = "/gallery")}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/contact"
                            className={` ${path === "/contact" && "text-[#feca00]"}`}
                            // onClick={() => (window.location.pathname = "/contact")}
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center h-full gap-12">
                        <Link
                            href="/register"
                            className={`border-[2px] border-secondary py-2 px-4 ${
                                path === "/register" && "text-[#feca00]"
                            }`}
                            // onClick={() => (window.location.pathname = "/register")}
                        >
                            Register
                        </Link>
                        <Link
                            href="/login"
                            className={`bg-secondary text-black px-4 py-2 border-[2px] border-secondary ${
                                path === "/login" && "text-[#feca00]"
                            }`}
                            // onClick={() => window.location.reload()}
                        >
                            Login
                        </Link>
                    </div>
                </nav>
            </header>

            <div
                onClick={() =>
                    setHamburgerOpen((prev) => {
                        return !prev;
                    })
                }
                className={cn(
                    "m-4 p-3 border-white bg-black/10 backdrop-blur-3xl border rounded-md w-10 aspect-square fixed z-[110] cursor-pointer top-0 left-0 md:hidden flex flex-col justify-between items-start transition-all ease-in-out duration-150",
                    {
                        "items-center justify-center": isHamburgerOpen,
                    }
                )}
            >
                <span
                    className={cn(
                        "w-full h-[0.120rem] bg-white rounded-md transition-all ease-in-out duration-500",
                        {
                            "transform rotate-[135deg] w-6 absolute": isHamburgerOpen,
                        }
                    )}
                />
                <span
                    className={cn("w-2/3 h-0.5 bg-white rounded-md transition-all ease-in-out", {
                        "opacity-0": isHamburgerOpen,
                    })}
                />
                <span
                    className={cn(
                        "w-full h-[0.120rem] bg-white rounded-md transition-all ease-in-out duration-500",
                        {
                            "transform -rotate-[135deg] w-6 absolute": isHamburgerOpen,
                        }
                    )}
                />
            </div>

            <section
                className={cn(
                    "fixed z-[100] pl-6 pb-8 pr-10 bg-white/5 backdrop-blur-3xl opacity-0 rounded-[14px] pt-20 border border-white flex flex-col gap-6 -translate-x-[101%] transition-all ease-in-out duration-700",
                    {
                        "m-2 translate-x-0 opacity-100": isHamburgerOpen,
                    }
                )}
            >
                <Link
                    href="/"
                    className={` ${path === "/" && "text-[#feca00]"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/events"
                    className={` ${path === "/events" && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Events
                </Link>
                {/* <Link
                    href="/merchandise"
                    className={` ${path === "/merchandise" && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Merchandise
                </Link> */}
                <Link
                    href="/gallery"
                    className={` ${path === "/gallary" && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Gallery
                </Link>
                <Link
                    href="/contact"
                    className={` ${path === "/contact" && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Contact
                </Link>
                <Link
                    href="/register"
                    className={` ${path === "/register" && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Register
                </Link>
                <Link
                    href="/login"
                    className={` ${path === "/login" && "text-yellow-400"}`}
                    onClick={() => setHamburgerOpen(false)}
                >
                    Login
                </Link>
            </section>
        </>
    );
}

export default Navbar;
