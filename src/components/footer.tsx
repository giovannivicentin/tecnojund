import Link from 'next/link'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="w-full bg-background dark:bg-background pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:ml-32">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/header-logo.svg"
              alt="Logo Tecnojund"
              width={180}
              height={90}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
            <h3 className="text-xl font-bold my-2 text-center md:text-start">
              Horário de Funcionamento
            </h3>
            <p className="text-md text-center md:text-start">
              Segunda a sexta <br /> 8h às 18h
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center md:items-start">
            <h3 className="text-xl font-bold my-2 text-center md:text-start">
              Fale Conosco
            </h3>
            <div className="">
              <Link
                href="mailto:contato@tecnojund.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center md:justify-start hover:underline hover:text-primary"
              >
                <EnvelopeClosedIcon className="w-4 h-4" />
                contato@tecnojund.com.br
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full my-4 text-sm flex flex-col items-center justify-center text-muted-foreground">
          <p>© Tecnojund 2024. Todos os direitos reservados.</p>
          <Link
            className="hover:underline hover:text-primary"
            href="https://www.giovannivicentin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desenvolvido por Giovanni Vicentin
          </Link>
        </div>
      </footer>
    </>
  )
}
