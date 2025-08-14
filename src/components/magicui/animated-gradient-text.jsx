import { cn } from "@/lib/utils";

export default function AnimatedGradientText({ children, className }) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
      </div>
      <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {children}
      </span>
    </div>
  );
}