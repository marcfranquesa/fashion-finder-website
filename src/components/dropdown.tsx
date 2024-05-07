import { Menu, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";
import * as Types from "@/lib/types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropDownProps {
  option: Types.DropdownOptions;
  setOption: (vibe: Types.DropdownOptions) => void;
  options: Types.DropdownOptions[];
}

export default function DropDown({
  option,
  setOption,
  options,
}: DropDownProps) {
  return (
    <Menu as="div" className="relative min-w-36">
      <div>
        <Menu.Button className="min-w-36 inline-flex justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
          {option}
          <ChevronUpIcon
            className="-mr-1 ml-2 h-5 w-5 ui-open:hidden"
            aria-hidden="true"
          />
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 hidden ui-open:block"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="z-50 left-0 min-w-36 absolute right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          key={option}
        >
          <div>
            {options.map((optionItem) => (
              <Menu.Item key={optionItem}>
                {({ active }: { active: any }) => (
                  <button
                    onClick={() => setOption(optionItem)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      option === optionItem ? "bg-gray-200" : "",
                      "px-4 py-2 text-sm flex items-center space-x-2 justify-between min-w-36 rounded-md"
                    )}
                  >
                    <span>{optionItem}</span>
                    {option === optionItem && (
                      <CheckIcon className="w-4 h-4 text-bold" />
                    )}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
