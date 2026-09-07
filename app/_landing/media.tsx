import Image from "next/image";

/**
 * Proof media.
 *
 * Every person shown or quoted here is a real F15 member. Names and quotes come
 * either from their own filmed testimonial or from their public Google review.
 * A face is never paired with someone else's words: a photo slot and a quote
 * slot only share a card when they belong to the same person.
 *
 * Any slot without a verified asset renders as an obvious empty frame rather
 * than a stock photo, so a missing asset cannot ship by accident.
 */

export type TransformationImage = {
  /** Path under /public. Null renders the empty state. */
  src: string | null;
  alt: string;
  /** What belongs here, shown in the empty state. */
  slotNote: string;
};

/** A filmed member testimonial: the video and the words are the same person. */
export type FeatureClient = {
  name: string | null;
  result: string | null;
  secondaryResult?: string | null;
  story?: string;
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

function EmptySlot({ note, aspect }: { note: string; aspect: string }) {
  return (
    <div
      className={`${aspect} w-full rounded-2xl border border-dashed border-cf-red/40 bg-[#0d0d0d]
                  flex flex-col items-center justify-center text-center px-6 gap-2`}
    >
      <span className="text-cf-red text-[10px] font-bold tracking-[0.25em] uppercase">
        Real F15 photo needed
      </span>
      <span className="text-white/40 text-xs sm:text-sm max-w-[22rem] leading-relaxed">{note}</span>
    </div>
  );
}

export function TransformationShot({
  image,
  aspect = "aspect-[4/5]",
  priority = false,
}: {
  image: TransformationImage;
  aspect?: string;
  priority?: boolean;
}) {
  if (!image.src) return <EmptySlot note={image.slotNote} aspect={aspect} />;

  return (
    <div className={`${aspect} relative w-full rounded-2xl overflow-hidden border border-white/10`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

/** Member testimonials are filmed vertically, so the frame follows the footage. */
export function ProofVideo({
  src,
  poster,
  slotNote,
}: {
  src: string | null;
  poster: string | null;
  slotNote: string;
}) {
  if (!src) return <EmptySlot note={slotNote} aspect="aspect-[9/16]" />;

  return (
    <div className="mx-auto w-full max-w-[22rem] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl shadow-black/50">
      <video
        src={src}
        poster={poster ?? undefined}
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function Stars() {
  return (
    <span className="text-cf-red text-sm tracking-[0.15em]" aria-hidden="true">
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </span>
  );
}

export function ProofItemCard({ item }: { item: ProofItem }) {
  return (
    <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col h-full">
      {item.kind === "filmed" && (
        <div className="aspect-[9/16] max-h-[26rem] w-full bg-[#111]">
          <video
            src={item.video}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-white font-bold text-base tracking-tight">{item.name}</p>
          {item.kind === "review" && <Stars />}
        </div>
        <p className="text-cf-red font-bold text-sm tracking-[0.08em] uppercase">{item.result}</p>
        <p className="text-[#b0b0b0] text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
        {item.kind === "review" && (
          <p className="text-white/30 text-[11px] mt-auto pt-2">Google review</p>
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
