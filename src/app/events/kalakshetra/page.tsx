import { HoverEffect } from "@/components/ui/CardHoverEffect";
import GradualSpacing from "@/components/ui/gradual-spacing";
import placeHolder from "../../../../public/assets/placeholder.png";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog";
import Image from "next/image";
import Location from "../../../../public/assets/icons/map-marker.svg";
import Time from "../../../../public/assets/icons/clock-three.svg";
import Calender from "../../../../public/assets/icons/calendar-lines.svg";

const KALAKSHETRAEVENTS = [
    {
        event: "Let's Nacho",
        venue: "Indoor Stadium",
        timings: "10:30 A.M - 12:30 A.M",
        image: placeHolder.src,
        day: "Day 1",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Voice of MM",
        venue: "Indoor Stadium",
        timings: "01:00 P.M - 02:30 P.M",
        image: placeHolder.src,
        day: "Day 1",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Band Battle",
        venue: "Indoor Stadium",
        timings: "03:00 P.M - 04:00 P.M",
        image: placeHolder.src,
        day: "Day 1",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Ramp Walk",
        venue: "Indoor Stadium",
        timings: "11:00 A.M - 01:00 P.M",
        image: placeHolder.src,
        day: "Day 2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Picture Perfect (Photography Contest)",
        venue: "Room no - 4102",
        timings: "10:30 A.M - 12:00 P.M",
        image: placeHolder.src,
        day: "Day 1",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Karaoke Catchup",
        venue: "Room no - 4118",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Hall of Game (Play Station)",
        venue: "Room no - 4117",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Chicken Dinner (PubG)",
        venue: "Room no - 4116",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "High Jinks - Buzz Wire",
        venue: "G-Block Pathway",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "High Jinks - Push-up Challenge",
        venue: "G-Block Main Entrance",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Whisper Challenge",
        venue: "Room no - 4103",
        timings: "11:00 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Hand DIY T-shirts",
        venue: "G-Block Pathway",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Period Pain Simulator",
        venue: "G-Block Main Entrance",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Actomania (Dialogue King)",
        venue: "Room no - 4104",
        timings: "11:00 A.M",
        image: placeHolder.src,
        day: "Day 1",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Ultimate Battle - Short Film",
        venue: "Room no - 4106",
        timings: "11:00 A.M",
        image: placeHolder.src,
        day: "Day 2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Ultimate Battle - Sitcom",
        venue: "Room no - 4105",
        timings: "11:00 A.M",
        image: placeHolder.src,
        day: "Day 2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Ultimate Battle - Reel Master",
        venue: "Room no - 4103",
        timings: "11:00 A.M",
        image: placeHolder.src,
        day: "Day 2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Ultimate Battle - Meme Challenge",
        venue: "Room no - 4104",
        timings: "11:00 A.M",
        image: placeHolder.src,
        day: "Day 2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Ultimate Battle - Stand-up Talkies",
        venue: "Room no - 4101",
        timings: "11:00 A.M",
        image: placeHolder.src,
        day: "Day 2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
        event: "Turbo Tracks Challenge (F1 race in mini track)",
        venue: "Beside G-Block",
        timings: "10:30 A.M",
        image: placeHolder.src,
        day: "Day 1,2",
        description:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    // { title: "Nacho Dil Se", image: placeHolder.src, link: "#" },
];

function Kalakshetra() {
    return (
        <div className="py-8 px-4 md:py-28 space-y-6">
            <GradualSpacing
                text="Kalakshetra"
                className="text-center text-[3.538rem] md:text-5xl tracking-tighter font-moul"
            />
            {/* <HoverEffect items={KALAKSHETRAEVENTS} /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {KALAKSHETRAEVENTS.map((event, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div className="relative">
                                <img
                                    src={event.image}
                                    alt={event.event}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-xl font-bold">{event.event}</h3>
                                    <p className="text-white text-sm">{event.timings}</p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="hidden">{event.event}</DialogTitle>
                                <DialogDescription className="hidden">
                                    {event.description}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col md:flex-row p-10 bg-white">
                                <Image
                                    src={event.image}
                                    height={450}
                                    width={450}
                                    alt={event.event}
                                    className="object-cover rounded-lg object-center"
                                />
                                <div className="flex flex-col justify-between">
                                    <h1 className="font-sulpher text-[#ff5f1f] text-xl">
                                        {event.event}
                                    </h1>
                                    <p className="font-sulpher">{event.description}</p>
                                    <div className="flex justify-between items-center h-fit">
                                        <div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src={Calender}
                                                    height={24}
                                                    width={24}
                                                    alt="icon"
                                                />
                                                <p>{event.day}</p>
                                            </div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src={Location}
                                                    height={24}
                                                    width={24}
                                                    alt="icon"
                                                />
                                                <p>{event.venue}</p>
                                            </div>
                                            <div className="flex items-center h-fit gap-4">
                                                <Image
                                                    src={Time}
                                                    height={24}
                                                    width={24}
                                                    alt="icon"
                                                />
                                                <p>{event.timings}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}

export default Kalakshetra;
