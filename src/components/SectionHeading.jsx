export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <p className={`mb-4 font-mono text-[10px] tracking-[.18em] text-[#8b7657] ${centered ? "justify-center" : ""}`}>
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-[1.06] tracking-[-.05em] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl text-sm leading-7 text-muted ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}