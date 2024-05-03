"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));
  return (
    <div className="flex h-[50%] w-full flex-row justify-center border-2 border-black relative    ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/trial13.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-row justify-center items-center">
        <Carousel plugins={[plugin.current]} className="w-fit max-w-lg ">
          <CarouselContent>
            <CarouselItem key="1">
              <div className="p-1 ">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div>
                      <span className="text-3xl text-center font-medium tracking-wider">
                        <p className={orbitron.className}>
                          “Working with Astral.ai has been a pleasure and we’ll
                          definitely turn to them for new projects”
                        </p>
                      </span>
                      <span className="flex flex-col items-center pt-10 text-lg font-medium">
                        <p className={orbitron.className}>James Fittin</p>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div>
                      <span className="text-3xl text-center font-medium tracking-wider">
                        <p className={orbitron.className}>
                          Collaborating with Astral.ai has been a delightful
                          experience, and we will surely consider them for
                          future projects.&quot;
                        </p>
                      </span>
                      <span className="flex flex-col items-center pt-10 text-lg font-medium">
                        <p className={orbitron.className}>Alex Honnold</p>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div>
                      <span className="text-3xl text-center font-medium tracking-wider">
                        <p className={orbitron.className}>
                          “It has been a joy to work with Astral.ai, and we are
                          definitely planning to engage with them on upcoming
                          projects”
                        </p>
                      </span>
                      <span className="flex flex-col items-center pt-10 text-lg font-medium">
                        <p className={orbitron.className}>
                          Aditya Prakash Shrivastava
                        </p>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div>
                      <span className="text-3xl text-center font-medium tracking-wider">
                        <p className={orbitron.className}>
                          “Our experience with Astral.ai has been extremely
                          positive, and they will be our go-to choice for any
                          new projects ahead.”
                        </p>
                      </span>
                      <span className="flex flex-col items-center pt-10 text-lg font-medium">
                        <p className={orbitron.className}>
                          Aditya Kumar Mishra
                        </p>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key="5">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div>
                      <span className="text-3xl text-center font-medium tracking-wider">
                        <p className={orbitron.className}>
                          “Working with Astral.ai has been a pleasure and we’ll
                          definitely turn to them for new projects”
                        </p>
                      </span>
                      <span className="flex flex-col items-center pt-10 text-lg font-medium">
                        <p className={orbitron.className}>Somesh Mohanty</p>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
