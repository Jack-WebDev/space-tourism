import NavBar from "./NavBar";
import TechnologyTabs from "./TechnologyTabs";

export default function Technology() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/technology/background-technology-mobile.jpg)] md:bg-[url(/technology/background-technology-tablet.jpg)] lg:bg-[url(/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover w-full ">
      <NavBar />

      <div className="relative top-28 lg:top-10 flex flex-row-reverse w-full max-w-7xl mx-auto">
        <h2 className="absolute -top-16 md:-top-5 text-white flex items-center gap-2 text-3xl font-barlow-condensed left-1/6 lg:left-0 tracking-widest">
          <span className="text-white/65">02</span>SPACE LAUNCH 101
        </h2>

        <TechnologyTabs />
      </div>
    </div>
  );
}
