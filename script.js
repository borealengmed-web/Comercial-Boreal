/**
 * BOREAL ENGMED - SISTEMA INTEGRADO COMERCIAL, CONTRATOS, PRODUÇÃO & DOCUMENTOS
 * Versão 7.1 - Arquitetura Unificada e Robusta com Supabase Integrado
 */

// 1. CONFIGURAÇÃO DE ACESSO AO BANCO DE DADOS SUPABASE
const SUPABASE_URL = "https://mtcvqkxawanntplbykes.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_aNhbmNlgsg_gVkBHlZxutA_UfNh-EvH";

let supabaseClient = null;
try {
  if (window.supabase && SUPABASE_URL && !SUPABASE_URL.includes("SEU_PROJETO")) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (e) {
  console.warn("Aviso ao conectar cliente Supabase:", e);
}

window.borealApp = {
  abaAtiva: "relatorio_comercial",
  clienteAtivoId: "CLI-001",
  modeloDocAtivo: "proposta",
  linkRadarEditais: "https://app.licitei.com.br/dashboard/radar-de-licitacoes?filterId=%229417%22&date=20260529%3B20260529&periodType=publication&page=0&orderBy=relevant&showSeen=false&edit=false&triagem=false",
  perfilAtivo: "gestor", // 'gestor', 'agente', 'cliente'
  campoAudioFocadoId: "ct-objeto",

  // Base Principal: Relatório Comercial
  processosComerciais: [
    {
      id: "CLI-001",
      cliente: "PREFEITURA MUNICIPAL DE BANDEIRANTES",
      edital: "PREGÃO ELETRÔNICO Nº 38/2026",
      processo: "PROCESSO ADMINISTRATIVO N.º 94/2026",
      portal: "BLL COMPRAS",
      dataProposta: "10/11/2026",
      objeto: "Contratação de pessoa jurídica para realizar serviços de segurança e medicina do trabalho para elaboração, implantação e coordenação do PGR, PCMSO, LTCAT, treinamentos de segurança do trabalho e exames médicos ocupacionais.",
      valorEstimado: 615000.00,
      statusProcesso: "homologado_contrato",
      editaisAnexados: [
        { nome: "8 - EDITAL_Bandeirantes.pdf", data: "10/11/2026" }
      ],
      propostaAnexada: {
        nome: "Proposta_Comercial_Bandeirantes.pdf",
        data: "10/11/2026",
        valor: 615000.00
      },
      cnpj: "76.235.753/0001-48",
      cnae: "84.11-6-00",
      grauRisco: "Grau 1",
      cep: "86.360-055",
      endereco: "Rua Frei Rafael Proner, nº 1457 – Centro, Bandeirantes - PR",
      numeroContrato: "038/2026-PMB",
      dataContrato: "15/11/2026",
      vigencia: "1 ano",
      tipoContrato: "Continuado",
      horarioExpediente: "08:30 às 17:00",
      nomeFiscal: "Marcos de Moraes",
      telFiscal: "(43) 3542-4525",
      emailFiscal: "licitacao@bandeirantes.pr.gov.br",
      contatoPagto: "Secretaria de Finanças",
      telPagto: "(43) 3542-4500",
      emailPagto: "financas@bandeirantes.pr.gov.br",
      aliquotasRetencao: { iss: 5.0, cofins: 3.0, csll: 1.0, irpj: 1.5, pis: 0.65, cbs: 0.0, ibs: 0.0 },
      tipoGarantia: "Dispensa Legal",
      percentualGarantia: "0%",
      valorApolice: 0.0,
      nomeCorretora: "",
      nomeContatoCorretora: "",
      telCorretora: "",
      emailCorretora: "",
      documentosContrato: [
        { nome: "Minuta_Contrato_Bandeirantes.pdf", data: "10/11/2026" }
      ],
      itensProducao: [
        { id: "PROD-1", tipoContrato: "Empreitada Imediata", item: 1, objeto: "LAUDO TÉCNICO DAS CONDIÇÕES AMBIENTAIS DO TRABALHO – LTCAT", quant: 1, unid: "UN", vlUnitario: 10000.00, vlTotal: 10000.00, statusProducao: "concluido", relatoriosAnexados: [{ id: "REL-1", nome: "Relatorio_Servico_LTCAT_Concluido.pdf", data: "10/11/2026", hash: "BOREAL-8B41E2-9012" }] },
        { id: "PROD-2", tipoContrato: "Empreitada Imediata", item: 2, objeto: "PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL – PCMSO", quant: 1, unid: "UN", vlUnitario: 10000.00, vlTotal: 10000.00, statusProducao: "servico_andamento", relatoriosAnexados: [] },
        { id: "PROD-3", tipoContrato: "Empreitada Imediata", item: 3, objeto: "PROGRAMA DE GERENCIAMENTO DE RISCOS – PGR", quant: 1, unid: "UN", vlUnitario: 10000.00, vlTotal: 10000.00, statusProducao: "servico_andamento", relatoriosAnexados: [] },
        { id: "PROD-4", tipoContrato: "Mensal sob Demanda", item: 4, objeto: "TREINAMENTO - NR 1 - DISPOSIÇÕES GERAIS E GERENCIAMENTO DE RISCOS OCUPACIONAIS", quant: 1111, unid: "UN", vlUnitario: 100.00, vlTotal: 111100.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-5", tipoContrato: "Mensal sob Demanda", item: 5, objeto: "TREINAMENTO - NR 6 - EPI (EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL)", quant: 595, unid: "UN", vlUnitario: 100.00, vlTotal: 59500.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-6", tipoContrato: "Mensal sob Demanda", item: 6, objeto: "TREINAMENTO - NR 7 - PRIMEIROS SOCORROS", quant: 199, unid: "UN", vlUnitario: 100.00, vlTotal: 19900.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-7", tipoContrato: "Mensal sob Demanda", item: 7, objeto: "TREINAMENTO - NR 10 - SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE", quant: 4, unid: "UN", vlUnitario: 500.00, vlTotal: 2000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-8", tipoContrato: "Mensal sob Demanda", item: 8, objeto: "TREINAMENTO - NR 11 - TRANSPORTE, MOVIMENTAÇÃO, ARMAZENAGEM E MANUSEIO DE MATERIAIS", quant: 14, unid: "UN", vlUnitario: 500.00, vlTotal: 7000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-9", tipoContrato: "Mensal sob Demanda", item: 9, objeto: "TREINAMENTO - NR 12 - SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS", quant: 19, unid: "UN", vlUnitario: 500.00, vlTotal: 9500.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-10", tipoContrato: "Mensal sob Demanda", item: 10, objeto: "TREINAMENTO - ERGONOMIA (NR 17)", quant: 546, unid: "UN", vlUnitario: 500.00, vlTotal: 273000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-11", tipoContrato: "Mensal sob Demanda", item: 11, objeto: "TREINAMENTO - NR 20 - SEGURANÇA E SAÚDE NO TRABALHO COM INFLAMÁVEIS E COMBUSTÍVEIS", quant: 5, unid: "UN", vlUnitario: 500.00, vlTotal: 2500.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-12", tipoContrato: "Mensal sob Demanda", item: 12, objeto: "EXAMES MÉDICOS OCUPACIONAIS: ADMISSIONAL E DEMISSIONAL", quant: 200, unid: "UN", vlUnitario: 75.00, vlTotal: 15000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-13", tipoContrato: "Mensal sob Demanda", item: 13, objeto: "EXAMES MÉDICOS OCUPACIONAIS: PERIÓDICO, MUDANÇA DE RISCOS E RETORNO AO TRABALHO", quant: 1140, unid: "UN", vlUnitario: 75.00, vlTotal: 85500.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] }
      ]
    },
    {
      id: "CLI-002",
      cliente: "Tribunal Regional do Trabalho - 15ª Região",
      edital: "Pregão Eletrônico 042/2026",
      processo: "PROAD 1042/2026",
      portal: "ComprasGov / Licitei",
      dataProposta: "02/11/2026",
      objeto: "Elaboração de Documento Base do PGR, LTCAT e Avaliações Psicossociais COPSOQ",
      valorEstimado: 85000.00,
      statusProcesso: "contratado_empenho",
      editaisAnexados: [{ nome: "Edital_TRT15_2026.pdf", data: "02/11/2026" }],
      propostaAnexada: { nome: "Proposta_Boreal_TRT15.pdf", data: "02/11/2026", valor: 85000.00 },
      cnpj: "04.414.837/0001-38",
      cnae: "84.11-6-00",
      grauRisco: "Grau 1",
      cep: "13.010-001",
      endereco: "Rua Barão de Jaguara, 901 - Centro, Campinas - SP",
      numeroContrato: "042/2026-TRT15",
      dataContrato: "05/11/2026",
      vigencia: "1 ano",
      tipoContrato: "Continuado",
      horarioExpediente: "08:00 às 17:00",
      nomeFiscal: "Dr. Marcelo Ramos",
      telFiscal: "(19) 3234-5678",
      emailFiscal: "marcelo.fiscal@trt15.jus.br",
      contatoPagto: "Divisão de Finanças",
      telPagto: "(19) 3234-5650",
      emailPagto: "financas@trt15.jus.br",
      aliquotasRetencao: { iss: 5.0, cofins: 3.0, csll: 1.0, irpj: 1.5, pis: 0.65, cbs: 0.0, ibs: 0.0 },
      tipoGarantia: "Seguro Garantia",
      percentualGarantia: "5%",
      valorApolice: 4250.00,
      nomeCorretora: "Porto Seguro",
      nomeContatoCorretora: "Carlos Seguros",
      telCorretora: "(19) 3234-1100",
      emailCorretora: "seguros@corretora.com.br",
      documentosContrato: [{ nome: "Contrato_Assinado_TRT15.pdf", data: "05/11/2026" }],
      itensProducao: [
        { id: "PROD-201", tipoContrato: "Empreitada Imediata", item: 1, objeto: "Elaboração do Documento-Base do PGR", quant: 1, unid: "UN", vlUnitario: 35000.00, vlTotal: 35000.00, statusProducao: "entregue_aceito", relatoriosAnexados: [{ id: "REL-201", nome: "Relatorio_Servico_Entregue_PGR_TRT15.pdf", data: "08/11/2026", hash: "BOREAL-7A39F1-4029" }] },
        { id: "PROD-202", tipoContrato: "Mensal sob Demanda", item: 2, objeto: "Vistorias Técnicas In Loco e Medições Instrumentais", quant: 2, unid: "UNIDADE", vlUnitario: 15000.00, vlTotal: 30000.00, statusProducao: "concluido", relatoriosAnexados: [{ id: "REL-202", nome: "Relatorio_Servico_Vistorias_TRT15.pdf", data: "09/11/2026", hash: "BOREAL-9F11A4-7741" }] },
        { id: "PROD-203", tipoContrato: "Mensal sob Demanda", item: 3, objeto: "Aplicação e Avaliação Psicossocial Remota COPSOQ", quant: 400, unid: "SERVIDOR", vlUnitario: 50.00, vlTotal: 20000.00, statusProducao: "servico_andamento", relatoriosAnexados: [] }
      ]
    }
  ],

  init: function() {
    try {
      this.carregarDadosLocais();
      this.verificarAutenticacaoInicial();
      this.aplicarPerfilNoDOM();
      this.carregarLinkRadar();
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();
      this.popularSeletoresContratos();
      this.carregarContratanteNoModulo(this.clienteAtivoId);
      this.popularSeletoresProducao();
      this.carregarProducaoCliente(this.clienteAtivoId);
      this.popularSeletoresDocumentos();
      this.renderizarDocumentoAtivo();
      this.configurarParserMicrofoneSequencial();
    } catch (err) {
      console.error("Erro na inicialização:", err);
    }
    if (window.lucide) window.lucide.createIcons();
  },

  verificarAutenticacaoInicial: function() {
    const cred = localStorage.getItem("boreal_auth_cred");
    if (!cred) {
      this.abrirModalLogin();
    } else {
      try {
        const c = JSON.parse(cred);
        if (c.email && c.email.includes("agente")) {
          this.perfilAtivo = "agente";
        }
      } catch (e) {}
    }
  },

  alternarPerfilAcesso: function(novoPerfil) {
    this.perfilAtivo = novoPerfil;
    this.aplicarPerfilNoDOM();
    alert(`Perfil alterado para: ${novoPerfil.toUpperCase()}.\n\n${novoPerfil === 'agente' ? 'ATENÇÃO: O perfil AGENTE não visualiza nenhum valor financeiro (preços unitários ou totais), nem propostas comerciais.' : 'Acesso total liberado.'}`);
  },

  aplicarPerfilNoDOM: function() {
    const sel = document.getElementById("select-perfil-sistema");
    if (sel) sel.value = this.perfilAtivo;
    const lbl = document.getElementById("lbl-usuario-conectado");

    if (this.perfilAtivo === "agente") {
      document.body.classList.add("perfil-agente");
      if (lbl) lbl.textContent = "agente.operacao@boreal.eng.br (Agente - Valores Ocultos)";
    } else if (this.perfilAtivo === "cliente") {
      document.body.classList.remove("perfil-agente");
      if (lbl) lbl.textContent = "fiscal.cliente@orgao.gov.br (Cliente / Fiscal)";
      this.abrirModulo("portal_cliente");
    } else {
      document.body.classList.remove("perfil-agente");
      if (lbl) lbl.textContent = "gestor@boreal.eng.br (Gestor Geral)";
    }
  },

  abrirModalLogin: function() {
    const modal = document.getElementById("modal-login-senha");
    if (modal) modal.classList.remove("hidden");
  },

  fecharModalLogin: function() {
    const modal = document.getElementById("modal-login-senha");
    if (modal) modal.classList.add("hidden");
  },

  salvarCredenciaisSenha: function() {
    const email = document.getElementById("login-input-email").value;
    const senha = document.getElementById("login-input-senha").value;
    const lembrar = document.getElementById("login-check-lembrar").checked;

    if (!email || !senha) {
      alert("Por favor, preencha o e-mail e a senha.");
      return;
    }

    if (lembrar) {
      localStorage.setItem("boreal_auth_cred", JSON.stringify({ email, senha }));
    } else {
      localStorage.removeItem("boreal_auth_cred");
    }

    if (email.toLowerCase().includes("agente")) {
      this.perfilAtivo = "agente";
    } else if (email.toLowerCase().includes("cliente")) {
      this.perfilAtivo = "cliente";
    } else {
      this.perfilAtivo = "gestor";
    }

    this.aplicarPerfilNoDOM();
    this.fecharModalLogin();
    alert(`Autenticado com sucesso como ${email}!`);
  },

  deslogarUsuario: function() {
    if (confirm("Deseja deslogar da sessão atual?")) {
      localStorage.removeItem("boreal_auth_cred");
      this.abrirModalLogin();
    }
  },

  abrirModulo: function(modId) {
    this.abaAtiva = modId;
    ["relatorio_comercial", "modulo_contratos", "relatorio_producao", "documentos_padroes", "portal_cliente"].forEach(m => {
      const el = document.getElementById(`sec-${m.replace(/_/g, '-')}`);
      if (el) el.classList.add("hidden");
    });

    ["tab-nav-relatorio", "tab-nav-contratos", "tab-nav-producao", "tab-nav-documentos", "tab-nav-portal"].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.classList.remove("active");
    });

    const secAtiva = document.getElementById(`sec-${modId.replace(/_/g, '-')}`);
    let btnAtivo = null;
    if (modId === "modulo_contratos") btnAtivo = document.getElementById("tab-nav-contratos");
    if (modId === "relatorio_comercial") btnAtivo = document.getElementById("tab-nav-relatorio");
    if (modId === "relatorio_producao") btnAtivo = document.getElementById("tab-nav-producao");
    if (modId === "documentos_padroes") btnAtivo = document.getElementById("tab-nav-documentos");
    if (modId === "portal_cliente") btnAtivo = document.getElementById("tab-nav-portal");

    if (secAtiva) secAtiva.classList.remove("hidden");
    if (btnAtivo) btnAtivo.classList.add("active");

    if (modId === "modulo_contratos") this.carregarContratanteNoModulo(this.clienteAtivoId);
    if (modId === "relatorio_producao") this.carregarProducaoCliente(this.clienteAtivoId);
    if (modId === "documentos_padroes") this.renderizarDocumentoAtivo();
    if (modId === "portal_cliente") this.renderizarPortalCliente();

    if (window.lucide) window.lucide.createIcons();
  },

  carregarLinkRadar: function() {
    const inputLink = document.getElementById("input-link-radar");
    const btnAcessar = document.getElementById("btn-acessar-radar");
    if (inputLink && btnAcessar) {
      inputLink.value = this.linkRadarEditais;
      btnAcessar.href = this.linkRadarEditais;
    }
  },

  editarLinkCapitacao: function() {
    const novoLink = prompt("Insira a nova URL do Radar de Editais / Portal de Licitações (ex: Licitei):", this.linkRadarEditais);
    if (novoLink && novoLink.trim() !== "") {
      this.linkRadarEditais = novoLink.trim();
      this.carregarLinkRadar();
      alert("Link do Radar de Editais atualizado com sucesso!");
    }
  },

  atualizarSeletorClientesGlobal: function() {
    const sel = document.getElementById("select-global-busca-cliente");
    if (!sel) return;
    sel.innerHTML = "";
    this.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.cliente;
      if (p.id === this.clienteAtivoId) opt.selected = true;
      sel.appendChild(opt);
    });
  },

  navegarParaCliente: function(clienteId) {
    if (!clienteId) return;
    this.clienteAtivoId = clienteId;
    this.abrirModulo("relatorio_comercial");
    const el = document.getElementById(`row-proc-${clienteId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add("bg-amber-100");
      setTimeout(() => el.classList.remove("bg-amber-100"), 2000);
    }
  },

  renderizarRelatorioComercial: function() {
    const tbody = document.getElementById("tbody-relatorio-comercial");
    if (!tbody) return;
    tbody.innerHTML = "";

    this.processosComerciais.forEach((proc, idx) => {
      let editaisHtml = `<div class="space-y-1">`;
      if (proc.editaisAnexados && proc.editaisAnexados.length > 0) {
        proc.editaisAnexados.forEach((ed, edIdx) => {
          editaisHtml += `
            <div class="flex items-center justify-between bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
              <span class="truncate max-w-[130px] font-semibold text-slate-700" title="${ed.nome}">${ed.nome}</span>
              <div class="flex items-center space-x-1">
                <button onclick="window.borealApp.baixarEditalAnexo('${ed.nome}')" class="text-blue-600 hover:text-blue-800" title="Baixar"><i data-lucide="download" class="w-3 h-3"></i></button>
                <button onclick="window.borealApp.removerEditalAnexo(${idx}, ${edIdx})" class="text-rose-600 hover:text-rose-800" title="Remover"><i data-lucide="x" class="w-3 h-3"></i></button>
              </div>
            </div>
          `;
        });
      }
      if (!proc.editaisAnexados || proc.editaisAnexados.length < 10) {
        editaisHtml += `
          <label class="cursor-pointer text-[10px] text-[#B48D3C] hover:underline font-bold flex items-center space-x-1">
            <i data-lucide="paperclip" class="w-3 h-3"></i>
            <span>+ Anexar (${proc.editaisAnexados ? proc.editaisAnexados.length : 0}/10)</span>
            <input type="file" accept=".pdf, .docx, .doc" class="hidden" onchange="window.borealApp.adicionarEditalProcesso(${idx}, this)">
          </label>
        `;
      }
      editaisHtml += `</div>`;

      let propostaHtml = "";
      if (proc.propostaAnexada && proc.propostaAnexada.nome) {
        propostaHtml = `
          <div class="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-1 rounded text-center">
            <span class="block truncate max-w-[100px] font-bold text-[10px]" title="${proc.propostaAnexada.nome}">Proposta Pronta</span>
            <button onclick="window.borealApp.baixarPropostaComercial('${proc.id}')" class="text-[10px] text-emerald-700 hover:underline font-bold flex items-center justify-center space-x-0.5 mx-auto">
              <i data-lucide="file-text" class="w-3 h-3"></i>
              <span>Consultar</span>
            </button>
          </div>
        `;
      } else {
        propostaHtml = `
          <button onclick="window.borealApp.gerarPropostaParaProcesso(${idx})" class="px-2 py-1 bg-[#B48D3C] hover:bg-[#9c782f] text-white rounded text-[10px] font-bold shadow-sm transition">
            Fazer Proposta
          </button>
        `;
      }

      const tr = document.createElement("tr");
      tr.className = "hover:bg-slate-50 border-b";
      tr.id = `row-proc-${proc.id}`;
      tr.innerHTML = `
        <td class="p-1 border-r"><input type="text" value="${proc.cliente || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'cliente', this.value)" class="table-input font-bold text-slate-900 min-w-[200px]"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.edital || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'edital', this.value)" class="table-input font-semibold text-slate-800"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.processo || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'processo', this.value)" class="table-input"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.portal || 'Licitei'}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'portal', this.value)" class="table-input font-bold text-[#B48D3C]"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.dataProposta || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'dataProposta', this.value)" class="table-input font-medium" placeholder="dd/mm/aaaa"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.objeto || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'objeto', this.value)" class="table-input min-w-[260px]"></td>
        <td class="p-1 border-r text-right sigilo-valor"><input type="number" step="0.01" value="${(proc.valorEstimado || 0).toFixed(2)}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'valorEstimado', parseFloat(this.value)||0)" class="table-input text-right font-bold text-slate-900"></td>
        <td class="p-1 border-r">
          <select onchange="window.borealApp.alterarStatusComercial(${idx}, this.value)" class="w-full text-xs font-bold border border-slate-300 rounded p-1 bg-amber-50/70 text-slate-800 focus:ring-[#B48D3C]">
            <option value="solicitacao_proposta" ${proc.statusProcesso === 'solicitacao_proposta' ? 'selected' : ''}>Solicitação de proposta</option>
            <option value="vencedor_homologacao" ${proc.statusProcesso === 'vencedor_homologacao' ? 'selected' : ''}>Vencedor aguardando homologação</option>
            <option value="vencedor_recurso" ${proc.statusProcesso === 'vencedor_recurso' ? 'selected' : ''}>Vencedor aguardando recurso</option>
            <option value="homologado_contrato" ${proc.statusProcesso === 'homologado_contrato' ? 'selected' : ''}>Homologado aguardando contrato</option>
            <option value="contratado_empenho" ${proc.statusProcesso === 'contratado_empenho' ? 'selected' : ''}>Contratado aguardando empenho</option>
            <option value="empenhado_os" ${proc.statusProcesso === 'empenhado_os' ? 'selected' : ''}>Empenhado aguardando ordem de serviço</option>
            <option value="servico_iniciado" ${proc.statusProcesso === 'servico_iniciado' ? 'selected' : ''}>Serviço iniciado</option>
            <option value="sem_exito" ${proc.statusProcesso === 'sem_exito' ? 'selected' : ''}>Sem êxito (Apagar)</option>
            <option value="revogado" ${proc.statusProcesso === 'revogado' ? 'selected' : ''}>Revogado (Apagar)</option>
          </select>
        </td>
        <td class="p-1.5 border-r">${editaisHtml}</td>
        <td class="p-1.5 border-r text-center sigilo-valor">${propostaHtml}</td>
        <td class="p-1 text-center">
          <button onclick="window.borealApp.apagarProcessoComercial(${idx})" class="p-1 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded" title="Apagar Registro">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  },

  atualizarCampoComercial: function(idx, campo, val) {
    const p = this.processosComerciais[idx];
    if (p) {
      p[campo] = val;
      this.atualizarSeletorClientesGlobal();
      this.popularSeletoresContratos();
      this.popularSeletoresProducao();
      this.popularSeletoresDocumentos();
    }
  },

  alterarStatusComercial: function(idx, status) {
    const p = this.processosComerciais[idx];
    if (!p) return;
    p.statusProcesso = status;

    if (status === "sem_exito" || status === "revogado") {
      if (confirm(`Status definido como "${status.toUpperCase()}". Conforme a regra, o processo será apagado da matriz comercial. Confirmar?`)) {
        this.processosComerciais.splice(idx, 1);
        this.renderizarRelatorioComercial();
        this.atualizarSeletorClientesGlobal();
        return;
      }
    }

    if (status === "homologado_contrato" || status === "contratado_empenho") {
      alert(`STATUS: "${status.toUpperCase()}"!\n\nOs dados de "${p.cliente}" foram encaminhados para o MÓDULO DE CONTRATOS.`);
      this.popularSeletoresContratos();
    }

    this.renderizarRelatorioComercial();
  },

  apagarProcessoComercial: function(idx) {
    const p = this.processosComerciais[idx];
    if (confirm(`Deseja apagar definitivamente o registro de "${p.cliente}" do Relatório Comercial?`)) {
      this.processosComerciais.splice(idx, 1);
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();