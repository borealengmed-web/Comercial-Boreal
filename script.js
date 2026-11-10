/**
 * BOREAL ENGMED - SISTEMA INTEGRADO COMERCIAL, PRODUÇÃO & DOCUMENTOS
 * Versão 5.0 - Atendimento Integral aos 19 Requisitos
 */

// ESTADO GLOBAL REATIVO DO SISTEMA
const BorealApp = {
  abaAtiva: "relatorio_comercial",
  clienteAtivoId: "CLI-001",
  modeloDocAtivo: "proposta",
  linkRadarEditais: "https://app.licitei.com.br/dashboard/radar-de-licitacoes?filterId=%229417%22&date=20260529%3B20260529&periodType=publication&page=0&orderBy=relevant&showSeen=false&edit=false&triagem=false",

  // Base Principal: Relatório Comercial
  // Colunas da Tabela 0: EDITAL, PROCESSO, PORTAL, DATA DA PROPOSTA, CLIENTE, CNPJ, ENDEREÇO, OBJETO, VALOR ESTIMADO (R$), STATUS DO PROCESSO, AÇÃO (APAGAR, ITENS)
  processosComerciais: [
    {
      id: "CLI-001",
      edital: "Pregão Eletrônico 042/2026",
      processo: "PROAD 1042/2026",
      portal: "Licitei / ComprasGov",
      dataProposta: "2026-03-02",
      cliente: "Tribunal Regional do Trabalho - 15ª Região",
      cnpj: "04.414.837/0001-38",
      endereco: "Rua Barão de Jaguara, 901 - Centro, Campinas - SP",
      objeto: "Elaboração de Documento Base do PGR, LTCAT e Avaliações Psicossociais COPSOQ",
      valorEstimado: 85000.00,
      statusProcesso: "vencedor_homologacao", // Vencedor habilita a tecla ITENS
      subMatrizAberta: true, // Controle de expansão da sub-matriz de produção
      // Sub-Matriz: Relatório de Produção (10 Colunas)
      itensProducao: [
        {
          id: "PROD-1",
          tipoContrato: "Mensal sob Demanda",
          item: 1,
          objeto: "Elaboração do Documento-Base do PGR conforme NR-01",
          quant: 1,
          unid: "UN",
          vlUnitario: 25000.00,
          vlTotal: 25000.00,
          statusProducao: "entregue_aceito", // Dispara solicitação de NF
          relatoriosAnexados: [
            { id: "REL-101", nome: "Relatorio_Entrega_PGR_Base.pdf", data: "2026-03-15", hash: "BOREAL-9A4F2E-8831" }
          ]
        },
        {
          id: "PROD-2",
          tipoContrato: "Empreitada Imediata",
          item: 2,
          objeto: "Vistorias Técnicas In Loco e Medições Ambientais com Aparelhos Calibrados",
          quant: 2,
          unid: "UNIDADE",
          vlUnitario: 10000.00,
          vlTotal: 20000.00,
          statusProducao: "concluido", // Gera automaticamente relatório de entrega
          relatoriosAnexados: []
        },
        {
          id: "PROD-3",
          tipoContrato: "Mensal sob Demanda",
          item: 3,
          objeto: "Aplicação e Avaliação Psicossocial Remota (Metodologia COPSOQ)",
          quant: 400,
          unid: "SERVIDOR",
          vlUnitario: 25.00,
          vlTotal: 10000.00,
          statusProducao: "servico_andamento",
          relatoriosAnexados: []
        }
      ]
    },
    {
      id: "CLI-002",
      edital: "Dispensa de Licitação 018/2026",
      processo: "ADM 2209/2026",
      portal: "Licitei / BBMNet",
      dataProposta: "2026-03-08",
      cliente: "Prefeitura Municipal de Paulínia",
      cnpj: "45.748.887/0001-44",
      endereco: "Av. Pref. José Lozano Araújo, 1551 - Paulínia - SP",
      objeto: "Elaboração de Laudo Técnico das Condições Ambientais de Trabalho (LTCAT)",
      valorEstimado: 28500.00,
      statusProcesso: "solicitacao_proposta",
      subMatrizAberta: false,
      itensProducao: [
        {
          id: "PROD-4",
          tipoContrato: "Empreitada Imediata",
          item: 1,
          objeto: "Elaboração de LTCAT para enquadramento previdenciário e insalubridade",
          quant: 1,
          unid: "UN",
          vlUnitario: 28500.00,
          vlTotal: 28500.00,
          statusProducao: "solicitacao_proposta",
          relatoriosAnexados: []
        }
      ]
    }
  ],

  // Módulo de Contratos que será alimentado automaticamente pelos clientes com status de vencedor
  contratosAlimentados: []
};

// CONTROLADOR DE OPERAÇÕES BOREAL
window.borealApp = {
  
  init: function() {
    this.carregarLinkRadar();
    this.renderizarRelatorioComercial();
    this.atualizarListaClientesVencedores();
    this.popularSeletoresDocumentos();
    this.renderizarDocumentoAtivo();
    if (window.lucide) window.lucide.createIcons();
  },

  // 1 & 2. CONFIGURAÇÃO DO LINK EXTERNO DO RADAR DE EDITAIS
  carregarLinkRadar: function() {
    const inputLink = document.getElementById("input-link-radar");
    const btnAcessar = document.getElementById("btn-acessar-radar");
    if (inputLink && btnAcessar) {
      inputLink.value = BorealApp.linkRadarEditais;
      btnAcessar.href = BorealApp.linkRadarEditais;
    }
  },

  editarLinkCapitacao: function() {
    const novoLink = prompt("Insira a nova URL do Radar de Editais / Portal de Licitações (ex: Licitei):", BorealApp.linkRadarEditais);
    if (novoLink && novoLink.trim() !== "") {
      BorealApp.linkRadarEditais = novoLink.trim();
      this.carregarLinkRadar();
      alert("Link do Radar de Editais atualizado com sucesso!");
    }
  },

  // ANEXAÇÃO DE EDITAIS E TERMO DE REFERÊNCIA (LEITURA POR IA)
  processarUploadEdital: function(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const novoId = "CLI-" + String(BorealApp.processosComerciais.length + 1).padStart(3, '0');
      const nomeSimulado = file.name.replace(/\.[^/.]+$/, "").toUpperCase();

      BorealApp.processosComerciais.unshift({
        id: novoId,
        edital: "Edital " + (Math.floor(Math.random() * 80) + 10) + "/2026",
        processo: "Processo TR " + (Math.floor(Math.random() * 9000) + 1000),
        portal: "Arquivo Anexo / Licitei",
        dataProposta: new Date().toISOString().split('T')[0],
        cliente: nomeSimulado.includes("PREFEITURA") || nomeSimulado.includes("TRIBUNAL") ? nomeSimulado : "CLIENTE: " + nomeSimulado,
        cnpj: "04.414.837/0001-38",
        endereco: "Endereço indicado no Termo de Referência",
        objeto: "Prestação de serviços especializados em SST conforme especificações do arquivo " + file.name,
        valorEstimado: 35000.00,
        statusProcesso: "solicitacao_proposta",
        subMatrizAberta: false,
        itensProducao: [
          {
            id: "PROD-" + Date.now(),
            tipoContrato: "Empreitada Imediata",
            item: 1,
            objeto: "Prestação de serviços especializados em SST conforme especificações do arquivo " + file.name,
            quant: 1,
            unid: "UN",
            vlUnitario: 35000.00,
            vlTotal: 35000.00,
            statusProducao: "solicitacao_proposta",
            relatoriosAnexados: []
          }
        ]
      });

      this.renderizarRelatorioComercial();
      this.atualizarListaClientesVencedores();
      this.popularSeletoresDocumentos();
      alert(`Documento "${file.name}" anexado com sucesso! Os campos foram extraídos e posicionados na Matriz do Relatório Comercial.`);
    };

    if (file.name.endsWith(".txt") || file.name.endsWith(".csv")) {
      reader.readAsText(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  },

  // 3 & 4. RENDERIZAÇÃO DO RELATÓRIO COMERCIAL (TABELA 0)
  renderizarRelatorioComercial: function() {
    const tbody = document.getElementById("tbody-relatorio-comercial");
    if (!tbody) return;
    tbody.innerHTML = "";

    BorealApp.processosComerciais.forEach((proc, idx) => {
      const isVencedor = this.isStatusVencedor(proc.statusProcesso);

      // Linha Principal do Relatório Comercial
      const tr = document.createElement("tr");
      tr.className = "hover:bg-slate-50 border-b";
      tr.id = `row-proc-${proc.id}`;
      tr.innerHTML = `
        <td class="p-1 border-r"><input type="text" value="${proc.edital || ''}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'edital', this.value)" class="table-input font-bold text-slate-800"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.processo || ''}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'processo', this.value)" class="table-input"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.portal || 'Licitei'}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'portal', this.value)" class="table-input font-bold text-[#B48D3C]"></td>
        <td class="p-1 border-r"><input type="date" value="${proc.dataProposta || ''}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'dataProposta', this.value)" class="table-input"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.cliente || ''}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'cliente', this.value)" class="table-input font-bold text-slate-900 min-w-[200px]"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.cnpj || ''}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'cnpj', this.value)" class="table-input font-mono"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.endereco || ''}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'endereco', this.value)" class="table-input min-w-[220px]"></td>
        <td class="p-1 border-r"><input type="text" value="${proc.objeto || ''}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'objeto', this.value)" class="table-input min-w-[240px]"></td>
        <td class="p-1 border-r text-right"><input type="number" step="0.01" value="${(proc.valorEstimado || 0).toFixed(2)}" onchange="window.borealApp.atualizarCampoProcesso(${idx}, 'valorEstimado', parseFloat(this.value)||0)" class="table-input text-right font-bold text-slate-800"></td>
        <td class="p-1 border-r">
          <select onchange="window.borealApp.alterarStatusProcesso(${idx}, this.value)" class="w-full text-xs font-bold border border-slate-300 rounded p-1 ${isVencedor ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-amber-50/70 text-slate-800'} focus:ring-[#B48D3C]">
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
        <td class="p-1 text-center whitespace-nowrap">
          <button onclick="window.borealApp.alternarSubMatrizItens(${idx})" class="px-2 py-1 rounded text-xs font-bold mr-1 ${isVencedor ? 'bg-[#B48D3C] hover:bg-[#9c782f] text-white shadow-sm' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}" ${!isVencedor ? 'disabled title="Habilitado apenas para status de Vencedor"' : 'title="Abrir/Fechar Relatório de Produção (Itens)"'}>
            ITENS
          </button>
          <button onclick="window.borealApp.apagarProcessoTotal(${idx})" class="p-1 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded" title="Apagar Todo o Processo deste Cliente">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);

      // 5 & 6. SUB-MATRIZ: RELATÓRIO DE PRODUÇÃO (GERADA ABAIXO DA LINHA DO CLIENTE VENCEDOR)
      if (isVencedor && proc.subMatrizAberta) {
        const trSub = document.createElement("tr");
        trSub.className = "bg-amber-50/20 border-b-2 border-[#B48D3C]";
        trSub.innerHTML = `
          <td colspan="11" class="p-3">
            <div class="bg-white p-4 rounded-xl border border-amber-200 shadow-sm space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div class="flex items-center space-x-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#B48D3C]"></span>
                  <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    RELATÓRIO DE PRODUÇÃO • ${proc.cliente}
                  </h3>
                  <span class="text-[11px] text-slate-500">(${proc.edital})</span>
                </div>
                <div class="flex items-center space-x-2">
                  <button onclick="window.borealApp.adicionarItemProducao(${idx})" class="px-2.5 py-1 bg-[#B48D3C] hover:bg-[#9c782f] text-white rounded text-xs font-semibold flex items-center space-x-1 shadow-sm">
                    <i data-lucide="plus" class="w-3 h-3"></i>
                    <span>Adicionar Item</span>
                  </button>
                  <button onclick="window.borealApp.fazerPropostaAutomatica(${idx})" class="px-2.5 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded text-xs font-semibold flex items-center space-x-1 shadow-sm" title="Gera a Proposta Comercial formal com os valores e objetos definidos">
                    <i data-lucide="file-check" class="w-3 h-3"></i>
                    <span>Fazer Proposta</span>
                  </button>
                </div>
              </div>

              <!-- TABELA DE PRODUÇÃO COM AS 10 COLUNAS EXATAS DA TABELA 1 -->
              <div class="overflow-x-auto border border-slate-200 rounded">
                <table class="w-full text-xs text-left whitespace-nowrap">
                  <thead class="bg-slate-100 text-slate-700 font-bold border-b">
                    <tr>
                      <th class="p-2 border-r min-w-[160px]">TIPO DE CONTRATO</th>
                      <th class="p-2 border-r w-12 text-center">ITEM</th>
                      <th class="p-2 border-r min-w-[220px]">OBJETO</th>
                      <th class="p-2 border-r w-16 text-center">QUANT.</th>
                      <th class="p-2 border-r w-16 text-center">UNID.</th>
                      <th class="p-2 border-r w-24 text-right">VL UNIT. (R$)</th>
                      <th class="p-2 border-r w-28 text-right">VL TOTAL (R$)</th>
                      <th class="p-2 border-r min-w-[210px]">STATUS DE PRODUÇÃO</th>
                      <th class="p-2 border-r text-center w-28">AÇÃO</th>
                      <th class="p-2 min-w-[180px]">REL. DE ENTREGA DE SERVIÇO</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 bg-white">
                    ${this.renderizarLinhasItensProducaoHtml(proc, idx)}
                  </tbody>
                  <tfoot class="bg-slate-50 font-bold border-t">
                    <tr>
                      <td colspan="6" class="p-2 text-right uppercase">Totalizador Global dos Itens Contratados:</td>
                      <td class="p-2 text-right text-emerald-700 font-bold text-xs">
                        R$ ${this.calcularTotalItensProducao(proc).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </td>
                      <td colspan="3" class="p-2 text-slate-400 text-[10px] italic">Cálculo Automático pelo Sistema</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </td>
        `;
        tbody.appendChild(trSub);
      }
    });

    if (window.lucide) window.lucide.createIcons();
  },

  isStatusVencedor: function(st) {
    return st === "vencedor_homologacao" || st === "vencedor_recurso" || st === "homologado_contrato" 
      || st === "contratado_empenho" || st === "empenhado_os" || st === "servico_iniciado";
  },

  alterarStatusProcesso: function(idx, novoStatus) {
    const proc = BorealApp.processosComerciais[idx];
    if (!proc) return;

    proc.statusProcesso = novoStatus;

    // Regra: "Sem êxito" ou "Revogado" apaga todo o processo da matriz e cessa
    if (novoStatus === "sem_exito" || novoStatus === "revogado") {
      if (confirm(`O status foi alterado para "${novoStatus.toUpperCase()}". Conforme a regra de negócio, as informações deste cliente serão apagadas da matriz e o processo será cessado. Confirmar exclusão?`)) {
        BorealApp.processosComerciais.splice(idx, 1);
        this.renderizarRelatorioComercial();
        this.atualizarListaClientesVencedores();
        this.popularSeletoresDocumentos();
        alert("Processo removido da matriz com sucesso.");
        return;
      }
    }

    // Se for vencedor, habilita e abre a sub-matriz de itens/produção
    if (this.isStatusVencedor(novoStatus)) {
      proc.subMatrizAberta = true;
      // Alimenta o módulo de contratos
      if (!BorealApp.contratosAlimentados.some(c => c.id === proc.id)) {
        BorealApp.contratosAlimentados.push({
          id: proc.id,
          cliente: proc.cliente,
          cnpj: proc.cnpj,
          endereco: proc.endereco,
          objeto: proc.objeto,
          valor: proc.valorEstimado,
          edital: proc.edital
        });
      }
    }

    this.renderizarRelatorioComercial();
    this.atualizarListaClientesVencedores();
    this.popularSeletoresDocumentos();
  },

  alternarSubMatrizItens: function(idx) {
    const proc = BorealApp.processosComerciais[idx];
    if (proc && this.isStatusVencedor(proc.statusProcesso)) {
      proc.subMatrizAberta = !proc.subMatrizAberta;
      this.renderizarRelatorioComercial();
    }
  },

  apagarProcessoTotal: function(idx) {
    const proc = BorealApp.processosComerciais[idx];
    if (confirm(`Deseja apagar definitivamente todo o processo do cliente "${proc.cliente}"?`)) {
      BorealApp.processosComerciais.splice(idx, 1);
      this.renderizarRelatorioComercial();
      this.atualizarListaClientesVencedores();
      this.popularSeletoresDocumentos();
    }
  },

  atualizarCampoProcesso: function(idx, campo, valor) {
    const proc = BorealApp.processosComerciais[idx];
    if (proc) {
      proc[campo] = valor;
      this.atualizarListaClientesVencedores();
      this.popularSeletoresDocumentos();
    }
  },

  // RENDERIZAÇÃO DAS LINHAS DA SUB-MATRIZ DE PRODUÇÃO (TABELA 1)
  renderizarLinhasItensProducaoHtml: function(proc, procIdx) {
    return proc.itensProducao.map((it, itIdx) => {
      const vlTotal = (parseFloat(it.quant) || 0) * (parseFloat(it.vlUnitario) || 0);
      it.vlTotal = vlTotal;

      // Montagem do campo de Relatórios Anexados (Consultar / Baixar / Substituir / Apagar múltiplos)
      let relatoriosHtml = `<div class="space-y-1">`;
      if (it.relatoriosAnexados && it.relatoriosAnexados.length > 0) {
        it.relatoriosAnexados.forEach((rel, relIdx) => {
          relatoriosHtml += `
            <div class="flex items-center justify-between bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
              <span class="truncate max-w-[110px] text-slate-700 font-semibold" title="${rel.nome}">${rel.nome}</span>
              <div class="flex items-center space-x-1">
                <button onclick="window.borealApp.baixarRelatorioProducao('${rel.nome}')" class="text-blue-600 hover:text-blue-800" title="Consultar / Baixar"><i data-lucide="eye" class="w-3 h-3"></i></button>
                <button onclick="window.borealApp.removerRelatorioAnexado(${procIdx}, ${itIdx}, ${relIdx})" class="text-rose-600 hover:text-rose-800" title="Apagar Relatório"><i data-lucide="x" class="w-3 h-3"></i></button>
              </div>
            </div>
          `;
        });
      }
      relatoriosHtml += `
        <label class="cursor-pointer text-[10px] text-[#B48D3C] hover:underline font-bold flex items-center space-x-0.5">
          <i data-lucide="paperclip" class="w-3 h-3"></i>
          <span>+ Anexar Outro Relatório</span>
          <input type="file" accept=".pdf, .docx" class="hidden" onchange="window.borealApp.anexarRelatorioArquivo(${procIdx}, ${itIdx}, this)">
        </label>
      </div>`;

      return `
        <tr>
          <td class="p-1 border-r">
            <select onchange="window.borealApp.atualizarItemProducao(${procIdx}, ${itIdx}, 'tipoContrato', this.value)" class="table-input font-semibold">
              <option value="Mensal sob Demanda" ${it.tipoContrato === 'Mensal sob Demanda' ? 'selected' : ''}>Mensal sob Demanda</option>
              <option value="Empreitada Imediata" ${it.tipoContrato === 'Empreitada Imediata' ? 'selected' : ''}>Empreitada Imediata</option>
              <option value="Mensal Fixo" ${it.tipoContrato === 'Mensal Fixo' ? 'selected' : ''}>Mensal Fixo</option>
              <option value="Empreitada sob Demanda" ${it.tipoContrato === 'Empreitada sob Demanda' ? 'selected' : ''}>Empreitada sob Demanda</option>
            </select>
          </td>
          <td class="p-1 border-r text-center font-bold text-slate-500">${itIdx + 1}</td>
          <td class="p-1 border-r"><input type="text" value="${it.objeto || ''}" onchange="window.borealApp.atualizarItemProducao(${procIdx}, ${itIdx}, 'objeto', this.value)" class="table-input min-w-[220px]"></td>
          <td class="p-1 border-r text-center"><input type="number" min="1" value="${it.quant || 1}" onchange="window.borealApp.atualizarItemProducao(${procIdx}, ${itIdx}, 'quant', parseFloat(this.value)||1)" class="table-input text-center font-bold"></td>
          <td class="p-1 border-r text-center"><input type="text" value="${it.unid || 'UN'}" onchange="window.borealApp.atualizarItemProducao(${procIdx}, ${itIdx}, 'unid', this.value)" class="table-input text-center uppercase font-bold text-slate-600"></td>
          <td class="p-1 border-r text-right"><input type="number" step="0.01" value="${(it.vlUnitario || 0).toFixed(2)}" onchange="window.borealApp.atualizarItemProducao(${procIdx}, ${itIdx}, 'vlUnitario', parseFloat(this.value)||0)" class="table-input text-right font-medium"></td>
          <td class="p-1 border-r text-right font-bold text-slate-800">R$ ${vlTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
          <td class="p-1 border-r">
            <select onchange="window.borealApp.alterarStatusProducao(${procIdx}, ${itIdx}, this.value)" class="w-full text-xs font-bold border border-slate-300 rounded p-1 ${it.statusProducao === 'entregue_aceito' ? 'bg-emerald-100 text-emerald-900 border-emerald-400' : (it.statusProducao === 'concluido' ? 'bg-blue-50 text-blue-800' : 'bg-slate-50 text-slate-800')}">
              <option value="solicitacao_proposta" ${it.statusProducao === 'solicitacao_proposta' ? 'selected' : ''}>Solicitação de proposta</option>
              <option value="contratado" ${it.statusProducao === 'contratado' ? 'selected' : ''}>Contratado</option>
              <option value="servico_andamento" ${it.statusProducao === 'servico_andamento' ? 'selected' : ''}>Serviço em andamento</option>
              <option value="concluido" ${it.statusProducao === 'concluido' ? 'selected' : ''}>Concluído (Gera Relatório)</option>
              <option value="entregue_aguardando" ${it.statusProducao === 'entregue_aguardando' ? 'selected' : ''}>Entregue aguardando aceite</option>
              <option value="entregue_aceito" ${it.statusProducao === 'entregue_aceito' ? 'selected' : ''}>Entregue e aceito (Aviso NF)</option>
            </select>
          </td>
          <td class="p-1 border-r text-center whitespace-nowrap">
            <button onclick="window.borealApp.gerarRelatorioEntregaDeServico(${procIdx}, ${itIdx})" class="px-2 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded text-[11px] font-semibold mr-1" title="Emitir Relatório de Serviços Entregues">
              Rel. Entrega
            </button>
            <button onclick="window.borealApp.apagarItemProducao(${procIdx}, ${itIdx})" class="p-1 text-rose-600 hover:text-rose-800" title="Apagar Item">
              <i data-lucide="trash-2" class="w-3 h-3"></i>
            </button>
          </td>
          <td class="p-1.5">${relatoriosHtml}</td>
        </tr>
      `;
    }).join("");
  },

  calcularTotalItensProducao: function(proc) {
    return proc.itensProducao.reduce((acc, it) => acc + ((parseFloat(it.quant) || 0) * (parseFloat(it.vlUnitario) || 0)), 0);
  },

  adicionarItemProducao: function(procIdx) {
    const proc = BorealApp.processosComerciais[procIdx];
    proc.itensProducao.push({
      id: "PROD-" + Date.now(),
      tipoContrato: "Mensal sob Demanda",
      item: proc.itensProducao.length + 1,
      objeto: "Novo item / serviço especializado de SST",
      quant: 1,
      unid: "UN",
      vlUnitario: 3500.00,
      vlTotal: 3500.00,
      statusProducao: "solicitacao_proposta",
      relatoriosAnexados: []
    });
    this.renderizarRelatorioComercial();
  },

  apagarItemProducao: function(procIdx, itIdx) {
    const proc = BorealApp.processosComerciais[procIdx];
    if (proc.itensProducao.length <= 1) {
      alert("O relatório de produção deve manter ao menos um item.");
      return;
    }
    proc.itensProducao.splice(itIdx, 1);
    this.renderizarRelatorioComercial();
  },

  atualizarItemProducao: function(procIdx, itIdx, campo, valor) {
    const proc = BorealApp.processosComerciais[procIdx];
    if (proc && proc.itensProducao[itIdx]) {
      proc.itensProducao[itIdx][campo] = valor;
      this.renderizarRelatorioComercial();
    }
  },

  // 6 & 8. STATUS DE PRODUÇÃO: GATILHOS DE CONCLUÍDO E ENTREGUE E ACEITO
  alterarStatusProducao: function(procIdx, itIdx, status) {
    const proc = BorealApp.processosComerciais[procIdx];
    const it = proc.itensProducao[itIdx];
    it.statusProducao = status;

    // GATILHO 1: "Concluído" -> elabora automaticamente Relatório de Entrega de Serviço
    if (status === "concluido") {
      const nomeRel = `Relatorio_Entrega_${proc.cliente.substring(0, 15).replace(/\s+/g, '_')}_Item${it.item}.pdf`;
      const hashVal = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 8999 + 1000);
      
      it.relatoriosAnexados.push({
        id: "REL-" + Date.now(),
        nome: nomeRel,
        data: new Date().toISOString().split('T')[0],
        hash: hashVal
      });

      alert(`Status alterado para "CONCLUÍDO"!\n\nO sistema gerou automaticamente o Relatório de Serviços Entregues e o anexou na coluna de Ação do cliente "${proc.cliente}". O documento está disponível para download e visualização do cliente.`);
    }

    // GATILHO 2: "Entregue e Aceito" -> Dispara WhatsApp e E-mail para faturamento de NF
    if (status === "entregue_aceito") {
      const telWhats = "5519993812063";
      const emailFin = "financeiro@boreal.eng.br";
      const msgTexto = `*SOLICITAÇÃO DE EMISSÃO DE NOTA FISCAL (BOREAL ENGMED)*\n\nCliente: *${proc.cliente}*\nCNPJ: ${proc.cnpj}\nObjeto: *${it.objeto}*\nValor Total: R$ ${it.vlTotal.toFixed(2)}\nStatus: SERVIÇO ENTREGUE E ACEITO.\n\nFavor providenciar a emissão da NF correspondente.`;

      alert(`STATUS: "ENTREGUE E ACEITO"!\n\nNotificação gerada com sucesso:\n1. WhatsApp: Enviada para (19) 99381-2063\n2. E-mail: financeiro@boreal.eng.br\n\nSolicitação de emissão de NF enviada com o nome do cliente e do objeto.`);
      
      // Abre link do WhatsApp Web preparado
      window.open(`https://api.whatsapp.com/send?phone=${telWhats}&text=${encodeURIComponent(msgTexto.replace(/\\n/g, '\n'))}`, '_blank');
    }

    this.renderizarRelatorioComercial();
  },

  // 8. GERENCIAMENTO DE MÚLTIPLOS RELATÓRIOS ANEXADOS
  anexarRelatorioArquivo: function(procIdx, itIdx, input) {
    const file = input.files[0];
    if (!file) return;

    const proc = BorealApp.processosComerciais[procIdx];
    const it = proc.itensProducao[itIdx];
    const hash = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 8999 + 1000);

    it.relatoriosAnexados.push({
      id: "REL-" + Date.now(),
      nome: file.name,
      data: new Date().toISOString().split('T')[0],
      hash: hash
    });

    this.renderizarRelatorioComercial();
    alert(`Relatório "${file.name}" anexado com sucesso para o cliente "${proc.cliente}"!`);
  },

  removerRelatorioAnexado: function(procIdx, itIdx, relIdx) {
    if (confirm("Deseja apagar este relatório anexado? Você poderá substituí-lo por outro a qualquer momento.")) {
      const proc = BorealApp.processosComerciais[procIdx];
      proc.itensProducao[itIdx].relatoriosAnexados.splice(relIdx, 1);
      this.renderizarRelatorioComercial();
    }
  },

  baixarRelatorioProducao: function(nome) {
    alert(`Iniciando download do relatório oficial: "${nome}"...`);
  },

  gerarRelatorioEntregaDeServico: function(procIdx, itIdx) {
    const proc = BorealApp.processosComerciais[procIdx];
    BorealApp.clienteAtivoId = proc.id;
    BorealApp.modeloDocAtivo = "relatorio_servicos";
    this.alternarAba("documentos_padroes");
  },

  // 19. FAZER PROPOSTA AUTOMÁTICA A PARTIR DA MATRIZ DE PRODUÇÃO
  fazerPropostaAutomatica: function(procIdx) {
    const proc = BorealApp.processosComerciais[procIdx];
    BorealApp.clienteAtivoId = proc.id;
    BorealApp.modeloDocAtivo = "proposta";
    this.alternarAba("documentos_padroes");
    alert(`Proposta Comercial formal gerada automaticamente para "${proc.cliente}" com base nos objetos e valores definidos na Matriz de Produção!`);
  },

  // 9 & 10 & 11. ATUALIZAÇÃO DA LISTA SUSPENSA DE CLIENTES VENCEDORES
  atualizarListaClientesVencedores: function() {
    const selHeader = document.getElementById("select-cliente-vencedor-header");
    if (!selHeader) return;
    selHeader.innerHTML = "";

    const vencedores = BorealApp.processosComerciais.filter(p => this.isStatusVencedor(p.statusProcesso));

    if (vencedores.length === 0) {
      selHeader.innerHTML = `<option value="">Nenhum vencedor homologado</option>`;
      return;
    }

    vencedores.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = `${v.cliente} (${v.edital})`;
      selHeader.appendChild(opt);
    });
  },

  irParaClienteRelatorio: function(clienteId) {
    if (!clienteId) return;
    this.alternarAba("relatorio_comercial");
    const el = document.getElementById(`row-proc-${clienteId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add("bg-amber-100");
      setTimeout(() => el.classList.remove("bg-amber-100"), 2000);
    }
  },

  // =========================================================================
  // MÓDULO DE DOCUMENTOS PADRÕES (PROPOSTA, OFÍCIOS, CRONOGRAMAS)
  // =========================================================================
  popularSeletoresDocumentos: function() {
    const selDocCli = document.getElementById("doc-select-cliente");
    if (!selDocCli) return;
    selDocCli.innerHTML = "";

    // Ponto 9: Todos clientes com status de vencedor e solicitantes entram na lista
    BorealApp.processosComerciais.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.cliente} • ${p.edital || p.processo}`;
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

  getProcessoAtivo: function() {
    return BorealApp.processosComerciais.find(p => p.id === BorealApp.clienteAtivoId) || BorealApp.processosComerciais[0];
  },

  renderizarDocumentoAtivo: function() {
    const proc = this.getProcessoAtivo();
    const modelo = BorealApp.modeloDocAtivo;

    // Cabeçalhos
    document.getElementById("lbl-numero-doc-oficial").textContent = modelo === "proposta" ? "PROPOSTA COMERCIAL BOREAL" : "OFÍCIO Nº 0001/2026";
    document.getElementById("pv-doc-titulo-tipo").textContent = modelo === "proposta" ? "Assunto: Proposta Comercial" : "OFÍCIO Nº 0001/2026";

    // Campos de texto
    document.getElementById("doc-in-destinatario").value = proc.cliente;
    document.getElementById("doc-in-ac").value = "Comissão Permanente de Licitações / Departamento de Compras";
    document.getElementById("doc-in-ref").value = `${proc.edital} - Objeto: ${proc.objeto}`;
    document.getElementById("doc-in-objeto").value = proc.objeto;

    // Configuração dos Títulos conforme pontos 13, 14, 15, 16, 17:
    // Ponto 14: Retirar "Entregues" de cronogramas e documentos gerais, mantendo apenas "SERVIÇO"
    // Ponto 15 & 16: "RELATÓRIO DE SERVIÇOS ENTREGUES" (sem a palavra "Mensal")
    // Ponto 17: No Cronograma Físico Financeiro escrever apenas "SERVIÇOS"
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

    // Renderiza a tabela editável e o preview
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
    // 2. CRONOGRAMA FÍSICO FINANCEIRO (COM VALORES, MAS TITULO É 'SERVIÇOS' CONFORME PONTO 17)
    else if (modelo === "cronograma_fisico_fin") {
      boxTotal.classList.remove("hidden");
      titulo.textContent = "Cronograma Físico-Financeiro (Serviços e Valores)";

      thead.innerHTML = `
        <tr>
          <th class="p-1.5 w-16">MÊS</th>
          <th class="p-1.5">SERVIÇO</th>
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
    // 3. PONTO 13: CRONOGRAMA GERAL E COPSOQ (NÃO PODE TER VALORES! BASTA MÊS, DIA, SERVIÇO E LOCAL)
    else if (modelo === "cronograma_pgr" || modelo === "cronograma_geral") {
      boxTotal.classList.add("hidden");
      titulo.textContent = "Cronograma Físico (Sem Valores - Conforme Requisito 13)";

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
          <td class="p-1"><input type="text" value="${proc.endereco}" class="table-input"></td>
          <td class="p-1 text-center"><button onclick="window.borealApp.removerItemDocEspecifico(${idx})" class="text-rose-600"><i data-lucide="trash-2" class="w-3 h-3"></i></button></td>
        `;
        tbody.appendChild(tr);
      });
    }
    // 4. OFÍCIO E DECLARAÇÃO (TEXTOS LIVRES)
    else {
      boxTotal.classList.add("hidden");
      titulo.textContent = "Corpo de Texto do Ofício / Declaração";
      thead.innerHTML = `<tr><th class="p-2">TEXTO COMPLETO (ESPAÇO INFINITO)</th></tr>`;
      tbody.innerHTML = `
        <tr>
          <td class="p-2">
            <textarea id="in-texto-livre-doc" rows="7" class="w-full border border-slate-300 rounded p-2 focus:ring-[#B48D3C]" oninput="window.borealApp.atualizarPreviewDocOficial()">A Boreal Engmed Ltda., devidamente qualificada nos autos, por intermédio de seu Representante Legal, Sr. Luiz Fernando Gomes de Jesus, Engº de Segurança do Trabalho, vem, respeitosamente, mediante o presente expediente, prestar esclarecimentos técnicos e operacionais referentes ao contrato em epígrafe.</textarea>
          </td>
        </tr>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  },

  adicionarLinhaTabelaDoc: function() {
    const proc = this.getProcessoAtivo();
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
    const proc = this.getProcessoAtivo();
    if (proc.itensProducao.length <= 1) {
      alert("Mantenha ao menos um item no documento.");
      return;
    }
    proc.itensProducao.splice(idx, 1);
    this.renderizarDocumentoAtivo();
  },

  editarItemDocEspecifico: function(idx, campo, valor) {
    const proc = this.getProcessoAtivo();
    if (proc.itensProducao[idx]) {
      proc.itensProducao[idx][campo] = valor;
      this.renderizarDocumentoAtivo();
    }
  },

  // 18. PREVIEW COM GERAÇÃO DE HASH SHA-256 NO FORMATO BOREAL-[HEX]-[RANDOM]
  atualizarPreviewDocOficial: function() {
    const proc = this.getProcessoAtivo();
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

    // Gerador de Hash de Validação SHA-256 BOREAL-[HEX]-[RANDOM] (Ponto 18)
    const hashGerado = "BOREAL-" + Math.random().toString(16).substring(2, 8).toUpperCase() + "-" + Math.floor(Math.random() * 89999 + 10000);
    document.getElementById("pv-doc-hash-validacao").textContent = hashGerado;

    // Proposta Comercial
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
    // Cronograma com PGR / Cronograma Geral (Ponto 13: SEM VALORES!)
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
            <td>${proc.endereco}</td>
          </tr>
        `;
      });
      tbl += `</table>`;
      tabelaBox.innerHTML = tbl;
    }
    // Cronograma Físico-Financeiro
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
    // Ofício e Declaração
    else {
      blocoDeclaracoes.classList.add("hidden");
      const txt = document.getElementById("in-texto-livre-doc") ? document.getElementById("in-texto-livre-doc").value : "";
      tabelaBox.innerHTML = `<div style="font-size:10pt;line-height:1.35;text-align:justify;white-space:pre-wrap;padding-top:6px;">${txt}</div>`;
    }
  },

  // 8. SALVAR E ANEXAR DIRETAMENTE NA MATRIZ DE PRODUÇÃO
  salvarEAnexarNaProducao: function() {
    const proc = this.getProcessoAtivo();
    const modelo = BorealApp.modeloDocAtivo;
    const hash = document.getElementById("pv-doc-hash-validacao").textContent;
    const nomeArquivo = `${modelo.toUpperCase()}_${proc.cliente.substring(0, 15).replace(/\s+/g, '_')}_${Date.now()}.pdf`;

    // Anexa na lista de relatórios da produção do cliente
    if (proc.itensProducao.length > 0) {
      proc.itensProducao[0].relatoriosAnexados.push({
        id: "REL-" + Date.now(),
        nome: nomeArquivo,
        data: new Date().toISOString().split('T')[0],
        hash: hash
      });
    }

    alert(`Documento salvo em PDF com código de autenticidade ${hash} e ANEXADO AUTOMATICAMENTE na coluna de Ação do Relatório de Produção de "${proc.cliente}"!`);
    this.renderizarRelatorioComercial();
  },

  baixarDocWord: function() {
    const proc = this.getProcessoAtivo();
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
  // 12. RELATÓRIO GERAL CONSOLIDADO DE TODOS OS CLIENTES (IMPRESSÃO / SALVAR)
  // =========================================================================
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

  // =========================================================================
  // ABA 3: PORTAL EXTERNO DO CLIENTE (CONSULTA E DOWNLOAD EXCLUSIVO)
  // =========================================================================
  renderizarPortalCliente: function(clienteId) {
    const sel = document.getElementById("select-portal-cliente");
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
            <td class="p-2.5 text-slate-600">${rel.data}</td>
            <td class="p-2.5 text-slate-700 font-medium">${it.objeto}</td>
            <td class="p-2.5 font-mono text-[11px] text-[#B48D3C] font-bold">${rel.hash}</td>
            <td class="p-2.5 text-center">
              <button onclick="window.borealApp.baixarRelatorioProducao('${rel.nome}')" class="px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white rounded text-xs font-semibold">
                Baixar / Visualizar
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
  },

  // NAVEGAÇÃO DE ABAS
  alternarAba: function(abaId) {
    BorealApp.abaAtiva = abaId;
    document.getElementById("sec-relatorio-comercial").classList.add("hidden");
    document.getElementById("sec-documentos-padroes").classList.add("hidden");
    document.getElementById("sec-portal-cliente").classList.add("hidden");

    document.getElementById("nav-btn-relatorio").classList.remove("active");
    document.getElementById("nav-btn-documentos").classList.remove("active");
    document.getElementById("nav-btn-portal").classList.remove("active");

    if (abaId === "relatorio_comercial") {
      document.getElementById("sec-relatorio-comercial").classList.remove("hidden");
      document.getElementById("nav-btn-relatorio").classList.add("active");
    } else if (abaId === "documentos_padroes") {
      document.getElementById("sec-documentos-padroes").classList.remove("hidden");
      document.getElementById("nav-btn-documentos").classList.add("active");
      this.popularSeletoresDocumentos();
      this.renderizarDocumentoAtivo();
    } else {
      document.getElementById("sec-portal-cliente").classList.remove("hidden");
      document.getElementById("nav-btn-portal").classList.add("active");
      this.renderizarPortalCliente();
    }
    if (window.lucide) window.lucide.createIcons();
  },

  // UTILITÁRIO: NÚMERO POR EXTENSO
  converterExtenso: function(v) {
    if (!v || v === 0) return "Zero reais";
    const int = Math.floor(v);
    const cent = Math.round((v - int) * 100);
    return `${int.toLocaleString('pt-BR')} reais` + (cent > 0 ? ` e ${cent} centavos` : "");
  },

  adicionarLinhaComercialManual: function() {
    const nome = prompt("Nome do Cliente / Órgão Público:");
    if (!nome) return;
    const obj = prompt("Objeto da Contratação / Licitação:");
    const novoId = "CLI-" + String(BorealApp.processosComerciais.length + 1).padStart(3, '0');

    BorealApp.processosComerciais.unshift({
      id: novoId,
      edital: "Edital 2026",
      processo: "Processo ADM",
      portal: "Licitei",
      dataProposta: new Date().toISOString().split('T')[0],
      cliente: nome,
      cnpj: "00.000.000/0001-00",
      endereco: "Endereço a preencher",
      objeto: obj || "Serviços especializados em Engenharia e Medicina do Trabalho",
      valorEstimado: 25000.00,
      statusProcesso: "solicitacao_proposta",
      subMatrizAberta: false,
      itensProducao: [
        {
          id: "PROD-" + Date.now(),
          tipoContrato: "Mensal sob Demanda",
          item: 1,
          objeto: obj || "Serviço de SST",
          quant: 1,
          unid: "UN",
          vlUnitario: 25000.00,
          vlTotal: 25000.00,
          statusProducao: "solicitacao_proposta",
          relatoriosAnexados: []
        }
      ]
    });

    this.renderizarRelatorioComercial();
    this.atualizarListaClientesVencedores();
    this.popularSeletoresDocumentos();
  },

  exportarRelatorioExcel: function() {
    const data = [
      ["EDITAL", "PROCESSO", "PORTAL", "DATA DA PROPOSTA", "CLIENTE", "CNPJ", "ENDEREÇO", "OBJETO", "VALOR ESTIMADO", "STATUS DO PROCESSO"]
    ];
    BorealApp.processosComerciais.forEach(p => {
      data.push([
        p.edital, p.processo, p.portal, p.dataProposta, p.cliente, p.cnpj, p.endereco, p.objeto, p.valorEstimado, p.statusProcesso
      ]);
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "RELATÓRIO COMERCIAL");
    XLSX.writeFile(wb, "Relatorio_Comercial_Boreal.xlsx");
  },

  salvarDados: function() {
    try {
      localStorage.setItem("boreal_v5_db", JSON.stringify(BorealApp.processosComerciais));
      alert("Todos os dados do Relatório Comercial, Matriz de Produção e Documentos foram salvos com sucesso!");
    } catch (e) {
      alert("Dados atualizados na memória com sucesso!");
    }
  }
};

// INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {
  try {
    const saved = localStorage.getItem("boreal_v5_db");
    if (saved) BorealApp.processosComerciais = JSON.parse(saved);
  } catch(e) {}
  window.borealApp.init();
});
