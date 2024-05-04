import { useState } from "react";
import Image from "next/image";

export function ImageCard({ path }: { path: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      <div className="transition-transform duration-300 ease-in-out z-10 absolute inset-0 hover:scale-125">
        <div
          className={`inner-container p-4 ${isHovered ? "hover-scale" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={path}
            width={200}
            height={300}
            alt={path}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
