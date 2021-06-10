import React from "react";

import Project from "./project";

export default function Projects() {
  const projects = [
    {
      title: "Villa les Pieds Rouges",
      imageFirst: "/images/villa-les-pieds-rouges-homepage.png",
      imageSecond: "/images/villa-les-pieds-rouges-plans.png",
      imageDescription: "Villa les Pieds Rouges homepage",
      decription:
        "Responsive bilingual website presenting luxurious holiday home in south of France with image gallerie and contact form.",
      tools: [
        ["Framework", "Next.js"],
        ["Deployment", "Vercel"],
        ["Contact form", "Sendgrid"],
        ["Styling", "Tailwind"],
        ["Internationalisation", "react-i18n"],
      ],
      website: "https://villa-les-pieds-rouges.vercel.app/en",
    },
    {
      title: "Instagram clone",
      imageFirst: "/images/instagram-login.png",
      imageSecond: "/images/instagram-dashboard.png",
      imageDescription: "Instagram clone",
      decription:
        "Instagram clone using firebase and firestore for login, signin and images storage",
      tools: [
        ["Framework", "Next.js"],
        ["Deployment", "Vercel"],
        ["Styling", "Tailwind"],
      ],
      website: "https://instagram-6lfl5gles-emiliehumbert.vercel.app/login",
    },
  ];

  return (
    <div>
      <h1 className="font-medium mt-24 text-4xl">Projects</h1>
      <Project projects={projects} />
    </div>
  );
}
