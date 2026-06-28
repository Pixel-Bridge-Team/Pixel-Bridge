type CoreValueCardProps = {
  title: string;
  text: string;
  featured: boolean;
};

export default function CoreValueCard({
  title,
  text,
  featured,
}: CoreValueCardProps) {
  return (
    <div
      className={`w-full max-w-[320px] rounded-3xl border px-6 py-8 md:px-8 md:pt-8 md:pb-16
            ${featured ? "border-[#E5E7EB] lg:-translate-y-10 bg-[#1E1E50] text-white" : "bg-white border-[#E5E7EB] text-[#1F2937]"}`}
    >
      <h3 className="text-[#0066FF] mb-4 font-bold text-xl md:text-[20px]">
        {title}
      </h3>
      <p className="text-sm md:text-[15px] leading-6 font-normal">{text}</p>
    </div>
  );
}
