import { IntlMessage } from "@/lib/i18n";
import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      <div className="items-center justify-center py-12 sm:py-8 flex flex-col">
        <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          <IntlMessage id="modelArchitectureTitle" />
        </h1>
      </div>
      <h2 className="font-bold justify-left text-xl py-4">
        <IntlMessage id="architectureT2" />
      </h2>
      <p>
        <IntlMessage id="architectureP1" />
      </p>
      <h3 className="font-bold justify-left text-xl pt-4 pb-2">
        <IntlMessage id="architectureT3" />
      </h3>
      <p>
        <IntlMessage id="architectureP2" />
      </p>
      <h3 className="font-bold justify-left text-xl pt-4 pb-2">
        <IntlMessage id="architectureT4" />
      </h3>
      <p>
        <IntlMessage id="architectureP3" />
      </p>
      <h3 className="font-bold justify-left text-xl pt-4 pb-2">
        <IntlMessage id="architectureT5" />
      </h3>
      <p>
        <IntlMessage id="architectureP4" />
      </p>
      <h3 className="font-bold justify-left text-xl pt-4 pb-2">
        <IntlMessage id="architectureT6" />
      </h3>
      <p>
        <IntlMessage id="architectureP5" />
      </p>
      <Image
        src="/preprocessing.png"
        alt="preprocessing"
        width={500}
        height={500}
        className="pt-12 mx-auto"
      />
      <h2 className="font-bold justify-left text-xl pt-4 pb-2">
        <IntlMessage id="architectureT7" />
      </h2>
      <p>
        <IntlMessage id="architectureP6" />
      </p>
      <Image
        src="/inference.png"
        alt="inference"
        width={500}
        height={500}
        className="pt-12 mx-auto"
      />
    </div>
  );
}
