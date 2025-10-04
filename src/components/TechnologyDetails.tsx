type TechnologyDetailsProps = {
  title: string;
  description: string;
};

export default function TechnologyDetails({
  title,
  description,
}: TechnologyDetailsProps) {
  return (
    <div className="px-4 xl:px-0 w-full max-w-xl grid gap-4  md:border-none py-4 my-6 xl:my-0 md:py-0">
      <span className="text-center xl:text-start uppercase font-bellefair text-white/60">The Terminology...</span>
      <h2 className="text-xl xl:text-3xl text-white/60 uppercase font-bellefair text-center xl:text-start">
        {title}
      </h2>
      <p className="text-secondary mb-8 w-full xl:w-[60ch] text-center xl:text-start">
        {description}
      </p>
    </div>
  );
}
