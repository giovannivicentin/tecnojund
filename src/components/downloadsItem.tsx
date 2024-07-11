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
      <div className="w-full border-2 flex flex-col hover:underline text-black hover:text-primary hover:dark:text-primary dark:text-white justify-center md:h-48 items-center gap-2 p-2 rounded-2xl cursor-pointer hover:bg-gradient-to-r dark:hover:from-primary-foreground hover:from-background hover:to-slate-50 dark:hover:to-background hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={100}
          height={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="dark:invert"
        />
        <h2 className="text-xl font-medium text-center">{name}</h2>
      </div>
    </Link>
  )
}
