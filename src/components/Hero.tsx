import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline/next"));

export default function Hero() {
    return (
        <>
            <div className="h-screen relative w-full">
                {/* <div className="h-screen absolute inset-0 z-0 pointer-events-none select-none m-0 p-0">
                    <video
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="md:h-auto md:w-screen md:aspect-auto"
                    >
                        <source
                            src="../../assets/Untitled.mov"
                            className="object-contain object-center h-screen"
                        />
                    </video>
                </div> */}
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src="../../assets/bg-hero-video.mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Suspense fallback={<div className="h-screen absolute inset-0 bg-none" />}>
                    <Spline
                        scene="https://prod.spline.design/OxQV59a9KqPrdaYL/scene.splinecode"
                        className="absolute h-full w-full inset-0 z-0 !bg-none"
                    />
                </Suspense>
            </div>
        </>
    );
}
