import CrewDetails from "./CrewDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function CrewTabs() {
  return (
    <div className="flex w-full max-w-7xl mx-auto flex-col gap-6 relative top-40">
      <Tabs
        defaultValue="douglas"
        className="flex justify-between items-center xl:justify-start xl:items-start"
      >
                <TabsList className="bg-transparent text-secondary md:flex items-center gap-4 hidden">
          <TabsTrigger
            value="douglas"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
          <TabsTrigger
            value="mark"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
          <TabsTrigger
            value="victor"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
          <TabsTrigger
            value="ansari"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
        </TabsList>
        <TabsContent value="douglas" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse md:flex-col xl:flex-row items-center justify-between">
            <CrewDetails
              title="Commander"
              name="Douglas Hurley"
              description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            />
            <img
              src="/crew/image-douglas-hurley.png"
              alt="moon"
              className=" w-1/2 md:w-1/5 xl:w-1/3"
            />
          </div>
        </TabsContent>
        <TabsContent value="mark" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
            <CrewDetails
              title="Mission Specialist"
              name="Mark Shuttleworth"
              description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            />
            <img
              src="/crew/image-mark-shuttleworth.png"
              alt="moon"
              className=" w-1/2 md:w-1/3 "
            />
          </div>
        </TabsContent>
        <TabsContent value="victor" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
            <CrewDetails
              title="Pilot"
              name="Victor Glover"
              description="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
            />
            <img
              src="/crew/image-victor-glover.png"
              alt="moon"
              className=" w-1/2 md:w-1/3"
            />
          </div>
        </TabsContent>
        <TabsContent value="ansari" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
            <CrewDetails
              title="Flight Engineer"
              name="Anousheh Ansari"
              description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
            />
            <img
              src="/crew/image-anousheh-ansari.png"
              alt="moon"
              className=" w-1/2 md:w-1/3"
            />
          </div>
        </TabsContent>
        <TabsList className="bg-transparent text-secondary flex items-center gap-4 md:hidden">
          <TabsTrigger
            value="douglas"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
          <TabsTrigger
            value="mark"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
          <TabsTrigger
            value="victor"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
          <TabsTrigger
            value="ansari"
            className="data-[state=active]:bg-white  data-[state=active]:text-white bg-white/50 rounded-full w-[20px] h-[20px]"
          ></TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
