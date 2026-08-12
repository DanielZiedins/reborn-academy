"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { INTRO_VIDEO } from "@/lib/seo";

export function VideoFacade() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative z-10 aspect-video bg-black">
        <iframe
          src={`${INTRO_VIDEO.embedUrl}?rel=0&modestbranding=1&autoplay=1`}
          title={INTRO_VIDEO.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video-facade"
      onClick={() => setPlaying(true)}
      aria-label="Play Reborn Academy intro video"
    >
        <Image
          src={INTRO_VIDEO.thumbnailUrl}
          alt="Reborn Academy intro video thumbnail"
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 900px"
        />
      <div className="video-facade-overlay" />
      <div className="video-facade-play">
        <Play size={28} fill="currentColor" aria-hidden="true" />
      </div>
      <div className="video-facade-badge">
        <span className="live-dot" />
        Watch the vision
      </div>
    </button>
  );
}
