import Features from "@/components/widgets/Features";
import Hero from "@/components/widgets/Hero";
import Recent from "@/components/widgets/Recent";
import Why from "@/components/widgets/Why";
import { currentUser } from "./actions/currentUser";

export default async function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Why />
      <Recent />
    </>
  );
}
