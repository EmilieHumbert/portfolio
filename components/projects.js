import React from "react";

import Project from "./project";

export default function Projects() {
  const projects = [
    {
      title: "Villa les Pieds Rouges",
      imageFirst: "/images/villa-les-pieds-rouges-homepage.png",
      imageDescription: "Villa les Pieds Rouges homepage",
      decription:
        "Responsive bilingual website presenting luxurious holiday home in south of France. This Next.js website has multiple pages: home, gallery, plans (to view a plan and description for each floor), about, location and contact. The contact form was made using react-hook-form, axios and Sendgrid and the website was deployed to Vercel",
      tools: [
        ["Framework", "Next.js"],
        ["Deployment", "Vercel"],
        ["Contact form", "Sendgrid"],
        ["Styling", "Tailwind"],
        ["Internationalisation", "react-i18n"],
        ["Responsive", "yes"],
      ],
      website: "https://villa-les-pieds-rouges.vercel.app/en",
      github: "https://github.com/EmilieHumbert/villa-les-pieds-rouges",
    },
    {
      title: "Instagram clone",
      imageFirst: "/images/instagram-dashboard.png",
      imageDescription: "Instagram clone",
      decription:
        "Instagram clone built with Next.js, Firebase and Tailwind CSS. This React project has multiple pages: login, sign up, dashboard (to view/like/comment on photos), and user profiles. The sign-in page connects to Firebase when a user tries to sign in, and when a user signs up. Firebase firestore handles all the data, and that data is retrieved using a custom hook. After this application was built, it was deployed to Vercel. Lighthouse was also used to improve the website performance.",
      tools: [
        ["Framework", "Next.js"],
        ["Deployment", "Vercel"],
        ["Storage", "Firestore"],
        ["Styling", "Tailwind"],
        ["Authentification", "Firebase"],
        ["Responsive", "yes"],
      ],
      website: "https://react-instaclone.vercel.app/login",
      github: "https://github.com/EmilieHumbert/instagram",
    },
  ];

  return (
    <div>
      <h1 className="font-medium mt-24 mb-6 text-6xl">Projects</h1>
      <p className="text-xl mb-12">Find below my latest projects:</p>
      <Project projects={projects} />
    </div>
  );
}
