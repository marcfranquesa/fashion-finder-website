"use client";
import { IntlMessage } from "@/lib/i18n";
import DropDown from "@/components/dropdown";
import React from "react";
import * as Types from "@/lib/types";
import { ImageCard } from "@/components/image-card";

export default function Page() {
  const colors: Types.DropdownOptions[] = [
    "white",
    "black",
    "brown",
    "blue",
    "green",
    "red",
    "orange",
    "pink",
    "gray",
    "yellow",
    "multicolor",
  ];
  const [color, setColor] = React.useState<Types.DropdownOptions>("multicolor");

  const categories: Types.DropdownOptions[] = ["woman", "man", "kid"];
  const [category, setCategory] =
    React.useState<Types.DropdownOptions>("woman");

  const seasons: Types.DropdownOptions[] = [
    "winter",
    "spring",
    "summer",
    "autumn",
  ];
  const [season, setSeason] = React.useState<Types.DropdownOptions>("winter");

  const patterns: Types.DropdownOptions[] = [
    "spotted",
    "striped",
    "plain",
    "checkered",
  ];
  const [pattern, setPattern] =
    React.useState<Types.DropdownOptions>("spotted");

  const types: Types.DropdownOptions[] = [
    "dress",
    "trouser",
    "shorts",
    "shirt",
    "jacket",
    "jumper",
    "skirt",
  ];
  const [type, setType] = React.useState<Types.DropdownOptions>("dress");

  const [similar, setSimilar] = React.useState<
    {
      index: string;
      link_1: string;
      score: number;
    }[]
  >();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "/api/mongo/filter-search/" +
            color +
            "/" +
            category +
            "/" +
            season +
            "/" +
            type +
            "/" +
            pattern
        );
        setSimilar(await data.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [color, category, season, type, pattern]);

  return (
    <div className="py-12 sm:py-8 flex flex-col items-center justify-center">
      <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
        <IntlMessage id="recommenderTitle" />
      </h1>
      <p className="text-gray-500 mb-6 text-base text-center">
        <IntlMessage id="recommenderSubtitle" />
      </p>
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        <DropDown
          option={color}
          setOption={(newOption) => setColor(newOption)}
          options={colors}
        />
        <DropDown
          option={category}
          setOption={(newOption) => setCategory(newOption)}
          options={categories}
        />
        <DropDown
          option={season}
          setOption={(newOption) => setSeason(newOption)}
          options={seasons}
        />
        <DropDown
          option={type}
          setOption={(newOption) => setType(newOption)}
          options={types}
        />
        <DropDown
          option={pattern}
          setOption={(newOption) => setPattern(newOption)}
          options={patterns}
        />
      </div>
      {similar && similar[0] && (
        <div className="flex flex-wrap justify-center pt-6">
          {similar.slice(0, 5).map((item, index) => (
            <ImageCard
              key={index}
              path={`/api/image/${item.index}/0`}
              link={item.link_1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
