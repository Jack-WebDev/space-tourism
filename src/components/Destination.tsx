import DestinationTabs from "./DestinationTabs";
import NavBar from "./NavBar";

export default function Destination() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/destination/background-destination-mobile.jpg)] md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover w-full">
      <NavBar />
      <div className="relative top-40 flex flex-row-reverse w-full max-w-7xl mx-auto">
        <h2 className="absolute -top-20 text-white flex items-center gap-2 text-3xl font-barlow-condensed left-1/6 lg:left-0">
          <span className="text-white/65">01</span>PICK YOUR DESTINATION
        </h2>

        <DestinationTabs />
      </div>
    </div>
  );
}
