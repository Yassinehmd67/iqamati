type Props = {
  title: string;

  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
        {title}
      </h2>

      {subtitle && <p className="text-slate-500 text-lg">{subtitle}</p>}
    </div>
  );
}
