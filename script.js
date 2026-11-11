/**
 * BOREAL ENGMED - SISTEMA INTEGRADO COMERCIAL, CONTRATOS, PRODUÇÃO & DOCUMENTOS
 * Versão 8.0 - Completa, Consolidada e com Suporte a Modelos Oficiais Boreal
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
  gravadorComercialAtivo: false,
  reconhecimentoComercial: null,
  arquivosEmMemoria: {}, // Armazena blobs para download imediato em qualquer botão

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
        { nome: "8 - EDITAL_Bandeirantes.pdf", data: "10/11/2026", tipo: "edital" }
      ],
      propostaAnexada: {
        nome: "Proposta_Comercial_Bandeirantes.pdf",
        data: "10/11/2026",
        valor: 615000.00
      },
      cnpj: "76.235.753/0001-48",
      contatoMatriz: "Marcos de Moraes",
      telMatriz: "(43) 3542-4525",
      emailMatriz: "licitacao@bandeirantes.pr.gov.br",
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
        { id: "PROD-4", tipoContrato: "Mensal sob Demanda", item: 4, objeto: "TREINAMENTO - NR 1 - DISPOSIÇÕES GERAIS E GERENCIAMENTO DE RISCOS OCUPACIONAIS", quant: 1111, unid: "UN", vlUnitario: 100.00, vlTotal: 111100.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-5", tipoContrato: "Mensal sob Demanda", item: 5, objeto: "TREINAMENTO - NR 6 - EPI (EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL)", quant: 595, unid: "UN", vlUnitario: 100.00, vlTotal: 59500.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-6", tipoContrato: "Mensal sob Demanda", item: 6, objeto: "TREINAMENTO - NR 7 - PRIMEIROS SOCORROS", quant: 199, unid: "UN", vlUnitario: 100.00, vlTotal: 19900.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-7", tipoContrato: "Mensal sob Demanda", item: 7, objeto: "TREINAMENTO - NR 10 - SEGURANÇA EM INSTALAÇÕES E SERVIÇOS EM ELETRICIDADE", quant: 4, unid: "UN", vlUnitario: 500.00, vlTotal: 2000.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-8", tipoContrato: "Mensal sob Demanda", item: 8, objeto: "TREINAMENTO - NR 11 - TRANSPORTE, MOVIMENTAÇÃO, ARMAZENAGEM E MANUSEIO DE MATERIAIS", quant: 14, unid: "UN", vlUnitario: 500.00, vlTotal: 7000.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-9", tipoContrato: "Mensal sob Demanda", item: 9, objeto: "TREINAMENTO - NR 12 - SEGURANÇA NO TRABALHO EM MÁQUINAS E EQUIPAMENTOS", quant: 19, unid: "UN", vlUnitario: 500.00, vlTotal: 9500.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-10", tipoContrato: "Mensal sob Demanda", item: 10, objeto: "TREINAMENTO - ERGONOMIA (NR 17)", quant: 546, unid: "UN", vlUnitario: 500.00, vlTotal: 273000.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-11", tipoContrato: "Mensal sob Demanda", item: 11, objeto: "TREINAMENTO - NR 20 - SEGURANÇA E SAÚDE NO TRABALHO COM INFLAMÁVEIS E COMBUSTÍVEIS", quant: 5, unid: "UN", vlUnitario: 500.00, vlTotal: 2500.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-12", tipoContrato: "Mensal sob Demanda", item: 12, objeto: "EXAMES MÉDICOS OCUPACIONAIS: ADMISSIONAL E DEMISSIONAL", quant: 200, unid: "UN", vlUnitario: 75.00, vlTotal: 15000.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] },
        { id: "PROD-13", tipoContrato: "Mensal sob Demanda", item: 13, objeto: "EXAMES MÉDICOS OCUPACIONAIS: PERIÓDICO, MUDANÇA DE RISCOS E RETORNO AO TRABALHO", quant: 1140, unid: "UN", vlUnitario: 75.00, vlTotal: 85500.00, statusProducao: "aguardando_contrato", relatoriosAnexados: [] }
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
      editaisAnexados: [{ nome: "Edital_TRT15_2026.pdf", data: "02/11/2026", tipo: "edital" }],
      propostaAnexada: { nome: "Proposta_Boreal_TRT15.pdf", data: "02/11/2026", valor: 85000.00 },
      cnpj: "04.414.837/0001-38",
      contatoMatriz: "Dr. Marcelo Ramos",
      telMatriz: "(19) 3234-5678",
      emailMatriz: "marcelo.fiscal@trt15.jus.br",
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

  salvarDadosLocais: function() {
    try {
      localStorage.setItem("boreal_processos_comerciais", JSON.stringify(this.processosComerciais));
    } catch (e) {
      console.error("Erro ao salvar localmente:", e);
    }
  },

  carregarDadosLocais: function() {
    try {
      const data = localStorage.getItem("boreal_processos_comerciais");
      if (data) {
        this.processosComerciais = JSON.parse(data);
      }
    } catch (e) {
      console.error("Erro ao ler dados locais:", e);
    }
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
    alert(`Perfil alterado para: ${novoPerfil.toUpperCase()}.\n\n${novoPerfil === 'agente' ? 'ATENÇÃO: O perfil AGENTE não visualiza valores financeiros nem propostas comerciais.' : 'Acesso total liberado.'}`);
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

  salvarCredenciaisSenha: async function() {
    const email = document.getElementById("login-input-email").value.trim();
    const senha = document.getElementById("login-input-senha").value.trim();
    const lembrar = document.getElementById("login-check-lembrar").checked;

    if (!email || !senha) {
      alert("Por favor, preencha o e-mail e a senha cadastrados.");
      return;
    }

    // Validação de autenticação real com Supabase
    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password: senha });
        if (error) {
          alert("Falha na autenticação Supabase: " + error.message + "\nVerifique se o e-mail foi devidamente cadastrado.");
          return;
        }
      } catch (err) {
        console.warn("Erro ao comunicar com Supabase Auth:", err);
      }
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
    const novoLink = prompt("Insira a nova URL do Radar de Editais / Portal Licitei:", this.linkRadarEditais);
    if (novoLink && novoLink.trim() !== "") {
      this.linkRadarEditais = novoLink.trim();
      this.carregarLinkRadar();
      alert("Link do Radar de Editais atualizado com sucesso!");
    }
  },

  capturarEditalDiretoLicitei: function() {
    const input = document.getElementById("input-link-radar");
    const url = (input && input.value) ? input.value.trim() : "";
    if (!url) {
      alert("Informe ou cole a URL do edital no portal Licitei para realizar a captura direta.");
      return;
    }

    const nomeExtraido = "Edital_Capturado_Licitei_" + new Date().toISOString().slice(0, 10) + ".pdf";
    const novo = {
      id: "CLI-" + String(this.processosComerciais.length + 1).padStart(3, '0'),
      cliente: "ÓRGÃO CAPTURADO LICITEI",
      edital: "PREGÃO ELETRÔNICO Nº " + Math.floor(Math.random() * 90 + 10) + "/2026",
      processo: "PROC. LICITEI " + Math.floor(Math.random() * 900 + 100) + "/2026",
      portal: "Licitei",
      dataProposta: new Date().toLocaleDateString('pt-BR'),
      objeto: "Prestação de serviços contínuos em segurança do trabalho e medicina ocupacional conforme edital capturado.",
      valorEstimado: 0.0,
      statusProcesso: "solicitacao_proposta",
      editaisAnexados: [{ nome: nomeExtraido, data: new Date().toLocaleDateString('pt-BR'), url: url }],
      itensProducao: []
    };

    this.processosComerciais.unshift(novo);
    this.clienteAtivoId = novo.id;
    this.salvarDadosLocais();
    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
    alert(`Edital vinculado com sucesso!\nO documento foi registrado diretamente na coluna "EDITAIS / DOCS ANEXADOS". Clique em "Consultar" para abrir.`);
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

  // RENDERIZAÇÃO DA MATRIZ COMERCIAL COM CONSULTA DIRETA E CONTROLE DE ATÉ 10 ANEXOS
  renderizarRelatorioComercial: function() {
    const tbody = document.getElementById("tbody-relatorio-comercial");
    if (!tbody) return;
    tbody.innerHTML = "";

    this.processosComerciais.forEach((proc, idx) => {
      let editaisHtml = `<div class="space-y-1">`;
      if (proc.editaisAnexados && proc.editaisAnexados.length > 0) {
        proc.editaisAnexados.forEach((ed, edIdx) => {
          editaisHtml += `
            <div class="flex items-center justify-between bg-slate-100 px-2 py-1 rounded text-[11px] border border-slate-200">
              <span class="truncate max-w-[110px] font-semibold text-slate-700" title="${ed.nome}">${ed.nome}</span>
              <div class="flex items-center space-x-1.5 ml-1">
                <button onclick="window.borealApp.visualizarBaixarDocumentoUniversal('edital', '${proc.id}', ${edIdx})" class="px-1.5 py-0.5 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded font-bold text-[10px] flex items-center space-x-1" title="Consultar Edital">
                  <i data-lucide="eye" class="w-3 h-3"></i>
                  <span>Consultar</span>
                </button>
                <button onclick="window.borealApp.removerEditalAnexo(${idx}, ${edIdx})" class="text-rose-600 hover:text-rose-800" title="Remover"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>
              </div>
            </div>
          `;
        });
      }
      if (!proc.editaisAnexados || proc.editaisAnexados.length < 10) {
        editaisHtml += `
          <label class="cursor-pointer text-[10px] text-[#B48D3C] hover:underline font-bold flex items-center space-x-1 mt-1">
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
            <span class="block truncate max-w-[100px] font-bold text-[10px]" title="${proc.propostaAnexada.nome}">Proposta Emitida</span>
            <button onclick="window.borealApp.visualizarBaixarDocumentoUniversal('proposta', '${proc.id}')" class="text-[10px] text-emerald-700 hover:underline font-bold flex items-center justify-center space-x-0.5 mx-auto mt-0.5">
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
      this.salvarDadosLocais();
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
        this.salvarDadosLocais();
        this.renderizarRelatorioComercial();
        this.atualizarSeletorClientesGlobal();
        return;
      }
    }

    if (status === "homologado_contrato" || status === "contratado_empenho") {
      alert(`STATUS: "${status.toUpperCase()}"!\nOs dados de "${p.cliente}" foram encaminhados para o MÓDULO DE CONTRATOS.`);
      this.popularSeletoresContratos();
    }

    this.salvarDadosLocais();
    this.renderizarRelatorioComercial();
  },

  adicionarEditalProcesso: function(idx, inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    const proc = this.processosComerciais[idx];
    if (!proc.editaisAnexados) proc.editaisAnexados = [];

    if (proc.editaisAnexados.length >= 10) {
      alert("Limite máximo de 10 editais/documentos anexados atingido.");
      return;
    }

    const fileBlobUrl = URL.createObjectURL(file);
    const key = `edital_${proc.id}_${Date.now()}`;
    this.arquivosEmMemoria[key] = { url: fileBlobUrl, name: file.name, file: file };

    proc.editaisAnexados.push({
      nome: file.name,
      data: new Date().toLocaleDateString('pt-BR'),
      storageKey: key
    });

    this.salvarDadosLocais();
    this.renderizarRelatorioComercial();
    alert(`Documento "${file.name}" anexado com sucesso!`);
  },

  removerEditalAnexo: function(procIdx, edIdx) {
    const proc = this.processosComerciais[procIdx];
    if (proc && proc.editaisAnexados) {
      proc.editaisAnexados.splice(edIdx, 1);
      this.salvarDadosLocais();
      this.renderizarRelatorioComercial();
    }
  },

  apagarProcessoComercial: function(idx) {
    const p = this.processosComerciais[idx];
    if (confirm(`Deseja apagar definitivamente o registro de "${p.cliente}" do Relatório Comercial?`)) {
      this.processosComerciais.splice(idx, 1);
      this.salvarDadosLocais();
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();
    }
  },

  adicionarLinhaComercialManual: function() {
    const novo = {
      id: "CLI-" + String(this.processosComerciais.length + 1).padStart(3, '0'),
      cliente: "NOVO ÓRGÃO CONTRATANTE",
      edital: "PREGÃO ELETRÔNICO Nº " + (this.processosComerciais.length + 1) + "/2026",
      processo: "PROC. ADM. " + (this.processosComerciais.length + 1) + "/2026",
      portal: "Licitei",
      dataProposta: new Date().toLocaleDateString('pt-BR'),
      objeto: "Serviços de engenharia de segurança e medicina ocupacional.",
      valorEstimado: 0.0,
      statusProcesso: "solicitacao_proposta",
      editaisAnexados: [],
      itensProducao: []
    };
    this.processosComerciais.push(novo);
    this.salvarDadosLocais();
    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
  },

  // FUNÇÃO UNIVERSAL: VISUALIZAÇÃO E DOWNLOAD DE DOCUMENTOS (CORREÇÃO DE TODAS AS SETAS/BOTÕES)
  visualizarBaixarDocumentoUniversal: function(tipo, refId, extraIdx = 0) {
    const proc = this.processosComerciais.find(p => p.id === refId);
    if (!proc) {
      alert("Registro não encontrado no sistema.");
      return;
    }

    if (tipo === "edital") {
      const ed = (proc.editaisAnexados && proc.editaisAnexados[extraIdx]) ? proc.editaisAnexados[extraIdx] : null;
      if (ed && ed.storageKey && this.arquivosEmMemoria[ed.storageKey]) {
        window.open(this.arquivosEmMemoria[ed.storageKey].url, "_blank");
      } else if (ed && ed.url) {
        window.open(ed.url, "_blank");
      } else {
        const conteudo = `===========================================================================\nBOREAL ENGMED - DOCUMENTO ANEXADO / EDITAL DE LICITAÇÃO\n===========================================================================\nÓrgão: ${proc.cliente}\nEdital: ${proc.edital}\nProcesso: ${proc.processo}\nObjeto: ${proc.objeto}\nDocumento: ${ed ? ed.nome : 'Edital Anexo'}\nData de Registro: ${ed ? ed.data : proc.dataProposta}\n===========================================================================`;
        const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      }
    } else if (tipo === "proposta") {
      this.clienteAtivoId = proc.id;
      this.modeloDocAtivo = "proposta";
      this.abrirModulo("documentos_padroes");
    } else if (tipo === "contrato") {
      const doc = (proc.documentosContrato && proc.documentosContrato[extraIdx]) ? proc.documentosContrato[extraIdx] : null;
      if (doc && doc.storageKey && this.arquivosEmMemoria[doc.storageKey]) {
        window.open(this.arquivosEmMemoria[doc.storageKey].url, "_blank");
      } else {
        const conteudo = `===========================================================================\nBOREAL ENGMED - INSTRUMENTO CONTRATUAL / MINUTA REGISTRADA\n===========================================================================\nContratante: ${proc.cliente}\nContrato Nº: ${proc.numeroContrato || 'Pendente'}\nData: ${proc.dataContrato || '15/11/2026'}\nObjeto: ${proc.objeto}\n===========================================================================`;
        const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
        window.open(URL.createObjectURL(blob), '_blank');
      }
    } else if (tipo === "relatorio_entrega") {
      this.gerarRelatorioEntregaPDFTimbrado(proc, extraIdx);
    }
  },

  // LEITURA PROFUNDA DE PDF COM DETECÇÃO DE VALOR SIGILOSO
  processarUploadEditalReal: async function(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    const lbl = document.getElementById("label-upload-status");
    if (lbl) lbl.textContent = `Lendo "${file.name}" com extração inteligente...`;

    try {
      let textoTotal = "";
      if (window.pdfjsLib && file.type === "application/pdf") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const totalPaginas = Math.min(pdf.numPages, 20); // lê até 20 primeiras páginas

        for (let i = 1; i <= totalPaginas; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          textoTotal += textContent.items.map(item => item.str).join(" ") + "\n";
        }
      } else {
        textoTotal = await file.text();
      }

      // 1. Extração do Órgão / Cliente
      let clienteExtraido = "ÓRGÃO EXTRAÍDO DO EDITAL";
      const matchCliente = textoTotal.match(/(?:PREFEITURA|CÂMARA|MUNICÍPIO|TRIBUNAL|CONSELHO|SECRETARIA|GOVERNO)\s+[A-ZÀ-Úa-zà-ú\s\.\-]+/i);
      if (matchCliente) {
        clienteExtraido = matchCliente[0].trim().slice(0, 75).toUpperCase();
      }

      // 2. Extração de Edital / Pregão
      let editalExtraido = "PREGÃO ELETRÔNICO Nº 00/2026";
      const matchEdital = textoTotal.match(/(?:PREGÃO|CONCORRÊNCIA|DISPENSA|EDITAL)\s*(?:ELETRÔNICO|PRESENCIAL)?\s*(?:N[º°\.\s]*)?(\d+[\/\-]\d+)/i);
      if (matchEdital) {
        editalExtraido = matchEdital[0].trim().toUpperCase();
      }

      // 3. Extração do Processo Administrativo
      let processoExtraido = "PROC. ADM. 00/2026";
      const matchProcesso = textoTotal.match(/(?:PROCESSO|PROAD|PA)\s*(?:ADMINISTRATIVO)?\s*(?:N[º°\.\s]*)?(\d+[\/\-]\d+)/i);
      if (matchProcesso) {
        processoExtraido = matchProcesso[0].trim().toUpperCase();
      }

      // 4. Extração do Objeto
      let objetoExtraido = "Prestação de serviços especializados em engenharia de segurança e medicina do trabalho.";
      const matchObjeto = textoTotal.match(/OBJETO[:\s\-\–]+([^\n\r\.\;]{20,350})/i);
      if (matchObjeto) {
        objetoExtraido = matchObjeto[1].trim();
      }

      // 5. REGRA DE VALOR: Identificação de Sigilo ou Valor Real
      let valorEstimado = 0.0;
      const textoLower = textoTotal.toLowerCase();
      const isSigiloso = textoLower.includes("sigiloso") || 
                         textoLower.includes("orçamento sigiloso") || 
                         textoLower.includes("valor sob sigilo") || 
                         textoLower.includes("sigilo do valor");

      if (isSigiloso) {
        valorEstimado = 0.0; // REGRA: Se o edital não informa ou é sigiloso, deve ser zero
      } else {
        const matchValor = textoTotal.match(/(?:VALOR\s*(?:ESTIMADO|GLOBAL|TOTAL)?|R\$)\s*[:\s]*([\d\.\,]{4,15})/i);
        if (matchValor) {
          const numStr = matchValor[1].replace(/\./g, '').replace(',', '.');
          const parsed = parseFloat(numStr);
          if (!isNaN(parsed) && parsed > 0) valorEstimado = parsed;
        }
      }

      // Gravação do arquivo em memória para consulta direta
      const fileBlobUrl = URL.createObjectURL(file);
      const storageKey = `edital_upload_${Date.now()}`;
      this.arquivosEmMemoria[storageKey] = { url: fileBlobUrl, name: file.name, file: file };

      const novoProcesso = {
        id: "CLI-" + String(this.processosComerciais.length + 1).padStart(3, '0'),
        cliente: clienteExtraido,
        edital: editalExtraido,
        processo: processoExtraido,
        portal: "Licitei",
        dataProposta: new Date().toLocaleDateString('pt-BR'),
        objeto: objetoExtraido,
        valorEstimado: valorEstimado,
        statusProcesso: "solicitacao_proposta",
        editaisAnexados: [{ nome: file.name, data: new Date().toLocaleDateString('pt-BR'), storageKey: storageKey }],
        itensProducao: []
      };

      this.processosComerciais.unshift(novoProcesso);
      this.clienteAtivoId = novoProcesso.id;
      this.salvarDadosLocais();
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();

      if (lbl) lbl.textContent = `Edital processado: ${clienteExtraido} (${isSigiloso ? 'Valor Sigiloso: R$ 0,00' : 'R$ ' + valorEstimado.toFixed(2)})`;
      alert(`Edital anexado e processado com sucesso!\n\nCliente: ${clienteExtraido}\nEdital: ${editalExtraido}\nValor Estimado: ${isSigiloso ? 'R$ 0,00 (Sigiloso / Não informado)' : 'R$ ' + valorEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    } catch (err) {
      console.error("Erro na leitura do edital:", err);
      alert("Falha ao analisar o PDF. O arquivo foi anexado manualmente para consulta.");
    }
  },

  // NOVO RECURSO: MICROFONE SEQUENCIAL NO RELATÓRIO COMERCIAL
  alternarAudioComercial: function() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Reconhecimento de voz não suportado neste navegador. Utilize o Google Chrome.");
      return;
    }

    const btn = document.getElementById("btn-mic-comercial");
    const lbl = document.getElementById("lbl-mic-comercial");

    if (this.gravadorComercialAtivo) {
      if (this.reconhecimentoComercial) this.reconhecimentoComercial.stop();
      this.gravadorComercialAtivo = false;
      if (btn) btn.classList.remove("mic-active");
      if (lbl) lbl.textContent = "Gravar por Voz";
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.reconhecimentoComercial = new SpeechRecognition();
    this.reconhecimentoComercial.lang = 'pt-BR';
    this.reconhecimentoComercial.continuous = true;
    this.reconhecimentoComercial.interimResults = false;

    this.reconhecimentoComercial.onstart = () => {
      this.gravadorComercialAtivo = true;
      if (btn) btn.classList.add("mic-active");
      if (lbl) lbl.textContent = "Gravando voz...";
    };

    this.reconhecimentoComercial.onresult = (event) => {
      const transcricao = event.results[event.results.length - 1][0].transcript.trim();
      const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId) || this.processosComerciais[0];
      if (!proc) return;

      // Direcionamento sequencial por voz: se o cliente for padrão, preenche cliente, depois edital, objeto ou valor
      if (proc.cliente === "NOVO ÓRGÃO CONTRATANTE" || !proc.cliente) {
        proc.cliente = transcricao.toUpperCase();
      } else if (!proc.edital || proc.edital.includes("00/2026")) {
        proc.edital = transcricao.toUpperCase();
      } else if (!proc.objeto || proc.objeto.length < 15) {
        proc.objeto = transcricao;
      } else {
        const num = parseFloat(transcricao.replace(/[^\d]/g, '')) / 100;
        if (!isNaN(num) && num > 0) proc.valorEstimado = num;
      }

      this.salvarDadosLocais();
      this.renderizarRelatorioComercial();
    };

    this.reconhecimentoComercial.onerror = (e) => {
      console.warn("Erro no reconhecimento comercial:", e);
      this.gravadorComercialAtivo = false;
      if (btn) btn.classList.remove("mic-active");
      if (lbl) lbl.textContent = "Gravar por Voz";
    };

    this.reconhecimentoComercial.start();
  },

  // MÓDULO DE CONTRATOS: CARREGAMENTO E SINCRONIZAÇÃO
  popularSeletoresContratos: function() {
    const sel = document.getElementById("select-contratante-modulo");
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

  carregarContratanteNoModulo: function(id) {
    this.clienteAtivoId = id;
    const proc = this.processosComerciais.find(p => p.id === id);
    if (!proc) return;

    const setVal = (elemId, val) => {
      const el = document.getElementById(elemId);
      if (el) el.value = val !== undefined ? val : "";
    };

    setVal("ct-cliente", proc.cliente);
    setVal("ct-cnpj", proc.cnpj || "04.414.837/0001-38");
    setVal("ct-contato-matriz", proc.contatoMatriz || proc.nomeFiscal || "");
    setVal("ct-tel-matriz", proc.telMatriz || proc.telFiscal || "");
    setVal("ct-email-matriz", proc.emailMatriz || proc.emailFiscal || "");
    setVal("ct-cep", proc.cep || "");
    setVal("ct-endereco", proc.endereco || "");
    setVal("ct-numero", proc.numeroContrato || "");
    setVal("ct-data", proc.dataContrato || "15/11/2026");
    setVal("ct-vigencia", proc.vigencia || "1 ano");
    setVal("ct-tipo", proc.tipoContrato || "Continuado");
    setVal("ct-objeto", proc.objeto || "");
    setVal("ct-fiscal-nome", proc.nomeFiscal || "");
    setVal("ct-fiscal-tel", proc.telFiscal || "");
    setVal("ct-fiscal-email", proc.emailFiscal || "");
    setVal("ct-pagto-nome", proc.contatoPagto || "");
    setVal("ct-pagto-tel", proc.telPagto || "");
    setVal("ct-pagto-email", proc.emailPagto || "");

    const boxAnexos = document.getElementById("ct-lista-anexos");
    if (boxAnexos) {
      boxAnexos.innerHTML = "";
      if (proc.documentosContrato && proc.documentosContrato.length > 0) {
        proc.documentosContrato.forEach((doc, dIdx) => {
          boxAnexos.innerHTML += `
            <div class="flex items-center justify-between bg-slate-100 px-2 py-1 rounded text-[11px] border">
              <span class="truncate max-w-[120px] font-semibold">${doc.nome}</span>
              <button onclick="window.borealApp.visualizarBaixarDocumentoUniversal('contrato', '${proc.id}', ${dIdx})" class="px-1.5 py-0.5 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded font-bold text-[10px]">
                Consultar
              </button>
            </div>
          `;
        });
      }
    }
  },

  salvarContratoAtivo: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;

    proc.cliente = document.getElementById("ct-cliente").value;
    proc.cnpj = document.getElementById("ct-cnpj").value;
    proc.contatoMatriz = document.getElementById("ct-contato-matriz").value;
    proc.telMatriz = document.getElementById("ct-tel-matriz").value;
    proc.emailMatriz = document.getElementById("ct-email-matriz").value;
    proc.cep = document.getElementById("ct-cep").value;
    proc.endereco = document.getElementById("ct-endereco").value;
    proc.numeroContrato = document.getElementById("ct-numero").value;
    proc.dataContrato = document.getElementById("ct-data").value;
    proc.vigencia = document.getElementById("ct-vigencia").value;
    proc.tipoContrato = document.getElementById("ct-tipo").value;
    proc.objeto = document.getElementById("ct-objeto").value;
    proc.nomeFiscal = document.getElementById("ct-fiscal-nome").value;
    proc.telFiscal = document.getElementById("ct-fiscal-tel").value;
    proc.emailFiscal = document.getElementById("ct-fiscal-email").value;
    proc.contatoPagto = document.getElementById("ct-pagto-nome").value;
    proc.telPagto = document.getElementById("ct-pagto-tel").value;
    proc.emailPagto = document.getElementById("ct-pagto-email").value;

    this.salvarDadosLocais();
    alert("Dados do contrato gravados com sucesso!");
  },

  // NOVO RECURSO: ENTRADA DE PLANILHA EXCEL POR UPLOAD NO MÓDULO CONTRATOS
  importarPlanilhaExcelContratos: function(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (rows.length < 2) {
          alert("A planilha selecionada está vazia ou não contém linhas de dados.");
          return;
        }

        // Lê cabeçalhos da primeira linha e preenche a matriz
        let importados = 0;
        for (let i = 1; i < rows.length; i++) {
          const r = rows[i];
          if (!r[0]) continue;

          const novo = {
            id: "CLI-EXCEL-" + (this.processosComerciais.length + 1),
            cliente: String(r[0] || "CLIENTE EXCEL").toUpperCase(),
            cnpj: String(r[1] || ""),
            contatoMatriz: String(r[2] || ""),
            telMatriz: String(r[3] || ""),
            emailMatriz: String(r[4] || ""),
            numeroContrato: String(r[5] || ""),
            objeto: String(r[6] || "Prestação de serviços ocupacionais."),
            valorEstimado: parseFloat(r[7]) || 0.0,
            statusProcesso: "homologado_contrato",
            editaisAnexados: [],
            itensProducao: []
          };
          this.processosComerciais.push(novo);
          importados++;
        }

        this.salvarDadosLocais();
        this.popularSeletoresContratos();
        this.renderizarRelatorioComercial();
        alert(`${importados} contratos foram importados da planilha com sucesso!`);
      } catch (err) {
        console.error("Erro na importação da planilha Excel:", err);
        alert("Erro ao ler o arquivo Excel. Verifique a formatação do arquivo.");
      }
    };
    reader.readAsArrayBuffer(file);
  },

  // MÓDULO 3: RELATÓRIO DE PRODUÇÃO E STATUS "AGUARDANDO CONTRATO"
  popularSeletoresProducao: function() {
    const sel = document.getElementById("select-cliente-producao");
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

  carregarProducaoCliente: function(id) {
    this.clienteAtivoId = id;
    const proc = this.processosComerciais.find(p => p.id === id);
    if (!proc) return;

    const lblCli = document.getElementById("lbl-producao-cliente-ativo");
    const lblObj = document.getElementById("lbl-producao-objeto-resumo");
    if (lblCli) lblCli.textContent = `ITENS DE SERVIÇO EM PRODUÇÃO - ${proc.cliente}`;
    if (lblObj) lblObj.textContent = proc.objeto || "";

    const tbody = document.getElementById("tbody-relatorio-producao-modulo3");
    if (!tbody) return;
    tbody.innerHTML = "";

    let totalGeral = 0;
    (proc.itensProducao || []).forEach((it, idx) => {
      totalGeral += (it.vlTotal || 0);

      let relatorioHtml = "";
      if (it.relatoriosAnexados && it.relatoriosAnexados.length > 0) {
        relatorioHtml = `
          <button onclick="window.borealApp.visualizarBaixarDocumentoUniversal('relatorio_entrega', '${proc.id}', ${idx})" class="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded font-bold text-[11px] flex items-center space-x-1" title="Visualizar Relatório de Entrega Oficial">
            <i data-lucide="download" class="w-3.5 h-3.5 text-emerald-700"></i>
            <span>Visualizar Relatório Oficial</span>
          </button>
        `;
      } else {
        relatorioHtml = `<span class="text-slate-400 text-[11px] italic">Aguardando Conclusão</span>`;
      }

      const tr = document.createElement("tr");
      tr.className = "hover:bg-slate-50 border-b";
      tr.innerHTML = `
        <td class="p-1 border-r"><input type="text" value="${it.tipoContrato || 'Continuado'}" class="table-input"></td>
        <td class="p-1 border-r text-center font-bold">${it.item || (idx + 1)}</td>
        <td class="p-1 border-r"><input type="text" value="${it.objeto || ''}" class="table-input min-w-[240px]"></td>
        <td class="p-1 border-r text-center"><input type="number" value="${it.quant || 1}" class="table-input text-center"></td>
        <td class="p-1 border-r text-center"><input type="text" value="${it.unid || 'UN'}" class="table-input text-center font-bold"></td>
        <td class="p-1 border-r text-right sigilo-valor"><input type="number" step="0.01" value="${(it.vlUnitario || 0).toFixed(2)}" class="table-input text-right"></td>
        <td class="p-1 border-r text-right sigilo-valor font-bold text-emerald-700">R$ ${(it.vlTotal || 0).toFixed(2)}</td>
        <td class="p-1 border-r">
          <select onchange="window.borealApp.alterarStatusItemProducao('${proc.id}', ${idx}, this.value)" class="w-full text-xs font-bold border rounded p-1 bg-white">
            <option value="aguardando_contrato" ${it.statusProducao === 'aguardando_contrato' || it.statusProducao === 'solicitacao_proposta' ? 'selected' : ''}>Aguardando Contrato</option>
            <option value="servico_andamento" ${it.statusProducao === 'servico_andamento' ? 'selected' : ''}>Serviço em Andamento</option>
            <option value="concluido" ${it.statusProducao === 'concluido' ? 'selected' : ''}>Concluído (Gera Relatório)</option>
            <option value="entregue_aceito" ${it.statusProducao === 'entregue_aceito' ? 'selected' : ''}>Entregue e Aceito (Solicitar NF)</option>
          </select>
        </td>
        <td class="p-1 border-r text-center">
          <button onclick="window.borealApp.apagarItemProducao('${proc.id}', ${idx})" class="text-rose-600 hover:text-rose-800 p-1"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
        </td>
        <td class="p-1">${relatorioHtml}</td>
      `;
      tbody.appendChild(tr);
    });

    const lblTot = document.getElementById("lbl-producao-total-modulo3");
    if (lblTot) lblTot.textContent = "R$ " + totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    if (window.lucide) window.lucide.createIcons();
  },

  alterarStatusItemProducao: function(procId, itIdx, status) {
    const proc = this.processosComerciais.find(p => p.id === procId);
    if (!proc || !proc.itensProducao[itIdx]) return;

    proc.itensProducao[itIdx].statusProducao = status;
    if (status === "concluido" || status === "entregue_aceito") {
      if (!proc.itensProducao[itIdx].relatoriosAnexados || proc.itensProducao[itIdx].relatoriosAnexados.length === 0) {
        proc.itensProducao[itIdx].relatoriosAnexados = [{
          id: "REL-" + Math.floor(Math.random() * 9000 + 1000),
          nome: `Relatorio_Entrega_Item${itIdx + 1}_${proc.cliente.slice(0, 15).replace(/\s+/g, '_')}.pdf`,
          data: new Date().toLocaleDateString('pt-BR'),
          hash: `BOREAL-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now().toString().slice(-4)}`
        }];
      }
    }
    this.salvarDadosLocais();
    this.carregarProducaoCliente(procId);
  },

  // MÓDULO 4: DOCUMENTOS PADRÕES (OFÍCIOS SEQUENCIAIS POR CLIENTE, SEM "OFÍCIO" NA DECLARAÇÃO, E CAMPOS EDITÁVEIS)
  popularSeletoresDocumentos: function() {
    const sel = document.getElementById("doc-select-cliente");
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

  mudarClienteDocumento: function(clienteId) {
    this.clienteAtivoId = clienteId;
    this.renderizarDocumentoAtivo();
  },

  mudarModeloDocumento: function(modelo) {
    this.modeloDocAtivo = modelo;
    this.renderizarDocumentoAtivo();
  },

  // CÁLCULO DO NÚMERO SEQUENCIAL POR CLIENTE (0001, 0002, ETC.)
  obterNumeroSequencialCliente: function(procId) {
    const idx = this.processosComerciais.findIndex(p => p.id === procId);
    const num = (idx >= 0 ? idx + 1 : 1);
    return String(num).padStart(4, '0') + "/2026";
  },

  renderizarDocumentoAtivo: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;

    const numOficio = this.obterNumeroSequencialCliente(proc.id);
    const lblOficio = document.getElementById("lbl-numero-doc-oficial");
    const pvTituloTipo = document.getElementById("pv-doc-titulo-tipo");

    // REGRA: Na Declaração Institucional NÃO deve sair o nome de "Ofício"
    if (this.modeloDocAtivo === "declaracao") {
      if (lblOficio) lblOficio.textContent = "DECLARAÇÃO INSTITUCIONAL";
      if (pvTituloTipo) pvTituloTipo.textContent = "DECLARAÇÃO INSTITUCIONAL DE QUALIFICAÇÃO";
    } else {
      const rotulo = `OFÍCIO Nº ${numOficio}`;
      if (lblOficio) lblOficio.textContent = rotulo;
      if (pvTituloTipo) pvTituloTipo.textContent = rotulo;
    }

    // Preenche campos de edição da esquerda
    const inDest = document.getElementById("doc-in-destinatario");
    const inAc = document.getElementById("doc-in-ac");
    const inAssunto = document.getElementById("doc-in-assunto");
    const inRef = document.getElementById("doc-in-ref");
    const inObjeto = document.getElementById("doc-in-objeto");

    if (inDest) inDest.value = proc.cliente || "Nome do Órgão";
    if (inAc) inAc.value = proc.contatoMatriz || proc.nomeFiscal || "Comissão de Contratações";
    if (inAssunto) inAssunto.value = this.modeloDocAtivo === "declaracao" ? "Declaração Institucional" : "Proposta Comercial Formal";
    if (inRef) inRef.value = `${proc.edital || 'Edital'} / ${proc.processo || 'Processo'}`;
    if (inObjeto) inObjeto.value = proc.objeto || "Prestação de serviços especializados em segurança e saúde do trabalho.";

    // Bloco de Alíquotas Tributárias: SOMENTE no Relatório de Serviços Entregues
    const blocoAliq = document.getElementById("pv-doc-bloco-aliquotas");
    if (blocoAliq) {
      if (this.modeloDocAtivo === "relatorio_servicos") {
        blocoAliq.classList.remove("hidden");
      } else {
        blocoAliq.classList.add("hidden");
      }
    }

    this.sincronizarTextoDoc();
    this.renderizarTabelaItensDocumento(proc);
  },

  sincronizarTextoDoc: function() {
    const dest = document.getElementById("doc-in-destinatario").value;
    const ac = document.getElementById("doc-in-ac").value;
    const assunto = document.getElementById("doc-in-assunto").value;
    const ref = document.getElementById("doc-in-ref").value;
    const obj = document.getElementById("doc-in-objeto").value;
    const val = document.getElementById("doc-in-validade") ? document.getElementById("doc-in-validade").value : "";
    const data = document.getElementById("doc-in-data") ? document.getElementById("doc-in-data").value : "";

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt("pv-doc-destinatario", dest);
    setTxt("pv-doc-ac", ac);
    setTxt("pv-doc-assunto", assunto);
    setTxt("pv-doc-ref", ref);
    setTxt("pv-doc-objeto-compl", obj);
    setTxt("pv-doc-validade-txt", val);
    if (data) setTxt("pv-doc-data", `Paulínia/SP, ${data}`);

    const hash = `BOREAL-SHA256-${Math.random().toString(36).substring(2, 10).toUpperCase()}-2026`;
    setTxt("pv-doc-hash-validacao", hash);
  },

  renderizarTabelaItensDocumento: function(proc) {
    const thead = document.getElementById("thead-doc-itens");
    const tbody = document.getElementById("tbody-doc-itens");
    const previewBox = document.getElementById("pv-doc-tabela-box");
    if (!tbody || !previewBox) return;

    if (thead) {
      thead.innerHTML = `
        <tr>
          <th class="p-1.5 w-10 text-center">Item</th>
          <th class="p-1.5">Descrição</th>
          <th class="p-1.5 w-12 text-center">Quant</th>
          <th class="p-1.5 w-12 text-center">Unid</th>
          <th class="p-1.5 w-20 text-right">Unit (R$)</th>
          <th class="p-1.5 w-24 text-right">Total (R$)</th>
        </tr>
      `;
    }

    tbody.innerHTML = "";
    let htmlPreviewTab = `
      <table class="w-full text-[9pt] border-collapse border border-slate-400 mt-2">
        <thead class="bg-slate-100 font-bold border-b border-slate-400">
          <tr>
            <th class="border border-slate-300 p-1 text-center w-8">ITEM</th>
            <th class="border border-slate-300 p-1 text-left">DESCRIÇÃO DOS SERVIÇOS</th>
            <th class="border border-slate-300 p-1 text-center w-12">QUANT</th>
            <th class="border border-slate-300 p-1 text-center w-12">UNID</th>
            <th class="border border-slate-300 p-1 text-right w-20">VL UNIT.</th>
            <th class="border border-slate-300 p-1 text-right w-24">VL TOTAL</th>
          </tr>
        </thead>
        <tbody>
    `;

    let total = 0;
    const itens = proc.itensProducao && proc.itensProducao.length > 0 ? proc.itensProducao : [
      { item: 1, objeto: proc.objeto || "Serviço Padrão de Engenharia", quant: 1, unid: "UN", vlUnitario: proc.valorEstimado || 0, vlTotal: proc.valorEstimado || 0 }
    ];

    itens.forEach((it, idx) => {
      total += (it.vlTotal || 0);

      tbody.innerHTML += `
        <tr class="border-b">
          <td class="p-1 text-center font-bold">${it.item || idx + 1}</td>
          <td class="p-1"><input type="text" value="${it.objeto}" class="table-input" oninput="window.borealApp.atualizarItemDocMemoria(${idx}, 'objeto', this.value)"></td>
          <td class="p-1 text-center"><input type="number" value="${it.quant}" class="table-input text-center" oninput="window.borealApp.atualizarItemDocMemoria(${idx}, 'quant', this.value)"></td>
          <td class="p-1 text-center"><input type="text" value="${it.unid}" class="table-input text-center" oninput="window.borealApp.atualizarItemDocMemoria(${idx}, 'unid', this.value)"></td>
          <td class="p-1 text-right"><input type="number" step="0.01" value="${(it.vlUnitario || 0).toFixed(2)}" class="table-input text-right" oninput="window.borealApp.atualizarItemDocMemoria(${idx}, 'vlUnitario', this.value)"></td>
          <td class="p-1 text-right font-bold">R$ ${(it.vlTotal || 0).toFixed(2)}</td>
        </tr>
      `;

      htmlPreviewTab += `
        <tr>
          <td class="border border-slate-300 p-1 text-center font-bold">${it.item || idx + 1}</td>
          <td class="border border-slate-300 p-1">${it.objeto}</td>
          <td class="border border-slate-300 p-1 text-center">${it.quant}</td>
          <td class="border border-slate-300 p-1 text-center">${it.unid}</td>
          <td class="border border-slate-300 p-1 text-right">R$ ${(it.vlUnitario || 0).toFixed(2)}</td>
          <td class="border border-slate-300 p-1 text-right font-bold">R$ ${(it.vlTotal || 0).toFixed(2)}</td>
        </tr>
      `;
    });

    htmlPreviewTab += `
        </tbody>
        <tfoot class="bg-slate-50 font-bold border-t border-slate-400">
          <tr>
            <td colspan="5" class="border border-slate-300 p-1 text-right">VALOR GLOBAL DA PROPOSTA:</td>
            <td class="border border-slate-300 p-1 text-right text-emerald-800">R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
          </tr>
        </tfoot>
      </table>
    `;

    previewBox.innerHTML = htmlPreviewTab;
    const lblTotalCalc = document.getElementById("lbl-doc-total-calculado");
    const pvExtenso = document.getElementById("pv-doc-valor-extenso");
    if (lblTotalCalc) lblTotalCalc.textContent = "R$ " + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    if (pvExtenso) pvExtenso.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (Valor Global Proposto)`;
  },

  atualizarItemDocMemoria: function(idx, campo, val) {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc || !proc.itensProducao[idx]) return;

    if (campo === 'quant' || campo === 'vlUnitario') {
      proc.itensProducao[idx][campo] = parseFloat(val) || 0;
      proc.itensProducao[idx].vlTotal = (proc.itensProducao[idx].quant || 1) * (proc.itensProducao[idx].vlUnitario || 0);
    } else {
      proc.itensProducao[idx][campo] = val;
    }

    this.renderizarTabelaItensDocumento(proc);
  },

  adicionarLinhaTabelaDoc: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    if (!proc.itensProducao) proc.itensProducao = [];

    proc.itensProducao.push({
      item: proc.itensProducao.length + 1,
      objeto: "Novo item de serviço especializado",
      quant: 1,
      unid: "UN",
      vlUnitario: 1000.00,
      vlTotal: 1000.00,
      statusProducao: "aguardando_contrato"
    });

    this.renderizarTabelaItensDocumento(proc);
  },

  baixarDocWord: function() {
    const elemento = document.getElementById("box-preview-documento-oficial");
    if (!elemento) return;

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Documento Boreal</title>
      <style>
        body { font-family: 'Cambria', 'Georgia', serif; font-size: 10pt; line-height: 1.15; text-align: justify; }
        table { border-collapse: collapse; width: 100%; }
        td, th { border: 1px solid #777; padding: 4px; font-size: 9pt; }
      </style>
      </head>
      <body>
        ${elemento.innerHTML}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Documento_Oficial_Boreal_${new Date().toISOString().slice(0, 10)}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  salvarPropostaNoComercial: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;

    proc.propostaAnexada = {
      nome: `Proposta_Comercial_${proc.cliente.slice(0, 15).replace(/\s+/g, '_')}.pdf`,
      data: new Date().toLocaleDateString('pt-BR'),
      valor: proc.valorEstimado
    };

    this.salvarDadosLocais();
    this.renderizarRelatorioComercial();
    alert("Proposta Comercial formal gerada e vinculada à Matriz do Relatório Comercial com sucesso!");
  },

  // MÓDULO 5: ACESSO EXTERNO E GERAÇÃO DO RELATÓRIO DE SERVIÇOS ENTREGUES EM FOLHA TIMBRADA PDF
  renderizarPortalCliente: function(clienteId = null) {
    if (clienteId) this.clienteAtivoId = clienteId;
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId) || this.processosComerciais[0];
    if (!proc) return;

    const sel = document.getElementById("select-portal-cliente-logado");
    if (sel && sel.options.length === 0) {
      this.processosComerciais.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.cliente;
        if (p.id === this.clienteAtivoId) opt.selected = true;
        sel.appendChild(opt);
      });
    }

    const lbl = document.getElementById("lbl-portal-cliente-nome");
    if (lbl) lbl.textContent = `Relatórios Oficiais de Entrega: ${proc.cliente}`;

    const tbody = document.getElementById("tbody-portal-cliente-relatorios");
    if (!tbody) return;
    tbody.innerHTML = "";

    let count = 0;
    (proc.itensProducao || []).forEach((it, idx) => {
      (it.relatoriosAnexados || []).forEach(rel => {
        count++;
        tbody.innerHTML += `
          <tr class="hover:bg-slate-50 border-b">
            <td class="p-2.5 font-bold text-slate-800">${rel.nome}</td>
            <td class="p-2.5">${rel.data}</td>
            <td class="p-2.5">${it.objeto}</td>
            <td class="p-2.5 font-mono text-[#B48D3C] font-bold">${rel.hash}</td>
            <td class="p-2.5 text-center">
              <button onclick="window.borealApp.visualizarBaixarDocumentoUniversal('relatorio_entrega', '${proc.id}', ${idx})" class="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded font-bold text-xs flex items-center space-x-1 mx-auto shadow-sm">
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
                <span>Visualizar / Baixar PDF</span>
              </button>
            </td>
          </tr>
        `;
      });
    });

    if (count === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 italic">Nenhum relatório de entrega finalizado no momento para este contratante.</td></tr>`;
    }
    if (window.lucide) window.lucide.createIcons();
  },

  // GERAÇÃO DE RELATÓRIO DE SERVIÇOS ENTREGUES EM FOLHA TIMBRADA BOREAL (PDF / JANELA OFICIAL)
  gerarRelatorioEntregaPDFTimbrado: function(proc, itemIdx) {
    const item = (proc.itensProducao && proc.itensProducao[itemIdx]) ? proc.itensProducao[itemIdx] : null;
    const rel = item && item.relatoriosAnexados && item.relatoriosAnexados[0] ? item.relatoriosAnexados[0] : { hash: "BOREAL-AUTH-8821", data: new Date().toLocaleDateString('pt-BR') };

    const janela = window.open('', '_blank');
    if (!janela) {
      alert("Por favor, autorize pop-ups para visualizar o Relatório Oficial em PDF.");
      return;
    }

    const htmlTimbrado = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Relatório de Entrega de Serviços - Boreal ENGMED</title>
        <style>
          body { font-family: 'Cambria', 'Georgia', serif; font-size: 10pt; line-height: 1.25; margin: 30px; text-align: justify; color: #1e293b; }
          .header { border-bottom: 2px solid #B48D3C; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
          .logo-box { display: flex; align-items: center; gap: 10px; }
          .logo-b { width: 45px; height: 45px; background: #4A4A4A; color: #B48D3C; border: 1px solid #B48D3C; display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: bold; border-radius: 4px; }
          .logo-text h2 { margin: 0; font-size: 22px; color: #B48D3C; font-weight: bold; }
          .logo-text h3 { margin: 0; font-size: 13px; color: #64748b; }
          .title { text-align: center; font-size: 13pt; font-weight: bold; margin: 20px 0 10px 0; text-transform: uppercase; color: #0f172a; }
          .box-info { border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px; margin-bottom: 15px; background-color: #f8fafc; font-size: 9.5pt; }
          .tributos { background: #fefce8; border: 1px solid #fef08a; padding: 10px; font-size: 9pt; border-radius: 4px; margin-top: 15px; }
          .signature { margin-top: 35px; border-top: 1px solid #cbd5e1; padding-top: 10px; }
          .hash-bar { margin-top: 25px; padding: 8px; border: 1px dashed #cbd5e1; background: #f1f5f9; font-size: 8.5pt; font-family: monospace; display: flex; justify-content: space-between; }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom: 20px; text-align: right;">
          <button onclick="window.print()" style="padding: 8px 16px; background-color: #B48D3C; color: white; border: none; font-weight: bold; border-radius: 4px; cursor: pointer;">Imprimir / Salvar em PDF</button>
        </div>

        <div class="header">
          <div class="logo-box">
            <div class="logo-b">B</div>
            <div class="logo-text">
              <h2>Boreal</h2>
              <h3>ENGMED LTDA</h3>
            </div>
          </div>
          <div style="text-align: right; font-size: 9pt; color: #64748b;">
            Paulínia - SP<br>
            CNPJ: 04.414.837/0001-38
          </div>
        </div>

        <div class="title">RELATÓRIO OFICIAL DE ENTREGA E ACEITE DE SERVIÇOS</div>

        <div class="box-info">
          <div><strong>CLIENTE CONTRATANTE:</strong> ${proc.cliente}</div>
          <div><strong>CONTRATO / PROCESSO:</strong> ${proc.numeroContrato || '038/2026-PMB'} (${proc.processo || 'Processo Administrativo'})</div>
          <div><strong>DATA DA ENTREGA:</strong> ${rel.data || new Date().toLocaleDateString('pt-BR')}</div>
          <div><strong>OBJETO DO SERVIÇO:</strong> ${item ? item.objeto : proc.objeto}</div>
          <div><strong>QUANTIDADE / UNIDADE:</strong> ${item ? item.quant + ' ' + item.unid : '1 UN'}</div>
        </div>

        <p>Atestamos para os devidos fins de direito e comprovação técnica que os serviços ocupacionais e de engenharia especificados acima foram devidamente concluídos, revisados e chancelados pelo Responsável Técnico, em estrita conformidade com as Normas Regulamentadoras do Ministério do Trabalho e Emprego (MTE) e com o respectivo Termo de Referência.</p>

        <!-- INSTRUÇÃO TRIBUTÁRIA EXCLUSIVA NO RELATÓRIO DE SERVIÇOS -->
        <div class="tributos">
          <strong>INSTRUÇÕES FISCAIS / TRIBUTÁRIAS (CÓDIGO TRIBUTÁRIO 17.09):</strong><br>
          Solicitamos a gentileza de informar, através do setor de pagamentos ou contabilidade, para os e-mails <strong>financeiro@boreal.eng.br</strong> ou <strong>contato@boreal.eng.br</strong>, quais as alíquotas de retenções tributárias adotadas por este órgão/empresa para emissão da Nota Fiscal referente ao código 17.09 (cujo ISS é recolhido pelo município da sede do prestador - Paulínia/SP).
        </div>

        <div class="signature">
          <div>Paulínia/SP, ${new Date().toLocaleDateString('pt-BR')}</div><br>
          <strong>Luiz Fernando Gomes de Jesus</strong><br>
          Sócio Gerente / Responsável Técnico<br>
          Boreal ENGMED Ltda • CREA-SP 5070159011<br>
          <span style="font-size: 8.5pt; color: #64748b;">Av. José Puccinelli, 130 - Paulínia - SP • Tel: (19) 99156-7153</span>
        </div>

        <div class="hash-bar">
          <span><strong>CHANCELA E CÓDIGO DE INTEGRIDADE:</strong> ${rel.hash}</span>
          <span>Autenticidade: https://valida.boreal.eng.br</span>
        </div>
      </body>
      </html>
    `;

    janela.document.write(htmlTimbrado);
    janela.document.close();
  },

  // MODAL RELATÓRIO GERAL CONSOLIDADO
  abrirModalRelatorioConsolidado: function() {
    const modal = document.getElementById("modal-consolidado");
    const container = document.getElementById("box-impressao-consolidada");
    if (!modal || !container) return;

    let totalGeral = 0;
    let html = `
      <table class="w-full text-xs text-left border">
        <thead class="bg-slate-100 font-bold border-b">
          <tr>
            <th class="p-2">Cliente</th>
            <th class="p-2">Edital</th>
            <th class="p-2">Contrato</th>
            <th class="p-2">Status</th>
            <th class="p-2 text-right">Valor Estimado</th>
          </tr>
        </thead>
        <tbody>
    `;

    this.processosComerciais.forEach(p => {
      totalGeral += (p.valorEstimado || 0);
      html += `
        <tr class="border-b">
          <td class="p-2 font-bold">${p.cliente}</td>
          <td class="p-2">${p.edital}</td>
          <td class="p-2">${p.numeroContrato || 'Pendente'}</td>
          <td class="p-2 uppercase font-semibold text-slate-700">${p.statusProcesso}</td>
          <td class="p-2 text-right font-bold text-emerald-700">R$ ${(p.valorEstimado || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
        </tr>
      `;
    });

    html += `
        </tbody>
        <tfoot class="bg-slate-50 font-bold">
          <tr>
            <td colspan="4" class="p-2 text-right">TOTAL CONSOLIDADO:</td>
            <td class="p-2 text-right text-emerald-800 text-sm">R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
          </tr>
        </tfoot>
      </table>
    `;

    container.innerHTML = html;
    modal.classList.remove("hidden");
  },

  fecharModalRelatorioConsolidado: function() {
    const modal = document.getElementById("modal-consolidado");
    if (modal) modal.classList.add("hidden");
  },

  imprimirRelatorioConsolidado: function() {
    window.print();
  },

  salvarDadosGlobal: function() {
    this.salvarDadosLocais();
    alert("Todos os dados do sistema foram salvos com sucesso!");
  },

  consultarCEPViaCEP: async function(cepLimpo) {
    const cep = (cepLimpo || "").replace(/\D/g, '');
    if (cep.length !== 8) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await res.json();
      if (!dados.erro) {
        const campoEnd = document.getElementById("ct-endereco");
        if (campoEnd) campoEnd.value = `${dados.logradouro}, - ${dados.bairro}, ${dados.localidade} - ${dados.uf}`;
      }
    } catch (e) {
      console.warn("Erro ao buscar CEP:", e);
    }
  },

  consultarCNPJBrasilAPI: async function(cnpjLimpo) {
    const cnpj = (cnpjLimpo || "").replace(/\D/g, '');
    if (cnpj.length !== 14) return;
    try {
      const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
      const dados = await res.json();
      if (dados && dados.razao_social) {
        const campoCli = document.getElementById("ct-cliente");
        if (campoCli && (!campoCli.value || campoCli.value.includes("NOVO"))) {
          campoCli.value = dados.razao_social;
        }
      }
    } catch (e) {
      console.warn("Erro ao buscar CNPJ:", e);
    }
  },

  configurarParserMicrofoneSequencial: function() {}
};

// INICIALIZAÇÃO AUTOMÁTICA AO CARREGAR O DOCUMENTO
document.addEventListener("DOMContentLoaded", () => {
  window.borealApp.init();
});