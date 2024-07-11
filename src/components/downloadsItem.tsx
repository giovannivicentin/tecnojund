import Link from 'next/link'
import Image from 'next/image'

type DownloadsItemProps = {
  href: string
  name: string
  imageSrc: string
  hoverImageSrc: string
  imageAlt: string
}

export function DownloadsItem({
  href,
  name,
  imageSrc,
  hoverImageSrc,
  imageAlt,
}: DownloadsItemProps) {
  return (
    <Link href={href}>
      <div className="group w-full border-2 dark:border flex flex-col hover:text-primary hover:dark:text-customPrimary hover:underline text-black dark:text-white justify-center md:h-48 items-center gap-2 p-2 rounded-2xl cursor-pointer hover:bg-gradient-to-r dark:hover:from-primary-foreground hover:from-background hover:to-slate-50 dark:hover:to-background hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <div className="relative w-full flex justify-center items-center h-32">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
            className="dark:invert block group-hover:hidden"
          />
          <Image
            src={hoverImageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
            className="hidden group-hover:block absolute"
          />
        </div>
        <h2 className="text-xl font-medium text-center">{name}</h2>
      </div>
    </Link>
  )
}
