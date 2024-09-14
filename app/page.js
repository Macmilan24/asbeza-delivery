import LandingPage from "./landingpage/page";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="w-full">
      <LandingPage />
      <Analytics />
    </div>
  );
}
