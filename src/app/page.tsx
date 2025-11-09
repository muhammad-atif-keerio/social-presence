"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to play audio when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch {
          // Autoplay was prevented, audio will play on user interaction
          console.log("Audio autoplay prevented, will play on user interaction");
        }
      }
    };

    playAudio();
  }, []);

  return (
    <section className="relative h-screen size-full">
      <video
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 size-full object-cover z-10"
      />
      <audio
        ref={audioRef}
        src="/audio/audio.mp3"
        loop
        className="hidden"
      />
      <div className="absolute inset-0 size-full bg-black/30 z-20" />
      <div className="relative z-40 h-screen size-full">
        {/* <Image src="/icons/speaker.svg" alt="speaker" width={800} height={800} className="size-10 object-contain" /> */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative">
            <div className="absolute inset-0 size-full\ z-20 bg-[url('/icons/speak_bubble.png')] bg-cover bg-center" />
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width={300}
              height={300}
              className="rounded-full w-[118px] h-[118px] object-cover"
            />
          </div>
          <h1 className="text-4xl font-medium mt-2">MUHAMMAD ATIF</h1>
          <div className="flex gap-x-2 mt-5 items-center justify-center">
            <Image
              src="/icons/location_pin.svg"
              alt="location_pin"
              width={300}
              height={300}
              className="rounded-full w-4 h-4 object-cover"
            />
            <p className="text-sm">Galexy</p>
          </div>

          <div className="rounded-3xl mt-6 bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 flex items-center justify-between p-2.5 w-[224px]">
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width={300}
              height={300}
              className="rounded-full border-2 border-white/2 w-[70px] h-[70px] object-cover"
            />
            <div className="space-y-1">
              <p className="text-sm">.AADI.</p>
              <p className="text-xs font-light text-muted-foreground">
                Currently doing nothing
              </p>
            </div>
          </div>
          <div className="gap-x-4 mt-8 flex items-center justify-center">
            <Image
              src="/icons/spotify.svg"
              alt="spotify"
              width={300}
              height={300}
              className="rounded-full w-8 h-8 object-cover"
            />
            <Image
              src="/icons/github.svg"
              alt="github"
              width={300}
              height={300}
              className="rounded-full w-8 h-8 object-cover"
            />
            <Image
              src="/icons/discord.svg"
              alt="discord"
              width={300}
              height={300}
              className="rounded-full w-8 h-8 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
