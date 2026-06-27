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
      className={`w-[320px] h-[402] rounded-3xl border px-8 pt-8 pb-16
            ${featured ? "border-[#E5E7EB] lg:-translate-y-10" : "bg-white border-[#E5E7EB] "}`}
    >
      <h3 className="text-[#0066FF] mb-2 font-bold text-[20px]">{title}</h3>
      <p
        className={` text-[15px] leading-5 font-normal ${featured ? "text-white" : "text-[#6B7280]"}`}
      >
        {text}
      </p>
    </div>
  );
}
