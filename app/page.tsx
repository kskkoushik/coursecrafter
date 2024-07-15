import Image from "next/image";
import { LampDemo } from "@/app/components/lightinglamp";
import { AuroraBackgroundDemo } from "@/app/components/aurora-bg";
import { BackgroundBoxesDemo } from "@/app/components/boxes-bg";
import { AuroraBackgroundDemo3 } from "@/app/components/about-page";
import { AuroraBackgroundDemo4 } from "@/app/components/our-team";

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />
      <AuroraBackgroundDemo3 />
      <AuroraBackgroundDemo4 />
      <div id="lamp">
        <LampDemo />
      </div>
    </>
  );
}
