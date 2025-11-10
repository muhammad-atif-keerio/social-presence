"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/user/317kzghvn4lp6qzvcuy5y3kpib6u",
    icon: "/icons/spotify.svg",
  },
  {
    name: "GitHub",
    url: "http://github.com/muhammad-atif-keerio",
    icon: "/icons/github.svg",
  },
  {
    name: "Discord",
    url: "https://discord.gg/wdQf5cXa",
    icon: "/icons/discord.svg",
  },
  {
    name: "Instagram",
    url: "http://instagram.com/atifjan536",
    icon: "/icons/instagram.svg",
  },
];

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioStarted, setAudioStarted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const startAudio = async () => {
    if (audioRef.current && !audioStarted) {
      try {
        // Unmute and play the audio
        audioRef.current.muted = false;
        await audioRef.current.play();
        setAudioStarted(true);
        setShowOverlay(false);
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    }
  };

  useEffect(() => {
    // Auto-hide overlay after 5 seconds if user hasn't interacted
    const autoHideTimer = setTimeout(() => {
      if (!audioStarted) {
        setShowOverlay(false);
      }
    }, 5000);

    // Check if audio is already playing (muted autoplay)
    if (audioRef.current) {
      const checkAudio = setInterval(() => {
        if (audioRef.current && !audioRef.current.paused && audioRef.current.muted && !audioStarted) {
          // Audio is playing but muted, show overlay to encourage interaction
          setShowOverlay(true);
        }
      }, 500);

      return () => {
        clearTimeout(autoHideTimer);
        clearInterval(checkAudio);
      };
    }

    return () => clearTimeout(autoHideTimer);
  }, [audioStarted]);

  return (
    <section 
      className={`relative h-screen size-full ${showOverlay ? 'cursor-pointer' : ''}`}
      onClick={showOverlay ? startAudio : undefined}
      onTouchStart={showOverlay ? startAudio : undefined}
    >
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
        muted 
        autoPlay 
        className="hidden" 
      />
      <div className="absolute inset-0 size-full bg-black/30 z-20" />
      
      {/* Interactive Audio Overlay */}
      {showOverlay && (
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-1000"
          onClick={(e) => {
            e.stopPropagation();
            startAudio();
          }}
        >
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-ping"></div>
              <div className="relative w-20 h-20 rounded-full bg-white/10 backdrop-filter backdrop-blur-md border border-white/30 flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-white text-lg font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Tap to experience
              </p>
              <p className="text-white/70 text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                Click anywhere to start
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative z-40 h-screen size-full">
        {/* <Image src="/icons/speaker.svg" alt="speaker" width={800} height={800} className="size-10 object-contain" /> */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative">
            <div className="absolute inset-0 size-full z-20 bg-[url('/icons/speak_bubble.png')] bg-cover bg-center" />
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl -z-10 w-[118px] h-[118px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width={300}
              height={300}
              className="rounded-full w-[118px] h-[118px] object-cover relative z-10"
            />
          </div>
          <h1 className="text-4xl font-medium mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(255,255,255,0.3)]">MUHAMMAD ATIF</h1>
          <div className="flex gap-x-2 mt-5 items-center justify-center">
            <Image
              src="/icons/location_pin.svg"
              alt="location_pin"
              width={300}
              height={300}
              className="rounded-full w-4 h-4 object-cover filter brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.6)]"
            />
            <p className="text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.6)]">Galexy</p>
          </div>

          <div className="rounded-3xl mt-6 bg-white/10 bg-clip-padding backdrop-filter  flex items-center gap-3 p-2.5 w-[224px] border border-white/20">
            <div className="relative">
              <Image
                src="/avatar.jpg"
                alt="avatar"
                width={300}
                height={300}
                className="rounded-full w-[70px] h-[70px] object-cover border border-white/20"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-white">.AADI.</p>
                {/* <div className="w-3 h-3 bg-blue-500 rounded-full border border-white/50 flex items-center justify-center drop-shadow-[0_0_4px_rgba(59,130,246,0.8)]">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div> */}
              </div>
              <p className="text-xs font-light text-white/70">
                Currently doing nothing
              </p>
            </div>
          </div>
          <div className="gap-x-4 mt-9 flex items-center justify-center">
            {socialLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link href={link.url} target="_blank">
                  <Image
                    src={link.icon}
                    alt={link.name.toLowerCase()}
                    width={300}
                    height={300}
                    className="w-9 h-9 object-cover filter brightness-110 transition-all drop-shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_24px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(255,255,255,1),0_0_32px_rgba(255,255,255,0.8)]"
                  />
                </Link>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/10 backdrop-filter backdrop-blur-sm rounded-3xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/20">
                  {link.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
