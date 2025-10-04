import CrewTabs from "./CrewTabs";
import NavBar from "./NavBar";

export default function Crew() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/crew/background-crew-mobile.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)] lg:bg-[url(/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover w-full overflow-hidden">
      <NavBar />

      <div className="relative top-10 lg:top-10 flex flex-row-reverse w-full max-w-7xl mx-auto">
        <h2 className="absolute top-0 md:-top-5 text-white flex items-center gap-2 text-3xl font-barlow-condensed left-1/6 lg:left-0 tracking-widest">
          <span className="text-white/65">02</span>MEET YOUR CREW
        </h2>

        <CrewTabs />
      </div>
    </div>
  );
}
