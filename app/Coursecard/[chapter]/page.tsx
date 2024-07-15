"use client";

import Image from "next/image";
import { Tabs } from "@/app/components/ui/tabs";
import { useEffect, useState } from "react";
import { WavyBackground } from "@/app/components/ui/wavy-background";
import { list } from "postcss";

interface Data {
  maintopic?: string;
  explanation?: string | { code: string; description: string };
  syntax?: string | { code: string; description: string };
  example?: string | { code: string; description: string };
}

export default function TabsDemo({ params }: { params: { chapter: string } }) {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    async function bringData() {
      const pmt: { maintopic: string; subtopics: [] } = {
        maintopic: "test",
        subtopics: [],
      };
      const mt = sessionStorage.getItem("subTopicList");
      if (mt) {
        const pmt = JSON.parse(mt);
      }
      const response = await fetch(
        `https://cc-backend-w1i9.onrender.com/generate_contents/${params.chapter}in${pmt.maintopic}`
      );
      if (response.ok) {
        const result: Data = await response.json();
        console.log("Data fetched successfully:", result);
        setData(result);
      } else {
        console.error("Failed to fetch data");
      }
    }

    bringData();
  }, [params.chapter]);

  const tabs = [
    {
      title: "Explanation",
      value: "explanation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>{data.maintopic}</p>
          <DummyContent text={data.explanation || "Loading..."} />
        </div>
      ),
    },
    {
      title: "Syntax",
      value: "syntax",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Syntax tab</p>
          <DummyContent text={data.syntax || "Loading..."} />
        </div>
      ),
    },
    {
      title: "Example",
      value: "example",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Example content</p>
          <DummyContent text={data.example || "Loading..."} />
        </div>
      ),
    },
  ];

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
    </WavyBackground>
  );
}

interface DummyContentProps {
  text: string | { code: string; description: string } | undefined;
}

const DummyContent: React.FC<DummyContentProps> = ({ text }) => {
  let displayText;

  if (typeof text === "object" && text !== null) {
    // If the text is an object, assume it's structured data (e.g., code and description)
    displayText = `Code: ${text.code}\n\nDescription: ${text.description}`;
  } else if (typeof text === "string") {
    // Handle the case where text is a string
    displayText = text.replace(
      /\*\*(.*?)\*\*/g,
      '<span style="color: blue; display: block;">$1</span>'
    );
  } else {
    displayText = "Loading...";
  }

  return (
    <div className="relative flex items-center justify-center h-full w-full bg-gray-200">
      <div
        className=" text-left md:text-2xl font-medium h-full w-full text-black overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: displayText }}
      />
    </div>
  );
};
