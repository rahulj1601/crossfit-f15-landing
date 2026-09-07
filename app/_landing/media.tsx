import Image from "next/image";

/**
 * Transformation media.
 *
 * Every slot on these pages must hold a real F15 member. Until the verified
 * file is dropped in and wired up in copy.ts, the slot renders as an obvious
 * empty frame rather than a stock photo or a stand-in gym shot. That keeps the
 * page honest and makes the missing asset impossible to ship by accident.
 */

export type TransformationImage = {
  /** Path under /public once the real file is added. */
  src: string | null;
  alt: string;
  /** What belongs here, shown in the empty state. */
  slotNote: string;
};

export type ProofClient = {
  name: string | null;
  result: string | null;
  secondaryResult?: string | null;
  story?: string;
  quote: string | null;
  image: TransformationImage;
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

export function ProofVideo({
  src,
  poster,
  slotNote,
}: {
  src: string | null;
  poster: string | null;
  slotNote: string;
}) {
  if (!src) return <EmptySlot note={slotNote} aspect="aspect-video" />;

  return (
    <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl shadow-black/50">
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

/** One of the two smaller proof cards under the main transformation. */
export function ProofCard({ client }: { client: ProofClient }) {
  return (
    <div className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col">
      <TransformationShot image={client.image} aspect="aspect-[4/3]" />
      <div className="p-5 sm:p-6 flex flex-col gap-2">
        <p className="text-white font-bold text-base tracking-tight">
          {client.name ?? <SlotText>Client name</SlotText>}
        </p>
        <p className="text-cf-red font-bold text-sm tracking-[0.08em] uppercase">
          {client.result ?? <SlotText>Verified result</SlotText>}
        </p>
        <p className="text-[#b0b0b0] text-sm leading-relaxed">
          {client.quote ? `"${client.quote}"` : <SlotText>One sentence from their real testimonial</SlotText>}
        </p>
      </div>
    </div>
  );
}

export function SlotText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-cf-red/70 border-b border-dashed border-cf-red/40">[{children}]</span>
  );
}
