import { Roboto } from 'next/font/google'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { CarouselResidential } from '@/components/carousel-residential'
import { CarouselBusiness } from '@/components/carousel-business'
import { CarouselCondominiums } from '@/components/carousel-condominiums'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div
      className={
        (roboto.className,
        'min-h-dvh bg-background flex flex-col items-center justify-center gap-12 animate-fade-up animate-once')
      }
    >
      <div className="w-3/4 md:h-dvh mt-24 md:mt-0 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
        <div className="md:w-1/2 text-center md:text-start">
          <h1 className="text-6xl font-medium">Automação</h1>
          <h2 className="text-3xl">no tempo certo</h2>
          <p className="text-md mx-auto my-6 md:mx-0 md:w-3/4">
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
          width="1081"
          height="811"
          className="md:w-1/2"
          priority
          about="Generated by Leonardo.ai"
        ></Image>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-5xl font-medium">Serviços</h2>
        <div className="flex flex-col w-3/4 gap-20 justify-center items-center mb-24">
          <div className="w-full">
            <h3 className="text-xl md:text-3xl font-medium">Residencial</h3>
            <CarouselResidential />
          </div>
          <div className="w-full">
            <h3 className="text-xl md:text-3xl font-medium">Empresarial</h3>
            <CarouselBusiness />
          </div>
          <div className="w-full">
            <h3 className="text-xl md:text-3xl font-medium">Condomínios</h3>
            <CarouselCondominiums />
          </div>
        </div>
      </div>
    </div>
  )
}
