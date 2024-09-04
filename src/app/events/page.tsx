import { CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import placeHolder from "../../../public/assets/placeholder.png";
import { cn } from "@/lib/utils";

export default function Events() {
    const eventsList = [
        { title: "Kalakshetra", image: placeHolder.src, link: "/events/kalakshetra" },
        { title: "Proshows", image: placeHolder.src, link: "#" },
        { title: "Workshops", image: placeHolder.src, link: "#" },
        { title: "Tech", image: placeHolder.src, link: "#" },
        { title: "SpotEvents", image: placeHolder.src, link: "#" },
    ];

    return (
        <div className="py-8 px-4 md:py-28 space-y-6">
            <section className="flex flex-wrap justify-center w-full gap-4 md:gap-10 px-4 md:px-24">
                {eventsList.map((event, index) => {
                    if (event.title === "Kalakshetra") {
                        return (
                            <Link href={event.link} key={index}>
                                <CardContainer
                                    key={index}
                                    className={cn(
                                        "w-[300px] bg-gradient-to-br from-[rgba(255,255,255,20)] to-[rgba(255,255,255,0)] rounded-[20px]",
                                        "card-container-events"
                                    )}
                                >
                                    <div className="w-full p-6 backdrop-blur-[150px] rounded-[20px]">
                                        <CardItem className="aspect-[7/8] w-full rounded-lg">
                                            <Image
                                                fill
                                                src={event.image}
                                                alt={event.title}
                                                className="rounded-lg"
                                            />
                                        </CardItem>
                                        <CardItem
                                            as="h1"
                                            className="text-center text-yellow w-full text-2xl font-monoton mt-4"
                                        >
                                            {event.title}
                                        </CardItem>
                                    </div>
                                </CardContainer>
                            </Link>
                        );
                    }
                    return (
                        <CardContainer
                            key={index}
                            className={cn(
                                "w-[300px] bg-gradient-to-br from-[rgba(255,255,255,20)] to-[rgba(255,255,255,0)] rounded-[20px]",
                                "card-container-events"
                            )}
                            // className="card-container-events"
                        >
                            <div className="w-full p-6 backdrop-blur-[150px] rounded-[20px]">
                                <CardItem className="aspect-[7/8] w-full rounded-lg">
                                    <Image
                                        fill
                                        src={event.image}
                                        alt={event.title}
                                        className="rounded-lg"
                                    />
                                </CardItem>
                                <CardItem
                                    as="h1"
                                    className="text-center text-yellow w-full text-2xl font-monoton mt-4"
                                >
                                    {event.title}
                                </CardItem>
                            </div>
                        </CardContainer>
                    );
                })}
            </section>
        </div>
    );
}
