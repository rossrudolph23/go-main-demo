export default function SectionTitle({ mainTitle, title, paragraph }: any) {
  return (
    <div className="relative mx-auto mb-12 max-w-[1024px] pt-6 text-center md:mb-20 lg:pt-16">
      <span className="title -z-10"> {mainTitle} </span>
      <h2 className="font-heading text-dark left-1/2 mx-auto mb-5 max-w-2xl text-balance text-3xl font-semibold sm:text-4xl md:text-[60px] md:leading-[50px] dark:text-white">
        {title}
      </h2>
      <p className="text-dark-text text-base">{paragraph}</p>
    </div>
  );
}
