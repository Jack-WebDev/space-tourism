import NavBar from "./NavBar";

export default function Technology() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/technology/background-technology-mobile.jpg)] md:bg-[url(/technology/background-technology-tablet.jpg)] lg:bg-[url(/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover w-full justify-between">
      <NavBar />
    </div>
  );
}
