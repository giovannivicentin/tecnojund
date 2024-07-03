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
    <Card className="w-full h-96 flex flex-col gap-2">
      <Image
        src={src}
        alt={alt}
        width={1980}
        height={1080}
        className="w-full aspect-video rounded-t-sm"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      ></Image>
      <CardTitle className="px-4 text-2xl">{title}</CardTitle>
      <CardDescription className="px-4 text-black dark:text-white text-sm">
        {description}
      </CardDescription>
    </Card>
  )
}
