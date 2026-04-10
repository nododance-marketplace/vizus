import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/vizus-icon.png"
            alt="Vizus"
            width={28}
            height={28}
          />
          <span className="text-sm font-medium tracking-tight">Vizus</span>
          <span className="text-xs text-muted/40">
            AI Systems Company
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted/40">
          <span>&copy; {new Date().getFullYear()} Vizus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
