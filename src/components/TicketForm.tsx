'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
import { Textarea } from './ui/textarea'
import { useState } from 'react'

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

  const [ticketCode] = useState(() =>
    Math.floor(100000 + Math.random() * 900000),
  )

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
      } else {
        throw new Error(
          `Falha ao enviar o formulário: Status ${response.status}`,
        )
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
      // Aqui você pode definir um estado para mostrar a mensagem de erro para o usuário
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
            <FormItem>
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
            <FormItem>
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
            <FormItem>
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
            <FormItem>
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
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}
