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
    <Card className="w-full h-80">
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        className="w-full aspect-video h-1/2 rounded-lg"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      ></Image>
      <CardTitle className="px-4 text-2xl">{title}</CardTitle>
      <CardDescription className="px-4 text-lg">{description}</CardDescription>
    </Card>
  )
}
