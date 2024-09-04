import React from "react";
import placeHolder from "../../public/assets/guest-img.svg";
import { Monoton } from "next/font/google";

const monoton = Monoton({ subsets: ["latin"], weight: "400" });

const ProShowsList = [
    {
        day: "Day 1",
        aboutDay:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
        guestImage: placeHolder.src,
        events: "50+ EVENTS",
        countries: "10+ COUNTRIES",
        guestInfo: {
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
            name: "FUNK D",
            aboutGuest:
                "Funk D is known for his Commercial & EDM genre and has played some major festivals like Ultra Music (Europe), Travel to Ultra etc. & most of the Biggest Clubs based out in Amsterdam, Thailand, London & Japan.",
        },
    },
    {
        day: "Day 2",
        aboutDay:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
        guestImage: placeHolder.src,
        events: "50+ EVENTS",
        countries: "10+ COUNTRIES",
        guestInfo: {
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
            name: "DJ PARANOX",
            aboutGuest:
                "Multi award-winning DJ & Music Producer from India, who has carved a niche for himself in Indian Electronic Music. His music releases has been featured on platforms inclusion Zee Music Company, BBC Asian Network, Rolling Stones India, Red Indies & VH1.",
        },
    },
    // {
    //     day: "Day 3",
    //     aboutDay:
    //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum reprehenderit ipsum enim ratione necessitatibus!",
    //     guestImage: placeHolder.src,
    //     events: "50+ EVENTS",
    //     countries: "10+ COUNTRIES",
    //     guestInfo: {
    //         para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque soluta",
    //         name: "DJ Alysha",
    //         aboutGuest:
    //             "DJ Alyshia, from Taiwan, has a strong fanbase of 300k followers. Since starting on her DJ career in 2012 as an amateur DJ, she has now pkayed alongside with TOP 100 DJs, getting requested to play in their shows.",
    //     },
    // },
] as const;

const ProShows = () => {
    return (
        <div className="Sec">
            <h1 className="mb-10 font-bold">PROSHOWS</h1>
            <div className="pro" id="wrapper">
                {ProShowsList.map((proshow, index) => (
                    <div className="proshows-item" key={index}>
                        <div className="proshows-item-day-info">
                            <h1>{proshow.day}</h1>
                            <p>{proshow.aboutDay}</p>
                            {/* <img src={proshow.guestImage} alt="Guest Image" /> */}
                            <div className="h-[374px] w-[247px]"></div>
                        </div>
                        <div className="proshows-item-about">
                            <h1>
                                {proshow.events} <br /> {proshow.countries}
                            </h1>
                            <div className="proshows-about-div">
                                <div className="proshows-guest-info">
                                    <p className="proshows-guest-info-para">
                                        {proshow.guestInfo.para}
                                    </p>
                                    <div>
                                        <h1>{proshow.guestInfo.name}</h1>
                                    </div>
                                    <p>{proshow.guestInfo.aboutGuest}</p>
                                </div>
                                <div className="lineup">
                                    <span className={monoton.className}>LINEUP</span>
                                </div>
                            </div>
                            <div className="call-to-action">
                                <button className="proshows-register">Register</button>
                                <button className="proshows-lineup">VIEW FULL LINEUP</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProShows;
