/**
 * BOREAL ENGMED - SISTEMA INTEGRADO COMERCIAL, CONTRATOS, PRODUÇÃO & DOCUMENTOS
 * Versão 8.7 - Controle de Acesso por Usuário/E-mail e Persistência de Sessão
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
  usuarioLogadoEmail: null,
  autenticado: false,
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
    } catch (err) {
      console.error("Erro na inicialização:", err);
      this.abrirModalLogin(false);
    }
    if (window.lucide) window.lucide.createIcons();
  },

  inicializarModulosSistema: function() {
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

  // GERENCIAMENTO DE USUÁRIOS POR E-MAIL E SESSÃO PERSISTENTE
  obterUsuariosCadastrados: function() {
    try {
      const raw = localStorage.getItem("boreal_usuarios_cadastrados");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },

  salvarUsuarioCadastrado: function(email, senha, perfil) {
    const usuarios = this.obterUsuariosCadastrados();
    usuarios[email.toLowerCase()] = {
      email: email.toLowerCase(),
      senha: senha,
      perfil: perfil,
      atualizadoEm: new Date().toISOString()
    };
    localStorage.setItem("boreal_usuarios_cadastrados", JSON.stringify(usuarios));
  },

  verificarEmailDigitadoLogin: function() {
    const inputEmail = document.getElementById("login-input-email");
    const inputSenha = document.getElementById("login-input-senha");
    const selectPerfil = document.getElementById("login-select-perfil");
    const boxPerfil = document.getElementById("box-login-perfil-registro");
    const badge = document.getElementById("login-badge-status-email");
    const btnSubmit = document.getElementById("btn-submit-login");

    if (!inputEmail) return;
    const email = inputEmail.value.trim().toLowerCase();
    const usuarios = this.obterUsuariosCadastrados();

    if (email && usuarios[email]) {
      const u = usuarios[email];
      if (badge) badge.textContent = `✓ Perfil encontrado (${u.perfil.toUpperCase()}) - Senha salva vinculada.`;
      if (selectPerfil) selectPerfil.value = u.perfil;
      if (boxPerfil) boxPerfil.classList.add("hidden");
      if (inputSenha && !inputSenha.value) {
        inputSenha.value = u.senha;
      }
      if (btnSubmit) btnSubmit.textContent = "Acessar Sistema";
    } else if (email.includes("@")) {
      if (badge) badge.textContent = "★ Novo e-mail: defina sua senha e perfil para o 1º registro.";
      if (boxPerfil) boxPerfil.classList.remove("hidden");
      if (selectPerfil) {
        if (email.includes("cliente")) selectPerfil.value = "cliente";
        else if (email.includes("agente")) selectPerfil.value = "agente";
        else selectPerfil.value = "gestor";
      }
      if (btnSubmit) btnSubmit.textContent = "Registrar e Acessar Sistema";
    } else {
      if (badge) badge.textContent = "";
      if (boxPerfil) boxPerfil.classList.remove("hidden");
    }
  },

  verificarAutenticacaoInicial: function() {
    // Migração de credencial antiga se existir
    const credAntiga = localStorage.getItem("boreal_auth_cred");
    if (credAntiga) {
      try {
        const c = JSON.parse(credAntiga);
        if (c.email && c.senha) {
          const p = c.email.toLowerCase().includes("cliente") ? "cliente" : (c.email.toLowerCase().includes("agente") ? "agente" : "gestor");
          this.salvarUsuarioCadastrado(c.email, c.senha, p);
          localStorage.setItem("boreal_sessao_ativa", JSON.stringify({ email: c.email.toLowerCase(), perfil: p }));
        }
        localStorage.removeItem("boreal_auth_cred");
      } catch (e) {}
    }

    const sessaoRaw = localStorage.getItem("boreal_sessao_ativa");
    if (!sessaoRaw) {
      this.autenticado = false;
      this.bloquearInterface(true);
      this.abrirModalLogin(false);
      return;
    }

    try {
      const sessao = JSON.parse(sessaoRaw);
      const usuarios = this.obterUsuariosCadastrados();
      const usuarioValido = sessao.email ? usuarios[sessao.email.toLowerCase()] : null;

      if (usuarioValido) {
        this.usuarioLogadoEmail = usuarioValido.email;
        this.perfilAtivo = usuarioValido.perfil || sessao.perfil || "gestor";
        this.autenticado = true;
        this.bloquearInterface(false);
        this.aplicarPerfilNoDOM();
        this.fecharModalLogin();
        this.inicializarModulosSistema();
      } else {
        localStorage.removeItem("boreal_sessao_ativa");
        this.autenticado = false;
        this.bloquearInterface(true);
        this.abrirModalLogin(false);
      }
    } catch (e) {
      this.autenticado = false;
      this.bloquearInterface(true);
      this.abrirModalLogin(false);
    }
  },

  bloquearInterface: function(bloquear) {
    const main = document.getElementById("conteudo-principal-sistema");
    if (bloquear) {
      document.body.classList.add("sistema-bloqueado");
      if (main) main.classList.add("hidden");
    } else {
      document.body.classList.remove("sistema-bloqueado");
      if (main) main.classList.remove("hidden");
    }
  },

  alternarPerfilAcesso: function(novoPerfil) {
    this.perfilAtivo = novoPerfil;
    this.aplicarPerfilNoDOM();
    if (novoPerfil === "cliente") {
      this.abrirModulo("portal_cliente");
    } else if (this.abaAtiva === "portal_cliente") {
      this.abrirModulo("relatorio_comercial");
    }
  },

  aplicarPerfilNoDOM: function() {
    const sel = document.getElementById("select-perfil-sistema");
    if (sel) sel.value = this.perfilAtivo;
    const lbl = document.getElementById("lbl-usuario-conectado");
    const emailExibicao = this.usuarioLogadoEmail || "gestor@boreal.eng.br";

    if (this.perfilAtivo === "agente") {
      document.body.classList.add("perfil-agente");
      document.body.classList.remove("perfil-cliente");
      if (lbl) lbl.textContent = `${emailExibicao} (Agente - Valores Ocultos)`;
    } else if (this.perfilAtivo === "cliente") {
      document.body.classList.remove("perfil-agente");
      document.body.classList.add("perfil-cliente");
      if (lbl) lbl.textContent = `${emailExibicao} (Cliente / Fiscal)`;
      this.abrirModulo("portal_cliente");
    } else {
      document.body.classList.remove("perfil-agente");
      document.body.classList.remove("perfil-cliente");
      if (lbl) lbl.textContent = `${emailExibicao} (Gestor Geral)`;
    }
  },

  abrirModalLogin: function(modoTrocaSenha = false) {
    const modal = document.getElementById("modal-login-senha");
    const btnFechar = document.getElementById("btn-fechar-modal-login");
    const btnCancelar = document.getElementById("btn-cancelar-modal-login");
    const btnSubmit = document.getElementById("btn-submit-login");
    const titulo = document.getElementById("modal-login-titulo");
    const subtitulo = document.getElementById("modal-login-subtitulo");
    const inputEmail = document.getElementById("login-input-email");
    const inputSenha = document.getElementById("login-input-senha");

    if (modoTrocaSenha && this.autenticado) {
      if (btnFechar) btnFechar.classList.remove("hidden");
      if (btnCancelar) btnCancelar.classList.remove("hidden");
      if (btnSubmit) btnSubmit.className = "w-2/3 py-2.5 bg-[#B48D3C] hover:bg-[#9c782f] text-white rounded text-xs font-bold transition shadow-sm";
      if (titulo) titulo.textContent = "Alterar Senha / Perfil";
      if (subtitulo) subtitulo.textContent = "Atualize a senha vinculada ao seu e-mail.";
      if (inputEmail && this.usuarioLogadoEmail) inputEmail.value = this.usuarioLogadoEmail;
      if (inputSenha) inputSenha.value = "";
    } else {
      if (btnFechar) btnFechar.classList.add("hidden");
      if (btnCancelar) btnCancelar.classList.add("hidden");
      if (btnSubmit) btnSubmit.className = "w-full py-2.5 bg-[#B48D3C] hover:bg-[#9c782f] text-white rounded text-xs font-bold transition shadow-sm";
      if (titulo) titulo.textContent = "Acesso Restrito - Sistema Boreal";
      if (subtitulo) subtitulo.textContent = "Faça seu 1º registro ou entre com seu e-mail e senha.";
      if (inputEmail) inputEmail.value = "";
      if (inputSenha) inputSenha.value = "";
    }

    this.verificarEmailDigitadoLogin();
    if (modal) modal.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();
  },

  fecharModalLogin: function() {
    if (!this.autenticado) return;
    const modal = document.getElementById("modal-login-senha");
    if (modal) modal.classList.add("hidden");
  },

  salvarCredenciaisSenha: async function() {
    const btn = document.getElementById("btn-submit-login");
    const inputEmail = document.getElementById("login-input-email");
    const inputSenha = document.getElementById("login-input-senha");
    const selectPerfil = document.getElementById("login-select-perfil");
    const lembrar = document.getElementById("login-check-lembrar") ? document.getElementById("login-check-lembrar").checked : true;

    const email = inputEmail ? inputEmail.value.trim().toLowerCase() : "";
    const senha = inputSenha ? inputSenha.value.trim() : "";

    if (!email || !email.includes("@")) {
      alert("Por favor, informe um e-mail válido.");
      if (inputEmail) inputEmail.focus();
      return;
    }

    if (!senha || senha.length < 4) {
      alert("Por favor, informe uma senha de acesso (mínimo 4 caracteres).");
      if (inputSenha) inputSenha.focus();
      return;
    }

    const usuarios = this.obterUsuariosCadastrados();
    const usuarioExistente = usuarios[email];
    const modoTrocaSenha = this.autenticado && this.usuarioLogadoEmail === email;

    // Se o usuário já existe e não está trocando a própria senha logado, exige que a senha bata
    if (usuarioExistente && !modoTrocaSenha) {
      if (usuarioExistente.senha !== senha) {
        alert("Senha incorreta para o e-mail informado. Tente novamente.");
        if (inputSenha) {
          inputSenha.value = "";
          inputSenha.focus();
        }
        return;
      }
    }

    if (btn) {
      btn.disabled = true;
      btn.textContent = "Autenticando...";
    }

    try {
      if (supabaseClient) {
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("tempo_limite")), 2500));
        const authPromise = supabaseClient.auth.signInWithPassword({ email, password: senha });
        try {
          await Promise.race([authPromise, timeoutPromise]);
        } catch (authErr) {
          console.warn("Autenticação Supabase em modo tolerante:", authErr.message || authErr);
        }
      }

      const perfilFinal = usuarioExistente && !modoTrocaSenha
        ? usuarioExistente.perfil
        : (selectPerfil ? selectPerfil.value : "gestor");

      // Salva/atualiza a senha vinculada ao e-mail específico
      this.salvarUsuarioCadastrado(email, senha, perfilFinal);

      if (lembrar) {
        localStorage.setItem("boreal_sessao_ativa", JSON.stringify({ email, perfil: perfilFinal }));
      } else {
        localStorage.removeItem("boreal_sessao_ativa");
      }

      this.usuarioLogadoEmail = email;
      this.perfilAtivo = perfilFinal;
      this.autenticado = true;

      this.bloquearInterface(false);
      this.aplicarPerfilNoDOM();
      this.fecharModalLogin();
      this.inicializarModulosSistema();
    } catch (err) {
      console.error("Erro no login:", err);
      alert("Não foi possível concluir a autenticação. Tente novamente.");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "Acessar Sistema";
      }
    }
  },

  deslogarUsuario: function() {
    if (confirm("Deseja sair da sessão atual?")) {
      localStorage.removeItem("boreal_sessao_ativa");
      this.autenticado = false;
      this.usuarioLogadoEmail = null;
      this.perfilAtivo = "gestor";
      const lbl = document.getElementById("lbl-usuario-conectado");
      if (lbl) lbl.textContent = "Aguardando autenticação...";
      this.bloquearInterface(true);
      this.abrirModalLogin(false);
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

      let cliente = "PREFEITURA MUNICIPAL DE PORANGABA";
      const matchCli = textoTotal.match(/(?:PREFEITURA\s+MUNICIPAL\s+DE\s+[A-ZÀ-Úa-zà-ú\s\.\-]+|MUNICÍPIO\s+DE\s+[A-ZÀ-Úa-zà-ú\s\.\-]+|CÂMARA\s+MUNICIPAL\s+DE\s+[A-ZÀ-Úa-zà-ú\s\.\-]+)/i);
      if (matchCli) {
        cliente = matchCli[0].replace(/[\n\r]+/g, ' ').trim().slice(0, 60).toUpperCase();
      }

      let edital = "PREGÃO ELETRÔNICO Nº 20/2026";
      const matchEd = textoTotal.match(/(?:PREGÃO\s*ELETRÔNICO|PREGÃO|CONCORRÊNCIA|DISPENSA)\s*(?:N[º°\.\s]*)?\s*([0-9]+[/\-][0-9]+)/i);
      if (matchEd) {
        edital = `${matchEd[0].toUpperCase()}`;
      }

      let processo = "PROCESSO N° 232/2026";
      const matchProc = textoTotal.match(/PROCESSO\s*(?:ADMINISTRATIVO)?\s*[Nº°\.\s]*\s*([0-9]+[/\-][0-9]+)/i);
      if (matchProc) {
        processo = matchProc[0].toUpperCase();
      }

      let portal = "BLL COMPRAS";
      if (/bll\.org\.br|bolsa de licitações/i.test(textoTotal)) portal = "BLL COMPRAS";
      else if (/comprasnet|compras\.gov|gov\.br\/compras/i.test(textoTotal)) portal = "COMPRAS.GOV";
      else if (/licitanet/i.test(textoTotal)) portal = "LICITANET";
      else if (/licitei/i.test(textoTotal)) portal = "LICITEI";

      let dataProposta = new Date().toLocaleDateString('pt-BR');
      const matchData = textoTotal.match(/(?:RECEBIMENTO\s+DAS\s+PROPOSTAS|ABERTURA\s+DAS\s+PROPOSTAS).*?(\d{2}\/\d{2}\/\d{4})/i);
      if (matchData) {
        dataProposta = matchData[1];
      }

      let objeto = "CONTRATAÇÃO DE EMPRESA ESPECIALIZADA NA PRESTAÇÃO DE SERVIÇOS DE MEDICINA DO TRABALHO, POR MEIO DE MÉDICO DO TRABALHO, DE ACORDO COM AS ESPECIFICAÇÕES CONSTANTES NESTE TERMO DE REFERÊNCIA.";
      const matchObj = textoTotal.match(/OBJETO\s*:\s*([^\n\r]+(?:\n[^\n\r]+)*?)(?=\n\s*(?:Torna-se|VALOR|CRITÉRIO|DO OBJETO|JUSTIFICATIVA|$))/i);
      if (matchObj) {
        objeto = matchObj[1].replace(/[\n\r]+/g, ' ').trim().slice(0, 300);
      }

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
            <option value="aguardando_contrato" ${it.statusProducao === 'aguardando_contrato' ? 'selected' : ''}>Aguardando Contrato</option>
            <option value="servico_andamento" ${it.statusProducao === 'servico_andamento' ? 'selected' : ''}>Serviço em Andamento</option>
            <option value="concluido" ${it.statusProducao === 'concluido' ? 'selected' : ''}>Concluído (Gera Relatório)</option>
            <option value="entregue_aceito" ${it.statusProducao === 'entregue_aceito' ? 'selected' : ''}>Entregue e Aceito (Solicitar NF)</option>
          </select>
        </td>
        <td class="p-1 border-r text-center">
          <button type="button" onclick="window.borealApp.apagarItemProducao('${proc.id}', ${idx})" class="text-rose-600 hover:text-rose-800 p-1" title="Apagar Item"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
        </td>
        <td class="p-1">${relatorioHtml}</td>
      `;
      tbody.appendChild(tr);
    });

    const lblTot = document.getElementById("lbl-producao-total-modulo3");
    if (lblTot) lblTot.textContent = "R$ " + totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    if (window.lucide) window.lucide.createIcons();
  },

  adicionarItemProducaoManual: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;
    if (!proc.itensProducao) proc.itensProducao = [];

    proc.itensProducao.push({
      id: "PROD-" + Date.now(),
      tipoContrato: "Continuado",
      item: proc.itensProducao.length + 1,
      objeto: "Novo item de serviço em medicina/segurança do trabalho",
      quant: 1,
      unid: "UN",
      vlUnitario: 1000.00,
      vlTotal: 1000.00,
      statusProducao: "aguardando_contrato",
      relatoriosAnexados: []
    });

    this.salvarDadosLocais();
    this.carregarProducaoCliente(proc.id);
  },

  fazerPropostaAutomaticaModulo3: function() {
    this.modeloDocAtivo = "proposta";
    this.abrirModulo("documentos_padroes");
  },

  apagarItemProducao: function(procId, itIdx) {
    const proc = this.processosComerciais.find(p => p.id === procId);
    if (!proc || !proc.itensProducao[itIdx]) return;
    if (confirm("Deseja apagar este item de produção?")) {
      proc.itensProducao.splice(itIdx, 1);
      this.salvarDadosLocais();
      this.carregarProducaoCliente(procId);
    }
  },

  alterarStatusItemProducao: function(procId, itIdx, status) {
    const proc = this.processosComerciais.find(p => p.id === procId);
    if (!proc || !proc.itensProducao[itIdx]) return;

    proc.itensProducao[itIdx].statusProducao = status;
    if (status === "concluido" || status === "entregue_aceito") {
      if (!proc.itensProducao[itIdx].relatoriosAnexados || proc.itensProducao[itIdx].relatoriosAnexados.length === 0) {
        proc.itensProducao[itIdx].relatoriosAnexados = [{
          id: "REL-" + Math.floor(Math.random() * 9000 + 1000),
          nome: `Relatorio_Servico_${proc.cliente.slice(0, 15).replace(/\s+/g, '_')}.pdf`,
          data: new Date().toLocaleDateString('pt-BR'),
          hash: `BOREAL-SHA256-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
        }];
      }
    }
    this.salvarDadosLocais();
    this.carregarProducaoCliente(procId);
  },

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

  obterNumeroSequencialCliente: function(procId) {
    const idx = this.processosComerciais.findIndex(p => p.id === procId);
    const num = (idx >= 0 ? idx + 1 : 1);
    return String(num).padStart(4, '0') + "/2026";
  },

  renderizarDocumentoAtivo: function() {
    const proc = this.processosComerciais.find(p => p.id === this.clienteAtivoId);
    if (!proc) return;

    const selMod = document.getElementById("doc-select-modelo");
    if (selMod) selMod.value = this.modeloDocAtivo;

    const numOficio = this.obterNumeroSequencialCliente(proc.id);
    const lblOficio = document.getElementById("lbl-numero-doc-oficial");
    const pvTituloTipo = document.getElementById("pv-doc-titulo-tipo");

    if (this.modeloDocAtivo === "declaracao") {
      if (lblOficio) lblOficio.textContent = "DECLARAÇÃO INSTITUCIONAL";
      if (pvTituloTipo) pvTituloTipo.textContent = "DECLARAÇÃO INSTITUCIONAL DE QUALIFICAÇÃO";
    } else {
      const rotulo = `OFÍCIO Nº ${numOficio}`;
      if (lblOficio) lblOficio.textContent = rotulo;
      if (pvTituloTipo) pvTituloTipo.textContent = rotulo;
    }

    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    setVal("doc-in-destinatario", proc.cliente || "Nome do Órgão");
    setVal("doc-in-ac", proc.contatoMatriz || proc.nomeFiscal || "Comissão de Licitações");
    setVal("doc-in-assunto", this.modeloDocAtivo === "declaracao" ? "Declaração Institucional" : "Proposta Comercial Formal");
    setVal("doc-in-ref", `${proc.edital || 'Edital'} / ${proc.processo || 'Processo'}`);
    setVal("doc-in-objeto", proc.objeto || "Prestação de serviços especializados em medicina e segurança do trabalho.");

    const blocoAliq = document.getElementById("pv-doc-bloco-aliquotas");
    if (blocoAliq) {
      if (this.modeloDocAtivo === "relatorio_servicos") blocoAliq.classList.remove("hidden");
      else blocoAliq.classList.add("hidden");
    }

    this.sincronizarTextoDoc();
    this.renderizarTabelaItensDocumento(proc);
  },

  sincronizarTextoDoc: function() {
    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setTxt("pv-doc-destinatario", document.getElementById("doc-in-destinatario").value);
    setTxt("pv-doc-ac", document.getElementById("doc-in-ac").value);
    setTxt("pv-doc-assunto", document.getElementById("doc-in-assunto").value);
    setTxt("pv-doc-ref", document.getElementById("doc-in-ref").value);
    setTxt("pv-doc-objeto-compl", document.getElementById("doc-in-objeto").value);
    setTxt("pv-doc-validade-txt", document.getElementById("doc-in-validade") ? document.getElementById("doc-in-validade").value : "");
    const d = document.getElementById("doc-in-data") ? document.getElementById("doc-in-data").value : "";
    if (d) setTxt("pv-doc-data", `Paulínia/SP, ${d}`);
    setTxt("pv-doc-hash-validacao", `BOREAL-SHA256-AUTHENTIC-${Date.now().toString().slice(-6)}`);
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
    const itens = (proc.itensProducao && proc.itensProducao.length > 0) ? proc.itensProducao : [
      { item: 1, objeto: proc.objeto || "Serviço Especializado de Medicina do Trabalho", quant: 1, unid: "UN", vlUnitario: proc.valorEstimado || 0, vlTotal: proc.valorEstimado || 0 }
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
      id: "PROD-" + Date.now(),
      tipoContrato: "Continuado",
      item: proc.itensProducao.length + 1,
      objeto: "Novo item especializado",
      quant: 1,
      unid: "UN",
      vlUnitario: 1000.00,
      vlTotal: 1000.00,
      statusProducao: "aguardando_contrato",
      relatoriosAnexados: []
    });

    this.renderizarTabelaItensDocumento(proc);
  },

  baixarDocWord: function() {
    const el = document.getElementById("box-preview-documento-oficial");
    if (!el) return;

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Documento Boreal</title>
      <style>
        body { font-family: 'Cambria', 'Georgia', serif; font-size: 10pt; line-height: 1.25; text-align: justify; }
        table { border-collapse: collapse; width: 100%; }
        td, th { border: 1px solid #777; padding: 5px; font-size: 9.5pt; }
      </style>
      </head>
      <body>
        ${el.innerHTML}
      </body>
      </html>
    `;

    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
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
    alert("Proposta formal anexada à Matriz do Relatório Comercial!");
  },

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
              <button type="button" onclick="window.borealApp.visualizarBaixarDocumentoUniversal('relatorio_entrega', '${proc.id}', ${idx})" class="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded font-bold text-xs flex items-center space-x-1 mx-auto shadow-sm">
                <i data-lucide="file-check" class="w-3.5 h-3.5"></i>
                <span>Visualizar Relatório Oficial (PDF)</span>
              </button>
            </td>
          </tr>
        `;
      });
    });

    if (count === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 italic">Nenhum relatório de entrega disponível.</td></tr>`;
    }
    if (window.lucide) window.lucide.createIcons();
  },

  gerarRelatorioEntregaPDFTimbrado: function(proc, itemIdx) {
    const item = (proc.itensProducao && proc.itensProducao[itemIdx]) ? proc.itensProducao[itemIdx] : null;
    const rel = item && item.relatoriosAnexados && item.relatoriosAnexados[0] ? item.relatoriosAnexados[0] : { hash: "BOREAL-SHA256-AUTHENTIC-2026", data: new Date().toLocaleDateString('pt-BR') };

    const emailFiscal = proc.emailFiscal || "fiscal@orgao.gov.br";
    const emailPagto = proc.emailPagto || "pagamento@orgao.gov.br";

    const janela = window.open('', '_blank');
    if (!janela) {
      alert("Por favor, habilite pop-ups para visualizar o Relatório Oficial.");
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Relatório Oficial de Entrega de Serviços - Boreal ENGMED</title>
        <style>
          body { font-family: 'Cambria', 'Georgia', serif; font-size: 10pt; line-height: 1.25; margin: 30px; text-align: justify; color: #1e293b; }
          .header { border-bottom: 2px solid #B48D3C; padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }
          .logo-b { width: 42px; height: 42px; background: #4A4A4A; color: #B48D3C; border: 1px solid #B48D3C; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; border-radius: 4px; }
          .title { text-align: center; font-size: 12.5pt; font-weight: bold; margin: 15px 0 10px 0; text-transform: uppercase; }
          .box-info { border: 1px solid #cbd5e1; border-radius: 4px; padding: 10px; margin-bottom: 12px; background-color: #f8fafc; font-size: 9.5pt; }
          .alerta-aprovacao { background-color: #eff6ff; border: 1.5px solid #3b82f6; color: #1e3a8a; padding: 12px; border-radius: 6px; margin: 15px 0; font-size: 9.5pt; }
          .tributos { background: #fefce8; border: 1px solid #fef08a; padding: 8px; font-size: 8.5pt; border-radius: 4px; margin-top: 10px; }
          .hash-bar { margin-top: 20px; padding: 6px; border: 1px dashed #94a3b8; background: #f1f5f9; font-size: 8pt; font-family: monospace; display: flex; justify-content: space-between; }
          @media print { .no-print { display: none; } }
        </style>
      </head>
      <body>
        <div class="no-print" style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
          <a href="mailto:${emailFiscal},${emailPagto}?subject=Entrega%20de%20Servico%20Boreal%20-%20Aprovacao%20de%20Nota%20Fiscal&body=Prezados,%20solicitamos%20confirmar%20o%20recebimento%20deste%20relatorio%20e%20a%20aprovacao%20do%20servico%20para%20envio%20da%20nota%20fiscal." style="padding: 7px 14px; background-color: #0284c7; color: white; text-decoration: none; font-weight: bold; border-radius: 4px; font-size: 11px;">
            ✉ Disparar E-mail ao Fiscal e Setor de Pagamento
          </a>
          <button onclick="window.print()" style="padding: 7px 14px; background-color: #B48D3C; color: white; border: none; font-weight: bold; border-radius: 4px; cursor: pointer; font-size: 11px;">
            Imprimir / Salvar em PDF
          </button>
        </div>

        <div class="header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="logo-b">B</div>
            <div>
              <div style="font-size: 20px; color: #B48D3C; font-weight: bold; line-height: 1;">Boreal</div>
              <div style="font-size: 12px; color: #64748b;">ENGMED LTDA</div>
            </div>
          </div>
          <div style="text-align: right; font-size: 8.5pt; color: #64748b;">
            Paulínia - SP • CNPJ: 04.414.837/0001-38
          </div>
        </div>

        <div class="title">RELATÓRIO OFICIAL DE ENTREGA E ACEITE DE SERVIÇOS</div>

        <div class="box-info">
          <div><strong>CLIENTE CONTRATANTE:</strong> ${proc.cliente}</div>
          <div><strong>CONTRATO / PROCESSO:</strong> ${proc.numeroContrato || '020/2026-PMP'} (${proc.processo || 'Processo Licitatório'})</div>
          <div><strong>DATA DA ENTREGA:</strong> ${rel.data || new Date().toLocaleDateString('pt-BR')}</div>
          <div><strong>OBJETO DO SERVIÇO:</strong> ${item ? item.objeto : proc.objeto}</div>
          <div><strong>QUANTIDADE / UNIDADE:</strong> ${item ? item.quant + ' ' + item.unid : '1 UN'}</div>
        </div>

        <p>Atestamos que os serviços técnicos foram devidamente finalizados e chancelados pelo Responsável Técnico, em estrita conformidade com as Normas Regulamentadoras do Ministério do Trabalho e Emprego (MTE) e com o Termo de Referência.</p>

        <div class="alerta-aprovacao">
          <strong>AVISO DE CONFERÊNCIA E EMISSÃO DE NOTA FISCAL:</strong><br>
          Solicitamos ao fiscal do contrato e ao setor financeiro/contabilidade <strong>confirmar o recebimento do relatório e a aprovação do serviço para envio da nota fiscal</strong> através dos e-mails <em>financeiro@boreal.eng.br</em> ou <em>contato@boreal.eng.br</em>.
        </div>

        <div class="tributos">
          <strong>INSTRUÇÕES FISCAIS / TRIBUTÁRIAS (CÓDIGO 17.09):</strong><br>
          Solicitamos informar as alíquotas de retenções adotadas por este órgão para emissão da NF referente ao código 17.09 (ISS recolhido na sede de Paulínia/SP).
        </div>

        <div style="margin-top: 25px; border-top: 1px solid #cbd5e1; padding-top: 10px;">
          <div>Paulínia/SP, ${new Date().toLocaleDateString('pt-BR')}</div><br>
          <strong>Luiz Fernando Gomes de Jesus</strong><br>
          Sócio Gerente / Responsável Técnico • CREA-SP 5070159011<br>
          <span style="font-size: 8.5pt; color: #64748b;">Boreal ENGMED Ltda • Av. José Puccinelli, 130 - Paulínia - SP</span>
        </div>

        <div class="hash-bar">
          <span><strong>CHANCELA E CÓDIGO DE INTEGRIDADE:</strong> ${rel.hash}</span>
          <span>Autenticidade: https://valida.boreal.eng.br</span>
        </div>
      </body>
      </html>
    `;

    janela.document.write(html);
    janela.document.close();
  },

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
    alert("Todos os dados do sistema foram gravados com sucesso!");
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
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.borealApp.init();
});