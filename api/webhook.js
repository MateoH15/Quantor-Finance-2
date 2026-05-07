import { MercadoPagoConfig, Payment } from 'mercadopago';
import { Resend } from 'resend';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Solo aceptamos notificaciones POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Mercado Pago envía el ID del pago en los parámetros de la URL o en el body
  const paymentId = req.query['data.id'] || req.body?.data?.id;
  const type = req.query.type || req.body?.type;

  if (type === 'payment' && paymentId) {
    try {
      const payment = new Payment(client);
      const data = await payment.get({ id: paymentId });

      if (data.status === 'approved') {
        const { user_email, product_names } = data.metadata;

        // Enviar el email con el enlace a la plantilla
        // NOTA: Debes tener un dominio verificado en Resend para enviar desde una dirección personalizada
        await resend.emails.send({
          from: 'Quantor Finance <onboarding@resend.dev>', // Cambiar por tu dominio verificado
          to: user_email,
          subject: 'Acceso a tu herramienta de Quantor Finance',
          html: `
            <div style="font-family: sans-serif; background-color: #101415; color: #e0e3e5; padding: 40px; border-radius: 10px;">
              <h1 style="color: #e9c176; border-bottom: 1px solid #323537; padding-bottom: 10px;">¡Pago Confirmado!</h1>
              <p>Gracias por confiar en <strong>Quantor Finance</strong>.</p>
              <p>Tu orden por <strong>${product_names}</strong> ha sido procesada con éxito.</p>
              <div style="margin: 30px 0; text-align: center;">
                <a href="TU_LINK_DE_DROPBOX_O_GDRIVE" style="background-color: #e9c176; color: #412d00; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-weight: bold; text-transform: uppercase; font-size: 14px;">Descargar Plantillas Excel</a>
              </div>
              <p style="font-size: 12px; color: #d1c5b4;">Este es un envío automático. Por favor, descarga tus archivos en las próximas 48hs.</p>
              <p style="font-size: 12px; color: #d1c5b4;">Si tienes dudas técnicas, contáctanos respondiendo a este mail.</p>
            </div>
          `
        });

        console.log(`Success: Payment ${paymentId} processed and email sent to ${user_email}`);
      }
    } catch (error) {
      console.error('Webhook Error:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  // Siempre responder 200 a Mercado Pago para que no reintente
  return res.status(200).send('OK');
}
