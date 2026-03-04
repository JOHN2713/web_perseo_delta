type PageHeroProps = {
  title: string;
  description: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-zinc-600">{description}</p>
    </section>
  );
}
