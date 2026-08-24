import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({
        error: 'Method not allowed',
      }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: 'Todos los campos son obligatorios',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Landing Demo <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],
      subject: `Nuevo contacto de ${name}`,
      replyTo: email,
      html: `
        <h2>Nuevo mensaje desde la landing</h2>

        <p>
          <strong>Nombre:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Mensaje:</strong>
        </p>

        <p>
          ${message}
        </p>
      `,
    });

    if (error) {
      console.error(error);

      return new Response(
        JSON.stringify({
          error: 'No se pudo enviar el mensaje',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: 'Error interno del servidor',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}