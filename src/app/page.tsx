// eslint-disable-next-line camelcase
import { Button } from '@/components/ui/button'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div
      className={
        (roboto.className,
        'min-h-dvh bg-background flex flex-col items-center justify-center gap-12')
      }
    >
      <div className="w-full mt-6 lg:mt-0 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 text-center md:text-start">
          <h1 className="text-6xl font-medium">Automação</h1>
          <h2 className="text-3xl">no tempo certo</h2>
          <p className="text-md mx-auto my-6 md:mx-0  w-4/5">
            A Tecnojund oferece soluções de automação de ponta com equipamentos
            de alta qualidade, como Arduino e Microchip. Nossa experiência
            assegura integração perfeita e automação eficiente para residências
            e empresas.
          </p>
          <Button className="text-md md:text-lg font-bold h-11 rounded-full">
            Fale Conosco
          </Button>
        </div>
        <Image
          alt="house with icons of automation, Iot and smart home"
          src="/home-house.png"
          width="1280"
          height="960"
          className="md:w-1/2"
        ></Image>
      </div>
      <div className="w-full flex flex-col gap-6 justify-center items-center">
        <h2 className="text-5xl font-medium">Serviços</h2>
        <div className="grid grid-cols-3 gap-4 justify-center">
          <div>
            <h3 className="text-3xl font-medium">Residencial</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-medium">Empresarial</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-medium">Condomínios</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
