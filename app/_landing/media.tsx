import Image from "next/image";

/**
 * Proof media.
 *
 * Nothing here is cropped. Before and after panels, and filmed testimonials,
 * lose their meaning the moment an edge is cut off, so every asset is rendered
 * at its own aspect ratio and simply scaled to the column width.
 *
 * Every person shown or quoted is a real F15 member. A face is never paired
 * with someone else's words: a photo and a quote only share a card when they
 * belong to the same person.
 */

export type Tone = "dark" | "light";

export type TransformationImage = {
  /** Path under /public. Null renders the empty state. */
  src: string | null;
  alt: string;
  /** True pixel size, so the image is never squeezed into a fixed frame. */
  width: number;
  height: number;
  /** What belongs here, shown in the empty state. */
  slotNote: string;
};

/** A filmed member testimonial: the video and the words are the same person. */
export type FeatureClient = {
  name: string | null;
  result: string | null;
  secondaryResult?: string | null;
  story?: string;
  /** The "today / after X" line, in the member's own terms. */
  today?: string;
  quote: string | null;
  video: { src: string | null; poster: string | null; slotNote: string };
};

/** Secondary proof: either a filmed member, or a public Google review. */
export type ProofItem =
  | {
      kind: "filmed";
      name: string;
      result: string;
      quote: string;
      poster: string;
      video: string;
    }
  | {
      kind: "review";
      name: string;
      result: string;
      quote: string;
    };

function EmptySlot({ note }: { note: string }) {
  return (
    <div
      className="aspect-[4/5] w-full rounded-2xl border border-dashed border-cf-red/40 bg-[#0d0d0d]
                 flex flex-col items-center justify-center text-center px-6 gap-2"
    >
      <span className="text-cf-red text-[10px] font-bold tracking-[0.25em] uppercase">
        Real F15 photo needed
      </span>
      <span className="text-white/40 text-xs sm:text-sm max-w-[22rem] leading-relaxed">{note}</span>
    </div>
  );
}

/** Shown whole: the full frame, at the image's own proportions. */
export function TransformationShot({
  image,
  priority = false,
  tone = "dark",
}: {
  image: TransformationImage;
  priority?: boolean;
  tone?: Tone;
}) {
  if (!image.src) return <EmptySlot note={image.slotNote} />;

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      sizes="(max-width: 1024px) 100vw, 50vw"
      className={`w-full h-auto rounded-2xl border ${
        tone === "light" ? "border-black/10" : "border-white/10"
      }`}
    />
  );
}

/** Filmed testimonials play at their own ratio, never letterboxed or cut. */
export function ProofVideo({
  src,
  poster,
  slotNote,
  tone = "dark",
}: {
  src: string | null;
  poster: string | null;
  slotNote: string;
  tone?: Tone;
}) {
  if (!src) return <EmptySlot note={slotNote} />;

  // Testimonials are filmed 9:16. At full column width that is roughly 765px
  // tall on a phone, which pushes everything after it off the screen. Capping
  // the width brings the height down proportionally, with nothing cropped.
  return (
    <video
      src={src}
      poster={poster ?? undefined}
      controls
      playsInline
      preload="metadata"
      className={`mx-auto block w-full max-w-[210px] sm:max-w-[240px] h-auto rounded-2xl border shadow-2xl ${
        tone === "light" ? "border-black/10 shadow-black/10" : "border-white/10 shadow-black/50"
      }`}
    />
  );
}

function Stars({ tone }: { tone: Tone }) {
  return (
    <span className="text-cf-red text-sm tracking-[0.15em]" aria-hidden="true">
      &#9733;&#9733;&#9733;&#9733;&#9733;
      <span className="sr-only">{tone === "light" ? "" : ""}</span>
    </span>
  );
}

export function ProofItemCard({ item, tone = "dark" }: { item: ProofItem; tone?: Tone }) {
  const light = tone === "light";
  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col h-full border ${
        light ? "bg-[#f5f5f5] border-black/[0.08]" : "bg-[#0d0d0d] border-white/[0.07]"
      }`}
    >
      {item.kind === "filmed" && (
        <div className="p-4 pb-0">
          <video
            src={item.video}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            className="mx-auto block w-full max-w-[180px] h-auto rounded-xl"
          />
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className={`font-bold text-base tracking-tight ${light ? "text-[#0a0a0a]" : "text-white"}`}>
            {item.name}
          </p>
          {item.kind === "review" && <Stars tone={tone} />}
        </div>
        <p className="text-cf-red font-bold text-sm tracking-[0.08em] uppercase">{item.result}</p>
        <p className={`text-sm leading-relaxed ${light ? "text-[#4a4a4a]" : "text-[#b0b0b0]"}`}>
          &ldquo;{item.quote}&rdquo;
        </p>
        {item.kind === "review" && (
          <p className={`text-[11px] mt-auto pt-2 ${light ? "text-black/40" : "text-white/30"}`}>
            Google review
          </p>
        )}
      </div>
    </div>
  );
}

export function SlotText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-cf-red/70 border-b border-dashed border-cf-red/40">[{children}]</span>
  );
}
