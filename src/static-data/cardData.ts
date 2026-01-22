export type CardData = {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string | undefined;
  cardUrl: string;
};

const randomAlt: string[] = [];
const numCards = 3;

await fetch("https://jsonplaceholder.typicode.com/comments/")
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i <= numCards; i++) {
      randomAlt.push(json[i].name);
    }
  });

export const cardData: CardData[] = [
  {
    id: crypto.randomUUID(),
    title: "Crafted for SaaS Business",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imgSrc: "https://picsum.photos/400/250",
    imgAlt: randomAlt[0],
    cardUrl: "https://github.com/",
  },
  {
    id: crypto.randomUUID(),
    title: "High-quality Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imgSrc: "https://picsum.photos/400/250",
    imgAlt: randomAlt[1],
    cardUrl: "https://github.com/",
  },
  {
    id: crypto.randomUUID(),
    title: "UI Components and Pages",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    imgSrc: "https://picsum.photos/400/250",
    imgAlt: randomAlt[2],
    cardUrl: "https://github.com/",
  },
];
