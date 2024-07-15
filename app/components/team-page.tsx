"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Korada Sri Krishna Koushik",
    designation: "Teamlead , AI Developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg",
  },
  {
    id: 2,
    name: "Yaswanth Kuramdasu",
    designation: "Backend developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671165.jpg",
  },
  {
    id: 3,
    name: "Charan Sai Kella",
    designation: "Web Developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg",
  },
  {
    id: 4,
    name: "Mollysyam",
    designation: "UI/UX designer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg",
  },
  {
    id: 5,
    name: "Madineni KalyanKumar",
    designation: "Web developer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671138.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
