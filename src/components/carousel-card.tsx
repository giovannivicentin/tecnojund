import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface CarouselCardProps {
  title: string
  description: string
  src: string
  alt: string
}

export function CarouselCard({
  title,
  description,
  src,
  alt,
}: CarouselCardProps) {
  return (
    <Card className="w-full h-96 sm:h-[26rem] lg:h-96 xl:h-[30rem] flex flex-col gap-2">
      <Image
        src={src}
        alt={alt}
        width={1980}
        height={1080}
        className="w-full aspect-video rounded-t-sm"
        style={{
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
        }}
      ></Image>
      <CardTitle className="px-4 text-2xl sm:text-xl lg:text-2xl">
        {title}
      </CardTitle>
      <CardDescription className="px-4 text-black dark:text-white text-sm sm:text-xs lg:text-sm">
        {description}
      </CardDescription>
    </Card>
  )
}
