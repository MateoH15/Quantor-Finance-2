import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario, por ahora solo mostramos un mensaje
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="flex-1 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#CEA855] text-center">
          Contacto
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#CEA855] mb-4">
              Ponte en contacto
            </h2>
            <p className="text-slate-300 mb-6">
              ¿Tienes alguna duda, sugerencia o propuesta de colaboración? Siéntete
              libre de escribirnos. Valoramos cada mensaje y nos esforzamos por
              responder en menos de 24 horas.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-[#CEA855]/10 flex items-center justify-center text-[#CEA855]">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <span>contacto@quantorfinance.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-[#CEA855]/10 flex items-center justify-center text-[#CEA855]">
                  <i className="mdi mdi-map-marker-outline"></i>
                </div>
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#CEA855]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#CEA855]"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#CEA855]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#CEA855]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#CEA855] text-slate-900 font-bold py-3 rounded-lg hover:bg-[#d4b46b] transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
