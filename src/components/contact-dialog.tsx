'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function ContactDialog({
  name,
  fullName,
  main,
  backup,
  hrefTel,
  hrefBackup,
}: {
  name: string
  fullName: string
  main: string
  backup: string
  hrefTel: string
  hrefBackup: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-28 font-bold text-md">{name}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle>{`${fullName}`}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center space-y-4 p-4">
          <Button
            onClick={() => (window.location.href = `tel:${hrefTel}`)}
            className="w-full"
          >
            Contato Principal: {main}
          </Button>
          <Button
            onClick={() => (window.location.href = `tel:${hrefBackup}`)}
            className="w-full"
          >
            Contato Backup: {backup}
          </Button>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
