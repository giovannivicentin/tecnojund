'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback } from 'react'
import { ModeToggle } from './mode-toggle'
import { Separator } from './ui/separator'
import { HamburgerMenuIcon, Cross2Icon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  return (
    <div>
      <header className="flex items-center bg-background justify-between px-4 md:px-0 md:justify-around w-full z-10 py-2">
        <Link href="/">
          <Image
            src="/header-logo.svg"
            alt="Logo Tecnojund"
            width={100}
            height={50}
            className="cursor-pointer"
            priority
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Link>

        {/* desktop navbar */}
        <ul className="hidden md:flex gap-8">
          <Link href="/">
            <li className="border-y border-transparent hover:border-b-primary hover:text-primary text-lg">
              Início
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
              Úteis
            </li>
          </Link>
        </ul>

        <div className="flex justify-center items-center">
          <ModeToggle />
          <Button
            variant="ghost"
            onClick={handleNav}
            className="hover:text-primary cursor-pointer md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>

        {/* mobile navbar */}
        <div
          id="mobile-menu"
          className={`fixed left-0 top-0 w-full md:hidden h-3/5 bg-background backdrop-blur-lg px-4 pt-4 transform ${
            menuOpen ? 'translate-y-0' : '-translate-y-[200%]'
          } transition-transform duration-200 ease-in-out`}
        >
          <div className="flex w-full items-center justify-end">
            <Button
              variant="ghost"
              onClick={handleNav}
              className="cursor-pointer hover:text-primary"
            >
              <Cross2Icon className="h-[1.4rem] w-[1.4rem]" />
            </Button>
          </div>
          <ul className="flex flex-col text-center items-center justify-center  gap-4 mt-4">
            <Link href="/">
              <li className="text-lg hover:text-primary" onClick={handleNav}>
                Início
              </li>
            </Link>
            <Link href="/chamados">
              <li className="text-lg hover:text-primary" onClick={handleNav}>
                Chamados
              </li>
            </Link>
            <Link href="/portfolio">
              <li className="text-lg hover:text-primary" onClick={handleNav}>
                Portfólio
              </li>
            </Link>
            <Link href="/uteis">
              <li className="text-lg hover:text-primary" onClick={handleNav}>
                Úteis
              </li>
            </Link>
          </ul>
        </div>
      </header>
      <Separator />
    </div>
  )
}
