import { VideoShowcaseData } from "./types";

const BASE_VIMEO_URL =
  "https://player.vimeo.com/video/1164707752?autoplay=1&muted=1&controls=0&api=1";

export const PROJECT_DATA: VideoShowcaseData = {
  "IT Projects": [
    {
      id: "wa1",
      name: "Porsche Center Kolkata",
      logo: "marquee-logo/3.webp",
      videoUrl:
        "https://player.vimeo.com/video/1164707490?autoplay=1&muted=1&controls=0&api=1",
      tags: ["Figma Design", "SEO Optimized", "Wordpress Development"],
    },
    {
      id: "wa2",
      name: "My Happy Space",
      logo: "marquee-logo/4.webp",
      videoUrl:
        "https://player.vimeo.com/video/1164707224?autoplay=1&muted=1&controls=0&api=1",
      tags: ["Figma Design", "Wordpress Development"],
    },
    {
      id: "wa3",
      name: "Commin Soon",
      logo: "marquee-logo/8.webp",
      videoUrl: BASE_VIMEO_URL,
      tags: ["", "", ""],
    },
    {
      id: "wa4",
      name: "Commin Soon",
      logo: "marquee-logo/39.webp",
      videoUrl: BASE_VIMEO_URL,
      tags: ["", "", ""],
    },
    {
      id: "wa5",
      name: "Commin Soon",
      logo: "marquee-logo/38.webp",
      videoUrl: BASE_VIMEO_URL,
      tags: ["", "", ""],
    },
  ],
};
