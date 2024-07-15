import Link from 'next/link'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <>
      <Separator />
      <footer className="w-full bg-background dark:bg-background">
        <div className="text-center">
          <h3 className="text-2xl font-bold my-2">Fale Conosco</h3>
          <p className="text-lg md:text-xl">
            Horário de Funcionamento: <br />
            Segunda a sexta <br /> 8h às 18h
          </p>

          <Link
            href="mailto:chamado@tecnojund.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
          >
            chamado@tecnojund.com.br
          </Link>
          <div className="w-full py-1 text-md">
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
        </div>
      </footer>
    </>
  )
}
