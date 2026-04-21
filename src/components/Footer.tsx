import Image from "next/image";
import Link from "next/link";

export default function Footer({ showLaunchLink = false }: { showLaunchLink?: boolean }) {
  return (
    <footer className="border-t border-white/5">
      {showLaunchLink && (
        <div className="border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex justify-center">
            <Link
              href="/launch"
              className="group inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors duration-300"
            >
              Need something simpler? Explore our 24-hour launch services
              <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      )}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
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
          <Link href="/launch" className="hover:text-muted transition-colors duration-300">
            Launch
          </Link>
          <Link href="/work" className="hover:text-muted transition-colors duration-300">
            Work
          </Link>
          <span>&copy; {new Date().getFullYear()} Vizus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
