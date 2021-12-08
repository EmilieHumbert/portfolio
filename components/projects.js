import React from "react";

import Project from "./project";

export default function Projects() {
  const projects = [
    {
      title: "Dots",
      imageFirst: "/images/dots.png",
      imageDescription: "Dots quiz page",
      decription: "A progressive web app connecting vulnerable people in Senegal with organisations that can help them. This was a team project as part of deploy(impact) and organised by Women++. In this project, I was the frontend developer and worked closely with the UX researchers for the design.",
      tools: [
        ["Framework", "React"],
        ["Responsive", "yes"],

        ["Contact form", "react-hook-form"],
        ["Styling", "Tailwind"],
        ["Internationalisation", "react-i18next"],
        ["Deployment", "Microsoft Azure"],
      ],
      website: "https://dots.azureedge.net",
      github: "https://github.com/WomenPlusPlus/deploy-impact-21-kona-b",
    },
    {
      title: "Villa les Pieds Rouges",
      imageFirst: "/images/villa-les-pieds-rouges-homepage.png",
      imageDescription: "Villa les Pieds Rouges homepage",
      decription:
        "Responsive bilingual website presenting luxurious holiday home in south of France. This Next.js website has multiple pages: home, gallery, plans (to view a plan and description for each floor), about, location and contact. The contact form was made using react-hook-form, axios and Sendgrid and the website was deployed to Vercel.",
      tools: [
        ["Framework", "Next.js"],
        ["Responsive", "yes"],
        ["Contact form", "Sendgrid"],
        ["Styling", "Tailwind"],
        ["Internationalisation", "next-i18next"],
        ["Deployment", "Vercel"],
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
        ["Responsive", "yes"],
        ["Storage", "Firestore"],
        ["Styling", "Tailwind"],
        ["Authentication", "Firebase"],
        ["Deployment", "Vercel"],
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
