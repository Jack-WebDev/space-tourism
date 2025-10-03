import NavBar from "./NavBar";

export default function Destination() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/destination/background-destination-mobile.jpg)] md:bg-[url(/destination/background-destination-tablet.jpg)] lg:bg-[url(/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover w-full justify-between">
      <NavBar />
    </div>
  );
}
