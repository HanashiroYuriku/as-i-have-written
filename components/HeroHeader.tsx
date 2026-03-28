export default function HeroHeader() {
  return (
    <div className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center w-full px-4 pointer-events-none">
      <h1 className="text-indigo-200/80 font-mono tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm lg:text-base uppercase drop-shadow-[0_0_10px_rgba(165,180,252,0.4)]">
        A Story about Tomorrow, dedicated to you.
      </h1>
      
    </div>
  );
}