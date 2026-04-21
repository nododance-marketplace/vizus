import FAQ, { type FAQItem } from "@/components/FAQ";
import { FadeIn } from "@/components/AnimatedSection";

const faqItems: FAQItem[] = [
  {
    question: "What if I don't like the first draft?",
    answer:
      "One round of revisions is included with every package. You review, send feedback, and we refine before going live. Need more? Extra revision rounds are available as an add-on for $49.",
  },
  {
    question: "Who owns the website/video?",
    answer:
      "You do, 100%. Full ownership of the code, the design, the video file, and the assets. No lock-in, no licensing fees, no hidden rights.",
  },
  {
    question: "What if my project is more complex than a landing page?",
    answer:
      "Book a call — we'll scope a custom quote. The productized packages are for straightforward launches. Anything larger (multi-page sites, custom platforms, AI systems) is handled through Vizus's main engagement process.",
  },
  {
    question: "Can I cancel the Care Plan anytime?",
    answer:
      "Yes, the Care Plan is monthly with no contract. Cancel anytime and keep your site — you own it. If you cancel, you'll just need to handle hosting and maintenance yourself.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "Your business info, brand colors, your logo (if you have one), and what action you want visitors to take (book a call, buy, sign up, etc.). That's it. A 5-minute intake form covers everything.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Full refund before work begins. Once production starts, refunds are partial — you only pay for the work completed up to that point. No hidden cancellation fees.",
  },
];

export default function LaunchFAQ() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] gap-12 lg:gap-20">
          <FadeIn>
            <p className="text-sm text-accent font-mono tracking-wider uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
              Answers before you ask.
            </h2>
            <p className="text-muted text-base leading-relaxed max-w-[360px]">
              If something isn&apos;t covered here, book a 15-minute call and
              we&apos;ll walk through it directly.
            </p>
          </FadeIn>

          <FAQ items={faqItems} />
        </div>
      </div>
    </section>
  );
}
