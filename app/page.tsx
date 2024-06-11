import Image from "next/image";
import { Hero } from "../components/Hero";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Card />
    </div>
  );
}
