import { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Política de Privacidade</h1>
        
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p className="text-sm text-gray-400">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introdução</h2>
            <p>
              A Real Builder Academy respeita a sua privacidade e está empenhada em proteger os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, partilhamos e protegemos as suas informações pessoais quando visita o nosso website ou utiliza os nossos serviços, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento (UE) 2016/679).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Responsável pelo Tratamento</h2>
            <p>
              A entidade responsável pelo tratamento dos seus dados pessoais é a Real Builder Academy, com sede na Avenida Mateus Teixeira Azevedo 55, Tavira, Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Dados que Recolhemos</h2>
            <p>
              Podemos recolher e tratar as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Dados de Identificação:</strong> Nome, apelido.</li>
              <li><strong>Dados de Contacto:</strong> Endereço de e-mail, número de telefone, cidade, distrito.</li>
              <li><strong>Dados Profissionais e Académicos:</strong> Nível de escolaridade, conhecimentos de idiomas, competências digitais, experiência na área da construção civil, currículo e certificados (quando submetidos).</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo despendido no nosso website (através de cookies).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Finalidades e Fundamento Jurídico</h2>
            <p>
              Utilizamos os seus dados pessoais para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Gestão de Inscrições:</strong> Para processar a sua candidatura aos nossos cursos e avaliar a sua elegibilidade. (Fundamento: Execução de contrato ou diligências pré-contratuais).</li>
              <li><strong>Comunicação:</strong> Para responder a pedidos de informação, enviar atualizações sobre cursos e notificações de abertura de inscrições. (Fundamento: Consentimento ou interesse legítimo).</li>
              <li><strong>Melhoria dos Serviços:</strong> Para analisar o uso do website e melhorar a experiência do utilizador. (Fundamento: Interesse legítimo).</li>
              <li><strong>Cumprimento Legal:</strong> Para cumprir obrigações legais a que estejamos sujeitos. (Fundamento: Obrigação legal).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Partilha de Dados</h2>
            <p>
              Não vendemos, alugamos ou partilhamos os seus dados pessoais com terceiros para fins comerciais. Podemos partilhar os seus dados apenas com:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Prestadores de serviços que atuam em nosso nome (ex: serviços de alojamento web, plataformas de gestão de formulários como o Formspree).</li>
              <li>Autoridades competentes, quando exigido por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Retenção de Dados</h2>
            <p>
              Conservamos os seus dados pessoais apenas pelo período estritamente necessário para cumprir as finalidades para as quais foram recolhidos, ou para cumprir obrigações legais, fiscais ou regulamentares.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Os Seus Direitos</h2>
            <p>
              Nos termos do RGPD, tem o direito de:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Solicitar o acesso aos seus dados pessoais.</li>
              <li>Solicitar a retificação de dados inexatos ou incompletos.</li>
              <li>Solicitar o apagamento dos seus dados ("direito a ser esquecido").</li>
              <li>Solicitar a limitação do tratamento.</li>
              <li>Opor-se ao tratamento dos seus dados.</li>
              <li>Solicitar a portabilidade dos dados.</li>
              <li>Retirar o consentimento a qualquer momento (sem comprometer a licitude do tratamento efetuado com base no consentimento previamente dado).</li>
            </ul>
            <p className="mt-4">
              Para exercer estes direitos, por favor contacte-nos através do telefone +351 939 996 924. Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) em Portugal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Segurança</h2>
            <p>
              Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra a destruição, perda, alteração, divulgação ou acesso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Alterações a esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que reveja esta página regularmente para se manter informado sobre como protegemos os seus dados.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
