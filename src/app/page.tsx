"use client";

import { Submit } from "@/components/submit";
import React from "react";
import Image from "next/image";

export default function Home() {
  const [id, setId] = React.useState(-1);
  return (
    <>
      <div className="py-[10vh] sm:py-[10vh] flex flex-col items-center justify-center">
        <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          Inditex Similarity
        </h1>
        <p className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          View similar items from the Inditex collection
        </p>

        <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          <Submit id={id} setId={setId} />
          {id < 0 && (
            <Image
              src="/api/image/0/0"
              width={500}
              height={750}
              alt="/api/image/0"
            />
          )}
          {id >= 0 && (
            <Image
              src={`/api/image/${id}/0`}
              width={500}
              height={750}
              alt={`image${id}`}
            />
          )}
        </div>
      </div>
    </>
  );
}
