import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-5xl mx-auto py-8">
        <p className="text-sm flex items-center">
          <span className="flex-grow text-center">
            <a
              href="https://github.com/marcfranquesa/fashion-finder-website"
              className="ml-4 bg-transparent underline-offset-4 hover:underline hover:bg-transparent"
            >
              <span className="pr-2">Website</span>
              <Image
                src="/github.svg"
                alt="github-logo"
                width={27}
                height={27}
                className="inline pb-1"
              />
            </a>
          </span>
          <span className=""></span>
          <span className="flex-grow text-center">
            <a
              href="https://github.com/maurofr/fashion-finder-model"
              className="ml-4 bg-transparent underline-offset-4 hover:underline hover:bg-transparent"
            >
              <span className="pr-2">Embeddings</span>
              <Image
                src="/github.svg"
                alt="github-logo"
                width={27}
                height={27}
                className="inline pb-1"
              />
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
