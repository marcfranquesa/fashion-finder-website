import { CornerDownLeft } from "lucide-react";
import React from "react";

export function SubmitButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-white rounded-lg hover:bg-white/25 focus:bg-white/25 w-8 h-8 aspect-square flex items-center justify-center ring-0 outline-0"
    >
      <CornerDownLeft size={16} className="-ml-px" />
    </button>
  );
}
