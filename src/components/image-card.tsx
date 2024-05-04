import Image from "next/image";

export function ImageCard({ path }: { path: string }) {
  return (
    <div className="px-4">
      <Image
        src={path}
        width={200}
        height={300}
        alt={path}
        className="border border-black"
      />
    </div>
  );
}
