/**
 * SectionHeading — reusable heading block.
 * Props:
 *   label    — small uppercase eyebrow text
 *   title    — main heading
 *   subtitle — optional body copy below heading
 *   center   — centres all text
 *   light    — white text for dark/coloured section backgrounds
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
  light = false,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-purple-300" : "text-purple-700"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base ${
            light ? "text-gray-300" : "text-gray-500"
          } ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
