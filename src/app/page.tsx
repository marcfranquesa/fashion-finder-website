"use client";

import { Submit } from "@/components/submit";
import React from "react";
import { IntlMessage } from "../lib/i18n";
import { ImageCard } from "@/components/image-card";

export default function Home() {
  const [id, setId] = React.useState(-1);
  const [similar, setSimilar] = React.useState<
    {
      index: string;
      link_1: string;
      score: number;
    }[]
  >();

  React.useEffect(() => {
    const fetchData = async () => {
      if (id === -1) return;
      try {
        const data = await fetch("/api/mongo/vector-search/" + id);
        setSimilar(await data.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="py-12 sm:py-8 flex flex-col items-center justify-center">
        <h1 className="font-medium text-4xl text-black mb-3">
          <IntlMessage id="title" />
        </h1>
        <p className="text-gray-500 mb-6 text-base">
          <IntlMessage id="subtitle" />
        </p>

        <div className="max-w-[38rem] space-y-4">
          <Submit id={id} setId={setId} />
          {id >= 0 && (
            <div className="flex justify-center items-center">
              <ImageCard path={`/api/image/${id}/0`} />
              <ImageCard path={`/api/image/${id}/1`} />
              <ImageCard path={`/api/image/${id}/2`} />
            </div>
          )}
          {similar && similar[0] && (
            <div className="flex justify-center items-center pt-6">
              {similar.slice(1, 6).map((item, index) => (
                <ImageCard
                  key={index}
                  path={`/api/image/${item.index}/0`}
                  link={item.link_1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
