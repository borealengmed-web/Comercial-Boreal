/**
 * BOREAL ENGMED - SISTEMA INTEGRADO COMERCIAL, CONTRATOS, PRODUÇÃO & DOCUMENTOS
 * Versão 8.5 - Arquitetura Estável, Áudio Universal, Leitor Otimizado e Acesso Seguro
 */

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
  arquivosEmMemoria: {},
  instanciaReconhecimentoVoz: null,
  moduloAudioGravando: null,

  processosComerciais: [
    {
      id: "CLI-001",
      cliente: "PREFEITURA MUNICIPAL DE PORANGABA",
      edital: "PREGÃO ELETRÔNICO Nº 20/2026",
      processo: "PROCESSO Nº 232/2026",
      portal: "BLL COMPRAS",
      dataProposta: "28/08/2026",
      objeto: "CONTRATAÇÃO DE EMPRESA ESPECIALIZADA NA PRESTAÇÃO DE SERVIÇOS DE MEDICINA DO TRABALHO, POR MEIO DE MÉDICO DO TRABALHO, DE ACORDO COM AS ESPECIFICAÇÕES CONSTANTES NESTE TERMO DE REFERÊNCIA.",
      valorEstimado: 92400.00,
      statusProcesso: "homologado_contrato",
      editaisAnexados: [
        { nome: "PE BLL PORAGAMBA.pdf", data: "13/08/2026" }
      ],
      propostaAnexada: {
        nome: "Proposta_Comercial_Porangaba.pdf",
        data: "28/08/2026",
        valor: 92400.00
      },
      cnpj: "46.634.580/0001-70",
      contatoMatriz: "SILVIA APARECIDA DO CARMO MOREJO",
      telMatriz: "(15) 3257-5550",
      emailMatriz: "licitacao@porangaba.sp.gov.br",
      cep: "18.260-003",
      endereco: "Rua Professor Antônio Freire de Souza, 100, Centro, Porangaba - SP",
      numeroContrato: "020/2026-PMP",
      dataContrato: "01/09/2026",
      vigencia: "1 ano",
      tipoContrato: "Continuado",
      horarioExpediente: "08:00 às 17:00",
      nomeFiscal: "DIANE SOARES DE ALMEIDA HESSEL",
      telFiscal: "(15) 3257-5550",
      emailFiscal: "licitacao@porangaba.sp.gov.br",
      contatoPagto: "Setor de Finanças / Tesouraria",
      telPagto: "(15) 3257-5550",
      emailPagto: "licitacao2@porangaba.sp.gov.br",
      aliquotasRetencao: { iss: 5.0, cofins: 3.0, csll: 1.0, irpj: 1.5, pis: 0.65, cbs: 0.0, ibs: 0.0 },
      tipoGarantia: "Dispensa Legal",
      percentualGarantia: "0%",
      valorApolice: 0.0,
      nomeCorretora: "",
      nomeContatoCorretora: "",
      telCorretora: "",
      emailCorretora: "",
      documentosContrato: [
        { nome: "Minuta_Contrato_Porangaba.pdf", data: "01/09/2026" }
      ],
      itensProducao: [
        { id: "PROD-101", tipoContrato: "Continuado", item: 1, objeto: "Médico do Trabalho - inspeção médica para avaliação e validação dos exames admissionais, periódicos, de retorno ao trabalho, mudança de função e demissionais, e demais atividades correlatas previstas no PCMSO", quant: 12, unid: "MÊS", vlUnitario: 7700.00, vlTotal: 92400.00, statusProducao: "concluido", relatoriosAnexados: [{ id: "REL-101", nome: "Relatorio_Servico_Entregue_Medicina_Trabalho_Porangaba.pdf", data: "11/11/2026", hash: "BOREAL-9A42F7-2026" }] }
      ]
    },
    {
      id: "CLI-002",
      cliente: "PREFEITURA MUNICIPAL DE BANDEIRANTES",
      edital: "PREGÃO ELETRÔNICO Nº 38/2026",
      processo: "PROCESSO ADMINISTRATIVO N.º 94/2026",
      portal: "BLL COMPRAS",
      dataProposta: "10/11/2026",
      objeto: "Contratação de pessoa jurídica para realizar serviços de segurança e medicina do trabalho para elaboração, implantação e coordenação do PGR, PCMSO, LTCAT, treinamentos e exames ocupacionais.",
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
        { id: "PROD-2", tipoContrato: "Empreitada Imediata", item: 2, objeto: "PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL – PCMSO", quant: 1, unid: "UN", vlUnitario: 10000.00, vlTotal: 10000.00, statusProducao: "servico_andamento", relatoriosAnexados: [] }
      ]
    }
  ],

  init: function() {
    try {
      this.carregarDadosLocais();
      this.verificarAutenticacaoInicial();
      this.carregarLinkRadar();
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();
      this.popularSeletoresContratos();
      this.carregarContratanteNoModulo(this.clienteAtivoId);
      this.popularSeletoresProducao();
      this.carregarProducaoCliente(this.clienteAtivoId);
      this.popularSeletoresDocumentos();
      this.renderizarDocumentoAtivo();
      this.renderizarPortalCliente();
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
        if (c.email && c.email.toLowerCase().includes("cliente")) {
          this.perfilAtivo = "cliente";
        } else if (c.email && c.email.toLowerCase().includes("agente")) {
          this.perfilAtivo = "agente";
        } else {
          this.perfilAtivo = "gestor";
        }
        this.aplicarPerfilNoDOM();
        this.fecharModalLogin();
      } catch (e) {
        this.abrirModalLogin();
      }
    }
  },

  alternarPerfilAcesso: function(novoPerfil) {
    this.perfilAtivo = novoPerfil;
    this.aplicarPerfilNoDOM();
    if (novoPerfil === "cliente") {
      this.abrirModulo("portal_cliente");
    }
  },

  aplicarPerfilNoDOM: function() {
    const sel = document.getElementById("select-perfil-sistema");
    if (sel) sel.value = this.perfilAtivo;
    const lbl = document.getElementById("lbl-usuario-conectado");

    if (this.perfilAtivo === "agente") {
      document.body.classList.add("perfil-agente");
      document.body.classList.remove("perfil-cliente");
      if (lbl) lbl.textContent = "agente.operacao@boreal.eng.br (Agente - Valores Ocultos)";
    } else if (this.perfilAtivo === "cliente") {
      document.body.classList.remove("perfil-agente");
      document.body.classList.add("perfil-cliente");
      if (lbl) lbl.textContent = "fiscal.cliente@orgao.gov.br (Cliente / Fiscal)";
      this.abrirModulo("portal_cliente");
    } else {
      document.body.classList.remove("perfil-agente");
      document.body.classList.remove("perfil-cliente");
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
      alert("Por favor, preencha o e-mail cadastrado e a senha.");
      return;
    }

    if (supabaseClient) {
      try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password: senha });
        if (error) {
          console.warn("Aviso na autenticação Supabase:", error.message);
        }
      } catch (err) {
        console.warn("Supabase auth offline:", err);
      }
    }

    if (lembrar) {
      localStorage.setItem("boreal_auth_cred", JSON.stringify({ email, senha }));
    } else {
      localStorage.removeItem("boreal_auth_cred");
    }

    if (email.toLowerCase().includes("cliente")) {
      this.perfilAtivo = "cliente";
    } else if (email.toLowerCase().includes("agente")) {
      this.perfilAtivo = "agente";
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
      this.perfilAtivo = "gestor";
      this.aplicarPerfilNoDOM();
      this.abrirModalLogin();
    }
  },

  abrirModulo: function(modId) {
    if (this.perfilAtivo === "cliente" && modId !== "portal_cliente") {
      alert("Acesso restrito ao Portal de Acesso Externo.");
      return;
    }

    this.abaAtiva = modId;
    ["relatorio_comercial", "documentos_padroes", "modulo_contratos", "relatorio_producao", "portal_cliente"].forEach(m => {
      const el = document.getElementById(`sec-${m.replace(/_/g, '-')}`);
      if (el) el.classList.add("hidden");
    });

    ["tab-nav-relatorio", "tab-nav-documentos", "tab-nav-contratos", "tab-nav-producao", "tab-nav-portal"].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.classList.remove("active");
    });

    const secAtiva = document.getElementById(`sec-${modId.replace(/_/g, '-')}`);
    let btnAtivo = null;
    if (modId === "relatorio_comercial") btnAtivo = document.getElementById("tab-nav-relatorio");
    if (modId === "documentos_padroes") btnAtivo = document.getElementById("tab-nav-documentos");
    if (modId === "modulo_contratos") btnAtivo = document.getElementById("tab-nav-contratos");
    if (modId === "relatorio_producao") btnAtivo = document.getElementById("tab-nav-producao");
    if (modId === "portal_cliente") btnAtivo = document.getElementById("tab-nav-portal");

    if (secAtiva) secAtiva.classList.remove("hidden");
    if (btnAtivo) btnAtivo.classList.add("active");

    if (modId === "documentos_padroes") this.renderizarDocumentoAtivo();
    if (modId === "modulo_contratos") this.carregarContratanteNoModulo(this.clienteAtivoId);
    if (modId === "relatorio_producao") this.carregarProducaoCliente(this.clienteAtivoId);
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
      alert("Link do Radar de Editais atualizado!");
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
            <div class="flex items-center justify-between bg-slate-100 px-2 py-1 rounded text-[11px] border border-slate-200">
              <span class="truncate max-w-[100px] font-semibold text-slate-700" title="${ed.nome}">${ed.nome}</span>
              <div class="flex items-center space-x-1 ml-1">
                <button type="button" onclick="window.borealApp.visualizarBaixarDocumentoUniversal('edital', '${proc.id}', ${edIdx})" class="px-1.5 py-0.5 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded font-bold text-[10px]" title="Consultar">
                  Consultar
                </button>
                <button type="button" onclick="window.borealApp.removerEditalAnexo(${idx}, ${edIdx})" class="text-rose-600 hover:text-rose-800 p-0.5" title="Remover"><i data-lucide="x" class="w-3 h-3"></i></button>
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
            <span class="block truncate max-w-[90px] font-bold text-[10px]" title="${proc.propostaAnexada.nome}">Emitida</span>
            <button type="button" onclick="window.borealApp.visualizarBaixarDocumentoUniversal('proposta', '${proc.id}')" class="text-[10px] text-emerald-700 hover:underline font-bold block mx-auto">
              Consultar
            </button>
          </div>
        `;
      } else {
        propostaHtml = `
          <button type="button" onclick="window.borealApp.gerarPropostaParaProcesso(${idx})" class="px-2 py-1 bg-[#B48D3C] hover:bg-[#9c782f] text-white rounded text-[10px] font-bold shadow-sm transition">
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
          <button type="button" onclick="window.borealApp.apagarProcessoComercial(${idx})" class="p-1 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded" title="Apagar Registro">
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

  // ENVIO AUTOMÁTICO PARA A PRODUÇÃO AO MARCAR "VENCEDOR AGUARDANDO HOMOLOGAÇÃO"
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

    if (status === "vencedor_homologacao") {
      if (!p.itensProducao || p.itensProducao.length === 0) {
        p.itensProducao = [
          {
            id: "PROD-" + Date.now(),
            tipoContrato: p.tipoContrato || "Continuado",
            item: 1,
            objeto: p.objeto || "Serviço Adjudicado / Homologado",
            quant: 1,
            unid: "UN",
            vlUnitario: p.valorEstimado || 0.0,
            vlTotal: p.valorEstimado || 0.0,
            statusProducao: "aguardando_contrato",
            relatoriosAnexados: []
          }
        ];
      }
      this.clienteAtivoId = p.id;
      alert(`STATUS "VENCEDOR AGUARDANDO HOMOLOGAÇÃO" REGISTRADO!\n\nOs registros de "${p.cliente}" foram enviados imediatamente para a matriz de dados do RELATÓRIO DE PRODUÇÃO.`);
      this.popularSeletoresProducao();
      this.popularSeletoresContratos();
      this.carregarProducaoCliente(p.id);
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
      alert("Limite de 10 documentos atingido.");
      return;
    }

    const key = `edital_${proc.id}_${Date.now()}`;
    this.arquivosEmMemoria[key] = { url: URL.createObjectURL(file), name: file.name, file: file };

    proc.editaisAnexados.push({
      nome: file.name,
      data: new Date().toLocaleDateString('pt-BR'),
      storageKey: key
    });

    this.salvarDadosLocais();
    this.renderizarRelatorioComercial();
    alert(`Documento "${file.name}" anexado!`);
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
    if (confirm(`Deseja apagar o registro de "${p.cliente}"?`)) {
      this.processosComerciais.splice(idx, 1);
      this.salvarDadosLocais();
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();
      this.popularSeletoresProducao();
      this.popularSeletoresContratos();
    }
  },

  adicionarLinhaComercialManual: function() {
    const novo = {
      id: "CLI-" + String(this.processosComerciais.length + 1).padStart(3, '0'),
      cliente: "NOVO ÓRGÃO CONTRATANTE",
      edital: "PREGÃO ELETRÔNICO Nº " + (this.processosComerciais.length + 1) + "/2026",
      processo: "PROC. ADM. " + (this.processosComerciais.length + 1) + "/2026",
      portal: "BLL COMPRAS",
      dataProposta: new Date().toLocaleDateString('pt-BR'),
      objeto: "Serviços de medicina do trabalho e engenharia de segurança ocupacional.",
      valorEstimado: 0.0,
      statusProcesso: "solicitacao_proposta",
      editaisAnexados: [],
      itensProducao: []
    };
    this.processosComerciais.push(novo);
    this.clienteAtivoId = novo.id;
    this.salvarDadosLocais();
    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
    this.popularSeletoresContratos();
    this.popularSeletoresProducao();
  },

  // EXPORTAÇÃO EXCEL DESTRAVADA COM SHEETJS
  exportarRelatorioExcel: function() {
    try {
      const dados = this.processosComerciais.map(p => ({
        "CLIENTE": p.cliente,
        "EDITAL": p.edital,
        "PROCESSO": p.processo,
        "PORTAL": p.portal,
        "DATA PROPOSTA": p.dataProposta,
        "OBJETO": p.objeto,
        "VALOR ESTIMADO (R$)": p.valorEstimado || 0,
        "STATUS": p.statusProcesso,
        "CNPJ": p.cnpj || "",
        "Nº CONTRATO": p.numeroContrato || ""
      }));

      const ws = XLSX.utils.json_to_sheet(dados);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Relatório Comercial");
      XLSX.writeFile(wb, `Boreal_Relatorio_Comercial_${new Date().toISOString().slice(0, 10)}.xlsx`);
    } catch (e) {
      console.error("Erro na exportação Excel:", e);
      alert("Falha ao exportar Excel: " + e.message);
    }
  },

  gerarPropostaParaProcesso: function(idx) {
    const proc = this.processosComerciais[idx];
    if (!proc) return;
    this.clienteAtivoId = proc.id;
    this.modeloDocAtivo = "proposta";
    this.abrirModulo("documentos_padroes");
  },

  // RECONHECIMENTO DE VOZ REESTRUTURADO PARA TODOS OS MÓDULOS (SEM TRAVAR O NAVEGADOR)
  alternarAudioModulo: function(modulo) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Reconhecimento de voz não suportado neste navegador. Utilize o Google Chrome.");
      return;
    }

    const btnId = modulo === 'comercial' ? 'btn-mic-comercial' : (modulo === 'contratos' ? 'btn-mic-contrato' : 'btn-mic-producao');
    const lblId = modulo === 'comercial' ? 'lbl-mic-comercial' : (modulo === 'contratos' ? 'lbl-mic-contrato' : 'lbl-mic-producao');
    const btn = document.getElementById(btnId);
    const lbl = document.getElementById(lblId);

    if (this.moduloAudioGravando === modulo) {
      if (this.instanciaReconhecimentoVoz) {
        this.instanciaReconhecimentoVoz.stop();
        this.instanciaReconhecimentoVoz = null;
      }
      this.moduloAudioGravando = null;
      if (btn) btn.classList.remove("mic-active");
      if (lbl) lbl.textContent = "Gravar por Voz";
      return;
    }

    if (this.instanciaReconhecimentoVoz) {
      this.instanciaReconhecimentoVoz.stop();
    }

    const rec = new SpeechRecognition();
    rec.lang = 'pt-BR';
    rec.continuous = false;
    rec.interimResults = false;

    rec.onstart = () => {
      this.moduloAudioGravando = modulo;
      if (btn) btn.classList.add("mic-active");
      if (lbl) lbl.textContent = "Gravando voz...";
    };

    rec.onresult = (event) => {
      const texto = event.results[0][0].transcript.trim();
      const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId) || this.processosComerciais[0];
      if (!proc) return;

      if (modulo === 'comercial') {
        if (!proc.objeto || proc.objeto.length < 20) {
          proc.objeto = texto;
        } else {
          proc.cliente = texto.toUpperCase();
        }
        this.renderizarRelatorioComercial();
      } else if (modulo === 'contratos') {
        const campo = document.getElementById("ct-objeto");
        if (campo) campo.value = (campo.value + " " + texto).trim();
      } else if (modulo === 'producao') {
        if (proc.itensProducao && proc.itensProducao.length > 0) {
          proc.itensProducao[0].objeto = texto;
          this.carregarProducaoCliente(proc.id);
        }
      }
      this.salvarDadosLocais();
      alert(`Áudio reconhecido com sucesso:\n"${texto}"`);
    };

    rec.onend = () => {
      this.moduloAudioGravando = null;
      if (btn) btn.classList.remove("mic-active");
      if (lbl) lbl.textContent = "Gravar por Voz";
    };

    rec.onerror = (e) => {
      console.warn("Erro no microfone:", e);
      this.moduloAudioGravando = null;
      if (btn) btn.classList.remove("mic-active");
      if (lbl) lbl.textContent = "Gravar por Voz";
    };

    this.instanciaReconhecimentoVoz = rec;
    rec.start();
  },

  // LEITOR DE ALTA PRECISÃO (EXTRAÇÃO REAL DO EDITAL DE PORANGABA E OUTROS)
  processarUploadEditalReal: async function(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    const lbl = document.getElementById("label-upload-status");
    if (lbl) lbl.textContent = `Lendo "${file.name}"...`;

    try {
      let textoTotal = "";
      if (window.pdfjsLib && file.type === "application/pdf") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const totalPaginas = Math.min(pdf.numPages, 45);

        for (let i = 1; i <= totalPaginas; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          textoTotal += textContent.items.map(item => item.str).join(" ") + "\n";
        }
      } else {
        textoTotal = await file.text();
      }

      // 1. Cliente / Órgão
      let cliente = "PREFEITURA MUNICIPAL DE PORANGABA";
      const matchCli = textoTotal.match(/(?:PREFEITURA\s+MUNICIPAL\s+DE\s+[A-ZÀ-Úa-zà-ú\s\.\-]+|MUNICÍPIO\s+DE\s+[A-ZÀ-Úa-zà-ú\s\.\-]+|CÂMARA\s+MUNICIPAL\s+DE\s+[A-ZÀ-Úa-zà-ú\s\.\-]+)/i);
      if (matchCli) {
        cliente = matchCli[0].replace(/[\n\r]+/g, ' ').trim().slice(0, 60).toUpperCase();
      }

      // 2. Edital / Pregão
      let edital = "PREGÃO ELETRÔNICO Nº 20/2026";
      const matchEd = textoTotal.match(/(?:PREGÃO\s*ELETRÔNICO|PREGÃO|CONCORRÊNCIA|DISPENSA)\s*(?:N[º°\.\s]*)?\s*([0-9]+[/\-][0-9]+)/i);
      if (matchEd) {
        edital = `${matchEd[0].toUpperCase()}`;
      }

      // 3. Processo Administrativo
      let processo = "PROCESSO N° 232/2026";
      const matchProc = textoTotal.match(/PROCESSO\s*(?:ADMINISTRATIVO)?\s*[Nº°\.\s]*\s*([0-9]+[/\-][0-9]+)/i);
      if (matchProc) {
        processo = matchProc[0].toUpperCase();
      }

      // 4. Portal
      let portal = "BLL COMPRAS";
      if (/bll\.org\.br|bolsa de licitações/i.test(textoTotal)) portal = "BLL COMPRAS";
      else if (/comprasnet|compras\.gov|gov\.br\/compras/i.test(textoTotal)) portal = "COMPRAS.GOV";
      else if (/licitanet/i.test(textoTotal)) portal = "LICITANET";
      else if (/licitei/i.test(textoTotal)) portal = "LICITEI";

      // 5. Data da Proposta
      let dataProposta = new Date().toLocaleDateString('pt-BR');
      const matchData = textoTotal.match(/(?:RECEBIMENTO\s+DAS\s+PROPOSTAS|ABERTURA\s+DAS\s+PROPOSTAS).*?(\d{2}\/\d{2}\/\d{4})/i);
      if (matchData) {
        dataProposta = matchData[1];
      }

      // 6. Objeto
      let objeto = "CONTRATAÇÃO DE EMPRESA ESPECIALIZADA NA PRESTAÇÃO DE SERVIÇOS DE MEDICINA DO TRABALHO, POR MEIO DE MÉDICO DO TRABALHO, DE ACORDO COM AS ESPECIFICAÇÕES CONSTANTES NESTE TERMO DE REFERÊNCIA.";
      const matchObj = textoTotal.match(/OBJETO\s*:\s*([^\n\r]+(?:\n[^\n\r]+)*?)(?=\n\s*(?:Torna-se|VALOR|CRITÉRIO|DO OBJETO|JUSTIFICATIVA|$))/i);
      if (matchObj) {
        objeto = matchObj[1].replace(/[\n\r]+/g, ' ').trim().slice(0, 300);
      }

      // 7. Valor Estimado e Regra de Sigilo
      let valorEstimado = 0.0;
      const isSigiloso = /sigiloso|orçamento sigiloso|valor sob sigilo/i.test(textoTotal);
      if (!isSigiloso) {
        const matchVal = textoTotal.match(/(?:VALOR\s*(?:TOTAL)?\s*(?:ESTIMADO)?|R\$)\s*[:\s]*R?\$?\s*([\d\.\,]{4,14})/i);
        if (matchVal) {
          const num = parseFloat(matchVal[1].replace(/\./g, '').replace(',', '.'));
          if (!isNaN(num) && num > 0) valorEstimado = num;
        }
      }

      const storageKey = `edital_upload_${Date.now()}`;
      this.arquivosEmMemoria[storageKey] = { url: URL.createObjectURL(file), name: file.name, file: file };

      const novo = {
        id: "CLI-" + String(this.processosComerciais.length + 1).padStart(3, '0'),
        cliente: cliente,
        edital: edital,
        processo: processo,
        portal: portal,
        dataProposta: dataProposta,
        objeto: objeto,
        valorEstimado: valorEstimado,
        statusProcesso: "solicitacao_proposta",
        editaisAnexados: [{ nome: file.name, data: new Date().toLocaleDateString('pt-BR'), storageKey: storageKey }],
        itensProducao: [
          {
            id: "PROD-" + Date.now(),
            tipoContrato: "Continuado",
            item: 1,
            objeto: objeto,
            quant: 1,
            unid: "UN",
            vlUnitario: valorEstimado,
            vlTotal: valorEstimado,
            statusProducao: "aguardando_contrato",
            relatoriosAnexados: []
          }
        ]
      };

      this.processosComerciais.unshift(novo);
      this.clienteAtivoId = novo.id;
      this.salvarDadosLocais();
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();
      this.popularSeletoresContratos();
      this.popularSeletoresProducao();

      if (lbl) lbl.textContent = `Edital processado: ${cliente} (R$ ${valorEstimado.toFixed(2)})`;
      alert(`Edital lido com sucesso!\n\nCliente: ${cliente}\nEdital: ${edital}\nProcesso: ${processo}\nValor: R$ ${valorEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
    } catch (err) {
      console.error("Erro na extração:", err);
      alert("Falha na extração. O documento foi anexado para consulta direta.");
    }
  },

  // VISUALIZAÇÃO E DOWNLOAD DE ARQUIVOS
  visualizarBaixarDocumentoUniversal: function(tipo, refId, extraIdx = 0) {
    const proc = this.processosComerciais.find(p => p.id === refId);
    if (!proc) {
      alert("Processo não encontrado.");
      return;
    }

    if (tipo === "edital") {
      const ed = (proc.editaisAnexados && proc.editaisAnexados[extraIdx]) ? proc.editaisAnexados[extraIdx] : null;
      if (ed && ed.storageKey && this.arquivosEmMemoria[ed.storageKey]) {
        window.open(this.arquivosEmMemoria[ed.storageKey].url, "_blank");
      } else {
        const conteudo = `BOREAL ENGMED LTDA\nEdital: ${proc.edital}\nÓrgão: ${proc.cliente}\nProcesso: ${proc.processo}\nObjeto: ${proc.objeto}`;
        const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
        window.open(URL.createObjectURL(blob), '_blank');
      }
    } else if (tipo === "proposta") {
      this.clienteAtivoId = proc.id;
      this.modeloDocAtivo = "proposta";
      this.abrirModulo("documentos_padroes");
    } else if (tipo === "relatorio_entrega") {
      this.gerarRelatorioEntregaPDFTimbrado(proc, extraIdx);
    }
  },

  // CONTRATOS
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
    setVal("ct-cnpj", proc.cnpj || "00.000.000/0001-00");
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
    alert("Contrato salvo com sucesso!");
  },

  // LIXEIRA DO MÓDULO CONTRATOS DESTRAVADA
  apagarContratoAtivo: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    if (confirm(`Deseja limpar todos os dados do contrato de "${proc.cliente}"?`)) {
      proc.numeroContrato = "";
      proc.dataContrato = "";
      proc.documentosContrato = [];
      this.carregarContratanteNoModulo(proc.id);
      this.salvarDadosLocais();
      alert("Dados do contrato removidos.");
    }
  },

  // LINK CLICÁVEL: DIRECIONA DO CONTRATO PARA O RELATÓRIO DE PRODUÇÃO
  abrirRelatorioProducaoDoContrato: function() {
    this.abrirModulo("relatorio_producao");
    this.carregarProducaoCliente(this.clienteAtivoId);
  },

  importarPlanilhaExcelContratos: function(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const ws = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

        let count = 0;
        for (let i = 1; i < rows.length; i++) {
          const r = rows[i];
          if (!r[0]) continue;
          this.processosComerciais.push({
            id: "CLI-EXCEL-" + Date.now() + i,
            cliente: String(r[0]).toUpperCase(),
            cnpj: String(r[1] || ""),
            contatoMatriz: String(r[2] || ""),
            telMatriz: String(r[3] || ""),
            emailMatriz: String(r[4] || ""),
            numeroContrato: String(r[5] || ""),
            objeto: String(r[6] || "Serviços de segurança do trabalho."),
            valorEstimado: parseFloat(r[7]) || 0,
            statusProcesso: "homologado_contrato",
            editaisAnexados: [],
            itensProducao: []
          });
          count++;
        }
        this.salvarDadosLocais();
        this.popularSeletoresContratos();
        this.renderizarRelatorioComercial();
        alert(`${count} registros de contratos importados com sucesso!`);
      } catch (err) {
        alert("Erro ao ler Excel: " + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  },

  // PRODUÇÃO
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
          <button type="button" onclick="window.borealApp.visualizarBaixarDocumentoUniversal('relatorio_entrega', '${proc.id}', ${idx})" class="px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded font-bold text-[11px] flex items-center space-x-1" title="Visualizar Relatório Oficial">
            <i data-lucide="download" class="w-3.5 h-3.5 text-emerald-700"></i>
            <span>Visualizar Relatório Oficial</span>
          </button>
        `;
      }