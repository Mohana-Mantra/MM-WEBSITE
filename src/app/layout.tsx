import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";

const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
    ssr: false,
});

const inter = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

export const metadata: Metadata = {
    title: "Mohana Mantra",
    description:
        "Mohana Mantra is an annual techno-cultural festival held at MB University, and it has been a beloved tradition for over many years. This festival is a celebration of the spirit of innovation, creativity, and talent.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="relative flex flex-col antialiased min-h-screen bg-primary">
                    {/* <DynamicNavbar /> */}
                    <Navbar />
                    <div className="flex-1 flex-grow">{children}</div>
                </main>
            </body>
        </html>
    );
}
