"use client";

import { PlaceholdersAndVanishInput } from "@/app/components/ui/placeholders-and-vanish-input";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Create a course on python",
    "Make a course on java",
    "Tailor a course on HTML",
    "Create a course on JavaScript",
    "I want a course on ml",
  ];

  const [value, setValue] = useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch(
      "https://cc-backend-w1i9.onrender.com/generate_topics",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    console.log(result);
    console.log(result["maintopic"]);
    sessionStorage.setItem("subTopicList", JSON.stringify(result));
    const temp = sessionStorage.getItem("subTopicList");

    router.push("/Conceptwise");
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
