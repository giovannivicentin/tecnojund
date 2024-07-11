import Link from 'next/link'
import Image from 'next/image'

type DownloadsItemProps = {
  href: string
  name: string
  imageSrc: string
  imageAlt: string
}

export function DownloadsItem({
  href,
  name,
  imageSrc,
  imageAlt,
}: DownloadsItemProps) {
  return (
    <Link href={href}>
      <div className="w-full bg-primary flex flex-col hover:underline text-white dark:text-background justify-center md:h-48 items-center gap-2 p-2 rounded-2xl cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={100}
          height={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="invert dark:invert-0"
        />
        <h2 className="text-xl font-medium md:text-2xl text-center">{name}</h2>
      </div>
    </Link>
  )
}
