import Link from 'next/link'
import { ContactDialog } from './contact-dialog'
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
            Segunda a sexta das 8h às 18h
          </p>
          <div className="flex justify-center space-x-4 my-4">
            <ContactDialog
              name="Gustavo"
              fullName="Gustavo Silva"
              main="(11) 97236-0860"
              hrefTel="+5511972360860"
              backup="(11) 96319-3865"
              hrefBackup="+5511963193865"
            />
            <ContactDialog
              name="Daniel"
              fullName="Daniel Silva"
              main="(11) 96766-6725"
              hrefTel="+5511967666725"
              backup="(11) 97137-4104"
              hrefBackup="+5511971374104"
            />
          </div>
          {/* <Link
            href="mailto:chamado@tecnojund.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary"
          >
            chamado@tecnojund.com.br
          </Link> */}
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
