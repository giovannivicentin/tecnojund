import { DownloadsItem } from '@/components/downloadsItem'

export default function Downloads() {
  return (
    <div className="bg-background h-dvh flex justify-center items-start">
      <div className="flex flex-col justify-center items-center gap-12 mt-12 w-full px-4">
        <h1 className="font-medium text-4xl text-center">Downloads</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg md:max-w-5xl mb-24">
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
          <DownloadsItem
            href="/link-to-download"
            name="Downloadable Content"
            imageSrc="/home-house.png"
            imageAlt="Descriptive Alt Text"
          />
        </div>
      </div>
    </div>
  )
}
