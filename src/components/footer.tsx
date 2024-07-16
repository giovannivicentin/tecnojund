import Link from 'next/link'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="w-full bg-background dark:bg-background pt-4">
        <div className="flex flex-col-reverse md:flex-row justify-evenly gap-8">
          <div className="flex flex-col-reverse md:flex-col justify-center text-center items-center">
            <Image
              src="/header-logo.svg"
              alt="Logo Tecnojund"
              width={180}
              height={90}
            ></Image>
            <div className="flex gap-2 items-center justify-center text-transparent">
              <EnvelopeClosedIcon className="w-4 h-4 hidden" />
              contato@tecnojund.com.br
            </div>
          </div>
          <div className="flex flex-col text-center gap-2">
            <h3 className="text-xl font-bold my-2 text-center">Fale Conosco</h3>
            <div className="flex gap-2 items-center justify-center">
              <EnvelopeClosedIcon className="w-4 h-4" />
              <Link
                href="mailto:contato@tecnojund.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary"
              >
                contato@tecnojund.com.br
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-end">
            <h3 className="text-xl font-bold my-2">Horário de Funcionamento</h3>
            <p className="text-md">
              Segunda a sexta <br /> 8h às 18h
            </p>
          </div>
        </div>
        <div className="w-full my-4 text-sm text-center flex flex-col items-center justify-center text-muted-foreground">
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
