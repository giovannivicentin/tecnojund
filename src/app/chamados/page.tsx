import { TicketForm } from '@/components/TicketForm'

function Chamados() {
  return (
    <div className="mt-12 min-h-dvh bg-background flex flex-col items-center">
      <h1 className="font-medium text-4xl text-center mb-6">Chamados</h1>

      <TicketForm />
    </div>
  )
}

export default Chamados
