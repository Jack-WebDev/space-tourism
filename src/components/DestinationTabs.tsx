import DestinationDetails from "./DestinationDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function DestinationTabs() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs
        defaultValue="moon"
        className="flex justify-between items-center xl:justify-start xl:items-start"
      >
        <TabsList className="bg-transparent text-secondary ">
          <TabsTrigger
            value="moon"
            className="data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:text-white"
          >
            MOON
          </TabsTrigger>
          <TabsTrigger
            value="titan"
            className="data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:text-white"
          >
            TITAN
          </TabsTrigger>
          <TabsTrigger
            value="mars"
            className="data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:text-white"
          >
            MARS
          </TabsTrigger>
          <TabsTrigger
            value="europa"
            className="data-[state=active]:border-b-2 data-[state=active]:border-white data-[state=active]:text-white"
          >
            EUROPA
          </TabsTrigger>
        </TabsList>
        <TabsContent value="moon" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
            <DestinationDetails
              name="Moon"
              description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
              distance="384,400 km"
              travelTime="3 days"
            />
            <img
              src="/destination/image-moon.png"
              alt="moon"
              className="rotating-img w-1/2 md:w-1/5 xl:w-1/3"
            />
          </div>
        </TabsContent>
        <TabsContent value="titan" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
            <DestinationDetails
              name="Titan"
              description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
              distance="1.6 bil. km"
              travelTime="7 years"
            />
            <img
              src="/destination/image-titan.png"
              alt="moon"
              className="rotating-img w-1/2 md:w-1/5 xl:w-1/3"
            />
          </div>
        </TabsContent>
        <TabsContent value="mars" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
            <DestinationDetails
              name="Mars"
              description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
              distance="225 mil. km"
              travelTime="9 months"
            />
            <img
              src="/destination/image-mars.png"
              alt="moon"
              className="rotating-img w-1/2 md:w-1/5 xl:w-1/3"
            />
          </div>
        </TabsContent>
        <TabsContent value="europa" className="relative w-full text-white">
          <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
            <DestinationDetails
              name="Europa"
              description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
              distance="628 mil. km"
              travelTime="3 years"
            />
            <img
              src="/destination/image-europa.png"
              alt="moon"
              className="rotating-img w-1/2 md:w-1/5 xl:w-1/3"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
