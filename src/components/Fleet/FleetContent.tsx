"use client";

import { useState } from "react";
import TabPanel from "./TabPanel";
import Card from "./Card";

const tabButtons = [
  {
    id: crypto.randomUUID(),
    title: "Sedans",
    value: "sedans",
  },
  {
    id: crypto.randomUUID(),
    title: "SUVs",
    value: "suvs",
  },
  {
    id: crypto.randomUUID(),
    title: "Trucks",
    value: "trucks",
  },
  {
    id: crypto.randomUUID(),
    title: "Motorcycles",
    value: "motorcycles",
  },
  {
    id: crypto.randomUUID(),
    title: "Other Vehicles",
    value: "other",
  },
];

const fleet = [
  {
    id: "123",
    title: "Nissan Altima",
    imgSrc: "https://picsum.photos/300/200",
    imgAlt: "Photo of a Nissan Altima",
    cardUrl: "https://google.com/",
  },
  {
    id: "234",
    title: "Nissan Altima",
    imgSrc: "https://picsum.photos/300/200",
    imgAlt: "Photo of a Nissan Altima",
    cardUrl: "https://google.com/",
  },
  {
    id: "345",
    title: "Nissan Altima",
    imgSrc: "https://picsum.photos/300/200",
    imgAlt: "Photo of a Nissan Altima",
    cardUrl: "https://google.com/",
  },
  {
    id: "456",
    title: "Nissan Altima",
    imgSrc: "https://picsum.photos/300/200",
    imgAlt: "Photo of a Nissan Altima",
    cardUrl: "https://google.com/",
  },
  {
    id: "567",
    title: "Nissan Altima",
    imgSrc: "https://picsum.photos/300/200",
    imgAlt: "Photo of a Nissan Altima",
    cardUrl: "https://google.com/",
  },
  {
    id: "678",
    title: "Nissan Altima",
    imgSrc: "https://picsum.photos/300/200",
    imgAlt: "Photo of a Nissan Altima",
    cardUrl: "https://google.com/",
  },
];

export default function FleetContent() {
  const [activeTab, setActiveTab] = useState<string>(tabButtons[0].value);

  // const fleet = await getAutoData(activeTab);

  return (
    <>
      <div className="tabButtons flex w-full items-center justify-around rounded-full">
        {tabButtons.map((tabButton) => (
          <button
            type="button"
            key={tabButton?.id}
            onClick={() => setActiveTab(tabButton?.value)}
            className={`w-full rounded-full border-b px-2 pb-6 pt-8 text-base font-extrabold lg:pb-7 lg:pt-9 ${activeTab === tabButton?.value ? "border-primary text-primary dark:border-primary" : "hover:border-primary hover:text-primary dark:hover:border-primary dark:border-[#4B4E56] dark:text-white"}`}
          >
            {tabButton?.title}
          </button>
        ))}
      </div>
      <div className="w-full">
        <div className="grid gap-5 rounded-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {fleet.map((autoData) => (
            <Card key={autoData.id} data={autoData} />
          ))}
        </div>
      </div>

      {/* {activeTab === "suvs" && (
        <div className="flex flex-wrap gap-5">
          {fleet.map((autoData) => {
            return (
              <div key={autoData.id} className='w-1/4 max-w-3xs'>
                <Card data={autoData} />
              </div>
            );
          })}
        </div>
      )} */}
    </>
  );
}
