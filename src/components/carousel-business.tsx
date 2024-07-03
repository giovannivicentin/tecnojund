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

export function CarouselBusiness() {
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
              title="Sistemas de CFTV"
              description="Instalamos CFTV com excelente custo-benefício, reduzindo custos e aumentando a segurança em rondas e fiscalizações."
              src="/header-logo.svg"
              alt="adwa"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Controle de Acesso"
              description="Oferecemos controle de acesso para funcionários e prestadores com a qualidade e cuidado que sua empresa merece."
              src="/header-logo.svg"
              alt="adwa"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Automação Personalizada"
              description="Desenvolvemos soluções personalizadas de automação de processos e controles com CLP, Arduino ou Raspberry."
              src="/header-logo.svg"
              alt="adwa"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Gerenciamento de Redes e Servidores"
              description="Substitua vários servidores físicos por um único com segurança e economia. Gerenciamos VPN, arquivos, domínio, backup, ERP e SQL."
              src="/header-logo.svg"
              alt="adwa"
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Rede Estruturada"
              description="Organizamos sua rede e racks para melhorar desempenho e economia."
              src="/header-logo.svg"
              alt="adwa"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
