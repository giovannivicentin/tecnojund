'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { CarouselCard } from './carousel-card'

export function CarouselResidential() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
      opts={{
        align: 'center',
      }}
      className="w-full mt-4"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Segurança com CFTV"
              description="Instalamos sistemas de CFTV com ótimo custo-benefício, ideais para segurança e monitoramento remoto."
              src="/residential/camera.jpg"
              alt="Image of a woman looking for a tablet to see images from camera. Photo by www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Automação Residencial"
              description="Automatize sua casa com controle remoto de luzes, tomadas, portões e alarmes pelo celular. Ganhe tempo e crie rotinas programadas."
              src="/residential/smart-home.jpg"
              alt="An image that have a hand clicking in smart home icon to control the house. Photo by www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Telemetria Residencial"
              description="Monitore remotamente sua casa e acompanhe detalhadamente consumos de energia, água e temperatura. Temos diversas soluções para você!"
              src="/residential/woman-telemetry.jpg"
              alt="A woman using telemetry to monitor the house. Photo by www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Assistentes Virtuais"
              description="Integramos seus dispositivos com assistentes como Siri, Alexa, Bixby e Cortana. Ideal para criar rotinas, eventos e agendamentos, completando sua casa inteligente."
              src="/residential/alexa.jpg"
              alt="A hand using computer and a alexa voice assistant. Photo by www.freepik.com"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
