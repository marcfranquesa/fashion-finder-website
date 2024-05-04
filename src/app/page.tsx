"use client";

import { Submit } from "@/components/submit";
import React from "react";
import { IntlMessage } from "../lib/i18n";
import { ImageCard } from "@/components/image-card";

export default function Home() {
  const [id, setId] = React.useState(-1);

  return (
    <>
      <div className="py-[10vh] sm:py-[10vh] flex flex-col items-center justify-center">
        <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          <IntlMessage id="title" />
        </h1>
        <p className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          <IntlMessage id="subtitle" />
        </p>

        <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          <Submit id={id} setId={setId} />
          {id >= 0 && (
            <div className="flex justify-center items-center">
              <ImageCard path={`/api/image/${id}/0`} />
              <ImageCard path={`/api/image/${id}/1`} />
              <ImageCard path={`/api/image/${id}/2`} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
