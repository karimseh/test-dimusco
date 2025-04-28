import Image from 'next/image';

export default function PublishersBlock() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 w-full py-4 sm:py-8">
      <Image
        src="/images/sikorski.png"
        alt="Sikorski Logo"
        width={261}
        height={70}
        priority
        className="h-12 w-auto"
      />
      <Image
        src="/images/boosey.png"
        alt="Boosey Logo"
        width={323}
        height={70}
        priority
        className="h-12 w-auto"
      />
      <Image
        src="/images/rh.png"
        alt="RH Logo"
        width={103}
        height={70}
        priority
        className="h-12 w-auto"
      />
    </div>
  );
}
