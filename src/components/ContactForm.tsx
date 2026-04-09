"use client";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name     = (form.elements.namedItem("name")      as HTMLInputElement).value.trim();
    const phone    = (form.elements.namedItem("phone")     as HTMLInputElement).value.trim();
    const email    = (form.elements.namedItem("email")     as HTMLInputElement).value.trim();
    const specialty= (form.elements.namedItem("specialty") as HTMLSelectElement).value;
    const message  = (form.elements.namedItem("message")   as HTMLTextAreaElement).value.trim();

    const lines: string[] = [];
    lines.push(`Olá! Vim pelo site da Ser Singular e gostaria de agendar uma avaliação.`);
    lines.push(`\n*Nome:* ${name}`);
    lines.push(`*Telefone:* ${phone}`);
    if (email)     lines.push(`*E-mail:* ${email}`);
    if (specialty) lines.push(`*Especialidade:* ${specialty}`);
    if (message)   lines.push(`*Mensagem:* ${message}`);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/554599771331?text=${text}`, "_blank");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[20px] p-8 border border-[#e2e8f0] space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="name">
          Seu nome *
        </label>
        <input
          id="name" name="name" type="text" required
          placeholder="Nome completo"
          className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="phone">
            Telefone / WhatsApp *
          </label>
          <input
            id="phone" name="phone" type="tel" required
            placeholder="(45) 99999-9999"
            className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="email">
            E-mail
          </label>
          <input
            id="email" name="email" type="email"
            placeholder="seu@email.com"
            className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="specialty">
          Especialidade de interesse
        </label>
        <select
          id="specialty" name="specialty"
          className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors bg-white"
        >
          <option value="">Selecione...</option>
          <option value="Psicologia">Psicologia</option>
          <option value="Fonoaudiologia">Fonoaudiologia</option>
          <option value="Terapia Ocupacional">Terapia Ocupacional</option>
          <option value="Psicopedagogia">Psicopedagogia</option>
          <option value="Não sei ainda, preciso de orientação">Não sei ainda, preciso de orientação</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#143a62] mb-1.5" htmlFor="message">
          Conte um pouco sobre seu filho
        </label>
        <textarea
          id="message" name="message" rows={4}
          placeholder="Descreva brevemente a dificuldade ou o motivo do contato..."
          className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-[10px] text-sm text-[#1a2332] outline-none focus:border-[#1f8c7b] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-[12px] font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
        style={{
          background: "linear-gradient(135deg, #143a62, #1f8c7b)",
          boxShadow: "0 4px 16px rgba(20,58,98,0.2)",
        }}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
