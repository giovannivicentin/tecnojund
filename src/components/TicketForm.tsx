'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PassThrough } from 'stream'
import { Toaster } from './ui/sonner'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório.' }),
  email: z.string().email('O E-mail é inválido.').min(1, {
    message: 'O E-mail é obrigatório.',
  }),
  subject: z.string().min(1, { message: 'O assunto é obrigatório.' }),
  message: z.string().min(1, { message: 'A mensagem é obrigatória.' }),
})

export function TicketForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const timestamp = new Date().getTime()
    const randomPart = Math.floor(100000 + Math.random() * 900000)
    const uniquePart = (timestamp % 1000000).toString().padStart(6, '0')
    const ticketCode = `${uniquePart.substring(0, 3)}${randomPart.toString().substring(3, 6)}`

    try {
      const enhancedSubject = `Chamado: ${ticketCode} - ${values.subject}`
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, subject: enhancedSubject }),
      })

      if (response.status === 200) {
        form.reset()
        toast('Chamado criado com sucesso!', {
          description: `Chamado #${ticketCode} foi criado.`,
          action: {
            label: 'Fechar',
            onClick: () => PassThrough,
          },
        })
      } else {
        throw new Error(
          `Falha ao enviar o formulário: Status ${response.status}`,
        )
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'
      toast('Erro ao enviar o chamado', {
        description: errorMessage,
        action: {
          label: 'Tentar novamente',
          onClick: () => PassThrough,
        },
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-3/4 md:1/5 lg:w-1/4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="animate-fade-right delay-100">
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome..." {...field} />
              </FormControl>
              <FormDescription>
                Seu nome será utilizado para te identificar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="animate-fade-right delay-200">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu e-mail..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Seu E-mail será utilizado para te contatar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="animate-fade-right delay-300">
              <FormLabel>Assunto</FormLabel>
              <FormControl>
                <Input placeholder="Digite o assunto..." {...field} />
              </FormControl>
              <FormDescription>
                Escreva a razão principal para o contato.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="animate-fade-right delay-500">
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Digite sua mensagem..." {...field} />
              </FormControl>
              <FormDescription>
                Escreva a mensagem que você deseja nos enviar.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="animate-fade-right delay-700 text-white"
        >
          Enviar
        </Button>
      </form>
      <Toaster />
    </Form>
  )
}
