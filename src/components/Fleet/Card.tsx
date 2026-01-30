import Image from "next/image";
import Link from "next/link";

export type CardData = {
  id: string | number;
  title: string;
  description?: string;
  imgSrc: string;
  imgAlt?: string | undefined;
  cardUrl?: string;
};
  
export default function Card({ data }: { data: CardData }) {
  return (
    <div id='main' className="group mx-auto mb-10 max-w-[380px] rounded-2xl bg-white text-center shadow-md md:mb-16">
      {/* TODO: remove link when no href provided */}
      <Link onClick={(event) => event.preventDefault()}
        href={data.cardUrl ?? "#"}>
          <Image
            src={data.imgSrc ?? ""}
            alt={data.imgAlt ?? ""}
            width={380}
            height={234}
            className="bg-rindigo-100 mb-6 h-[234px] w-full object-cover transition duration-300 group-hover:scale-105"
          />
        <div>
          <h3 className="font-heading text-dark mb-3 text-xl font-medium sm:text-2xl md:mb-5 ">
            {data?.title}
          </h3>
        </div>
      </Link>
    </div>
  );
}
