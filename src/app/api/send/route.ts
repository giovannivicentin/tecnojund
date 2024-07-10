import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const res = await request.json()
  const { name, email, subject, message } = res

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      reply_to: email,
      cc: email,
      to: 'chamado@tecnojund.com.br',
      subject: `De ${email}: ${subject}`,
      html: `<p>Email de: ${name} (${email})</p><p>${message}</p>`,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
