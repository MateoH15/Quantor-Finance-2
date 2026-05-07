import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { items, userData } = req.body;
    
    // Si BASE_URL no está definido, intentamos construirlo desde el request
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host;
    const baseUrl = process.env.BASE_URL || `${protocol}://${host}`;

    const preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: items.map(item => ({
          title: item.name,
          unit_price: Number(item.price),
          quantity: 1,
          currency_id: 'ARS'
        })),
        payer: {
          name: userData.name,
          email: userData.email,
        },
        back_urls: {
          success: `${baseUrl}/success`,
          failure: `${baseUrl}/productos`,
          pending: `${baseUrl}/productos`,
        },
        auto_return: 'approved',
        notification_url: `${baseUrl}/api/webhook`,
        metadata: {
          user_email: userData.email,
          product_names: items.map(i => i.name).join(', ')
        }
      }
    });

    return res.status(200).json({ id: response.id, init_point: response.init_point });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
