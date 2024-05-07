import { useState } from "react";
import Image from "next/image";

export function ImageCard({ path, link }: { path: string; link?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="transition-transform duration-300 ease-in-out hover:scale-105">
      <div
        className={`inner-container p-4 ${isHovered ? "hover-scale" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={link} target="_blank">
          <Image
            src={
              process.env.NEXT_PUBLIC_BEGIN_URL! +
              process.env.NEXT_PUBLIC_MAIN_URL! +
              path
            }
            width={160}
            height={200}
            alt={path}
            className="fill rounded-lg shadow-md"
          />
        </a>
      </div>
    </div>
  );
}
