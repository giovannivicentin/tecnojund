import Link from 'next/link'
import Image from 'next/image'

type DownloadsItemProps = {
  downloadDetails: {
    href: string
    name: string
    imageSrc: string
    imageAlt: string
  }
}

export function DownloadsItem({ downloadDetails }: DownloadsItemProps) {
  return (
    <Link href={downloadDetails.href}>
      <div className="w-full bg-primary flex flex-col justify-center md:h-80 items-center gap-2 p-2 rounded-2xl cursor-pointer">
        <Image
          src={downloadDetails.imageSrc}
          alt={downloadDetails.imageAlt}
          width={200}
          height={200}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <h2 className="text-xl font-medium text-white md:text-3xl text-center">
          {downloadDetails.name}
        </h2>
      </div>
    </Link>
  )
}
