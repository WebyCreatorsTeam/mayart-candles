import { Dispatch, SetStateAction } from "react";
import { TypeOfSortEnum } from "../../../views/Candles/AllCandles/AllCandles";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { Label } from "./ui/label";
import { CandleFiltersType } from "../../../utils/types/candles";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qACAroJ9sXS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export function V6FilterSort({
  sortType,
  setSortType,
  filterOptions,
  setFilterSet,
}: {
  sortType: string;
  setSortType: Dispatch<SetStateAction<TypeOfSortEnum>>;
  filterOptions: CandleFiltersType;
  setFilterSet: Dispatch<SetStateAction<Partial<CandleFiltersType>>>;
}) {
  console.log(filterOptions);
  
  return (
    <div className="absolute top-16 z-40 flex w-full space-x-4 p-4 *:flex-1 sm:top-44 xl:top-24">
      <Accordion type="single" collapsible>
        <AccordionItem value="filter">
          <AccordionTrigger className="grow rounded-full bg-white p-2 shadow-md">
            <div className="flex items-center space-x-2">
              <FilterIcon className="h-6 w-6" />
              <span className="text-sm font-medium">Filter</span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            dir="rtl"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  צורה
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>All</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  צבע
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>All</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  גודל
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>All</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ריח
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>All</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  סוג
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>All</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  מחיר
                </label>
                <input type="range" className="w-full" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="sort">
          <AccordionTrigger className="rounded-full bg-white p-2 shadow-md">
            <div className="flex items-center space-x-2">
              <ListOrderedIcon className="h-6 w-6" />
              <span className="text-sm font-medium">Sort</span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            dir="rtl"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div className="grid gap-4">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Sort By
                </label>
                <div className="flex flex-col items-start space-y-2">
                  {Object.values(TypeOfSortEnum).map((value) => (
                    <Label key={value} className="flex items-center space-x-2">
                      <input
                        name="sort_radio"
                        type="radio"
                        value={value}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={value === sortType}
                        onChange={() => setSortType(value)}
                      />
                      <label>{value}</label>
                    </Label>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function FilterIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}
