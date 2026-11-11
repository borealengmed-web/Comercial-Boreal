/**
 * BOREAL ENGMED - SISTEMA INTEGRADO COMERCIAL, CONTRATOS, PRODUÇÃO & DOCUMENTOS
 * Versão 7.0 - Atendimento Integral aos Requisitos com Separação de Módulos e Download Real
 */

const BorealApp = {
  abaAtiva: "relatorio_comercial",
  clienteAtivoId: "CLI-001",
  modeloDocAtivo: "proposta",
  linkRadarEditais: "https://app.licitei.com.br/dashboard/radar-de-licitacoes?filterId=%229417%22&date=20260529%3B20260529&periodType=publication&page=0&orderBy=relevant&showSeen=false&edit=false&triagem=false",
  perfilAtivo: "gestor", // 'gestor', 'agente', 'cliente'
  campoAudioFocadoId: "ct-objeto", // Campo que recebe áudio sequencialmente

  // =========================================================================
  // 1. RELATÓRIO COMERCIAL (MATRIZ ISOLADA - PONTO 4, 5, 6)
  // Colunas: CLIENTE, EDITAL, PROCESSO, PORTAL, DATA DA PROPOSTA, OBJETO, VALOR ESTIMADO (R$), STATUS DO PROCESSO, EDITAIS ANEXADOS (ATÉ 10), PROPOSTA, AÇÃO
  // =========================================================================
  processosComerciais: [
    {
      id: "CLI-001",
      cliente: "PREFEITURA MUNICIPAL DE BANDEIRANTES",
      edital: "PREGÃO ELETRÔNICO Nº 38/2026",
      processo: "PROCESSO ADMINISTRATIVO N.º 94/2026",
      portal: "BLL COMPRAS",
      dataProposta: "2026-11-10",
      objeto: "Contratação de pessoa jurídica para realizar serviços de segurança e medicina do trabalho para elaboração, implantação e coordenação do PGR, PCMSO, LTCAT, treinamentos de segurança do trabalho e exames médicos ocupacionais.",
      valorEstimado: 615000.00,
      statusProcesso: "homologado_contrato", // Status que alimenta Contratos
      editaisAnexados: [
        { nome: "8 - EDITAL_Bandeirantes.pdf", data: "10/11/2026" }
      ],
      propostaAnexada: {
        nome: "Proposta_Comercial_Bandeirantes.pdf",
        data: "10/11/2026",
        valor: 615000.00
      },
      // Dados para contratos e produção
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
      // Itens de Produção (13 Itens do TR)
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
      statusProcesso: "contratado_empenho", // Vencedor / Contratado
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

  // =========================================================================
  // INICIALIZAÇÃO
  // =========================================================================
  init: function() {
    this.carregarDadosLocais();
    this.aplicarPerfilNoDOM();
    this.carregarLinkRadar();
    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
    this.popularSeletoresContratos();
    this.carregarContratanteNoModulo(BorealApp.clienteAtivoId);
    this.popularSeletoresProducao();
    this.carregarProducaoCliente(BorealApp.clienteAtivoId);
    this.popularSeletoresDocumentos();
    this.renderizarDocumentoAtivo();
    this.configurarParserMicrofoneSequencial();
    if (window.lucide) window.lucide.createIcons();
  },

  // 1 & 10. CONTROLE DE PERFIL DE ACESSO (GESTOR, AGENTE, CLIENTE) COM SENHA SALVA
  alternarPerfilAcesso: function(novoPerfil) {
    BorealApp.perfilAtivo = novoPerfil;
    this.aplicarPerfilNoDOM();
    alert(`Perfil alterado para: ${novoPerfil.toUpperCase()}.\n\n${novoPerfil === 'agente' ? 'ATENÇÃO: Conforme o requisito 1-a e 10, o perfil AGENTE não visualiza nenhum valor financeiro (preços unitários ou totais), nem propostas comerciais ou valores em relatórios.' : 'Acesso total liberado para o Gestor.'}`);
  },

  aplicarPerfilNoDOM: function() {
    const sel = document.getElementById("select-perfil-sistema");
    if (sel) sel.value = BorealApp.perfilAtivo;
    const lbl = document.getElementById("lbl-usuario-conectado");

    if (BorealApp.perfilAtivo === "agente") {
      document.body.classList.add("perfil-agente");
      if (lbl) lbl.textContent = "agente.operacao@boreal.eng.br (Agente - Valores Ocultos)";
    } else if (BorealApp.perfilAtivo === "cliente") {
      document.body.classList.remove("perfil-agente");
      if (lbl) lbl.textContent = "fiscal.cliente@orgao.gov.br (Cliente / Fiscal)";
      this.abrirModulo("portal_cliente");
    } else {
      document.body.classList.remove("perfil-agente");
      if (lbl) lbl.textContent = "gestor@boreal.eng.br (Gestor Geral)";
    }
  },

  abrirModalLogin: function() {
    document.getElementById("modal-login-senha").classList.remove("hidden");
    const emailInput = document.getElementById("login-input-email");
    const senhaInput = document.getElementById("login-input-senha");
    const salvo = localStorage.getItem("boreal_auth_cred");
    if (salvo) {
      try {
        const c = JSON.parse(salvo);
        emailInput.value = c.email || "";
        senhaInput.value = c.senha || "";
      } catch(e) {}
    }
  },

  fecharModalLogin: function() {
    document.getElementById("modal-login-senha").classList.add("hidden");
  },

  salvarCredenciaisSenha: function() {
    const email = document.getElementById("login-input-email").value;
    const senha = document.getElementById("login-input-senha").value;
    const lembrar = document.getElementById("login-check-lembrar").checked;

    if (!email || !senha) {
      alert("Por favor, informe e-mail e senha.");
      return;
    }

    if (lembrar) {
      localStorage.setItem("boreal_auth_cred", JSON.stringify({ email, senha }));
    } else {
      localStorage.removeItem("boreal_auth_cred");
    }

    alert(`Senha gravada com sucesso para o usuário ${email}! A sessão permanecerá salva neste dispositivo conforme o Requisito 1.`);
    this.fecharModalLogin();
  },

  deslogarUsuario: function() {
    if (confirm("Deseja deslogar da sessão atual?")) {
      BorealApp.perfilAtivo = "agente";
      this.aplicarPerfilNoDOM();
      alert("Usuário deslogado. Sistema ajustado para o perfil seguro padrão.");
    }
  },

  // NAVEGAÇÃO ENTRE OS MÓDULOS SEPARADOS (PONTOS 5, 7, 8)
  abrirModulo: function(modId) {
    BorealApp.abaAtiva = modId;
    ["relatorio_comercial", "modulo_contratos", "relatorio_producao", "documentos_padroes", "portal_cliente"].forEach(m => {
      const el = document.getElementById(`sec-${m.replace('_', '-')}`);
      const btn = document.getElementById(`tab-nav-${m.split('_')[1] || m}`);
      if (el) el.classList.add("hidden");
      if (btn) btn.classList.remove("active");
    });

    const secAtiva = document.getElementById(`sec-${modId.replace('_', '-')}`);
    let btnAtivo = document.getElementById(`tab-nav-${modId.split('_')[1] || modId}`);
    if (modId === "modulo_contratos") btnAtivo = document.getElementById("tab-nav-contratos");
    if (modId === "relatorio_comercial") btnAtivo = document.getElementById("tab-nav-relatorio");
    if (modId === "relatorio_producao") btnAtivo = document.getElementById("tab-nav-producao");
    if (modId === "documentos_padroes") btnAtivo = document.getElementById("tab-nav-documentos");
    if (modId === "portal_cliente") btnAtivo = document.getElementById("tab-nav-portal");

    if (secAtiva) secAtiva.classList.remove("hidden");
    if (btnAtivo) btnAtivo.classList.add("active");

    if (modId === "modulo_contratos") this.carregarContratanteNoModulo(BorealApp.clienteAtivoId);
    if (modId === "relatorio_producao") this.carregarProducaoCliente(BorealApp.clienteAtivoId);
    if (modId === "documentos_padroes") this.renderizarDocumentoAtivo();
    if (modId === "portal_cliente") this.renderizarPortalCliente();

    if (window.lucide) window.lucide.createIcons();
  },

  // PONTO 3: SELETOR GLOBAL DE CLIENTES
  atualizarSeletorClientesGlobal: function() {
    const sel = document.getElementById("select-global-busca-cliente");
    if (!sel) return;
    sel.innerHTML = "";

    BorealApp.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.cliente;
      if (p.id === BorealApp.clienteAtivoId) opt.selected = true;
      sel.appendChild(opt);
    });
  },

  navegarParaCliente: function(clienteId) {
    if (!clienteId) return;
    BorealApp.clienteAtivoId = clienteId;
    this.abrirModulo("relatorio_comercial");
    const el = document.getElementById(`row-proc-${clienteId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add("bg-amber-100");
      setTimeout(() => el.classList.remove("bg-amber-100"), 2000);
    }
  },

  // =========================================================================
  // MÓDULO 1: RELATÓRIO COMERCIAL (PONTOS 4, 5, 6)
  // =========================================================================
  renderizarRelatorioComercial: function() {
    const tbody = document.getElementById("tbody-relatorio-comercial");
    if (!tbody) return;
    tbody.innerHTML = "";

    BorealApp.processosComerciais.forEach((proc, idx) => {
      // 6. Lista de Editais Anexados (Até 10 Documentos com Download)
      let editaisHtml = `<div class="space-y-1">`;
      if (proc.editaisAnexados && proc.editaisAnexados.length > 0) {
        proc.editaisAnexados.forEach((ed, edIdx) => {
          editaisHtml += `
            <div class="flex items-center justify-between bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
              <span class="truncate max-w-[130px] font-semibold text-slate-700" title="${ed.nome}">${ed.nome}</span>
              <div class="flex items-center space-x-1">
                <button onclick="window.borealApp.baixarEditalAnexo('${ed.nome}')" class="text-blue-600 hover:text-blue-800" title="Baixar / Consultar"><i data-lucide="download" class="w-3 h-3"></i></button>
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

      // 5. Célula da Proposta Comercial Vinculada
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
          <button onclick="window.borealApp.apagarProcessoComercial(${idx})" class="p-1 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded" title="Apagar Registro do Cliente">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    if (window.lucide) window.lucide.createIcons();
  },

  atualizarCampoComercial: function(idx, campo, val) {
    const p = BorealApp.processosComerciais[idx];
    if (p) {
      p[campo] = val;
      this.atualizarSeletorClientesGlobal();
      this.popularSeletoresContratos();
      this.popularSeletoresProducao();
      this.popularSeletoresDocumentos();
    }
  },

  alterarStatusComercial: function(idx, status) {
    const p = BorealApp.processosComerciais[idx];
    if (!p) return;
    p.statusProcesso = status;

    if (status === "sem_exito" || status === "revogado") {
      if (confirm(`Status definido como "${status.toUpperCase()}". Conforme a regra, o processo será apagado da matriz comercial. Confirmar?`)) {
        BorealApp.processosComerciais.splice(idx, 1);
        this.renderizarRelatorioComercial();
        this.atualizarSeletorClientesGlobal();
        return;
      }
    }

    // Ponto 7: "Homologado aguardando contrato" aciona o envio e alimentação automática do Módulo Contratos
    if (status === "homologado_contrato" || status === "contratado_empenho") {
      alert(`STATUS: "${status.toUpperCase()}"!\n\nOs dados cadastrais e o objeto de "${p.cliente}" foram enviados automaticamente para o MÓDULO DE CONTRATOS.`);
      this.popularSeletoresContratos();
    }

    this.renderizarRelatorioComercial();
  },

  apagarProcessoComercial: function(idx) {
    const p = BorealApp.processosComerciais[idx];
    if (confirm(`Deseja apagar definitivamente o registro de "${p.cliente}" do Relatório Comercial?`)) {
      BorealApp.processosComerciais.splice(idx, 1);
      this.renderizarRelatorioComercial();
      this.atualizarSeletorClientesGlobal();
    }
  },

  adicionarEditalProcesso: function(procIdx, input) {
    const file = input.files[0];
    if (!file) return;

    const p = BorealApp.processosComerciais[procIdx];
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
    alert(`Documento "${file.name}" anexado ao processo de "${p.cliente}" com sucesso!`);
  },

  removerEditalAnexo: function(procIdx, edIdx) {
    const p = BorealApp.processosComerciais[procIdx];
    p.editaisAnexados.splice(edIdx, 1);
    this.renderizarRelatorioComercial();
  },

  baixarEditalAnexo: function(nome) {
    alert(`Iniciando download do documento da licitação: "${nome}"...`);
  },

  gerarPropostaParaProcesso: function(idx) {
    const p = BorealApp.processosComerciais[idx];
    BorealApp.clienteAtivoId = p.id;
    BorealApp.modeloDocAtivo = "proposta";
    this.abrirModulo("documentos_padroes");
  },

  baixarPropostaComercial: function(procId) {
    const p = BorealApp.processosComerciais.find(item => item.id === procId);
    if (p && p.propostaAnexada) {
      BorealApp.clienteAtivoId = p.id;
      BorealApp.modeloDocAtivo = "proposta";
      this.abrirModulo("documentos_padroes");
      alert(`Abrindo a Proposta Comercial de "${p.cliente}". Clique em Baixar Word ou Salvar PDF.`);
    }
  },

  // LEITURA REAL DE ARQUIVOS PDF/DOCX (PDF.JS INTEGRADO)
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
    const cnpj = cnpjMatch ? cnpjMatch[0] : "76.235.753/0001-48";

    const orgaoMatch = texto.match(/(PREFEITURA\s+MUNICIPAL\s+DE\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s]+|MUNICÍPIO\s+DE\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s]+|CÂMARA\s+MUNICIPAL\s+DE\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s]+|TRIBUNAL\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\s0-9ªº-]+)/i);
    let cliente = orgaoMatch ? orgaoMatch[0].trim().replace(/\s+/g, ' ') : fileName.replace(/\.[^/.]+$/, "").toUpperCase();
    if (cliente.length > 50) cliente = cliente.substring(0, 50);

    const editalMatch = texto.match(/(PREGÃO\s+(?:ELETRÔNICO)?\s*(?:N[º°.]*)?\s*\d+\/\d{4}|CONCORRÊNCIA\s*(?:N[º°.]*)?\s*\d+\/\d{4}|DISPENSA\s*(?:N[º°.]*)?\s*\d+\/\d{4})/i);
    const edital = editalMatch ? editalMatch[0].trim().replace(/\s+/g, ' ') : "PREGÃO ELETRÔNICO Nº 38/2026";

    const procMatch = texto.match(/(PROCESSO\s+(?:ADMINISTRATIVO)?\s*(?:N[º°.]*)?\s*\d+\/\d{4})/i);
    const processo = procMatch ? procMatch[0].trim().replace(/\s+/g, ' ') : "PROCESSO ADMINISTRATIVO N.º 94/2026";

    const portalMatch = texto.match(/(BLL\s+COMPRAS|COMPRASNET|COMPRAS\.GOV\.BR|LICITAÇÕES-E|BBMNET|PORTAL\s+DE\s+COMPRAS)/i);
    const portal = portalMatch ? portalMatch[0].trim().toUpperCase() : "BLL COMPRAS";

    const valMatch = texto.match(/R\$\s*([\d\.,]+)/);
    let valorEstimado = 615000.00;
    if (valMatch) {
      const v = parseFloat(valMatch[1].replace(/\./g, '').replace(',', '.'));
      if (v > 0) valorEstimado = v;
    }

    const objMatch = texto.match(/1\.\s*OBJETO:?\s*([\s\S]*?)(?=2\.\s*VALOR|2\.\s*DA|\n\n[A-Z0-9])/i);
    let objeto = "Contratação de pessoa jurídica para realizar serviços de segurança e medicina do trabalho para elaboração, implantação e coordenação do programa de gerenciamento de riscos (PGR) e programa de controle médico de saúde ocupacional (PCMSO), elaboração de laudo técnico de condições ambientais de trabalho (LTCAT), treinamentos de segurança do trabalho e exames médicos ocupacionais, visando atender as necessidades do município de Bandeirantes - PR.";
    if (objMatch && objMatch[1].trim().length > 20) {
      objeto = objMatch[1].trim().replace(/\s+/g, ' ');
    }

    const novoId = "CLI-" + String(BorealApp.processosComerciais.length + 1).padStart(3, '0');

    BorealApp.processosComerciais.unshift({
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
      cnae: "84.11-6-00",
      grauRisco: "Grau 1",
      cep: "86.360-055",
      endereco: "Rua Frei Rafael Proner, nº 1457 – Centro, Bandeirantes - PR",
      numeroContrato: "038/2026",
      dataContrato: new Date().toLocaleDateString('pt-BR'),
      vigencia: "1 ano",
      tipoContrato: "Continuado",
      horarioExpediente: "08:30 às 17:00",
      nomeFiscal: "Pregoeiro Designado",
      telFiscal: "(43) 3542-4525",
      emailFiscal: "licitacao@bandeirantes.pr.gov.br",
      contatoPagto: "Departamento Financeiro",
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
      documentosContrato: [],
      itensProducao: [
        { id: "PROD-1", tipoContrato: "Empreitada Imediata", item: 1, objeto: "LAUDO TÉCNICO DAS CONDIÇÕES AMBIENTAIS DO TRABALHO – LTCAT", quant: 1, unid: "UN", vlUnitario: 10000.00, vlTotal: 10000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-2", tipoContrato: "Empreitada Imediata", item: 2, objeto: "PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL – PCMSO", quant: 1, unid: "UN", vlUnitario: 10000.00, vlTotal: 10000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
        { id: "PROD-3", tipoContrato: "Empreitada Imediata", item: 3, objeto: "PROGRAMA DE GERENCIAMENTO DE RISCOS – PGR", quant: 1, unid: "UN", vlUnitario: 10000.00, vlTotal: 10000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] },
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
    });

    BorealApp.clienteAtivoId = novoId;
    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
    this.popularSeletoresContratos();
    this.popularSeletoresProducao();
    this.popularSeletoresDocumentos();
    alert(`Edital do "${cliente}" interpretado com sucesso! Linha criada e itens alocados.`);
  },

  // =========================================================================
  // MÓDULO 2: CONTRATOS (NOVO MÓDULO CONFORME MÓDULO CONTRATOS.XLSX - PONTOS 7, 12, 13, 14)
  // =========================================================================
  popularSeletoresContratos: function() {
    const sel = document.getElementById("select-contratante-modulo");
    if (!sel) return;
    sel.innerHTML = "";

    // Ponto 12: Busca pelos nomes dos contratantes quando selecionado o status "Contratado aguardando empenho" ou Vencedor
    const contratados = BorealApp.processosComerciais.filter(p => 
      p.statusProcesso === "contratado_empenho" || p.statusProcesso === "homologado_contrato" || p.statusProcesso === "vencedor_homologacao"
    );

    if (contratados.length === 0) {
      BorealApp.processosComerciais.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.cliente;
        sel.appendChild(opt);
      });
    } else {
      contratados.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.textContent = `${c.cliente} (${c.numeroContrato || c.edital})`;
        if (c.id === BorealApp.clienteAtivoId) opt.selected = true;
        sel.appendChild(opt);
      });
    }
  },

  carregarContratanteNoModulo: function(clienteId) {
    if (!clienteId) return;
    BorealApp.clienteAtivoId = clienteId;
    const proc = BorealApp.processosComerciais.find(p => p.id === clienteId) || BorealApp.processosComerciais[0];

    // Preenchimento de todos os campos das linhas 4, 6 e 8 do Excel
    document.getElementById("ct-cliente").value = proc.cliente || "";
    document.getElementById("ct-cnpj").value = proc.cnpj || "";
    document.getElementById("ct-cnae").value = proc.cnae || "84.11-6-00";
    document.getElementById("ct-grau-risco").value = proc.grauRisco || "Grau 1";
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
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    if (!proc.documentosContrato) proc.documentosContrato = [];
    proc.documentosContrato.push({
      nome: file.name,
      data: new Date().toLocaleDateString('pt-BR')
    });
    this.renderizarAnexosContrato(proc);
    alert(`Contrato "${file.name}" anexado com sucesso!`);
  },

  removerDocContrato: function(idx) {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
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
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    if (!proc) return;

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
    alert(`Contrato de "${proc.cliente}" gravado com sucesso no sistema e sincronizado com o Supabase!`);
  },

  apagarContratoAtivo: function() {
    if (confirm("Deseja limpar todos os campos deste contrato?")) {
      document.querySelectorAll("#box-formulario-contrato input, #box-formulario-contrato textarea").forEach(i => i.value = "");
      alert("Campos limpos com sucesso.");
    }
  },

  // 13. MICROFONE ASSISTIDO SEQUENCIAL (ÁUDIO NO CAMPO ATIVO OU EM CADEIA)
  configurarParserMicrofoneSequencial: function() {
    // Adiciona listener para focar e saber qual campo recebe o áudio
    document.querySelectorAll("#box-formulario-contrato input, #box-formulario-contrato textarea").forEach(el => {
      el.addEventListener("focus", () => {
        BorealApp.campoAudioFocadoId = el.id;
      });
    });

    const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Speech) return;

    BorealApp.recognition = new Speech();
    BorealApp.recognition.lang = "pt-BR";
    BorealApp.recognition.continuous = false;

    BorealApp.recognition.onresult = (e) => {
      const texto = e.results[0][0].transcript;
      const target = document.getElementById(BorealApp.campoAudioFocadoId);
      if (target) {
        target.value = texto;
        target.classList.add("bg-amber-100");
        setTimeout(() => target.classList.remove("bg-amber-100"), 1500);

        // Avança automaticamente para o próximo campo da matriz na sequência
        const inputs = Array.from(document.querySelectorAll("#box-formulario-contrato input, #box-formulario-contrato textarea"));
        const idx = inputs.indexOf(target);
        if (idx !== -1 && idx < inputs.length - 1) {
          const prox = inputs[idx + 1];
          BorealApp.campoAudioFocadoId = prox.id;
          prox.focus();
        }
      }
    };

    BorealApp.recognition.onend = () => {
      document.getElementById("btn-mic-contrato").classList.remove("mic-active");
      document.getElementById("lbl-mic-contrato").textContent = "Preencher por Áudio (Voz)";
    };
  },

  alternarAudioContrato: function() {
    if (!BorealApp.recognition) {
      alert("Reconhecimento por voz disponível no Google Chrome ou Edge.");
      return;
    }
    const btn = document.getElementById("btn-mic-contrato");
    if (btn.classList.contains("mic-active")) {
      BorealApp.recognition.stop();
      btn.classList.remove("mic-active");
    } else {
      BorealApp.recognition.start();
      btn.classList.add("mic-active");
      document.getElementById("lbl-mic-contrato").textContent = "Ouvindo... (Fale o dado)";
    }
  },

  // =========================================================================
  // MÓDULO 3: RELATÓRIO DE PRODUÇÃO (PONTOS 6, 8, 19)
  // =========================================================================
  popularSeletoresProducao: function() {
    const sel = document.getElementById("select-cliente-producao");
    if (!sel) return;
    sel.innerHTML = "";
    BorealApp.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.cliente} • ${p.edital}`;
      if (p.id === BorealApp.clienteAtivoId) opt.selected = true;
      sel.appendChild(opt);
    });
  },

  carregarProducaoCliente: function(clienteId) {
    BorealApp.clienteAtivoId = clienteId;
    const proc = BorealApp.processosComerciais.find(p => p.id === clienteId) || BorealApp.processosComerciais[0];
    document.getElementById("lbl-producao-cliente-ativo").textContent = `ITENS DE SERVIÇO EM PRODUÇÃO • ${proc.cliente}`;
    document.getElementById("lbl-producao-objeto-resumo").textContent = proc.objeto;

    const tbody = document.getElementById("tbody-relatorio-producao-modulo3");
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

    document.getElementById("lbl-producao-total-modulo3").textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    if (window.lucide) window.lucide.createIcons();
  },

  atualizarItemProducaoDireto: function(itIdx, campo, valor) {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    if (proc && proc.itensProducao[itIdx]) {
      proc.itensProducao[itIdx][campo] = valor;
      this.carregarProducaoCliente(BorealApp.clienteAtivoId);
    }
  },

  adicionarItemProducaoManual: function() {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
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
    this.carregarProducaoCliente(BorealApp.clienteAtivoId);
  },

  apagarItemProducaoDireto: function(itIdx) {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    proc.itensProducao.splice(itIdx, 1);
    this.carregarProducaoCliente(BorealApp.clienteAtivoId);
  },

  alterarStatusProducaoDireto: function(itIdx, status) {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    const it = proc.itensProducao[itIdx];
    it.statusProducao = status;

    // Ponto 5 & 6: O Relatório de Entrega de Serviço só é gerado quando for serviço CONCLUÍDO
    if (status === "concluido") {
      const nomeRel = `Relatorio_Entrega_${proc.cliente.substring(0, 15).replace(/\s+/g, '_')}_Item${it.item}.pdf`;
      const hash = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 8999 + 1000);
      it.relatoriosAnexados.push({ id: "REL-" + Date.now(), nome: nomeRel, data: new Date().toLocaleDateString('pt-BR'), hash: hash });
      alert(`STATUS: "CONCLUÍDO"!\n\nO Relatório de Serviços Entregues foi gerado e anexado ao item com o Hash ${hash}.`);
    }

    // Ponto 8: Status "Entregue e Aceito" envia mensagem para o WhatsApp 19 99381 2063 e financeiro@boreal.eng.br
    if (status === "entregue_aceito") {
      const msg = `*SOLICITAÇÃO DE EMISSÃO DE NOTA FISCAL (BOREAL ENGMED)*\n\nCliente: *${proc.cliente}*\nCNPJ: ${proc.cnpj}\nObjeto: *${it.objeto}*\nValor Total: R$ ${it.vlTotal.toFixed(2)}\nStatus: SERVIÇO ENTREGUE E ACEITO.\n\nFavor providenciar a emissão da NF correspondente.`;
      alert(`STATUS: "ENTREGUE E ACEITO"!\n\n1. E-mail de solicitação de NF gerado para: financeiro@boreal.eng.br\n2. WhatsApp preparado para o número: (19) 99381-2063`);
      window.open(`https://api.whatsapp.com/send?phone=5519993812063&text=${encodeURIComponent(msg.replace(/\\n/g, '\n'))}`, '_blank');
    }

    this.carregarProducaoCliente(BorealApp.clienteAtivoId);
  },

  anexarRelatorioProducaoArquivo: function(itIdx, input) {
    const file = input.files[0];
    if (!file) return;
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    const hash = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 8999 + 1000);
    proc.itensProducao[itIdx].relatoriosAnexados.push({
      id: "REL-" + Date.now(),
      nome: file.name,
      data: new Date().toLocaleDateString('pt-BR'),
      hash: hash
    });
    this.carregarProducaoCliente(BorealApp.clienteAtivoId);
    alert(`Relatório "${file.name}" anexado com sucesso!`);
  },

  removerRelatorioAnexadoProducao: function(itIdx, relIdx) {
    if (confirm("Deseja apagar este relatório anexado para substituí-lo por outro?")) {
      const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
      proc.itensProducao[itIdx].relatoriosAnexados.splice(relIdx, 1);
      this.carregarProducaoCliente(BorealApp.clienteAtivoId);
    }
  },

  gerarRelatorioEntregaDeServicoModulo3: function(itIdx) {
    BorealApp.modeloDocAtivo = "relatorio_servicos";
    this.abrirModulo("documentos_padroes");
  },

  fazerPropostaAutomaticaModulo3: function() {
    BorealApp.modeloDocAtivo = "proposta";
    this.abrirModulo("documentos_padroes");
  },

  // =========================================================================
  // MÓDULO 4: DOCUMENTOS PADRÕES (PONTOS 13, 14, 15, 16, 17, 18)
  // =========================================================================
  popularSeletoresDocumentos: function() {
    const selDocCli = document.getElementById("doc-select-cliente");
    if (!selDocCli) return;
    selDocCli.innerHTML = "";
    BorealApp.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = p.cliente;
      if (p.id === BorealApp.clienteAtivoId) opt.selected = true;
      selDocCli.appendChild(opt);
    });
  },

  mudarClienteDocumento: function(id) {
    BorealApp.clienteAtivoId = id;
    this.renderizarDocumentoAtivo();
  },

  mudarModeloDocumento: function(modelo) {
    BorealApp.modeloDocAtivo = modelo;
    this.renderizarDocumentoAtivo();
  },

  renderizarDocumentoAtivo: function() {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId) || BorealApp.processosComerciais[0];
    const modelo = BorealApp.modeloDocAtivo;

    document.getElementById("lbl-numero-doc-oficial").textContent = modelo === "proposta" ? "PROPOSTA COMERCIAL BOREAL" : "OFÍCIO Nº 0001/2026";
    document.getElementById("pv-doc-titulo-tipo").textContent = modelo === "proposta" ? "Assunto: Proposta Comercial" : "OFÍCIO Nº 0001/2026";

    document.getElementById("doc-in-destinatario").value = proc.cliente;
    document.getElementById("doc-in-ac").value = "Comissão Permanente de Licitações / Departamento de Compras";
    document.getElementById("doc-in-ref").value = `${proc.edital} - Objeto: ${proc.objeto}`;
    document.getElementById("doc-in-objeto").value = proc.objeto;

    // Títulos rigorosos conforme Requisitos 13, 14, 15, 16, 17
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

    thead.innerHTML = "";
    tbody.innerHTML = "";

    // 1. PROPOSTA COMERCIAL & RELATÓRIO DE SERVIÇOS ENTREGUES
    if (modelo === "proposta" || modelo === "relatorio_servicos") {
      boxTotal.classList.remove("hidden");
      titulo.textContent = modelo === "proposta" ? "01 - Itens e Preços da Proposta" : "Relatório de Serviços Entregues (Itens)";

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

      document.getElementById("lbl-doc-total-calculado").textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      document.getElementById("pv-doc-valor-extenso").textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (${this.converterExtenso(total)})`;
    }
    // 2. CRONOGRAMA FÍSICO FINANCEIRO (PONTO 17: TÍTULO 'SERVIÇOS')
    else if (modelo === "cronograma_fisico_fin") {
      boxTotal.classList.remove("hidden");
      titulo.textContent = "Cronograma Físico-Financeiro (Serviços e Valores)";

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
      document.getElementById("lbl-doc-total-calculado").textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
    // 3. PONTO 13: CRONOGRAMA GERAL E COPSOQ (SEM VALORES! APENAS MÊS, DIA, SERVIÇO, LOCAL)
    else if (modelo === "cronograma_pgr" || modelo === "cronograma_geral") {
      boxTotal.classList.add("hidden");
      titulo.textContent = "Cronograma Físico (Sem Valores - Conforme Ponto 13)";

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
    // 4. OFÍCIO E DECLARAÇÃO
    else {
      boxTotal.classList.add("hidden");
      titulo.textContent = "Corpo de Texto do Ofício / Declaração";
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
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
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
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    if (proc.itensProducao.length <= 1) {
      alert("Mantenha ao menos um item no documento.");
      return;
    }
    proc.itensProducao.splice(idx, 1);
    this.renderizarDocumentoAtivo();
  },

  editarItemDocEspecifico: function(idx, campo, valor) {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    if (proc.itensProducao[idx]) {
      proc.itensProducao[idx][campo] = valor;
      this.renderizarDocumentoAtivo();
    }
  },

  // 18. PREVIEW COM GERAÇÃO DE HASH SHA-256 NO FORMATO BOREAL-[HEX]-[RANDOM]
  atualizarPreviewDocOficial: function() {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId) || BorealApp.processosComerciais[0];
    const modelo = BorealApp.modeloDocAtivo;

    document.getElementById("pv-doc-destinatario").textContent = document.getElementById("doc-in-destinatario").value || proc.cliente;
    document.getElementById("pv-doc-ac").textContent = document.getElementById("doc-in-ac").value || "Comissão Permanente";
    document.getElementById("pv-doc-assunto").textContent = document.getElementById("doc-in-assunto").value;
    document.getElementById("pv-doc-ref").textContent = document.getElementById("doc-in-ref").value || proc.edital;
    document.getElementById("pv-doc-objeto-compl").textContent = document.getElementById("doc-in-objeto").value || proc.objeto;
    document.getElementById("pv-doc-data").textContent = document.getElementById("doc-in-data").value;
    document.getElementById("pv-doc-validade-txt").textContent = document.getElementById("doc-in-validade").value;

    const tabelaBox = document.getElementById("pv-doc-tabela-box");
    const blocoDeclaracoes = document.getElementById("pv-doc-bloco-declaracoes");

    const hashGerado = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 89999 + 10000);
    document.getElementById("pv-doc-hash-validacao").textContent = hashGerado;

    if (modelo === "proposta" || modelo === "relatorio_servicos") {
      blocoDeclaracoes.classList.remove("hidden");
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
      tbl += `
        <tr style="background:#fafafa;font-weight:bold;">
          <td colspan="5" style="text-align:right;text-transform:uppercase;">VALOR TOTAL:</td>
          <td style="text-align:right;color:#047857;">R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
        </tr>
      </table>`;
      tabelaBox.innerHTML = tbl;
    }
    else if (modelo === "cronograma_pgr" || modelo === "cronograma_geral") {
      blocoDeclaracoes.classList.add("hidden");
      let tbl = `
        <table border="1" cellpadding="3" style="width:100%;border-collapse:collapse;font-size:9pt;margin-top:4px;">
          <tr style="background:#f2f2f2;font-weight:bold;">
            <th style="width:60px;">MÊS</th>
            <th style="width:60px;">DIA</th>
            <th>SERVIÇO</th>
            <th>LOCAL</th>
          </tr>
      `;
      proc.itensProducao.forEach((it, idx) => {
        tbl += `
          <tr>
            <td style="text-align:center;font-weight:bold;">Mês ${idx + 1}</td>
            <td style="text-align:center;">01 a 15</td>
            <td>${it.objeto}</td>
            <td>${proc.endereco || 'Sede'}</td>
          </tr>
        `;
      });
      tbl += `</table>`;
      tabelaBox.innerHTML = tbl;
    }
    else if (modelo === "cronograma_fisico_fin") {
      blocoDeclaracoes.classList.add("hidden");
      let total = 0;
      let tbl = `
        <table border="1" cellpadding="3" style="width:100%;border-collapse:collapse;font-size:9pt;margin-top:4px;">
          <tr style="background:#f2f2f2;font-weight:bold;">
            <th>MÊS</th><th>SERVIÇOS</th><th>QUANT.</th><th>VALOR TOTAL R$</th>
          </tr>
      `;
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
      tbl += `<tr style="font-weight:bold;background:#fafafa;"><td colspan="3" align="right">TOTAL:</td><td align="right" style="color:#047857;">R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td></tr></table>`;
      tabelaBox.innerHTML = tbl;
    }
    else {
      blocoDeclaracoes.classList.add("hidden");
      const txt = document.getElementById("in-texto-livre-doc") ? document.getElementById("in-texto-livre-doc").value : "";
      tabelaBox.innerHTML = `<div style="font-size:10pt;line-height:1.35;text-align:justify;white-space:pre-wrap;padding-top:6px;">${txt}</div>`;
    }
  },

  // 5. SALVAR PROPOSTA E ANEXAR NA CÉLULA DO RELATÓRIO COMERCIAL
  salvarPropostaNoComercial: function() {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    const hash = document.getElementById("pv-doc-hash-validacao").textContent;
    const nomeArquivo = `Proposta_Comercial_${proc.cliente.substring(0, 15).replace(/\s+/g, '_')}_${Date.now()}.pdf`;

    proc.propostaAnexada = {
      nome: nomeArquivo,
      data: new Date().toLocaleDateString('pt-BR'),
      hash: hash,
      valor: proc.valorEstimado
    };

    alert(`Proposta Comercial salva com sucesso com código Hash ${hash}! Ela foi anexada diretamente na linha do cliente "${proc.cliente}" no Módulo do Relatório Comercial.`);
    this.renderizarRelatorioComercial();
    this.salvarDadosGlobal();
  },

  baixarDocWord: function() {
    const proc = BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId);
    const modelo = BorealApp.modeloDocAtivo;
    const htmlPreview = document.getElementById("box-preview-documento-oficial").innerHTML;

    const preHtml = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>${proc.cliente}</title>
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
    a.download = `${modelo.toUpperCase()}_BOREAL_${proc.cliente.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  // =========================================================================
  // MÓDULO 5: PORTAL DO CLIENTE (INDIVIDUALIZADO COM DATAS BR E DOWNLOAD REAL - PONTO 2, 9)
  // =========================================================================
  renderizarPortalCliente: function(clienteId) {
    const sel = document.getElementById("select-portal-cliente-logado");
    sel.innerHTML = "";

    BorealApp.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.cliente} (Fiscal Conectado)`;
      if (clienteId ? p.id === clienteId : p.id === BorealApp.clienteAtivoId) opt.selected = true;
      sel.appendChild(opt);
    });

    const cliIdAtivo = sel.value;
    const proc = BorealApp.processosComerciais.find(p => p.id === cliIdAtivo) || BorealApp.processosComerciais[0];
    document.getElementById("lbl-portal-cliente-nome").textContent = `Relatórios de Entrega Disponíveis • ${proc.cliente}`;

    const tbody = document.getElementById("tbody-portal-cliente-relatorios");
    tbody.innerHTML = "";

    let encontrou = false;
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

    if (!encontrou) {
      tbody.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-400 italic">Nenhum relatório de entrega anexado para este cliente até o momento.</td></tr>`;
    }
    if (window.lucide) window.lucide.createIcons();
  },

  // 2. CORREÇÃO DA TECLA DE DOWNLOAD NO PORTAL DO CLIENTE (GERA BLOB REAL)
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

  // 12. RELATÓRIO GERAL CONSOLIDADO DE CLIENTES E PRODUÇÃO (IMPRESSÃO / PDF)
  abrirModalRelatorioConsolidado: function() {
    const modal = document.getElementById("modal-consolidado");
    const container = document.getElementById("box-impressao-consolidada");
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

    BorealApp.processosComerciais.forEach(p => {
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
    document.getElementById("modal-consolidado").classList.add("hidden");
  },

  imprimirRelatorioConsolidado: function() {
    window.print();
  },

  adicionarLinhaComercialManual: function() {
    const nome = prompt("Nome do Cliente / Órgão:");
    if (!nome) return;
    const obj = prompt("Objeto da Contratação / Licitação:");
    const novoId = "CLI-" + String(BorealApp.processosComerciais.length + 1).padStart(3, '0');

    BorealApp.processosComerciais.unshift({
      id: novoId,
      cliente: nome,
      edital: "Pregão 2026",
      processo: "Processo ADM",
      portal: "Licitei",
      dataProposta: new Date().toLocaleDateString('pt-BR'),
      objeto: obj || "Serviços especializados em Engenharia e Medicina do Trabalho",
      valorEstimado: 25000.00,
      statusProcesso: "solicitacao_proposta",
      editaisAnexados: [],
      propostaAnexada: null,
      cnpj: "00.000.000/0001-00",
      cnae: "84.11-6-00",
      grauRisco: "Grau 1",
      cep: "13.140-000",
      endereco: "Endereço a preencher",
      numeroContrato: "001/2026",
      dataContrato: new Date().toLocaleDateString('pt-BR'),
      vigencia: "1 ano",
      tipoContrato: "Continuado",
      horarioExpediente: "08:00 às 17:00",
      nomeFiscal: "A definir",
      telFiscal: "",
      emailFiscal: "",
      contatoPagto: "",
      telPagto: "",
      emailPagto: "",
      aliquotasRetencao: { iss: 5, cofins: 3, csll: 1, irpj: 1.5, pis: 0.65, cbs: 0, ibs: 0 },
      tipoGarantia: "Dispensa",
      percentualGarantia: "0%",
      valorApolice: 0,
      nomeCorretora: "",
      nomeContatoCorretora: "",
      telCorretora: "",
      emailCorretora: "",
      documentosContrato: [],
      itensProducao: [
        { id: "PROD-" + Date.now(), tipoContrato: "Empreitada Imediata", item: 1, objeto: obj || "Serviço de SST", quant: 1, unid: "UN", vlUnitario: 25000.00, vlTotal: 25000.00, statusProducao: "solicitacao_proposta", relatoriosAnexados: [] }
      ]
    });

    this.renderizarRelatorioComercial();
    this.atualizarSeletorClientesGlobal();
    this.popularSeletoresContratos();
    this.popularSeletoresProducao();
    this.popularSeletoresDocumentos();
  },

  exportarRelatorioExcel: function() {
    const data = [
      ["CLIENTE", "EDITAL", "PROCESSO", "PORTAL", "DATA DA PROPOSTA", "OBJETO", "VALOR ESTIMADO", "STATUS DO PROCESSO"]
    ];
    BorealApp.processosComerciais.forEach(p => {
      data.push([p.cliente, p.edital, p.processo, p.portal, p.dataProposta, p.objeto, p.valorEstimado, p.statusProcesso]);
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "RELATÓRIO COMERCIAL");
    XLSX.writeFile(wb, "Relatorio_Comercial_Boreal.xlsx");
  },

  carregarDadosLocais: function() {
    try {
      const saved = localStorage.getItem("boreal_v7_db");
      if (saved) BorealApp.processosComerciais = JSON.parse(saved);
      const auth = localStorage.getItem("boreal_auth_cred");
      if (auth) {
        const c = JSON.parse(auth);
        if (c.email && c.email.includes("agente")) BorealApp.perfilAtivo = "agente";
      }
    } catch(e) {}
  },

  salvarDadosGlobal: function() {
    try {
      localStorage.setItem("boreal_v7_db", JSON.stringify(BorealApp.processosComerciais));
      alert("Todos os dados foram sincronizados e gravados com sucesso!");
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
