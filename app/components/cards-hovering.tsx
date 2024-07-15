"use client";

import { useEffect, useState } from "react";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  const [subtopics, setSubtopics] = useState([]);

  useEffect(() => {
    const temp = sessionStorage.getItem("subTopicList");

    if (temp) {
      const parsedTemp = JSON.parse(temp);
      const temptopics = parsedTemp["subtopics"].map((element: string) => ({
        title: element,
        description:
          "A technology company that builds economic infrastructure for the internet.",
        link: "https://google.com",
      }));

      setSubtopics(temptopics);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={subtopics} />
    </div>
  );
}
