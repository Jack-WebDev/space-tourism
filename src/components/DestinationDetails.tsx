type DestinationDetailsProps = {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
};

export default function DestinationDetails({
  name,
  description,
  distance,
  travelTime,
}: DestinationDetailsProps) {
  return (
    <div className="my-8 px-4 xl:px-0 w-full max-w-xl">
      <h2 className="text-5xl xl:text-8xl text-white font-bellefair uppercase text-center xl:text-start">
        {name}
      </h2>
      <p className="text-secondary mb-8 w-full xl:w-[60ch]">{description}</p>
      <div className="border-t border-white py-8 flex items-center justify-between">
        <div className="grid gap-4">
          <span className="text-secondary">AVG. DISTANCE</span>

          <p className="text-3xl xl:text-5xl font-bellefair uppercase">{distance}</p>
        </div>
        <div className="grid gap-4">
          <span className="text-secondary">EST. TRAVEL TIME</span>
          <p className="text-3xl xl:text-5xl font-bellefair uppercase">{travelTime}</p>
        </div>
      </div>
    </div>
  );
}
