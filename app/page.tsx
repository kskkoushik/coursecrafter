import Image from "next/image";
import { LampDemo } from "@/app/components/lightinglamp";
import { AuroraBackgroundDemo } from "@/app/components/aurora-bg";

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />

      <div id="lamp">
        <LampDemo />
      </div>
    </>
  );
}
