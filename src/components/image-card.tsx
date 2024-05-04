import { useState } from 'react';
import Image from "next/image";

export function ImageCard({ path }: { path: string }) {
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <div className="relative w-full h-full">
        <style jsx>{`
          .hover-scale {
            transition: transform 0.3s ease-in-out;
            z-index: 1;
          }
          .hover-scale:hover {
            transform: scale(1.2);
          }
          .inner-container {
            padding: 0.7rem; /* Adjust the padding as needed */
          }
        `}</style>
        <div
          className={`absolute inset-0 ${isHovered ? 'hover-scale' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="inner-container">
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
