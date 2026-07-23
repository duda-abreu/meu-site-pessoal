<template>
  <div id="minhas-experiencias" class="minhas-experiencias">
    <h2>Experiência Profissional</h2>
    <ul class="lista-experiencias">
      <li v-for="experiencia in experiencias" :key="experiencia.id">
        <div class="experiencia-item">
          <div class="empresa-container">
            <a :href="experiencia.empresaLink" target="_blank" class="empresa-link">
              <img :src="require(`@/assets/${experiencia.empresaImagem}`)" :alt="experiencia.empresa" class="empresa-imagem">
            </a>
            <div class="conteudo-info">
              <h3 @click="toggleDetails(experiencia.id)" class="cargo-titulo">
                {{ experiencia.titulo }}
              </h3>
              <div v-if="experiencia.showDetails" class="detalhes-experiencia">
                <div class="empresa-detalhes">
                  <p class="nome-empresa">{{ experiencia.empresa }}</p>
                  <p class="periodo-texto">{{ experiencia.periodo }}</p>
                </div>
                <ul class="lista-responsabilidades">
                  <li v-for="responsabilidade in experiencia.responsabilidades" :key="responsabilidade">
                    {{ responsabilidade }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiencias: [
        {
          id: 1,
          titulo: "Estagiária de Desenvolvimento Web",
          periodo: "Novembro/2023 – Novembro/2025",
          empresaLink: "https://www.ibm.com",
          empresaImagem: "ibm.png", 
          responsabilidades: [
            "Desenvolvimento de automações com Python e JavaScript aplicadas à governança de dados, controle de acessos e segurança de aplicações.",
            "Criação de scripts Python integrados ao Jira para monitoramento proativo de histórias próximas do arquivamento, com geração automática de relatórios em Excel.",
            "Monitoramento de vulnerabilidades em imagens de pipeline próximas da expiração via JavaScript, com alertas automatizados por API GraphQL/REST.",
            "Extração e análise de dados com SQL (PostgreSQL, DBeaver), Python e Excel, focando auditoria de acessos e conformidade.",
            "Responsável pelo Security Office, gerenciando concessão e revogação de acessos em sistemas mainframe e web, incluindo revisões e auditorias periódicas.",
            "Construção e gerenciamento de pipelines CI/CD em ambiente cloud, garantindo deploys contínuos e seguros em teste e produção.",
            "Participação na consolidação e redução de microsserviços, com redesign de rotas, testes de endpoints e otimização da arquitetura.",
            "Detecção e correção de vulnerabilidades em dependências via NPM Audit, SAST e DAST com Contrast Security.",
            "Elaboração e manutenção de documentação técnica para processos críticos de governança e monitoramento.",
            "Implementação e otimização de jobs em JCL e PL/I visando performance e escalabilidade.",
            "Geração de relatórios diários sobre status de ferramentas e controle interno."
          ],
          showDetails: false
        },
        {
          id: 2,
          titulo: "Estagiária de PMO em Transformação Digital",
          periodo: "Março/2023 – Outubro/2023",
          empresaLink: "https://www.icatuseguros.com.br",
          empresaImagem: "icatu.png", 
          responsabilidades: [
            "Apoio na manutenção e priorização do backlog de demandas das linhas de negócio, garantindo visibilidade aos stakeholders.",
            "Participação na elaboração de dashboards operacionais e executivos para acompanhamento de indicadores e progresso de projetos.",
            "Monitoramento contínuo de iniciativas, com identificação de riscos, desvios e oportunidades de melhoria.",
            "Colaboração na análise e mapeamento de fluxos de gestão de portfólio dos setores de atividade, propondo melhorias e registrando em relatórios gerenciais.",
            "Suporte na criação de diagnósticos de demandas e projetos, desenvolvendo materiais de capacitação para equipes internas.",
            "Apoio na configuração de pipelines e na gestão de acessos de usuários no Sistema de Entrega de Projetos."
          ],
          showDetails: false
        },
        {
          id: 3,
          titulo: "Estagiária de Tecnologia em Canais Digitais",
          periodo: "Março/2022 – Fevereiro/2023",
          empresaLink: "https://www.dominos.com.br",
          empresaImagem: "dominos.png", 
          responsabilidades: [
            "Utilização da API Postman para verificação de raios de atendimento e testes de integração de sistemas com APIs RESTful.",
            "Análise de inserções e investigação de erros via bancos SQL e logs em XML, com base em Testing e comunicação entre serviços.",
            "Elaboração de cenários de testes para validação de integrações com agregadores de aplicativos, abrangendo a criação de cadernos de homologação de projetos.",
            "Participação no upgrade de sistemas, incluindo backup de ambientes, instalação de quickfixes e testes pós-upgrade.",
            "Tradução e adaptação de manuais técnicos, transformando-os em modelos padronizados.",
            "Interação com ambientes virtuais para backups, instalações e atualizações de softwares."
          ],
          showDetails: false
        },
      ],
  {
    id: 1,
    titulo: "Consultora de TI JR",
    empresa: "SEIDOR",
    periodo: "Março/2026 – Atual",
    empresaLink: "https://www.seidor.com/pt-br",
    empresaImagem: "seidor.png",
    responsabilidades: [
      "Atuação em projetos de implementação de soluções corporativas SAP, elaboração de especificações funcionais/técnicas e integração entre aplicações.",
      "Análise, modelagem e validação de dados: identificação de rotinas e mapeamento das tabelas para garantir a consistência e eficiência do fluxo de informação.",
      "Investigação de redundâncias e proposição de melhorias estruturais nos modelos de dados para otimizar o processamento e a governança.",
      "Conexão entre regras de negócio, modelagem e qualidade de software para garantir entregas eficientes e aderentes às demandas dos clientes."
    ],
    showDetails: false
  },
  {
    id: 2,
    titulo: "Estagiária de Desenvolvimento Web",
    empresa: "IBM",
    periodo: "Novembro/2023 – Novembro/2025",
    empresaLink: "https://www.ibm.com",
    empresaImagem: "ibm.png",
    responsabilidades: [
      "Desenvolvimento de automações em Python e JavaScript para governança de dados, controle de acessos e segurança de aplicações em IBM Cloud e Mainframe.",
      "Criação de scripts Python integrados ao Jira com biblioteca Pandas para tratamento, cruzamento e consolidação de dados com geração de relatórios gerenciais.",
      "Identificação e correção de vulnerabilidades via ferramentas SAST/DAST, Contrast Security e auditoria de dependências JavaScript.",
      "Desenvolvimento de scripts em Node.js/JavaScript para monitoramento proativo de vulnerabilidades em pipelines Git com integração a GraphQL, REST APIs e alertas automatizados.",
      "Análise de acessos privilegiados e suporte a processos regulatórios por meio de consultas SQL estruturadas no DBeaver (IBM Db2 em z/OS) e extração de dados.",
      "Consolidação e refatoração de microsserviços, incluindo redesign de rotas, testes de integração via API Echo e manutenção de pipelines CI/CD com GitHub Actions.",
      "Gestão do Security Office: administração de acessos em Mainframe/Web, revisões periódicas e produção de documentação técnica para auditorias internas e externas."
    ],
    showDetails: false
  },
  {
    id: 3,
    titulo: "Estagiária de Engenharia de Dados em Transformação Digital",
    empresa: "Icatu Seguros",
    periodo: "Março/2023 – Outubro/2023",
    empresaLink: "https://www.icatuseguros.com.br",
    empresaImagem: "icatu.png",
    responsabilidades: [
      "Construção e manutenção de pipelines de ingestão e transformação de dados (ETL) utilizando Azure Data Factory, Databricks e Python.",
      "Ingestão e integração de múltiplas fontes de dados, incluindo bancos relacionais, APIs REST e arquivos nos formatos CSV e JSON.",
      "Elaboração e manutenção de dashboards operacionais e executivos em Power BI e Excel para acompanhamento de KPIs e indicadores de projetos.",
      "Configuração e gerenciamento de ambientes na nuvem Azure, garantindo disponibilidade, confiabilidade das bases e suporte à governança.",
      "Apoio no alinhamento estratégico com stakeholders, priorização de backlog das linhas de negócio e mapeamento de riscos/fluxos operacionais."
    ],
    showDetails: false
  },
  {
    id: 4,
    titulo: "Estagiária de Tecnologia em Canais Digitais",
    empresa: "Domino's Pizza",
    periodo: "Abril/2022 – Fevereiro/2023",
    empresaLink: "https://www.dominos.com.br",
    empresaImagem: "dominos.png",
    responsabilidades: [
      "Análise de integrações com agregadores de pedidos utilizando consultas SQL e investigação profunda de logs em formato XML.",
      "Elaboração e execução de mais de 220 cenários de testes manuais e automatizados para validação de funcionalidades e homologação de sistemas.",
      "Testes de integração de APIs RESTful e simulação de raios de atendimento utilizando a ferramenta Postman.",
      "Suporte em processos de upgrade de sistemas: backups de ambientes virtuais, aplicação de quickfixes, ajuste de parâmetros no SQL Server e validação pós-deploy.",
      "Elaboração de cadernos de homologação, manuais técnicos de VMs e padronização/tradução de documentação (PT ↔ EN)."
    ],
    showDetails: false
  }
]
    };
  },
  methods: {
    toggleDetails(id) {
      const experiencia = this.experiencias.find(exp => exp.id === id);
      if (experiencia) {
        experiencia.showDetails = !experiencia.showDetails;
      }
    }
  },
};
</script>

<style scoped>
.minhas-experiencias {
  max-width: 800px; 
  margin: 0 auto;
  padding: 10px 20px;
  color: #C0C0C0;
}

.minhas-experiencias h2 {
  font-size: 1.8em; 
  margin-bottom: 24px;
  text-align: center;
  color: #ffffff; 
}

.lista-experiencias {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experiencia-item {
  background-color: transparent; 
  padding: 12px 18px; 
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid rgba(244, 243, 245, 0.2); 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); 
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.experiencia-item:hover {
  transform: translateY(-2px); 
  border-color: rgba(255, 255, 255, 0.4);
}

.empresa-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.empresa-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.empresa-imagem {
  width: 55px;  
  height: 55px; 
  object-fit: contain; 
  flex-shrink: 0; 
}

.conteudo-info {
  flex: 1;
}

.cargo-titulo {
  font-size: 1.1em; 
  font-weight: 600;
  color: #f0eeee;
  cursor: pointer;
  margin: 0;
  transition: color 0.2s ease;
}

.cargo-titulo:hover {
  color: #ffffff;
}

.detalhes-experiencia {
  padding-top: 12px;
}

.empresa-detalhes {
  background-color: rgba(255, 255, 255, 0.05); 
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 10px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nome-empresa {
  font-weight: bold;
  font-size: 0.9em;
  margin: 0;
}

.periodo-texto {
  font-size: 0.85em;
  color: #ffffff;
  font-style: normal !important; 
  margin: 0;
}

.lista-responsabilidades {
  margin-top: 8px;
  padding-left: 18px;
}

.lista-responsabilidades li {
  padding: 3px 0;
  font-size: 0.88em;
  color: #B0B0B0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .empresa-container {
    flex-direction: row;
    align-items: center;
  }
  
  .empresa-detalhes {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}
</style>