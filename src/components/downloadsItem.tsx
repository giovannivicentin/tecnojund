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
      <div className="w-full bg-primary flex flex-col hover:underline justify-center md:h-60 items-center gap-2 p-2 rounded-2xl cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-primary/90 hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={150}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="dark:invert"
        />
        <h2 className="text-xl font-medium text-black dark:text-white md:text-2xl text-center">
          {name}
        </h2>
      </div>
    </Link>
  )
}
