import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TesteAutomacaoRequest {
  nome: string;
  celular: string;
  email: string;
  busca: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, celular, email, busca }: TesteAutomacaoRequest = await req.json();

    console.log("Dados recebidos:", { nome, celular, email, busca });

    // Simular geração de leads (aqui você integraria com Google Maps API)
    const leadsSample = [
      {
        nome: "Empresa ABC Ltda",
        telefone: "(11) 3456-7890",
        endereco: "Rua das Flores, 123 - São Paulo/SP",
        avaliacao: "4.5 estrelas",
        categoria: busca.split(" ")[0] || "Negócio"
      },
      {
        nome: "Comercial XYZ Serviços",
        telefone: "(11) 9876-5432",
        endereco: "Av. Paulista, 456 - São Paulo/SP",
        avaliacao: "4.2 estrelas",
        categoria: busca.split(" ")[0] || "Negócio"
      },
      {
        nome: "Grupo 123 Soluções",
        telefone: "(11) 2345-6789",
        endereco: "Rua do Comércio, 789 - São Paulo/SP",
        avaliacao: "4.7 estrelas",
        categoria: busca.split(" ")[0] || "Negócio"
      }
    ];

    // Gerar HTML do email com os leads
    const leadsHtml = leadsSample.map(lead => `
      <div style="border: 1px solid #e0e0e0; padding: 15px; margin: 10px 0; border-radius: 8px;">
        <h3 style="color: #333; margin: 0 0 10px 0;">${lead.nome}</h3>
        <p style="margin: 5px 0;"><strong>Telefone:</strong> ${lead.telefone}</p>
        <p style="margin: 5px 0;"><strong>Endereço:</strong> ${lead.endereco}</p>
        <p style="margin: 5px 0;"><strong>Avaliação:</strong> ${lead.avaliacao}</p>
        <p style="margin: 5px 0;"><strong>Categoria:</strong> ${lead.categoria}</p>
      </div>
    `).join('');

    // Enviar email com os leads
    const emailResponse = await resend.emails.send({
      from: "Automação de Leads <automacao@resend.dev>",
      to: [email],
      subject: `🎯 Amostra de Leads: ${busca}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">🚀 Sua Amostra de Leads Está Pronta!</h1>
          
          <p>Olá <strong>${nome}</strong>,</p>
          
          <p>Conforme solicitado, aqui está uma amostra dos leads encontrados para: <strong>"${busca}"</strong></p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">📋 Leads Encontrados:</h2>
            ${leadsHtml}
          </div>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #1565c0; margin-top: 0;">✨ Esta é apenas uma amostra!</h3>
            <p>Nossa automação completa pode encontrar <strong>centenas ou milhares</strong> de leads qualificados como estes, com dados enriquecidos via IA e organizados automaticamente em planilhas.</p>
            
            <p><strong>Próximos passos:</strong></p>
            <ul>
              <li>📞 Entraremos em contato em breve no seu WhatsApp: <strong>${celular}</strong></li>
              <li>🎯 Discutiremos suas necessidades específicas</li>
              <li>📊 Montaremos uma proposta personalizada</li>
            </ul>
          </div>
          
          <p>Dúvidas? Responda este email ou entre em contato conosco!</p>
          
          <p>Atenciosamente,<br>
          <strong>Equipe de Automação de Leads</strong></p>
        </div>
      `,
    });

    console.log("Email enviado com sucesso:", emailResponse);

    // Simular envio para WhatsApp (aqui você integraria com uma API de WhatsApp)
    console.log("WhatsApp enviado para:", celular);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Teste enviado com sucesso!",
      leads_count: leadsSample.length 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erro na função teste-automacao-leads:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);