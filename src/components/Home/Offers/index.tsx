import SectionTitle from "@/components/Common/SectionTitle";
import { featuresData } from "@/static-data/feature";
import Card from "./Card";
import { cardData } from "@/static-data/cardData";

export default function Offers() {
  return (
    <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        {/* <!-- Section Title --> */}
        <SectionTitle
          mainTitle="Feature"
          title="Essential Integrations with Modern Design"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
        />
        <div className="-mx-4 flex flex-wrap justify-center">
          {cardData.map((data) => (
            <div key={data?.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
