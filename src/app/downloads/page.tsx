import { DownloadsItem } from '@/components/downloadsItem'

export default function Downloads() {
  return (
    <div className="bg-background min-h-dvh flex justify-center items-start">
      <div className="flex flex-col justify-center items-center gap-12 mt-12 w-full px-4">
        <h1 className="font-medium text-4xl text-center animate-fade">
          Downloads
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-sm md:max-w-3xl mb-24 animate-fade-up">
          <DownloadsItem
            href="/downloads/netscan.zip"
            name="Netscan Digital"
            imageSrc="/downloads-icons/netscan.svg"
            hoverImageSrc="/downloads-icons/netscan-hover.svg"
            imageAlt="logo of netscan digital"
          />
          <DownloadsItem
            href="/downloads/winrar.exe"
            name="WinRAR"
            imageSrc="/downloads-icons/winrar.svg"
            hoverImageSrc="/downloads-icons/winrar-hover.svg"
            imageAlt="logo of winrar"
          />
          <DownloadsItem
            href="/downloads/hd-test.exe"
            name="Teste de HD"
            imageSrc="/downloads-icons/hd.svg"
            hoverImageSrc="/downloads-icons/hd-hover.svg"
            imageAlt="image of hd drawing"
          />
          <DownloadsItem
            href="/downloads/folder-size.exe"
            name="Folder Size"
            imageSrc="/downloads-icons/folder.svg"
            hoverImageSrc="/downloads-icons/folder-hover.svg"
            imageAlt="logo of folder size"
          />
          <DownloadsItem
            href="/downloads/computer-test.exe"
            name="Teste de PC"
            imageSrc="/downloads-icons/computer.svg"
            hoverImageSrc="/downloads-icons/computer-hover.svg"
            imageAlt="image of computer with a test written on screen"
          />
        </div>
      </div>
    </div>
  )
}
