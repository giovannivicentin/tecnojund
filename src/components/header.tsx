import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div>
      <header className="flex items-center justify-around w-full z-10 py-1">
        <Link href="/">
          <Image
            alt="Image of logo in header"
            width="320"
            height="240"
            className="w-24 h-18"
            src="/logo/logo-header.png"
          ></Image>
        </Link>

        <ul className="flex gap-10">
          <Link href="/">
            <li>Início</li>
          </Link>
          <Link href="/servicos">
            <li>Serviços </li>
          </Link>
          <Link href="/chamados">
            <li>Chamados</li>
          </Link>
          <Link href="/portfolio">
            <li>Portfólio</li>
          </Link>
          <Link href="/uteis">
            <li>Uteis</li>
          </Link>
        </ul>

        <ModeToggle />
      </header>
      <Separator />
    </div>
  )
}
