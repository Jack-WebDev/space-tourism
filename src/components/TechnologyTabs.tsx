import TechnologyDetails from "./TechnologyDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function TechnologyTabs() {
  return (
    <div className="flex w-full max-w-7xl mx-auto gap-6 relative top-24">
      <Tabs defaultValue="launch">
        <TabsList className="bg-transparent text-secondary flex justify-center w-1/2 mx-auto xl:flex-col items-center gap-4 xl:absolute -left-52 top-32">
          <TabsTrigger
            value="launch"
            className="data-[state=active]:bg-white  data-[state=active]:text-black bg-transparent border border-white rounded-md p-4"
          >
            1
          </TabsTrigger>
          <TabsTrigger
            value="spaceport"
            className="data-[state=active]:bg-white  data-[state=active]:text-black bg-transparent border border-white rounded-md p-4"
          >
            2
          </TabsTrigger>
          <TabsTrigger
            value="capsule"
            className="data-[state=active]:bg-white  data-[state=active]:text-black bg-transparent border border-white rounded-md p-4"
          >
            3
          </TabsTrigger>
        </TabsList>
        <div className="xl:absolute right-0 my-8">
          <TabsContent value="launch" className="relative w-full text-white">
            <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
              <TechnologyDetails
                title="Launch vehicle"
                description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
              />
              <img
                src="/technology/image-launch-vehicle-portrait.jpg"
                alt="moon"
                className="xl:w-1/3 hidden xl:inline-block"
              />
              <img
                src="/technology/image-launch-vehicle-landscape.jpg"
                alt="moon"
                className="xl:hidden"
              />
            </div>
          </TabsContent>
          <TabsContent value="spaceport" className="relative w-full text-white">
            <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
              <TechnologyDetails
                title="Spaceport"
                description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
              />
              <img
                src="/technology/image-spaceport-portrait.jpg"
                alt="moon"
                className="xl:w-1/3 hidden xl:inline-block"
              />
              <img
                src="/technology/image-spaceport-landscape.jpg"
                alt="moon"
                className="xl:hidden"
              />
            </div>
          </TabsContent>
          <TabsContent value="capsule" className="relative w-full text-white">
            <div className="text-white flex flex-col-reverse xl:flex-row items-center justify-between">
              <TechnologyDetails
                title="Space capsule"
                description="A space capsule is an often-technologyed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
              />
              <img
                src="/technology/image-space-capsule-portrait.jpg"
                alt="moon"
                className="xl:w-1/3 hidden xl:inline-block"
              />
              <img
                src="/technology/image-space-capsule-landscape.jpg"
                alt="moon"
                className="xl:hidden"
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
