import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { items, userData } = req.body;

    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: items.map(item => ({
          id: item.id.toString(),
          title: item.name,
          unit_price: Number(item.price),
          quantity: 1,
          currency_id: 'ARS' // Cambiar a USD si la cuenta lo permite
        })),
        payer: {
          name: userData.name,
          email: userData.email,
        },
        back_urls: {
          success: `${process.env.BASE_URL}/success`,
          failure: `${process.env.BASE_URL}/productos`,
          pending: `${process.env.BASE_URL}/productos`,
        },
        auto_return: 'approved',
        notification_url: `https://tu-dominio.vercel.app/api/webhook`, // IMPORTANTE: Debe ser una URL pública
        metadata: {
          user_email: userData.email,
          product_names: items.map(i => i.name).join(', ')
        }
      }
    });

    return res.status(200).json({ id: response.id, init_point: response.init_point });
  } catch (error) {
    console.error('Error creating preference:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
