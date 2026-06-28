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
      className={`w-full lg:max-w-[320px] h-full rounded-3xl border 
        px-6 py-8 md:px-8 md:pt-8 md:pb-16 flex flex-col felx-wrap
            ${featured ? "border-[#E5E7EB] lg:-translate-y-15 md:translate-y-0 bg-[#1E1E50] text-white" : "bg-white border-[#E5E7EB] text-[#1F2937]"}`}
    >
      <h3 className="text-[#0066FF] mb-4 font-bold text-xl md:text-[20px]">
        {title}
      </h3>
      <p
        className={`text-sm md:text-[14px] leading-6 font-normal 
      ${featured ? "text-white" : "text-[#6B7280]"}`}
      >
        {text}
      </p>
    </div>
  );
}
