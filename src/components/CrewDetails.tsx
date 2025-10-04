type CrewDetailsProps = {
  title: string;
  description: string;
  name: string;
};

export default function CrewDetails({
  title,
  description,
  name,
}: CrewDetailsProps) {
  return (
    <div className="px-4 xl:px-0 w-full max-w-xl grid gap-4 border-t border-white/20 md:border-none py-4 my-6 xl:my-0 md:py-0">
      <h2 className="text-xl xl:text-3xl text-white/60 uppercase font-bellefair text-center xl:text-start">
        {title}
      </h2>
      <h3 className="text-2xl xl:text-5xl text-white font-bellefair uppercase text-center xl:text-start">{name}</h3>
      <p className="text-secondary mb-8 w-full xl:w-[60ch] text-center xl:text-start">{description}</p>
    </div>
  );
}
