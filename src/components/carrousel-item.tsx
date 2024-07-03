import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

interface CarrouselItemProps {
  title: string
  description: string
  src: string
  alt: string
}

export function CarrouselItem({
  title,
  description,
  src,
  alt,
}: CarrouselItemProps) {
  return (
    <Card className="sm:h-[19rem] h-64 flex flex-col object-cover overflow-hidden border border-neutral-300 p-4 bg-background-color">
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        className="text-black w-10 h-10 sm:w-12 sm:h-12"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      ></Image>
      <CardTitle className="my-2 sm:my-4 sm:text-4xl text-xl">
        {title}
      </CardTitle>
      <CardDescription className="mt-0 sm:mt-2">{description}</CardDescription>
    </Card>
  )
}
