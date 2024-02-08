/* eslint-disable @next/next/no-img-element */

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center relative">
      <div className="bg-background z-10 py-2 sticky top-2">
        <div className="h-16 md:h-20 w-16 md:w-20 rounded-full overflow-hidden">
          <img
            className="h-full aspect-square object-cover"
            src={src}
            alt={alt}
          />
        </div>
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 rounded-xl bg-neutral-700"></div>
    </div>
  );
}

export default Logo;
