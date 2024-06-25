import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export function Header() {
  return (
    <div>
      <header className="flex items-center justify-between px-10 md:px-0  md:justify-around w-full z-10 py-2">
        <Link href="/">
          <Image
            alt="Image of logo in header"
            width="1600"
            height="1200"
            className="w-28 h-auto"
            src="/logo/header-logo.svg"
            priority
          ></Image>
        </Link>

        <ul className="hidden md:flex gap-8">
          <Link href="/">
            <li className="border-y border-transparent hover:border-b-primary hover:text-primary text-lg 2xl:">
              Início
            </li>
          </Link>
          <Link href="/servicos">
            <li className="border-y border-transparent hover:border-b-primary hover:text-primary text-lg">
              Serviços
            </li>
          </Link>
          <Link href="/chamados">
            <li className="border-y border-transparent hover:border-b-primary hover:text-primary text-lg">
              Chamados
            </li>
          </Link>
          <Link href="/portfolio">
            <li className="border-y border-transparent hover:border-b-primary hover:text-primary text-lg">
              Portfólio
            </li>
          </Link>
          <Link href="/uteis">
            <li className="border-y border-transparent hover:border-b-primary hover:text-primary text-lg">
              Uteis
            </li>
          </Link>
        </ul>
        <div className="flex justify-center items-center gap-4">
          <ModeToggle />
          <HamburgerMenuIcon className="md:hidden h-[1.2rem] w-[1.2rem]" />
        </div>
      </header>
      <Separator />
    </div>
  )
}
