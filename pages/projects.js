import React from "react";

import Project from "../components/project";
import Navigation from "../components/navigation";

export default function Projects() {
  const projects = [
    {
      title: "Villa les Pieds Rouges",
      image: "/images/villa-les-pieds-rouges-homepage.png",
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
      image: "/images/instagram-login.png",
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
    <div className="flex justify-center mx-2">
      <div className="mt-6 w-full sm:w-4/5">
        <Navigation />
        <Project projects={projects} />
      </div>
    </div>
  );
}
