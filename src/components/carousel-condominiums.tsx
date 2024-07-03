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

export function CarouselCondominiums() {
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
              title="Portarias Autônomas"
              description="Implementamos portarias autônomas com controle de acesso e processos personalizados, integráveis com portaria virtual se necessário."
              src="/condominiums/concierge.jpg"
              alt="Back view of a delivery man ringing on the intercom at the door of a customer's house while delivering packages. The image is from www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Controle de Acesso Completo"
              description="Gerenciamos o acesso de funcionários, prestadores e visitantes, garantindo segurança e eficiência."
              src="/condominiums/scanning.jpg"
              alt="Scanning your finger on a fingerprint access control. Image from www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Automação de Condomínios"
              description="Automatizamos processos em seu condomínio com CLP, Arduino ou Raspberry, economizando mão de obra e melhorando a eficiência."
              src="/condominiums/automation.jpg"
              alt="RPA concept with blurry hand touch screen. Image from www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Telemetria Essencial"
              description="Antes exclusivo para grandes empresas, a telemetria agora é indispensável. Monitore em tempo real e evite desperdícios com um simples vazamento de água."
              src="/condominiums/telemetry.jpg"
              alt="Control panel with digital screen. Image from www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Suporte para Portarias 24h"
              description="Oferecemos suporte contínuo para controladores de acesso, aumentando a segurança e melhorando a experiência no condomínio. Verifique seus relatórios de acesso e veja como podemos ajudar."
              src="/condominiums/call-center.jpg"
              alt="Call center with operators. Image from www.freepik.com"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <CarouselCard
              title="Serviços de Manutenção"
              description="Oferecemos reparos, vendas, integrações e contratos de manutenção mensal. Estamos prontos para ajudar no que você precisar."
              src="/condominiums/management.jpg"
              alt="Concept of quality control and maintenance. Image from www.freepik.com"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="sm:flex hidden" />
      <CarouselNext className="sm:flex hidden" />
    </Carousel>
  )
}
