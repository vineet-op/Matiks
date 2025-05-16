import DownloadCard from "./components/DownloadCard";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-screen h-full">
      <Hero />
      <DownloadCard />
    </main>
  );
}
