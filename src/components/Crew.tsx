import NavBar from "./NavBar";

export default function Crew() {
  return (
    <div  className="flex flex-col min-h-screen bg-[url(/crew/background-crew-mobile.jpg)] md:bg-[url(/crew/background-crew-tablet.jpg)] lg:bg-[url(/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover w-full justify-between">
      <NavBar />
    </div>
  );
}
