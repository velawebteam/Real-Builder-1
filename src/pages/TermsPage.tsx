import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Termos e Condições</h1>
        
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p className="text-sm text-gray-400">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
          
          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introdução</h2>
            <p>
              Bem-vindo à Real Builder Academy. Os presentes Termos e Condições regulam o acesso e a utilização do nosso website e dos serviços prestados pela Real Builder Academy, com sede na Avenida Mateus Teixeira Azevedo 55, Tavira, Portugal.
            </p>
            <p>
              Ao aceder e utilizar este website, o utilizador concorda em cumprir e ficar vinculado aos presentes Termos e Condições. Se não concordar com qualquer parte destes termos, não deverá utilizar o nosso website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Serviços</h2>
            <p>
              A Real Builder Academy oferece cursos de formação profissional na área da construção civil, incluindo, mas não se limitando a, instalação de pladur, aplicação de azulejos e instalação de piso radiante.
            </p>
            <p>
              A inscrição nos cursos está sujeita a disponibilidade, cumprimento dos requisitos de admissão e pagamento das respetivas propinas, quando aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Inscrições e Pagamentos</h2>
            <p>
              Ao submeter um formulário de inscrição, o utilizador garante que todas as informações fornecidas são verdadeiras, exatas e completas.
            </p>
            <p>
              As condições específicas de pagamento, políticas de cancelamento e reembolso serão comunicadas ao utilizador no momento da formalização da inscrição no respetivo curso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste website, incluindo textos, gráficos, logótipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Real Builder Academy ou dos seus fornecedores de conteúdo e está protegido pelas leis de direitos de autor portuguesas e internacionais.
            </p>
            <p>
              Não é permitida a reprodução, duplicação, cópia, venda, revenda ou exploração de qualquer parte do website para fins comerciais sem o nosso consentimento expresso por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Proteção de Dados</h2>
            <p>
              A recolha e tratamento de dados pessoais são realizados de acordo com a nossa Política de Privacidade, em estrito cumprimento do Regulamento Geral sobre a Proteção de Dados (RGPD) e demais legislação aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              A Real Builder Academy envida todos os esforços para garantir que a informação apresentada no website é exata e atualizada. No entanto, não garantimos a ausência de erros ou omissões.
            </p>
            <p>
              A Real Builder Academy não será responsável por quaisquer danos diretos, indiretos, acidentais ou consequenciais resultantes do uso ou da incapacidade de uso deste website ou dos serviços oferecidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Alterações aos Termos</h2>
            <p>
              Reservamo-nos o direito de atualizar ou modificar estes Termos e Condições a qualquer momento, sem aviso prévio. A continuação da utilização do website após quaisquer alterações constitui a aceitação dos novos Termos e Condições.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Lei Aplicável e Foro</h2>
            <p>
              Os presentes Termos e Condições são regidos e interpretados de acordo com a lei portuguesa. Para a resolução de qualquer litígio emergente da interpretação ou execução destes Termos, é competente o foro da comarca de Faro, com expressa renúncia a qualquer outro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Contactos</h2>
            <p>
              Para qualquer questão relacionada com estes Termos e Condições, por favor contacte-nos através de:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Telefone: +351 939 996 924</li>
              <li>Morada: Avenida Mateus Teixeira Azevedo 55, Tavira, Portugal</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
