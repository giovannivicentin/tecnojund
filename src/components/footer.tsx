import Link from 'next/link'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="w-full bg-background dark:bg-background pt-2">
        <div className="flex flex-col-reverse md:flex-row justify-evenly gap-8">
          <div className="flex flex-col-reverse md:flex-col justify-start gap-4 md:gap-2 text-center items-center">
            <Image
              src="/header-logo.svg"
              alt="Logo Tecnojund"
              width={100}
              height={50}
            ></Image>
            <div className="flex gap-2 items-center justify-start">
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
          <div className="flex flex-col text-center gap-2">
            <h3 className="text-xl font-bold my-2 text-center">Fale Conosco</h3>
            <Link href="/chamados">
              <Button className="text-md rounded-full">Abra um Chamado</Button>
            </Link>
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
