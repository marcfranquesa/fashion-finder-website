export type clothingLinks = {
  index: number;
  link_1: string;
  link_2: string;
  link_3: string;
  embedding: number[];
};

export type Color =
  | "white"
  | "black"
  | "brown"
  | "blue"
  | "green"
  | "red"
  | "orange"
  | "pink"
  | "gray"
  | "yellow"
  | "multicolor";

export type Category = "woman" | "man" | "kid";

export type Season = "winter" | "spring" | "summer" | "autumn";

export type Clothing =
  | "dress"
  | "trouser"
  | "short"
  | "shirt"
  | "jacket"
  | "jumper"
  | "skirt";

export type Pattern = "spotted" | "striped" | "plain" | "checkered";

export type DropdownOptions = Color | Category | Season | Clothing | Pattern;
