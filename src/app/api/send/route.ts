import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const res = await request.json()
  const { name, email, subject, message } = res

  try {
    const { data, error } = await resend.emails.send({
      from: 'chamado@tecnojund.com.br',
      reply_to: email,
      cc: email,
      to: 'chamado@tecnojund.com.br',
      subject: `${subject}`,
      html: `<h1>E-mail enviado por: ${name}</h1>
             <h2>Endereço de email: ${email}</h2>
             <div>${message}</div>`,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
