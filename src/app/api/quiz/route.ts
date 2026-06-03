import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface QuizAnswer {
  question: string;
  answer: string;
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, answers, yesCount, showAlert } =
      await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Nome e telefone são obrigatórios." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail =
      process.env.CONTACT_EMAIL || "singular.cdt@gmail.com";

    const answersHtml = (answers as QuizAnswer[])
      .map(
        (a, i) => `
        <tr style="${i > 0 ? "border-top: 1px solid #e2e8f0;" : ""}">
          <td style="padding: 10px 12px; font-size: 13px; color: #5a6a7e; vertical-align: top; width: 55%;">${a.question}</td>
          <td style="padding: 10px 12px; font-size: 13px; font-weight: ${
            a.answer.startsWith("Sim") ? "700" : "400"
          }; color: ${
          a.answer.startsWith("Sim") ? "#143a62" : "#1a2332"
        };">${a.answer}</td>
        </tr>
      `
      )
      .join("");

    const { error: clinicError } = await resend.emails.send({
      from: "Ser Singular <noreply@sersingularmed.com.br>",
      to: [toEmail],
      replyTo: email || undefined,
      subject: `Triagem TEA — ${name}${showAlert ? " ⚠️ 4+ sinais positivos" : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 640px; margin: 0 auto; color: #1a2332;">
          <div style="background: linear-gradient(135deg, #143a62, #1f8c7b); padding: 28px 32px; border-radius: 16px 16px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 18px; font-weight: 700;">
              Triagem TEA — Clínica Ser Singular
            </h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">
              Novo questionário recebido via landing page
            </p>
          </div>

          <div style="background: #f8f9fb; padding: 28px 32px; border: 1px solid #e2e8f0; border-top: none;">
            ${
              showAlert
                ? `
              <div style="background: #fffbeb; border: 2px solid #fcd34d; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 14px; font-weight: 700; color: #92400e;">
                  ⚠️ Alerta: ${yesCount} de 6 respostas foram positivas (Sim)
                </p>
                <p style="margin: 6px 0 0; font-size: 13px; color: #b45309;">
                  Este responsável pode se beneficiar de contato prioritário.
                </p>
              </div>
            `
                : `
              <div style="background: #e8f5f3; border-radius: 12px; padding: 14px 18px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 13px; color: #1f8c7b;">
                  ${yesCount} resposta(s) positiva(s) de 6.
                </p>
              </div>
            `
            }

            <h2 style="font-size: 14px; font-weight: 700; color: #143a62; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 12px;">
              Dados de contato
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; background: white; border-radius: 12px; border: 1px solid #e2e8f0;">
              <tr>
                <td style="padding: 10px 12px; font-size: 13px; color: #5a6a7e; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">Nome</td>
                <td style="padding: 10px 12px; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 12px; font-size: 13px; color: #5a6a7e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">WhatsApp</td>
                <td style="padding: 10px 12px; font-size: 14px;">
                  <a href="https://wa.me/55${phone.replace(/\D/g, "")}" style="color: #1f8c7b; font-weight: 600;">${phone}</a>
                </td>
              </tr>
              ${
                email
                  ? `
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 10px 12px; font-size: 13px; color: #5a6a7e; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">E-mail</td>
                <td style="padding: 10px 12px; font-size: 14px;">${email}</td>
              </tr>`
                  : ""
              }
            </table>

            <h2 style="font-size: 14px; font-weight: 700; color: #143a62; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 12px;">
              Respostas do questionário
            </h2>
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 12px; border: 1px solid #e2e8f0;">
              ${answersHtml}
            </table>

            <div style="margin-top: 24px; padding: 16px 18px; background: white; border-radius: 10px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 13px; color: #5a6a7e;">
                Entre em contato pelo WhatsApp:
                <a href="https://wa.me/554599771331" style="color: #1f8c7b; font-weight: 600;">(45) 99977-1331</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (clinicError) {
      console.error("Clinic email error:", JSON.stringify(clinicError));
      return NextResponse.json({ error: "Erro ao enviar e-mail." }, { status: 500 });
    }

    if (email) {
      await resend.emails.send({
        from: "Ser Singular <noreply@sersingularmed.com.br>",
        to: [email],
        subject: "Recebemos seu questionário — Clínica Ser Singular",
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2332;">
            <div style="background: linear-gradient(135deg, #143a62, #1f8c7b); padding: 32px; border-radius: 16px 16px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 20px;">Olá, ${name.split(" ")[0]}!</h1>
            </div>
            <div style="background: #f8f9fb; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
              <p style="font-size: 15px; line-height: 1.7; margin-bottom: 16px;">
                Recebemos seu questionário e nossa equipe entrará em contato em breve com as melhores orientações para o desenvolvimento do seu filho.
              </p>
              <a href="https://wa.me/554599771331?text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20question%C3%A1rio%20no%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                style="display: inline-block; background: #25D366; color: white; padding: 13px 24px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px;">
                Falar agora no WhatsApp
              </a>
              <p style="font-size: 13px; color: #5a6a7e; margin-top: 24px;">
                Clínica Ser Singular — Centro de Desenvolvimento e Treinamento<br>
                Medianeira, Paraná · (45) 99977-1331
              </p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quiz API error:", err);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
