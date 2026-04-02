import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, specialty, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Nome e telefone são obrigatórios." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.CONTACT_EMAIL || "contato@sersingularmed.com.br";

    await resend.emails.send({
      from: "Ser Singular <noreply@sersingularmed.com.br>",
      to: [toEmail],
      replyTo: email || undefined,
      subject: `Novo contato via site — ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2332;">
          <div style="background: linear-gradient(135deg, #143a62, #1f8c7b); padding: 32px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Novo contato — Ser Singular</h1>
          </div>
          <div style="background: #f8f9fb; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 13px; color: #5a6a7e; width: 140px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Nome</td>
                <td style="padding: 10px 0; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 13px; color: #5a6a7e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Telefone</td>
                <td style="padding: 10px 0; font-size: 14px;">${phone}</td>
              </tr>
              ${email ? `
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 13px; color: #5a6a7e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">E-mail</td>
                <td style="padding: 10px 0; font-size: 14px;">${email}</td>
              </tr>` : ""}
              ${specialty ? `
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 13px; color: #5a6a7e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Especialidade</td>
                <td style="padding: 10px 0; font-size: 14px;">${specialty}</td>
              </tr>` : ""}
              ${message ? `
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; font-size: 13px; color: #5a6a7e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; vertical-align: top;">Mensagem</td>
                <td style="padding: 10px 0; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 10px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 13px; color: #5a6a7e;">
                Responda este e-mail ou entre em contato pelo WhatsApp: <a href="https://wa.me/554599771331" style="color: #1f8c7b;">(45) 99977-1331</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Confirmation email to user
    if (email) {
      await resend.emails.send({
        from: "Ser Singular <noreply@sersingularmed.com.br>",
        to: [email],
        subject: "Recebemos seu contato — Ser Singular",
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2332;">
            <div style="background: linear-gradient(135deg, #143a62, #1f8c7b); padding: 32px; border-radius: 16px 16px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Olá, ${name}! 💚</h1>
            </div>
            <div style="background: #f8f9fb; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
              <p style="font-size: 15px; line-height: 1.7; margin-bottom: 16px;">
                Recebemos sua mensagem e retornaremos em até 24h. Você também pode nos chamar diretamente pelo WhatsApp.
              </p>
              <a href="https://wa.me/554599771331?text=Ol%C3%A1!%20Fiz%20contato%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                style="display: inline-block; background: linear-gradient(135deg, #143a62, #1f8c7b); color: white; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Chamar no WhatsApp
              </a>
              <p style="font-size: 13px; color: #5a6a7e; margin-top: 24px;">
                Ser Singular — Centro de Desenvolvimento e Treinamento<br>
                Medianeira, Paraná · (45) 99977-1331
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente ou use o WhatsApp." },
      { status: 500 }
    );
  }
}
