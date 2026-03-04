type SectionPlaceholderProps = {
  title: string;
  note: string;
};

export default function SectionPlaceholder({ title, note }: SectionPlaceholderProps) {
  return (
    <section className="mx-auto mb-10 w-full max-w-6xl rounded-lg border border-dashed border-zinc-300 px-4 py-6">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600">{note}</p>
    </section>
  );
}
