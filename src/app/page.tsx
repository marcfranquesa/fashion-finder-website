import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold">
        Welcome to the Inditex Similarity Search
      </h1>
      <Image src="/api/image/0" width={500} height={500} alt="image0" />
      <Image src="/api/image/10" width={500} height={500} alt="image10" />
    </main>
  );
}
