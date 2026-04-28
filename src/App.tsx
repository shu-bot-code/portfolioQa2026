/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <div className="font-sans antialiased text-neutral-800 selection:bg-accent selection:text-white pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/90 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold tracking-tight text-neutral-900">
              Wallyson Schumacher
            </h1>
            <p className="text-sm font-medium text-neutral-500 mt-0.5">
              QA Júnior – Testes manuais, API e jogos
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-neutral-600">
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#habilidades" className="hover:text-accent transition-colors">Habilidades</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a></li>
              <li><a href="#artefatos" className="hover:text-accent transition-colors">Artefatos</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-40 md:pt-48 flex flex-col gap-32">
        
        {/* Section: Sobre */}
        <section id="sobre" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Sobre mim</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 shrink-0 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-2xl font-bold select-none border border-neutral-300">
              WS
            </div>
            <div className="max-w-2xl leading-relaxed text-neutral-600">
              <p className="mb-4">
                Olá! Estou em transição para a área de Quality Assurance (QA). Possuo experiência com suporte técnico e validação de funcionalidades, o que me deu uma base sólida em investigação de problemas e empatia com o usuário final.
              </p>
              <p>
                Além disso, desenvolvo pequenos projetos em Unity, o que despertou meu interesse pela qualidade voltada para jogos. Atualmente, foco meus estudos nos fundamentos de QA, elaboração de testes manuais, testes de API e práticas de métodos ágeis (Scrum) para contribuir desde o primeiro dia de forma estruturada.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Habilidades */}
        <section id="habilidades" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Habilidades de QA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-neutral-400 mb-4">Técnicas de Teste</h3>
              <ul className="flex flex-col gap-3 text-neutral-700">
                <li className="flex gap-2"><span className="text-accent">•</span> Teste funcional e de regressão</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Smoke testing e Teste exploratório</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Testes de API (ferramenta base)</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Noções de severidade e prioridade de bugs</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Escrita de casos de teste estruturados</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Elaboração de relatórios de bug detalhados</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-neutral-400 mb-4">Ferramentas & Processos</h3>
              <ul className="flex flex-col gap-3 text-neutral-700">
                <li className="flex gap-2"><span className="text-accent">•</span> Postman (Testes de integração / API)</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Git / GitHub (Controle de versão básico)</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Jira / Trello (Gestão de tarefas e bugs)</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Engine Unity (Game testing)</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Scrum / Métodos Ágeis</li>
                <li className="flex gap-2"><span className="text-accent">•</span> Ciclos de vida do desenvolvimento</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Projetos / Cases */}
        <section id="portfolio" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Projetos e estudos de caso</h2>
          <p className="text-neutral-600 mb-10 max-w-2xl bg-neutral-100 p-4 rounded-lg border border-neutral-200 text-sm">
            O objetivo não é mostrar apenas o código, mas o <strong>pensamento de QA</strong>. Abaixo estão contextos onde apliquei estruturação e execução de testes na prática.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Estudo de caso – Jogo 2D em Unity</h3>
              <p className="text-sm text-accent font-medium mb-6">Game Testing & Exploração</p>
              
              <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2">Contexto</h4>
              <p className="text-sm text-neutral-600 mb-6">
                Desenvolvimento e teste de um pequeno jogo de plataforma. Atuei avaliando mecânicas centrais, sistema de colisões, interface (HUD), navegação nos menus e sensação de fluidez.
              </p>
              
              <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2">O Que Foi Testado e Corrigido</h4>
              <ul className="text-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li>Colisões em quinas, evitando que o personagem atravessasse paredes.</li>
                <li>Validação do HUD (Barra de vida e contagem de itens).</li>
                <li>Reteste de mecânica de pulo duplo (ajuste de falha onde os inputs eram ignorados).</li>
                <li>Fluxo de "Game Over" para "Restart" – verificação de memory leaks aparentes.</li>
              </ul>
            </div>

            {/* Case 2 */}
            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-neutral-900 mb-2">Web App Simples</h3>
              <p className="text-sm text-accent font-medium mb-6">Login e Cadastro</p>
              
              <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2">Contexto</h4>
              <p className="text-sm text-neutral-600 mb-6">
                Testes focados na camada visual e lógica de uma aplicação de exemplo (React/Node) com fluxos de autenticação, desde o preenchimento do formulário até o redirecionamento.
              </p>
              
              <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2">O Que Foi Testado e Corrigido</h4>
              <ul className="text-sm text-neutral-700 space-y-2 list-disc list-inside">
                <li>Fluxos principais (Caminho feliz de cadastro e login).</li>
                <li>Cenários inválidos de e-mail (sem '@', sem provedor).</li>
                <li>Exibição de mensagens de erro amigáveis para campos vazios.</li>
                <li>Verificação de Limites: Testes de tamanho máximo e mínimo em campos de senha e nome.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Artefatos */}
        <section id="artefatos" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Artefatos de teste</h2>
          <p className="text-neutral-600 mb-10 max-w-2xl text-sm">
            Demonstração de padronização, clareza na escrita e atenção aos detalhes em documentos formais (dados simplificados).
          </p>

          <div className="mb-14">
            <h3 className="text-lg font-bold text-neutral-800 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-accent inline-block rounded-full"></span> Casos de Teste
            </h3>
            <div className="overflow-x-auto border border-neutral-200 rounded-lg">
              <table className="w-full min-w-max text-left text-sm whitespace-nowrap">
                <thead className="bg-neutral-100 text-neutral-600 font-medium">
                  <tr>
                    <th className="py-3 px-4 border-b border-neutral-200">ID</th>
                    <th className="py-3 px-4 border-b border-neutral-200">Título</th>
                    <th className="py-3 px-4 border-b border-neutral-200">Tipo de teste</th>
                    <th className="py-3 px-4 border-b border-neutral-200 w-full">Breve objetivo</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 divide-y divide-neutral-100 bg-white">
                  <tr className="hover:bg-neutral-50">
                    <td className="py-3 px-4 font-mono text-xs text-neutral-500">CT-001</td>
                    <td className="py-3 px-4 font-medium">Cadastro Válido</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Funcional</span></td>
                    <td className="py-3 px-4 text-neutral-500">Garantir cadastro via e-mail e senha formatados corretos.</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="py-3 px-4 font-mono text-xs text-neutral-500">CT-002</td>
                    <td className="py-3 px-4 font-medium">Tentativa sem "@"</td>
                    <td className="py-3 px-4"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">Exceção</span></td>
                    <td className="py-3 px-4 text-neutral-500">Validar bloqueio e exibição de erro ao omitir domínio do e-mail.</td>
                  </tr>
                  <tr className="hover:bg-neutral-50">
                    <td className="py-3 px-4 font-mono text-xs text-neutral-500">CT-003</td>
                    <td className="py-3 px-4 font-medium">Limite de Senha</td>
                    <td className="py-3 px-4"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">Valores Limites</span></td>
                    <td className="py-3 px-4 text-neutral-500">Checar se sistema recusa criação de senhas &lt; 6 caracteres.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-neutral-800 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-accent inline-block rounded-full"></span> Relatórios de Bug
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bug 1 */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-neutral-900 border-b border-transparent">BUG-104: Botão de Login travado após erro 401</h4>
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">Média</span>
                </div>
                <div className="text-sm space-y-3">
                  <p><strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Contexto</strong> Tela de login do Web App.</p>
                  <div>
                    <strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Passos para reproduzir</strong>
                    <ol className="list-decimal list-inside text-neutral-700">
                      <li>Acesse a rota /login.</li>
                      <li>Insira credenciais intencionalmente incorretas.</li>
                      <li>Clique em "Entrar".</li>
                      <li>Observe o estado do botão pós-erro.</li>
                    </ol>
                  </div>
                  <p><strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Resultado esperado</strong> O botão deve voltar a ser clicável indicando "Entrar".</p>
                  <p><strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Resultado atual</strong> O botão trava no estado "Carregando..." infinitamente.</p>
                </div>
              </div>

              {/* Bug 2 */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-neutral-900">BUG-201: Câmera não segue personagem no canto da fase</h4>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">Alta</span>
                </div>
                <div className="text-sm space-y-3">
                  <p><strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Contexto</strong> Fase inicial do Jogo 2D (Fase Floresta).</p>
                  <div>
                    <strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Passos para reproduzir</strong>
                    <ol className="list-decimal list-inside text-neutral-700">
                      <li>Inicie o jogo e avance até o limite direito do mapa.</li>
                      <li>Chegue próximo à barreira invisível final.</li>
                      <li>Realize um salto longo.</li>
                    </ol>
                  </div>
                  <p><strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Resultado esperado</strong> A câmera deve parar no limite da "Dead Zone".</p>
                  <p><strong className="text-neutral-500 font-medium block text-xs uppercase mb-1">Resultado atual</strong> A câmera continua avançando, mostrando área "vazada" sem textura (céu preto).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Contato */}
        <section id="contato" className="scroll-mt-32 pb-12 border-b border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contato</h2>
          <p className="text-neutral-600 mb-8 max-w-xl">
            Estou ativamente buscando oportunidades como QA Júnior para agregar valor com muita dedicação e aprendizado contínuo. Será um prazer conversar!
          </p>
          
          <ul className="flex flex-col md:flex-row gap-6 md:gap-12">
            <li>
              <span className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">E-mail</span>
              <a href="mailto:exemplo@email.com" className="text-lg font-medium text-accent hover:underline">wallyson.qa@exemplo.com.br</a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">LinkedIn</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-lg font-medium text-accent hover:underline">linkedin.com/in/wallysonschumacher</a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">GitHub</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-lg font-medium text-accent hover:underline">github.com/wallysonschumacher</a>
            </li>
          </ul>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 pt-8 pb-4 text-center md:text-left text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Wallyson Schumacher. Desenhado para ser simples.</p>
      </footer>
    </div>
  );
}

