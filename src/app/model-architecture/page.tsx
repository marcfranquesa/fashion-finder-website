import { IntlMessage } from "@/lib/i18n";

export default function Page() {
  return (
    <div className="py-[10vh] sm:py-[10vh] flex flex-col items-center justify-center">
      <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
        <IntlMessage id="modelArchitectureTitle" />
      </h1>
    </div>
  );
}
