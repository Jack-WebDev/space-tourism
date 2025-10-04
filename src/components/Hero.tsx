import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:justify-around items-center relative gap-12 bottom-52 text-start">
      <div className="grid gap-6 text-white px-4">
        <p className="font-barlow-condensed tracking-widest text-2xl text-white/60">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="uppercase text-8xl lg:text-[10rem] font-bellefair">
          space
        </h1>
        <p className="w-full lg:w-[50ch] text-white/80 text-lg">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <button className="relative bg-white rounded-full aspect-square w-[40vw] lg:w-[20vw] max-w-[300px] grid place-items-center wave-hover cursor-pointer">
        <Link to="/destination" className="text-2xl lg:text-5xl font-bellefair">
          EXPLORE
        </Link>
      </button>
    </div>
  );
}
