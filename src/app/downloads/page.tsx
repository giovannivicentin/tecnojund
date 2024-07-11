import { DownloadsItem } from '@/components/downloadsItem'

export default function Downloads() {
  return (
    <div className="bg-background h-dvh flex justify-center items-start">
      <div className="flex flex-col justify-center items-center gap-12 mt-12 w-full px-4">
        <h1 className="font-medium text-4xl text-center">Downloads</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-md md:max-w-3xl mb-24">
          <DownloadsItem
            href="/downloads/team-viewer.exe"
            name="Team Viewer"
            imageSrc="/downloads-icons/team-viewer.png"
            imageAlt="logo of team viewer"
          />
          <DownloadsItem
            href="/downloads/netscan.zip"
            name="Netscan Digital"
            imageSrc="/downloads-icons/netscan-digital.png"
            imageAlt="logo of netscan digital"
          />
          <DownloadsItem
            href="/downloads/arduino-driver.zip"
            name="Arduino Driver"
            imageSrc="/downloads-icons/arduino.png"
            imageAlt="logo of arduino"
          />
          <DownloadsItem
            href="/downloads/winrar.exe"
            name="WinRAR"
            imageSrc="/downloads-icons/winrar.png"
            imageAlt="logo of winrar"
          />
          <DownloadsItem
            href="/downloads/hd-test.exe"
            name="Teste de HD"
            imageSrc="/downloads-icons/hd.png"
            imageAlt="image of hd drawing"
          />
          <DownloadsItem
            href="/downloads/folder-size.exe"
            name="Folder Size"
            imageSrc="/downloads-icons/folder-size.png"
            imageAlt="logo of folder size"
          />
          <DownloadsItem
            href="/downloads/ln-bio.zip"
            name="Biometria LN-Bio"
            imageSrc="/downloads-icons/ln-bio.png"
            imageAlt="logo of ln-bio"
          />
          <DownloadsItem
            href="/downloads/computer-test.exe"
            name="Teste Computador"
            imageSrc="/downloads-icons/test-computer.png"
            imageAlt="image of computer with a test written on screen"
          />
        </div>
      </div>
    </div>
  )
}
