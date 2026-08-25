import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios',
      });
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
      console.error('Resend error:', error);

      return res.status(500).json({
        error: 'No se pudo enviar el mensaje',
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error('API error:', error);

    return res.status(500).json({
      error: 'Error interno del servidor',
    });
  }
}