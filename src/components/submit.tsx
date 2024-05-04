import { SubmitButton } from "@/components/submit-button";
import { IntlMessage } from "../lib/i18n";
import React, { useState } from "react";

export function Submit({
  id,
  setId,
}: {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (!isNaN(Number(inputValue))) {
      setId(Number(inputValue));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="bg-black rounded-xl shadow-lg h-fit flex flex-row px-1 items-center w-full mb-4">
        <input
          type="text"
          name="prompt"
          placeholder={IntlMessage({ id: "formsDefault" })}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300"
        />
        <input
          type="text"
          name="token"
          value={id}
          className="hidden"
          readOnly={true}
        />
        <SubmitButton onClick={handleSubmit} />
      </div>
    </>
  );
}
