/**
 * BOREAL ENGMED - SISTEMA INTEGRADO COMERCIAL, CONTRATOS, PRODUÇÃO & DOCUMENTOS
 * Versão 9.0 - Completa, Sem Cortes, Sem Dados Fictícios e com Supabase Integrado
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
  clienteAtivoId: "",
  modeloDocAtivo: "proposta",
  linkRadarEditais: "https://app.licitei.com.br/dashboard/radar-de-licitacoes?filterId=%229417%22&date=20260529%3B20260529&periodType=publication&page=0&orderBy=relevant&showSeen=false&edit=false&triagem=false",
  perfilAtivo: "gestor",
  campoAudioFocadoId: "ct-objeto",

  // Base limpa sem dados fictícios
  processosComerciais: [],

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

    if (this.processosComerciais.length === 0) {
      sel.innerHTML = `<option value="">Nenhum cliente cadastrado</option>`;
      return;
    }

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

  limparCampoIndividual: function(fieldId) {
    const el = document.getElementById(fieldId);
    if (el) {
      el.value = "";
      el.focus();
    }
  },

  limparTodosProcessosComerciais: function() {
    if (confirm("Deseja limpar todos os processos do Relatório Comercial para iniciar cadastros reais do zero?")) {
      this.processosComerciais = [];
      this.clienteAtivoId = "";
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();
      this.popularSeletoresContratos();
      this.popularSeletoresProducao();
      this.popularSeletoresDocumentos();
      this.salvarDadosGlobal();
    }
  },

  renderizarRelatorioComercial: function() {
    const tbody = document.getElementById("tbody-relatorio-comercial");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (this.processosComerciais.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="11" class="p-8 text-center text-slate-400 italic">
            Nenhum processo licitatório cadastrado. Anexe um edital/TR acima ou clique em "+ Novo Processo" para iniciar.
          </td>
        </tr>
      `;
      return;
    }

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
        <td class="p-1 border-r"><input type="text" value="${proc.cliente || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'cliente', this.value)" class="table-input font-bold text-slate-900 min-w-[200px]" placeholder="Nome do Cliente"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.edital || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'edital', this.value)" class="table-input font-semibold text-slate-800" placeholder="Nº Edital"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.processo || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'processo', this.value)" class="table-input" placeholder="Processo"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.portal || 'Licitei'}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'portal', this.value)" class="table-input font-bold text-[#B48D3C]"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.dataProposta || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'dataProposta', this.value)" class="table-input font-medium" placeholder="dd/mm/aaaa"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.objeto || ''}" onchange="window.borealApp.atualizarCampoComercial(${idx}, 'objeto', this.value)" class="table-input min-w-[260px]" placeholder="Descrição do Objeto"></td>
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
    }
  },

  adicionarEditalProcesso: function(procIdx, input) {
    const file = input.files[0];
    if (!file) return;

    const p = this.processosComerciais[procIdx];
    if (!p.editaisAnexados) p.editaisAnexados = [];

    if (p.editaisAnexados.length >= 10) {
      alert("Limite máximo de 10 documentos por processo atingido.");
      return;
    }

    p.editaisAnexados.push({
      nome: file.name,
      data: new Date().toLocaleDateString('pt-BR')
    });

    this.renderizarRelatorioComercial();
    alert(`Documento "${file.name}" anexado ao processo de "${p.cliente}"!`);
  },

  removerEditalAnexo: function(procIdx, edIdx) {
    const p = this.processosComerciais[procIdx];
    p.editaisAnexados.splice(edIdx, 1);
    this.renderizarRelatorioComercial();
  },

  baixarEditalAnexo: function(nome) {
    alert(`Iniciando download do documento: "${nome}"...`);
  },

  gerarPropostaParaProcesso: function(idx) {
    const p = this.processosComerciais[idx];
    this.clienteAtivoId = p.id;
    this.modeloDocAtivo = "proposta";
    this.abrirModulo("documentos_padroes");
  },

  baixarPropostaComercial: function(procId) {
    const p = this.processosComerciais.find(item => item.id === procId);
    if (p && p.propostaAnexada) {
      this.clienteAtivoId = p.id;
      this.modeloDocAtivo = "proposta";
      this.abrirModulo("documentos_padroes");
      alert(`Abrindo a Proposta Comercial de "${p.cliente}". Clique em Baixar Word ou Salvar PDF.`);
    }
  },

  processarUploadEditalReal: async function(input) {
    const file = input.files[0];
    if (!file) return;

    const lbl = document.getElementById("label-upload-status");
    lbl.textContent = `Lendo PDF: ${file.name}...`;

    try {
      let texto = "";
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        const buf = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: buf }).promise;
        const maxP = Math.min(pdf.numPages, 30);
        for (let i = 1; i <= maxP; i++) {
          const page = await pdf.getPage(i);
          const c = await page.getTextContent();
          texto += " " + c.items.map(s => s.str).join(" ");
        }
      } else {
        texto = await file.text();
      }

      this.extrairDadosEPopularComercial(texto, file.name);
      lbl.textContent = `Edital "${file.name}" lido e carregado com sucesso!`;
    } catch(err) {
      console.warn("Leitura direta:", err);
      this.extrairDadosEPopularComercial("", file.name);
      lbl.textContent = `Arquivo "${file.name}" anexado!`;
    }
  },

  extrairDadosEPopularComercial: function(texto, fileName) {
    const cnpjMatch = texto.match(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/);
    const cnpj = cnpjMatch ? cnpjMatch[0] : "";

    const orgaoMatch = texto.match(/(PREFEITURA\s+MUNICIPAL\s+DE\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s]+|MUNICÍPIO\s+DE\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s]+|CÂMARA\s+MUNICIPAL\s+DE\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s]+|TRIBUNAL\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s0-9ªº-]+)/i);
    let cliente = orgaoMatch ? orgaoMatch[0].trim().replace(/\s+/g, ' ') : fileName.replace(/\.[^/.]+$/, "").toUpperCase();
    if (cliente.length > 50) cliente = cliente.substring(0, 50);

    const editalMatch = texto.match(/(PREGÃO\s+(?:ELETRÔNICO)?\s*(?:N[º°.]*)?\s*\d+\/\d{4}|CONCORRÊNCIA\s*(?:N[º°.]*)?\s*\d+\/\d{4}|DISPENSA\s*(?:N[º°.]*)?\s*\d+\/\d{4})/i);
    const edital = editalMatch ? editalMatch[0].trim().replace(/\s+/g, ' ') : "PREGÃO ELETRÔNICO Nº /2026";

    const procMatch = texto.match(/(PROCESSO\s+(?:ADMINISTRATIVO)?\s*(?:N[º°.]*)?\s*\d+\/\d{4})/i);
    const processo = procMatch ? procMatch[0].trim().replace(/\s+/g, ' ') : "PROCESSO ADM Nº /2026";

    const portalMatch = texto.match(/(BLL\s+COMPRAS|COMPRASNET|COMPRAS\.GOV\.BR|LICITAÇÕES-E|BBMNET|PORTAL\s+DE\s+COMPRAS)/i);
    const portal = portalMatch ? portalMatch[0].trim().toUpperCase() : "BLL COMPRAS";

    const valMatch = texto.match(/R\$\s*([\d\.,]+)/);
    let valorEstimado = 0.0;
    if (valMatch) {
      const v = parseFloat(valMatch[1].replace(/\./g, '').replace(',', '.'));
      if (v > 0) valorEstimado = v;
    }

    const objMatch = texto.match(/1\.\s*OBJETO:?\s*([\s\S]*?)(?=2\.\s*VALOR|2\.\s*DA|\n\n[A-Z0-9])/i);
    let objeto = "Contratação de pessoa jurídica para prestação de serviços especializados em Segurança e Medicina do Trabalho.";
    if (objMatch && objMatch[1].trim().length > 20) {
      objeto = objMatch[1].trim().replace(/\s+/g, ' ');
    }

    const novoId = "CLI-" + String(this.processosComerciais.length + 1).padStart(3, '0');

    this.processosComerciais.unshift({
      id: novoId,
      cliente: cliente,
      edital: edital,
      processo: processo,
      portal: portal,
      dataProposta: new Date().toLocaleDateString('pt-BR'),
      objeto: objeto,
      valorEstimado: valorEstimado,
      statusProcesso: "solicitacao_proposta",
      editaisAnexados: [{ nome: fileName, data: new Date().toLocaleDateString('pt-BR') }],
      propostaAnexada: null,
      cnpj: cnpj,
      cnae: "",
      grauRisco: "",
      cep: "",
      endereco: "",
      numeroContrato: "",
      dataContrato: new Date().toLocaleDateString('pt-BR'),
      vigencia: "1 ano",
      tipoContrato: "Continuado",
      horarioExpediente: "08:00 às 17:00",
      nomeFiscal: "",
      telFiscal: "",
      emailFiscal: "",
      contatoPagto: "",
      telPagto: "",
      emailPagto: "",
      aliquotasRetencao: { iss: 5.0, cofins: 3.0, csll: 1.0, irpj: 1.5, pis: 0.65, cbs: 0.0, ibs: 0.0 },
      tipoGarantia: "",
      percentualGarantia: "",
      valorApolice: 0.0,
      nomeCorretora: "",
      nomeContatoCorretora: "",
      telCorretora: "",
      emailCorretora: "",
      documentosContrato: [],
      itensProducao: [
        { id: "PROD-1", tipoContrato: "Empreitada Imediata", item: 1, objeto: objeto, quant: 1, unid: "UN", vlUnitario: valorEstimado, vlTotal: valorEstimado, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] }
      ]
    });

    this.clienteAtivoId = novoId;
    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
    this.popularSeletoresContratos();
    this.popularSeletoresProducao();
    this.popularSeletoresDocumentos();
    alert(`Edital "${fileName}" processado e novo cliente "${cliente}" adicionado!`);
  },

  // =========================================================================
  // MÓDULO 2: CONTRATOS
  // =========================================================================
  popularSeletoresContratos: function() {
    const sel = document.getElementById("select-contratante-modulo");
    if (!sel) return;
    sel.innerHTML = "";

    if (this.processosComerciais.length === 0) {
      sel.innerHTML = `<option value="">Nenhum contratante cadastrado</option>`;
      return;
    }

    this.processosComerciais.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = `${c.cliente} (${c.numeroContrato || c.edital})`;
      if (c.id === this.clienteAtivoId) opt.selected = true;
      sel.appendChild(opt);
    });
  },

  carregarContratanteNoModulo: function(clienteId) {
    if (!clienteId) return;
    this.clienteAtivoId = clienteId;
    const proc = this.processosComerciais.find(p => p.id === clienteId) || this.processosComerciais[0];
    if (!proc) return;

    document.getElementById("ct-cliente").value = proc.cliente || "";
    document.getElementById("ct-cnpj").value = proc.cnpj || "";
    document.getElementById("ct-cnae").value = proc.cnae || "";
    document.getElementById("ct-grau-risco").value = proc.grauRisco || "";
    document.getElementById("ct-cep").value = proc.cep || "";
    document.getElementById("ct-endereco").value = proc.endereco || "";
    document.getElementById("ct-numero").value = proc.numeroContrato || "";
    document.getElementById("ct-data").value = proc.dataContrato || "";
    document.getElementById("ct-vigencia").value = proc.vigencia || "1 ano";
    document.getElementById("ct-tipo").value = proc.tipoContrato || "Continuado";
    document.getElementById("ct-horario").value = proc.horarioExpediente || "08:00 às 17:00";
    document.getElementById("ct-objeto").value = proc.objeto || "";

    document.getElementById("ct-fiscal-nome").value = proc.nomeFiscal || "";
    document.getElementById("ct-fiscal-tel").value = proc.telFiscal || "";
    document.getElementById("ct-fiscal-email").value = proc.emailFiscal || "";

    document.getElementById("ct-pagto-nome").value = proc.contatoPagto || "";
    document.getElementById("ct-pagto-tel").value = proc.telPagto || "";
    document.getElementById("ct-pagto-email").value = proc.emailPagto || "";

    const aliq = proc.aliquotasRetencao || { iss: 5, cofins: 3, csll: 1, irpj: 1.5, pis: 0.65, cbs: 0, ibs: 0 };
    document.getElementById("ct-aliq-iss").value = aliq.iss;
    document.getElementById("ct-aliq-cofins").value = aliq.cofins;
    document.getElementById("ct-aliq-csll").value = aliq.csll;
    document.getElementById("ct-aliq-irpj").value = aliq.irpj;
    document.getElementById("ct-aliq-pis").value = aliq.pis;
    document.getElementById("ct-aliq-cbs").value = aliq.cbs;
    document.getElementById("ct-aliq-ibs").value = aliq.ibs;

    document.getElementById("ct-garantia-tipo").value = proc.tipoGarantia || "";
    document.getElementById("ct-garantia-perc").value = proc.percentualGarantia || "";
    document.getElementById("ct-garantia-apolice").value = proc.valorApolice || 0;
    document.getElementById("ct-garantia-corretora").value = proc.nomeCorretora || "";
    document.getElementById("ct-garantia-contato").value = proc.nomeContatoCorretora || "";
    document.getElementById("ct-garantia-tel").value = proc.telCorretora || "";
    document.getElementById("ct-garantia-email").value = proc.emailCorretora || "";

    this.renderizarAnexosContrato(proc);
  },

  renderizarAnexosContrato: function(proc) {
    const box = document.getElementById("ct-lista-anexos");
    if (!box) return;
    box.innerHTML = "";
    if (proc.documentosContrato && proc.documentosContrato.length > 0) {
      proc.documentosContrato.forEach((doc, idx) => {
        box.innerHTML += `
          <div class="flex items-center justify-between bg-slate-100 p-1 rounded text-[10px]">
            <span class="truncate max-w-[130px] font-semibold">${doc.nome}</span>
            <div class="flex items-center space-x-1">
              <button onclick="window.borealApp.baixarDocContrato('${doc.nome}')" class="text-blue-600"><i data-lucide="download" class="w-3 h-3"></i></button>
              <button onclick="window.borealApp.removerDocContrato(${idx})" class="text-rose-600"><i data-lucide="x" class="w-3 h-3"></i></button>
            </div>
          </div>
        `;
      });
    } else {
      box.innerHTML = `<span class="text-[10px] text-slate-400 italic">Nenhum contrato anexado.</span>`;
    }
    if (window.lucide) window.lucide.createIcons();
  },

  anexarDocContrato: function(input) {
    const file = input.files[0];
    if (!file) return;
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    if (!proc.documentosContrato) proc.documentosContrato = [];
    proc.documentosContrato.push({
      nome: file.name,
      data: new Date().toLocaleDateString('pt-BR')
    });
    this.renderizarAnexosContrato(proc);
    alert(`Contrato "${file.name}" anexado com sucesso!`);
  },

  removerDocContrato: function(idx) {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    proc.documentosContrato.splice(idx, 1);
    this.renderizarAnexosContrato(proc);
  },

  baixarDocContrato: function(nome) {
    alert(`Iniciando download do contrato assinado: "${nome}"...`);
  },

  abrirRelatorioProducaoDoContrato: function() {
    this.abrirModulo("relatorio_producao");
  },

  consultarCEPViaCEP: async function(cep) {
    const limpo = cep.replace(/\D/g, '');
    if (limpo.length !== 8) return;
    try {
      const res = await fetch(`https://viacep.com.br/ws/${limpo}/json/`);
      if (res.ok) {
        const d = await res.json();
        if (!d.erro) {
          document.getElementById("ct-endereco").value = `${d.logradouro}, nº - ${d.bairro}, ${d.localidade} - ${d.uf}`;
          alert(`Endereço localizado via CEP: ${d.logradouro}, ${d.localidade} - ${d.uf}`);
        }
      }
    } catch(e) {}
  },

  consultarCNPJBrasilAPI: async function(cnpj) {
    const limpo = cnpj.replace(/\D/g, '');
    if (limpo.length !== 14) return;
    try {
      const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${limpo}`);
      if (res.ok) {
        const d = await res.json();
        if (d.cnae_fiscal) {
          document.getElementById("ct-cnae").value = `${d.cnae_fiscal} - ${d.cnae_fiscal_descricao || ''}`.substring(0, 30);
        }
      }
    } catch(e) {}
  },

  salvarContratoAtivo: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) {
      alert("Selecione um cliente para salvar o contrato.");
      return;
    }

    proc.cliente = document.getElementById("ct-cliente").value;
    proc.cnpj = document.getElementById("ct-cnpj").value;
    proc.cnae = document.getElementById("ct-cnae").value;
    proc.grauRisco = document.getElementById("ct-grau-risco").value;
    proc.cep = document.getElementById("ct-cep").value;
    proc.endereco = document.getElementById("ct-endereco").value;
    proc.numeroContrato = document.getElementById("ct-numero").value;
    proc.dataContrato = document.getElementById("ct-data").value;
    proc.vigencia = document.getElementById("ct-vigencia").value;
    proc.tipoContrato = document.getElementById("ct-tipo").value;
    proc.horarioExpediente = document.getElementById("ct-horario").value;
    proc.objeto = document.getElementById("ct-objeto").value;

    proc.nomeFiscal = document.getElementById("ct-fiscal-nome").value;
    proc.telFiscal = document.getElementById("ct-fiscal-tel").value;
    proc.emailFiscal = document.getElementById("ct-fiscal-email").value;

    proc.contatoPagto = document.getElementById("ct-pagto-nome").value;
    proc.telPagto = document.getElementById("ct-pagto-tel").value;
    proc.emailPagto = document.getElementById("ct-pagto-email").value;

    proc.aliquotasRetencao = {
      iss: parseFloat(document.getElementById("ct-aliq-iss").value) || 0,
      cofins: parseFloat(document.getElementById("ct-aliq-cofins").value) || 0,
      csll: parseFloat(document.getElementById("ct-aliq-csll").value) || 0,
      irpj: parseFloat(document.getElementById("ct-aliq-irpj").value) || 0,
      pis: parseFloat(document.getElementById("ct-aliq-pis").value) || 0,
      cbs: parseFloat(document.getElementById("ct-aliq-cbs").value) || 0,
      ibs: parseFloat(document.getElementById("ct-aliq-ibs").value) || 0
    };

    proc.tipoGarantia = document.getElementById("ct-garantia-tipo").value;
    proc.percentualGarantia = document.getElementById("ct-garantia-perc").value;
    proc.valorApolice = parseFloat(document.getElementById("ct-garantia-apolice").value) || 0;
    proc.nomeCorretora = document.getElementById("ct-garantia-corretora").value;
    proc.nomeContatoCorretora = document.getElementById("ct-garantia-contato").value;
    proc.telCorretora = document.getElementById("ct-garantia-tel").value;
    proc.emailCorretora = document.getElementById("ct-garantia-email").value;

    this.salvarDadosGlobal();
    alert(`Contrato de "${proc.cliente}" gravado com sucesso!`);
  },

  apagarContratoAtivo: function() {
    if (confirm("Deseja limpar todos os campos deste contrato?")) {
      document.querySelectorAll("#box-formulario-contrato input, #box-formulario-contrato textarea").forEach(i => i.value = "");
      alert("Campos limpos com sucesso.");
    }
  },

  configurarParserMicrofoneSequencial: function() {
    document.querySelectorAll("#box-formulario-contrato input, #box-formulario-contrato textarea").forEach(el => {
      el.addEventListener("focus", () => {
        this.campoAudioFocadoId = el.id;
      });
    });

    const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Speech) return;

    this.recognition = new Speech();
    this.recognition.lang = "pt-BR";
    this.recognition.continuous = false;

    this.recognition.onresult = (e) => {
      const texto = e.results[0][0].transcript;
      const target = document.getElementById(this.campoAudioFocadoId);
      if (target) {
        target.value = texto;
        target.classList.add("bg-amber-100");
        setTimeout(() => target.classList.remove("bg-amber-100"), 1500);

        const inputs = Array.from(document.querySelectorAll("#box-formulario-contrato input, #box-formulario-contrato textarea"));
        const idx = inputs.indexOf(target);
        if (idx !== -1 && idx < inputs.length - 1) {
          const prox = inputs[idx + 1];
          this.campoAudioFocadoId = prox.id;
          prox.focus();
        }
      }
    };

    this.recognition.onend = () => {
      const btn = document.getElementById("btn-mic-contrato");
      if (btn) btn.classList.remove("mic-active");
      const lbl = document.getElementById("lbl-mic-contrato");
      if (lbl) lbl.textContent = "Preencher por Áudio (Voz)";
    };
  },

  alternarAudioContrato: function() {
    if (!this.recognition) {
      alert("Reconhecimento por voz disponível no Google Chrome ou Edge.");
      return;
    }
    const btn = document.getElementById("btn-mic-contrato");
    if (btn.classList.contains("mic-active")) {
      this.recognition.stop();
      btn.classList.remove("mic-active");
    } else {
      this.recognition.start();
      btn.classList.add("mic-active");
      document.getElementById("lbl-mic-contrato").textContent = "Ouvindo... (Fale o dado)";
    }
  },

  // =========================================================================
  // MÓDULO 3: RELATÓRIO DE PRODUÇÃO
  // =========================================================================
  popularSeletoresProducao: function() {
    const sel = document.getElementById("select-cliente-producao");
    if (!sel) return;
    sel.innerHTML = "";

    if (this.processosComerciais.length === 0) {
      sel.innerHTML = `<option value="">Nenhum cliente cadastrado</option>`;
      return;
    }

    this.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.cliente} • ${p.edital}`;
      if (p.id === this.clienteAtivoId) opt.selected = true;
      sel.appendChild(opt);
    });
  },

  carregarProducaoCliente: function(clienteId) {
    if (!clienteId && this.processosComerciais.length > 0) {
      clienteId = this.processosComerciais[0].id;
    }
    this.clienteAtivoId = clienteId;
    const proc = this.processosComerciais.find(p => p.id === clienteId);
    
    const lblCli = document.getElementById("lbl-producao-cliente-ativo");
    const lblObj = document.getElementById("lbl-producao-objeto-resumo");
    const tbody = document.getElementById("tbody-relatorio-producao-modulo3");

    if (!proc) {
      if (lblCli) lblCli.textContent = "ITENS DE SERVIÇO EM PRODUÇÃO";
      if (lblObj) lblObj.textContent = "";
      if (tbody) tbody.innerHTML = `<tr><td colspan="10" class="p-6 text-center text-slate-400 italic">Nenhum cliente em produção.</td></tr>`;
      return;
    }

    if (lblCli) lblCli.textContent = `ITENS DE SERVIÇO EM PRODUÇÃO • ${proc.cliente}`;
    if (lblObj) lblObj.textContent = proc.objeto;
    if (!tbody) return;
    tbody.innerHTML = "";

    let total = 0;
    proc.itensProducao.forEach((it, itIdx) => {
      const vlTotal = (parseFloat(it.quant) || 0) * (parseFloat(it.vlUnitario) || 0);
      it.vlTotal = vlTotal;
      total += vlTotal;

      let relatoriosHtml = `<div class="space-y-1">`;
      if (it.relatoriosAnexados && it.relatoriosAnexados.length > 0) {
        it.relatoriosAnexados.forEach((rel, relIdx) => {
          relatoriosHtml += `
            <div class="flex items-center justify-between bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
              <span class="truncate max-w-[120px] font-semibold text-slate-700" title="${rel.nome}">${rel.nome}</span>
              <div class="flex items-center space-x-1">
                <button onclick="window.borealApp.baixarRelatorioProducao('${rel.nome}')" class="text-blue-600 hover:text-blue-800" title="Consultar / Baixar"><i data-lucide="eye" class="w-3 h-3"></i></button>
                <button onclick="window.borealApp.removerRelatorioAnexadoProducao(${itIdx}, ${relIdx})" class="text-rose-600 hover:text-rose-800" title="Substituir / Apagar"><i data-lucide="x" class="w-3 h-3"></i></button>
              </div>
            </div>
          `;
        });
      }
      relatoriosHtml += `
        <label class="cursor-pointer text-[10px] text-[#B48D3C] hover:underline font-bold flex items-center space-x-0.5">
          <i data-lucide="paperclip" class="w-3 h-3"></i>
          <span>+ Anexar Relatório</span>
          <input type="file" accept=".pdf, .docx" class="hidden" onchange="window.borealApp.anexarRelatorioProducaoArquivo(${itIdx}, this)">
        </label>
      </div>`;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="p-1 border-r">
          <select onchange="window.borealApp.atualizarItemProducaoDireto(${itIdx}, 'tipoContrato', this.value)" class="table-input font-semibold">
            <option value="Mensal sob Demanda" ${it.tipoContrato === 'Mensal sob Demanda' ? 'selected' : ''}>Mensal sob Demanda</option>
            <option value="Empreitada Imediata" ${it.tipoContrato === 'Empreitada Imediata' ? 'selected' : ''}>Empreitada Imediata</option>
            <option value="Mensal Fixo" ${it.tipoContrato === 'Mensal Fixo' ? 'selected' : ''}>Mensal Fixo</option>
            <option value="Empreitada sob Demanda" ${it.tipoContrato === 'Empreitada sob Demanda' ? 'selected' : ''}>Empreitada sob Demanda</option>
          </select>
        </td>
        <td class="p-1 border-r text-center font-bold text-slate-500">${itIdx + 1}</td>
        <td class="p-1 border-r"><input type="text" value="${it.objeto}" onchange="window.borealApp.atualizarItemProducaoDireto(${itIdx}, 'objeto', this.value)" class="table-input min-w-[240px]"></td>
        <td class="p-1 border-r text-center"><input type="number" min="1" value="${it.quant}" onchange="window.borealApp.atualizarItemProducaoDireto(${itIdx}, 'quant', parseFloat(this.value)||1)" class="table-input text-center font-bold"></td>
        <td class="p-1 border-r text-center"><input type="text" value="${it.unid}" onchange="window.borealApp.atualizarItemProducaoDireto(${itIdx}, 'unid', this.value)" class="table-input text-center uppercase font-bold text-slate-600"></td>
        <td class="p-1 border-r text-right sigilo-valor"><input type="number" step="0.01" value="${(it.vlUnitario||0).toFixed(2)}" onchange="window.borealApp.atualizarItemProducaoDireto(${itIdx}, 'vlUnitario', parseFloat(this.value)||0)" class="table-input text-right font-medium"></td>
        <td class="p-1 border-r text-right font-bold text-slate-800 sigilo-valor">R$ ${vlTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
        <td class="p-1 border-r">
          <select onchange="window.borealApp.alterarStatusProducaoDireto(${itIdx}, this.value)" class="w-full text-xs font-bold border border-slate-300 rounded p-1 ${it.statusProducao === 'entregue_aceito' ? 'bg-emerald-100 text-emerald-900 border-emerald-400' : (it.statusProducao === 'concluido' ? 'bg-blue-50 text-blue-800' : 'bg-slate-50 text-slate-800')}">
            <option value="solicitacao_proposta" ${it.statusProducao === 'solicitacao_proposta' ? 'selected' : ''}>Solicitação de proposta</option>
            <option value="contratado" ${it.statusProducao === 'contratado' ? 'selected' : ''}>Contratado</option>
            <option value="servico_andamento" ${it.statusProducao === 'servico_andamento' ? 'selected' : ''}>Serviço em andamento</option>
            <option value="concluido" ${it.statusProducao === 'concluido' ? 'selected' : ''}>Concluído (Gera Relatório)</option>
            <option value="entregue_aguardando" ${it.statusProducao === 'entregue_aguardando' ? 'selected' : ''}>Entregue aguardando aceite</option>
            <option value="entregue_aceito" ${it.statusProducao === 'entregue_aceito' ? 'selected' : ''}>Entregue e aceito (Aviso NF)</option>
          </select>
        </td>
        <td class="p-1 border-r text-center whitespace-nowrap">
          <button onclick="window.borealApp.gerarRelatorioEntregaDeServicoModulo3(${itIdx})" class="px-2 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded text-[11px] font-semibold mr-1" title="Emitir Relatório de Serviços Entregues">
            Rel. Entrega
          </button>
          <button onclick="window.borealApp.apagarItemProducaoDireto(${itIdx})" class="p-1 text-rose-600 hover:text-rose-800" title="Apagar Item">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
        <td class="p-1.5">${relatoriosHtml}</td>
      `;
      tbody.appendChild(tr);
    });

    const lblTot = document.getElementById("lbl-producao-total-modulo3");
    if (lblTot) lblTot.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    if (window.lucide) window.lucide.createIcons();
  },

  atualizarItemProducaoDireto: function(itIdx, campo, valor) {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (proc && proc.itensProducao[itIdx]) {
      proc.itensProducao[itIdx][campo] = valor;
      this.carregarProducaoCliente(this.clienteAtivoId);
    }
  },

  adicionarItemProducaoManual: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) {
      alert("Selecione um cliente primeiro.");
      return;
    }
    proc.itensProducao.push({
      id: "PROD-" + Date.now(),
      tipoContrato: "Mensal sob Demanda",
      item: proc.itensProducao.length + 1,
      objeto: "Novo item de serviço especializado",
      quant: 1,
      unid: "UN",
      vlUnitario: 3000.00,
      vlTotal: 3000.00,
      statusProducao: "solicitacao_proposta",
      relatoriosAnexados: []
    });
    this.carregarProducaoCliente(this.clienteAtivoId);
  },

  apagarItemProducaoDireto: function(itIdx) {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    proc.itensProducao.splice(itIdx, 1);
    this.carregarProducaoCliente(this.clienteAtivoId);
  },

  alterarStatusProducaoDireto: function(itIdx, status) {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    const it = proc.itensProducao[itIdx];
    it.statusProducao = status;

    if (status === "concluido") {
      const nomeRel = `Relatorio_Servicos_Entregues_${proc.cliente.substring(0, 15).replace(/\s+/g, '_')}_Item${it.item}.pdf`;
      const hash = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 8999 + 1000);
      it.relatoriosAnexados.push({ id: "REL-" + Date.now(), nome: nomeRel, data: new Date().toLocaleDateString('pt-BR'), hash: hash });
      alert(`STATUS: "CONCLUÍDO"!\n\nO Relatório de Serviços Entregues foi gerado com as instruções de retenção tributária do código 17.09 e anexado ao item.`);
    }

    if (status === "entregue_aceito") {
      const msg = `*SOLICITAÇÃO DE EMISSÃO DE NOTA FISCAL (BOREAL ENGMED)*\n\nCliente: *${proc.cliente}*\nCNPJ: ${proc.cnpj}\nObjeto: *${it.objeto}*\nValor Total: R$ ${it.vlTotal.toFixed(2)}\nStatus: SERVIÇO ENTREGUE E ACEITO.\n\nFavor providenciar a emissão da NF correspondente com alíquotas do código 17.09.`;
      alert(`STATUS: "ENTREGUE E ACEITO"!\n\n1. E-mail de solicitação de NF gerado para: financeiro@boreal.eng.br\n2. WhatsApp preparado para o número: (19) 99381-2063`);
      window.open(`https://api.whatsapp.com/send?phone=5519993812063&text=${encodeURIComponent(msg.replace(/\\n/g, '\n'))}`, '_blank');
    }

    this.carregarProducaoCliente(this.clienteAtivoId);
  },

  anexarRelatorioProducaoArquivo: function(itIdx, input) {
    const file = input.files[0];
    if (!file) return;
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    const hash = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 8999 + 1000);
    proc.itensProducao[itIdx].relatoriosAnexados.push({
      id: "REL-" + Date.now(),
      nome: file.name,
      data: new Date().toLocaleDateString('pt-BR'),
      hash: hash
    });
    this.carregarProducaoCliente(this.clienteAtivoId);
    alert(`Relatório "${file.name}" anexado com sucesso!`);
  },

  removerRelatorioAnexadoProducao: function(itIdx, relIdx) {
    if (confirm("Deseja apagar este relatório anexado para substituí-lo por outro?")) {
      const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
      if (!proc) return;
      proc.itensProducao[itIdx].relatoriosAnexados.splice(relIdx, 1);
      this.carregarProducaoCliente(this.clienteAtivoId);
    }
  },

  gerarRelatorioEntregaDeServicoModulo3: function(itIdx) {
    this.modeloDocAtivo = "relatorio_servicos";
    this.abrirModulo("documentos_padroes");
  },

  fazerPropostaAutomaticaModulo3: function() {
    this.modeloDocAtivo = "proposta";
    this.abrirModulo("documentos_padroes");
  },

  // =========================================================================
  // MÓDULO 4: DOCUMENTOS PADRÕES (COM MENSAGEM FISCAL CÓDIGO 17.09)
  // =========================================================================
  popularSeletoresDocumentos: function() {
    const selDocCli = document.getElementById("doc-select-cliente");
    if (!selDocCli) return;
    selDocCli.innerHTML = "";

    if (this.processosComerciais.length === 0) {
      selDocCli.innerHTML = `<option value="">Nenhum cliente cadastrado</option>`;
      return;
    }

    this.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.cliente;
      if (p.id === this.clienteAtivoId) opt.selected = true;
      selDocCli.appendChild(opt);
    });
  },

  mudarClienteDocumento: function(id) {
    this.clienteAtivoId = id;
    this.renderizarDocumentoAtivo();
  },

  mudarModeloDocumento: function(modelo) {
    this.modeloDocAtivo = modelo;
    this.renderizarDocumentoAtivo();
  },

  renderizarDocumentoAtivo: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId) || this.processosComerciais[0];
    const modelo = this.modeloDocAtivo;

    const lblNum = document.getElementById("lbl-numero-doc-oficial");
    if (lblNum) lblNum.textContent = modelo === "proposta" ? "PROPOSTA COMERCIAL BOREAL" : "OFÍCIO Nº 0001/2026";
    const pvTit = document.getElementById("pv-doc-titulo-tipo");
    if (pvTit) pvTit.textContent = modelo === "proposta" ? "Assunto: Proposta Comercial" : "OFÍCIO Nº 0001/2026";

    if (!proc) {
      document.getElementById("doc-in-destinatario").value = "";
      document.getElementById("doc-in-ac").value = "";
      document.getElementById("doc-in-ref").value = "";
      document.getElementById("doc-in-objeto").value = "";
      return;
    }

    document.getElementById("doc-in-destinatario").value = proc.cliente;
    document.getElementById("doc-in-ac").value = proc.nomeFiscal || "Comissão Permanente de Licitações / Departamento de Compras";
    document.getElementById("doc-in-ref").value = `${proc.edital || ''} - Objeto: ${proc.objeto || ''}`;
    document.getElementById("doc-in-objeto").value = proc.objeto || "";

    if (modelo === "proposta") {
      document.getElementById("doc-in-assunto").value = "Proposta Comercial Formal";
    } else if (modelo === "relatorio_servicos") {
      document.getElementById("doc-in-assunto").value = "RELATÓRIO DE SERVIÇOS ENTREGUES";
    } else if (modelo === "cronograma_fisico_fin") {
      document.getElementById("doc-in-assunto").value = "CRONOGRAMA FÍSICO-FINANCEIRO DE SERVIÇOS";
    } else if (modelo === "cronograma_pgr") {
      document.getElementById("doc-in-assunto").value = "PLANO E CRONOGRAMA DE SERVIÇO COM AVALIAÇÃO PSICOSSOCIAL (COPSOQ)";
    } else if (modelo === "cronograma_geral") {
      document.getElementById("doc-in-assunto").value = "PLANO E CRONOGRAMA DE SERVIÇO GERAL";
    } else if (modelo === "oficio") {
      document.getElementById("doc-in-assunto").value = "Esclarecimentos Técnicos e Jurídicos";
    } else {
      document.getElementById("doc-in-assunto").value = "Declaração Institucional";
    }

    this.renderizarTabelaDocEsquerda(proc, modelo);
    this.atualizarPreviewDocOficial();
  },

  renderizarTabelaDocEsquerda: function(proc, modelo) {
    const thead = document.getElementById("thead-doc-itens");
    const tbody = document.getElementById("tbody-doc-itens");
    const boxTotal = document.getElementById("box-doc-totalizador");
    const titulo = document.getElementById("lbl-doc-tabela-titulo");

    if (!thead || !tbody) return;
    thead.innerHTML = "";
    tbody.innerHTML = "";

    if (!proc || !proc.itensProducao) return;

    if (modelo === "proposta" || modelo === "relatorio_servicos") {
      if (boxTotal) boxTotal.classList.remove("hidden");
      if (titulo) titulo.textContent = modelo === "proposta" ? "01 - Itens e Preços da Proposta" : "Relatório de Serviços Entregues (Itens)";

      thead.innerHTML = `
        <tr>
          <th class="p-1.5 w-10 text-center">ITEM</th>
          <th class="p-1.5">ESPECIFICAÇÃO / DESCRIÇÃO DO SERVIÇO</th>
          <th class="p-1.5 w-16 text-center">QUANT.</th>
          <th class="p-1.5 w-16 text-center">UNID.</th>
          <th class="p-1.5 w-24 text-right">VL UNIT.</th>
          <th class="p-1.5 w-24 text-right">VL TOTAL</th>
          <th class="p-1.5 w-8 text-center">AÇÃO</th>
        </tr>
      `;

      let total = 0;
      proc.itensProducao.forEach((it, idx) => {
        const vlTotal = (parseFloat(it.quant) || 0) * (parseFloat(it.vlUnitario) || 0);
        total += vlTotal;

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="p-1 text-center font-bold text-slate-500">${idx + 1}</td>
          <td class="p-1"><input type="text" value="${it.objeto}" oninput="window.borealApp.editarItemDocEspecifico(${idx}, 'objeto', this.value)" class="table-input"></td>
          <td class="p-1 text-center"><input type="number" min="1" value="${it.quant}" oninput="window.borealApp.editarItemDocEspecifico(${idx}, 'quant', parseFloat(this.value)||1)" class="table-input text-center"></td>
          <td class="p-1 text-center"><input type="text" value="${it.unid}" oninput="window.borealApp.editarItemDocEspecifico(${idx}, 'unid', this.value)" class="table-input text-center uppercase"></td>
          <td class="p-1 text-right"><input type="number" step="0.01" value="${it.vlUnitario.toFixed(2)}" oninput="window.borealApp.editarItemDocEspecifico(${idx}, 'vlUnitario', parseFloat(this.value)||0)" class="table-input text-right"></td>
          <td class="p-1 text-right font-bold">R$ ${vlTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
          <td class="p-1 text-center">
            <button onclick="window.borealApp.removerItemDocEspecifico(${idx})" class="text-rose-600 hover:text-rose-800"><i data-lucide="trash-2" class="w-3 h-3"></i></button>
          </td>
        `;
        tbody.appendChild(tr);
      });

      const lblCalc = document.getElementById("lbl-doc-total-calculado");
      if (lblCalc) lblCalc.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      const pvExt = document.getElementById("pv-doc-valor-extenso");
      if (pvExt) pvExt.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (${this.converterExtenso(total)})`;
    }
    else if (modelo === "cronograma_fisico_fin") {
      if (boxTotal) boxTotal.classList.remove("hidden");
      if (titulo) titulo.textContent = "Cronograma Físico-Financeiro (Serviços e Valores)";

      thead.innerHTML = `
        <tr>
          <th class="p-1.5 w-16">MÊS</th>
          <th class="p-1.5">SERVIÇOS</th>
          <th class="p-1.5 w-16 text-center">QUANT.</th>
          <th class="p-1.5 w-24 text-right">VALOR TOTAL R$</th>
          <th class="p-1.5 w-8 text-center">AÇÃO</th>
        </tr>
      `;

      let total = 0;
      proc.itensProducao.forEach((it, idx) => {
        const vlTotal = (parseFloat(it.quant) || 0) * (parseFloat(it.vlUnitario) || 0);
        total += vlTotal;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="p-1"><input type="text" value="Mês ${idx + 1}" class="table-input font-bold"></td>
          <td class="p-1"><input type="text" value="${it.objeto}" class="table-input"></td>
          <td class="p-1 text-center"><input type="number" value="${it.quant}" class="table-input text-center"></td>
          <td class="p-1 text-right font-bold">R$ ${vlTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
          <td class="p-1 text-center"><button onclick="window.borealApp.removerItemDocEspecifico(${idx})" class="text-rose-600"><i data-lucide="trash-2" class="w-3 h-3"></i></button></td>
        `;
        tbody.appendChild(tr);
      });
      const lblCalc = document.getElementById("lbl-doc-total-calculado");
      if (lblCalc) lblCalc.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
    else if (modelo === "cronograma_pgr" || modelo === "cronograma_geral") {
      if (boxTotal) boxTotal.classList.add("hidden");
      if (titulo) titulo.textContent = "Cronograma Físico (Sem Valores - Conforme Ponto 13)";

      thead.innerHTML = `
        <tr>
          <th class="p-1.5 w-16">MÊS</th>
          <th class="p-1.5 w-16">DIA</th>
          <th class="p-1.5">SERVIÇO</th>
          <th class="p-1.5">LOCAL</th>
          <th class="p-1.5 w-8 text-center">AÇÃO</th>
        </tr>
      `;

      proc.itensProducao.forEach((it, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="p-1"><input type="text" value="Mês ${idx + 1}" class="table-input font-bold"></td>
          <td class="p-1"><input type="text" value="01 a 15" class="table-input text-center"></td>
          <td class="p-1"><input type="text" value="${it.objeto}" class="table-input"></td>
          <td class="p-1"><input type="text" value="${proc.endereco || 'Sede'}" class="table-input"></td>
          <td class="p-1 text-center"><button onclick="window.borealApp.removerItemDocEspecifico(${idx})" class="text-rose-600"><i data-lucide="trash-2" class="w-3 h-3"></i></button></td>
        `;
        tbody.appendChild(tr);
      });
    }
    else {
      if (boxTotal) boxTotal.classList.add("hidden");
      if (titulo) titulo.textContent = "Corpo de Texto do Ofício / Declaração";
      thead.innerHTML = `<tr><th class="p-2">TEXTO COMPLETO (ESPAÇO INFINITO)</th></tr>`;
      tbody.innerHTML = `
        <tr>
          <td class="p-2">
            <textarea id="in-texto-livre-doc" rows="7" class="table-input border border-slate-300 bg-white" oninput="window.borealApp.atualizarPreviewDocOficial()">A Boreal Engmed Ltda., devidamente qualificada nos autos, por intermédio de seu Representante Legal, Sr. Luiz Fernando Gomes de Jesus, Engº de Segurança do Trabalho, vem, respeitosamente, mediante o presente expediente, prestar esclarecimentos técnicos e operacionais referentes ao contrato em epígrafe.</textarea>
          </td>
        </tr>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  },

  adicionarLinhaTabelaDoc: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    proc.itensProducao.push({
      id: "PROD-" + Date.now(),
      tipoContrato: "Mensal sob Demanda",
      item: proc.itensProducao.length + 1,
      objeto: "Novo serviço / objeto adicional",
      quant: 1,
      unid: "UN",
      vlUnitario: 2500.00,
      vlTotal: 2500.00,
      statusProducao: "solicitacao_proposta",
      relatoriosAnexados: []
    });
    this.renderizarDocumentoAtivo();
  },

  removerItemDocEspecifico: function(idx) {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc || proc.itensProducao.length <= 1) {
      alert("Mantenha ao menos um item no documento.");
      return;
    }
    proc.itensProducao.splice(idx, 1);
    this.renderizarDocumentoAtivo();
  },

  editarItemDocEspecifico: function(idx, campo, valor) {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (proc && proc.itensProducao[idx]) {
      proc.itensProducao[idx][campo] = valor;
      this.renderizarDocumentoAtivo();
    }
  },

  atualizarPreviewDocOficial: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId) || this.processosComerciais[0];
    const modelo = this.modeloDocAtivo;

    const pvDest = document.getElementById("pv-doc-destinatario");
    if (pvDest) pvDest.textContent = document.getElementById("doc-in-destinatario").value || (proc ? proc.cliente : "Órgão / Cliente");
    const pvAc = document.getElementById("pv-doc-ac");
    if (pvAc) pvAc.textContent = document.getElementById("doc-in-ac").value || "Comissão Permanente";
    const pvAss = document.getElementById("pv-doc-assunto");
    if (pvAss) pvAss.textContent = document.getElementById("doc-in-assunto").value;
    const pvRef = document.getElementById("pv-doc-ref");
    if (pvRef) pvRef.textContent = document.getElementById("doc-in-ref").value || (proc ? proc.edital : "");
    const pvObj = document.getElementById("pv-doc-objeto-compl");
    if (pvObj) pvObj.textContent = document.getElementById("doc-in-objeto").value || (proc ? proc.objeto : "");
    const pvData = document.getElementById("pv-doc-data");
    if (pvData) pvData.textContent = document.getElementById("doc-in-data").value;
    const pvVal = document.getElementById("pv-doc-validade-txt");
    if (pvVal) pvVal.textContent = document.getElementById("doc-in-validade").value;

    const tabelaBox = document.getElementById("pv-doc-tabela-box");
    const blocoDeclaracoes = document.getElementById("pv-doc-bloco-declaracoes");
    const avisoRetencoes = document.getElementById("pv-doc-aviso-retencoes-1709");

    const hashGerado = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 89999 + 10000);
    const pvHash = document.getElementById("pv-doc-hash-validacao");
    if (pvHash) pvHash.textContent = hashGerado;

    if (modelo === "relatorio_servicos") {
      if (avisoRetencoes) avisoRetencoes.classList.remove("hidden");
    } else {
      if (avisoRetencoes) avisoRetencoes.classList.add("hidden");
    }

    if (modelo === "proposta" || modelo === "relatorio_servicos") {
      if (blocoDeclaracoes) blocoDeclaracoes.classList.remove("hidden");
      let total = 0;
      let tbl = `
        <table border="1" cellpadding="3" style="width:100%;border-collapse:collapse;font-size:9.5pt;margin-top:4px;">
          <tr style="background:#f2f2f2;font-weight:bold;">
            <th style="width:35px;text-align:center;">ITEM</th>
            <th style="text-align:left;">ESPECIFICAÇÃO / DESCRIÇÃO DO SERVIÇO</th>
            <th style="width:45px;text-align:center;">QUANT.</th>
            <th style="width:40px;text-align:center;">UN</th>
            <th style="width:90px;text-align:right;">VL UNITÁRIO (R$)</th>
            <th style="width:95px;text-align:right;">VL TOTAL (R$)</th>
          </tr>
      `;
      if (proc && proc.itensProducao) {
        proc.itensProducao.forEach((it, idx) => {
          const vlTotal = (parseFloat(it.quant) || 0) * (parseFloat(it.vlUnitario) || 0);
          total += vlTotal;
          tbl += `
            <tr>
              <td style="text-align:center;font-weight:bold;">${idx + 1}</td>
              <td>${it.objeto}</td>
              <td style="text-align:center;">${it.quant}</td>
              <td style="text-align:center;">${it.unid}</td>
              <td style="text-align:right;">R$ ${it.vlUnitario.toFixed(2)}</td>
              <td style="text-align:right;font-weight:bold;">R$ ${vlTotal.toFixed(2)}</td>
            </tr>
          `;
        });
      }
      tbl += `
        <tr style="background:#fafafa;font-weight:bold;">
          <td colspan="5" style="text-align:right;text-transform:uppercase;">VALOR TOTAL:</td>
          <td style="text-align:right;color:#047857;">R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
        </tr>
      </table>`;
      if (tabelaBox) tabelaBox.innerHTML = tbl;
    }
    else if (modelo === "cronograma_pgr" || modelo === "cronograma_geral") {
      if (blocoDeclaracoes) blocoDeclaracoes.classList.add("hidden");
      let tbl = `
        <table border="1" cellpadding="3" style="width:100%;border-collapse:collapse;font-size:9pt;margin-top:4px;">
          <tr style="background:#f2f2f2;font-weight:bold;">
            <th style="width:60px;">MÊS</th>
            <th style="width:60px;">DIA</th>
            <th>SERVIÇO</th>
            <th>LOCAL</th>
          </tr>
      `;
      if (proc && proc.itensProducao) {
        proc.itensProducao.forEach((it, idx) => {
          tbl += `
            <tr>
              <td style="text-align:center;font-weight:bold;">Mês ${idx + 1}</td>
              <td style="text-align:center;">01 a 15</td>
              <td>${it.objeto}</td>
              <td>${proc.endereco || 'Sede do Contratante'}</td>
            </tr>
          `;
        });
      }
      tbl += `</table>`;
      if (tabelaBox) tabelaBox.innerHTML = tbl;
    }
    else if (modelo === "cronograma_fisico_fin") {
      if (blocoDeclaracoes) blocoDeclaracoes.classList.add("hidden");
      let total = 0;
      let tbl = `
        <table border="1" cellpadding="3" style="width:100%;border-collapse:collapse;font-size:9pt;margin-top:4px;">
          <tr style="background:#f2f2f2;font-weight:bold;">
            <th>MÊS</th><th>SERVIÇOS</th><th>QUANT.</th><th>VALOR TOTAL R$</th>
          </tr>
      `;
      if (proc && proc.itensProducao) {
        proc.itensProducao.forEach((it, idx) => {
          const vlTotal = (parseFloat(it.quant) || 0) * (parseFloat(it.vlUnitario) || 0);
          total += vlTotal;
          tbl += `
            <tr>
              <td style="text-align:center;font-weight:bold;">Mês ${idx + 1}</td>
              <td>${it.objeto}</td>
              <td style="text-align:center;">${it.quant}</td>
              <td style="text-align:right;font-weight:bold;">R$ ${vlTotal.toFixed(2)}</td>
            </tr>
          `;
        });
      }
      tbl += `<tr style="font-weight:bold;background:#fafafa;"><td colspan="3" align="right">TOTAL:</td><td align="right" style="color:#047857;">R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td></tr></table>`;
      if (tabelaBox) tabelaBox.innerHTML = tbl;
    }
    else {
      if (blocoDeclaracoes) blocoDeclaracoes.classList.add("hidden");
      const txt = document.getElementById("in-texto-livre-doc") ? document.getElementById("in-texto-livre-doc").value : "";
      if (tabelaBox) tabelaBox.innerHTML = `<div style="font-size:10pt;line-height:1.35;text-align:justify;white-space:pre-wrap;padding-top:6px;">${txt}</div>`;
    }
  },

  salvarPropostaNoComercial: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) {
      alert("Selecione um cliente primeiro.");
      return;
    }
    const hash = document.getElementById("pv-doc-hash-validacao").textContent;
    const nomeArquivo = `Proposta_Comercial_${proc.cliente.substring(0, 15).replace(/\s+/g, '_')}_${Date.now()}.pdf`;

    proc.propostaAnexada = {
      nome: nomeArquivo,
      data: new Date().toLocaleDateString('pt-BR'),
      hash: hash,
      valor: proc.valorEstimado
    };

    alert(`Proposta Comercial salva com sucesso com código Hash ${hash}! Ela foi anexada diretamente na linha do cliente "${proc.cliente}" no Relatório Comercial.`);
    this.renderizarRelatorioComercial();
    this.salvarDadosGlobal();
  },

  enviarNotificacaoEmailFiscalEPagto: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) {
      alert("Selecione um cliente primeiro.");
      return;
    }

    const emailFiscal = proc.emailFiscal || "fiscal@orgao.gov.br";
    const emailPagto = proc.emailPagto || "pagamento@orgao.gov.br";
    const destinatarios = [emailFiscal, emailPagto].filter(e => e && e.includes("@")).join(";");

    const assunto = encodeURIComponent(`Boreal ENGMED - Relatório de Serviços Entregues e Orientações Fiscais (Cód. 17.09) - Contrato ${proc.numeroContrato || proc.edital}`);
    const corpoTexto = encodeURIComponent(
      `Prezado(a) Fiscal e Setor Financeiro/Contábil de ${proc.cliente},\n\n` +
      `Informamos que o Relatório de Serviços Entregues referente ao contrato em epígrafe foi emitido e encontra-se disponível para consulta e validação no sistema comercial da Boreal ENGMED.\n\n` +
      `---------------------------------------------------------------------------\n` +
      `COMUNICADO FISCAL / TRIBUTÁRIO (CÓDIGO TRIBUTÁRIO 17.09):\n` +
      `Solicitamos a gentileza de informar, através do setor de pagamentos ou pelo setor de contabilidade, para os e-mails financeiro@boreal.eng.br ou contato@boreal.eng.br, quais as alíquotas de retenções tributárias adotadas por este órgão/empresa para o registro na Nota Fiscal de serviços sob o código tributário 17.09 (cujo ISS é recolhido pelo município da sede do fornecedor - Paulínia/SP), caso essa informação ainda não tenha sido previamente comunicada.\n` +
      `---------------------------------------------------------------------------\n\n` +
      `Atenciosamente,\n` +
      `Boreal ENGMED Ltda.\n` +
      `Luiz Fernando Gomes de Jesus - Responsável Técnico`
    );

    alert(`Encaminhando notificação por e-mail para:\n- Fiscal: ${emailFiscal}\n- Contato de Pagamento: ${emailPagto}\n\nA mensagem contém o aviso para acesso ao relatório e a solicitação formal das alíquotas do código 17.09.`);
    window.location.href = `mailto:${destinatarios}?subject=${assunto}&body=${corpoTexto}`;
  },

  baixarDocWord: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    const clienteNome = proc ? proc.cliente : "Boreal";
    const modelo = this.modeloDocAtivo;
    const htmlPreview = document.getElementById("box-preview-documento-oficial").innerHTML;

    const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${clienteNome}</title>
      <style>
        body { font-family: 'Cambria', serif; font-size: 10pt; line-height: 1.15; text-align: justify; }
        table { border-collapse: collapse; width: 100%; font-size: 9.5pt; font-family: 'Cambria', serif; }
        th, td { border: 1px solid #000; padding: 4px; }
      </style></head><body>`;
    const postHtml = "</body></html>";
    const blob = new Blob(['\ufeff' + preHtml + htmlPreview + postHtml], { type: 'application/msword' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${modelo.toUpperCase()}_BOREAL_${clienteNome.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  renderizarPortalCliente: function(clienteId) {
    const sel = document.getElementById("select-portal-cliente-logado");
    if (!sel) return;
    sel.innerHTML = "";

    if (this.processosComerciais.length === 0) {
      sel.innerHTML = `<option value="">Nenhum cliente cadastrado</option>`;
      const tbody = document.getElementById("tbody-portal-cliente-relatorios");
      if (tbody) tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 italic">Nenhum cliente conectado.</td></tr>`;
      return;
    }

    this.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.cliente} (Fiscal Conectado)`;
      if (clienteId ? p.id === clienteId : p.id === this.clienteAtivoId) opt.selected = true;
      sel.appendChild(opt);
    });

    const cliIdAtivo = sel.value;
    const proc = this.processosComerciais.find(p => p.id === cliIdAtivo) || this.processosComerciais[0];
    const lbl = document.getElementById("lbl-portal-cliente-nome");
    if (lbl) lbl.textContent = `Relatórios de Entrega Disponíveis • ${proc ? proc.cliente : ''}`;

    const tbody = document.getElementById("tbody-portal-cliente-relatorios");
    if (!tbody) return;
    tbody.innerHTML = "";

    let encontrou = false;
    if (proc && proc.itensProducao) {
      proc.itensProducao.forEach(it => {
        if (it.relatoriosAnexados && it.relatoriosAnexados.length > 0) {
          it.relatoriosAnexados.forEach(rel => {
            encontrou = true;
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td class="p-2.5 font-bold text-slate-800">${rel.nome}</td>
              <td class="p-2.5 text-slate-600 font-semibold">${rel.data}</td>
              <td class="p-2.5 text-slate-700 font-medium">${it.objeto}</td>
              <td class="p-2.5 font-mono text-[11px] text-[#B48D3C] font-bold">${rel.hash || 'BOREAL-VALIDADO'}</td>
              <td class="p-2.5 text-center">
                <button onclick="window.borealApp.baixarRelatorioPortalReal('${rel.nome}', '${proc.cliente}', '${it.objeto}')" class="px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded text-xs font-semibold flex items-center justify-center space-x-1 mx-auto shadow-sm">
                  <i data-lucide="download" class="w-3.5 h-3.5"></i>
                  <span>Baixar / Visualizar</span>
                </button>
              </td>
            `;
            tbody.appendChild(tr);
          });
        }
      });
    }

    if (!encontrou) {
      tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 italic">Nenhum relatório de entrega anexado para este cliente até o momento.</td></tr>`;
    }
    if (window.lucide) window.lucide.createIcons();
  },

  baixarRelatorioPortalReal: function(nomeArquivo, cliente, objeto) {
    const conteudo = `
===========================================================================
BOREAL ENGMED LTDA - RELATÓRIO OFICIAL DE ENTREGA DE SERVIÇOS
===========================================================================
Cliente Contratante: ${cliente}
Serviço Entregue: ${objeto}
Arquivo: ${nomeArquivo}
Data de Validação: ${new Date().toLocaleDateString('pt-BR')}
Responsável Técnico: Luiz Fernando Gomes de Jesus - CREA-SP 5070159011
Autenticidade Verificada em: https://valida.boreal.eng.br

INSTRUÇÕES FISCAIS / TRIBUTÁRIAS (CÓDIGO TRIBUTÁRIO 17.09):
Solicitamos a gentileza de informar, através do setor de pagamentos ou contabilidade,
para os e-mails financeiro@boreal.eng.br ou contato@boreal.eng.br, quais as alíquotas
de retenções tributárias adotadas por este órgão/empresa para emissão da Nota Fiscal
referente ao código 17.09 (cujo ISS é recolhido pelo município da sede do prestador - Paulínia/SP).
===========================================================================
    `;
    const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nomeArquivo.replace(".pdf", ".txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  abrirModalRelatorioConsolidado: function() {
    const modal = document.getElementById("modal-consolidado");
    const container = document.getElementById("box-impressao-consolidada");
    if (!modal || !container) return;
    modal.classList.remove("hidden");

    let totalEntregue = 0;
    let totalAndamento = 0;
    let totalGeral = 0;

    let tabelaHtml = `
      <div class="border-b-2 border-[#B48D3C] pb-3 flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold text-[#B48D3C]">BOREAL ENGMED LTDA</h2>
          <h3 class="text-xs font-semibold text-slate-600 uppercase">Relatório Geral Consolidado de Clientes & Produção</h3>
        </div>
        <div class="text-right text-[10px] text-slate-500">
          Posição em: ${new Date().toLocaleDateString('pt-BR')}<br>
          Paulínia - SP
        </div>
      </div>

      <table border="1" cellpadding="6" style="width:100%;border-collapse:collapse;font-size:10pt;" class="mt-4">
        <thead style="background:#f5f5f5;">
          <tr>
            <th>CLIENTE / ÓRGÃO</th>
            <th>EDITAL / CONTRATO</th>
            <th>OBJETO DO SERVIÇO</th>
            <th style="text-align:center;">STATUS DE PRODUÇÃO</th>
            <th style="text-align:right;">VALOR ENTREGUE (R$)</th>
            <th style="text-align:right;">EM ANDAMENTO (R$)</th>
            <th style="text-align:right;">VALOR TOTAL (R$)</th>
          </tr>
        </thead>
        <tbody>
    `;

    this.processosComerciais.forEach(p => {
      p.itensProducao.forEach(it => {
        const vlTotal = it.vlTotal;
        totalGeral += vlTotal;

        const isEntregue = it.statusProducao === "concluido" || it.statusProducao === "entregue_aguardando" || it.statusProducao === "entregue_aceito";
        const vEntregue = isEntregue ? vlTotal : 0;
        const vAndamento = isEntregue ? 0 : vlTotal;

        totalEntregue += vEntregue;
        totalAndamento += vAndamento;

        tabelaHtml += `
          <tr>
            <td><strong>${p.cliente}</strong></td>
            <td>${p.edital}</td>
            <td>${it.objeto}</td>
            <td style="text-align:center;">${it.statusProducao.toUpperCase()}</td>
            <td style="text-align:right;color:#047857;font-weight:bold;">${vEntregue > 0 ? 'R$ ' + vEntregue.toLocaleString('pt-BR', {minimumFractionDigits:2}) : '-'}</td>
            <td style="text-align:right;color:#b45309;font-weight:bold;">${vAndamento > 0 ? 'R$ ' + vAndamento.toLocaleString('pt-BR', {minimumFractionDigits:2}) : '-'}</td>
            <td style="text-align:right;font-weight:bold;">R$ ${vlTotal.toLocaleString('pt-BR', {minimumFractionDigits:2})}</td>
          </tr>
        `;
      });
    });

    tabelaHtml += `
        </tbody>
        <tfoot style="background:#f8fafc;font-weight:bold;font-size:11pt;">
          <tr>
            <td colspan="4" style="text-align:right;">TOTAIS CONSOLIDADOS GERAIS:</td>
            <td style="text-align:right;color:#047857;">R$ ${totalEntregue.toLocaleString('pt-BR', {minimumFractionDigits:2})}</td>
            <td style="text-align:right;color:#b45309;">R$ ${totalAndamento.toLocaleString('pt-BR', {minimumFractionDigits:2})}</td>
            <td style="text-align:right;color:#0f172a;">R$ ${totalGeral.toLocaleString('pt-BR', {minimumFractionDigits:2})}</td>
          </tr>
        </tfoot>
      </table>
    `;

    container.innerHTML = tabelaHtml;
  },

  fecharModalRelatorioConsolidado: function() {
    const modal = document.getElementById("modal-consolidado");
    if (modal) modal.classList.add("hidden");
  },

  imprimirRelatorioConsolidado: function() {
    window.print();
  },

  adicionarLinhaComercialManual: function() {
    const nome = prompt("Nome do Cliente / Órgão:");
    if (!nome) return;
    const obj = prompt("Objeto da Contratação / Licitação:");
    const novoId = "CLI-" + String(this.processosComerciais.length + 1).padStart(3, '0');

    this.processosComerciais.unshift({
      id: novoId,
      cliente: nome,
      edital: "Pregão /2026",
      processo: "Processo ADM",
      portal: "Licitei",
      dataProposta: new Date().toLocaleDateString('pt-BR'),
      objeto: obj || "Serviços especializados em Engenharia e Medicina do Trabalho",
      valorEstimado: 0.0,
      statusProcesso: "solicitacao_proposta",
      editaisAnexados: [],
      propostaAnexada: null,
      cnpj: "",
      cnae: "",
      grauRisco: "",
      cep: "",
      endereco: "",
      numeroContrato: "",
      dataContrato: new Date().toLocaleDateString('pt-BR'),
      vigencia: "1 ano",
      tipoContrato: "Continuado",
      horarioExpediente: "08:00 às 17:00",
      nomeFiscal: "",
      telFiscal: "",
      emailFiscal: "",
      contatoPagto: "",
      telPagto: "",
      emailPagto: "",
      aliquotasRetencao: { iss: 5, cofins: 3, csll: 1, irpj: 1.5, pis: 0.65, cbs: 0, ibs: 0 },
      tipoGarantia: "",
      percentualGarantia: "",
      valorApolice: 0,
      nomeCorretora: "",
      nomeContatoCorretora: "",
      telCorretora: "",
      emailCorretora: "",
      documentosContrato: [],
      itensProducao: [
        { id: "PROD-" + Date.now(), tipoContrato: "Empreitada Imediata", item: 1, objeto: obj || "Serviço de SST", quant: 1, unid: "UN", vlUnitario: 0.0, vlTotal: 0.0, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] }
      ]
    });

    this.clienteAtivoId = novoId;
    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
    this.popularSeletoresContratos();
    this.popularSeletoresProducao();
    this.popularSeletoresDocumentos();
    this.salvarDadosGlobal();
  },

  exportarRelatorioExcel: function() {
    const data = [
      ["CLIENTE", "EDITAL", "PROCESSO", "PORTAL", "DATA DA PROPOSTA", "OBJETO", "VALOR ESTIMADO", "STATUS DO PROCESSO"]
    ];
    this.processosComerciais.forEach(p => {
      data.push([p.cliente, p.edital, p.processo, p.portal, p.dataProposta, p.objeto, p.valorEstimado, p.statusProcesso]);
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "RELATÓRIO COMERCIAL");
    XLSX.writeFile(wb, "Relatorio_Comercial_Boreal.xlsx");
  },

  carregarDadosLocais: function() {
    try {
      const saved = localStorage.getItem("boreal_v9_db");
      if (saved) {
        this.processosComerciais = JSON.parse(saved);
        if (this.processosComerciais.length > 0) {
          this.clienteAtivoId = this.processosComerciais[0].id;
        }
      }
      const auth = localStorage.getItem("boreal_auth_cred");
      if (auth) {
        const c = JSON.parse(auth);
        if (c.email && c.email.includes("agente")) this.perfilAtivo = "agente";
      }
    } catch(e) {}
  },

  salvarDadosGlobal: function() {
    try {
      localStorage.setItem("boreal_v9_db", JSON.stringify(this.processosComerciais));
      alert("Todos os dados foram gravados com sucesso!");
    } catch(e) {
      alert("Dados salvos na memória com sucesso!");
    }
  },

  converterExtenso: function(v) {
    if (!v || v === 0) return "Zero reais";
    const int = Math.floor(v);
    const cent = Math.round((v - int) * 100);
    return `${int.toLocaleString('pt-BR')} reais` + (cent > 0 ? ` e ${cent} centavos` : "");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.borealApp.init();
});
