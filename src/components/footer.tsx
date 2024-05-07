import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-5xl mx-auto py-8">
        <div className="text-sm flex items-center justify-center">
          <span className="flex-grow flex justify-center">
            <a
              href="https://github.com/marcfranquesa/fashion-finder-website"
              className="bg-transparent underline-offset-4 hover:underline hover:bg-transparent max-w-10 flex flex-col items-center"
            >
              <Image
                src="/github.svg"
                alt="github-logo"
                width={27}
                height={27}
                className="pb-2"
              />
              Website
            </a>
          </span>
          <span className="flex-grow flex justify-center">
            <a
              href="https://github.com/maurofr/fashion-finder-model"
              className="bg-transparent underline-offset-4 hover:underline hover:bg-transparent max-w-10 flex flex-col items-center"
            >
              <Image
                src="/github.svg"
                alt="github-logo"
                width={27}
                height={27}
                className="pb-2"
              />
              Model
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
