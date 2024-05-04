import { useState } from "react";
import Image from "next/image";

export function ImageCard({ path }: { path: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="transition-transform duration-300 ease-in-out hover:scale-125">
      <div
        className={`inner-container p-4 ${isHovered ? "hover-scale" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={path}
          width={200}
          height={100}
          alt={path}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
