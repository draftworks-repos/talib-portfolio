import { VideoShowcaseData } from "./types";

const BASE_VIMEO_URL =
  "https://player.vimeo.com/video/1158807299?autoplay=1&muted=1&controls=0&api=1";

export const PROJECT_DATA: VideoShowcaseData = {
  "IT Projects": [
    {
      id: "wa1",
      name: "Tesla",
      logo: "marquee-logo/3.png",
      videoUrl:
        "https://player.vimeo.com/video/1158832176?autoplay=1&muted=1&controls=0&api=1",
      tags: ["Electric", "Autopilot", "Innovation"],
    },
    {
      id: "wa2",
      name: "Rivian",
      logo: "marquee-logo/4.png",
      videoUrl: BASE_VIMEO_URL,
      tags: ["Adventure", "EV", "Sustainability"],
    },
    {
      id: "wa3",
      name: "Lucid",
      logo: "marquee-logo/8.png",
      videoUrl: BASE_VIMEO_URL,
      tags: ["Luxury", "Efficiency", "Modern"],
    },
    {
      id: "wa4",
      name: "Polestar",
      logo: "marquee-logo/39.png",
      videoUrl: BASE_VIMEO_URL,
      tags: ["Minimalist", "Swedish", "Performance"],
    },
    {
      id: "wa5",
      name: "Rimac",
      logo: "marquee-logo/38.png",
      videoUrl: BASE_VIMEO_URL,
      tags: ["Hypercar", "Technology", "Record-Breaking"],
    },
  ],
};
