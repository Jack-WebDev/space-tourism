import NavBar from "./NavBar";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/home/background-home-mobile.jpg)] md:bg-[url(/home/background-home-tablet.jpg)] lg:bg-[url(/home/background-home-desktop.jpg)] bg-no-repeat bg-cover w-full justify-between">
      <NavBar />
      <Hero />
    </div>
  );
}
