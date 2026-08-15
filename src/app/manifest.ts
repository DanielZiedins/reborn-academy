import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Reborn",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#cc1111",
    icons: [
      {
        src: "/images/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Join waitlist",
        short_name: "Waitlist",
        url: "/waitlist",
      },
      {
        name: "Watch the vision",
        short_name: "Video",
        url: "/#video",
      },
    ],
  };
}
