export default function Avatar({
  name,
  image,
  size = 36,
}: {
  name?: string | null;
  image?: string | null;
  size?: number;
}) {
  const s = { width: size, height: size };
  if (image) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image} alt={name ?? "user"} style={s} className="rounded-full object-cover" referrerPolicy="no-referrer" />;
  }
  return (
    <span style={s} className="grid shrink-0 place-items-center rounded-full bg-brand font-semibold text-white">
      {(name?.trim()?.[0] ?? "U").toUpperCase()}
    </span>
  );
}
