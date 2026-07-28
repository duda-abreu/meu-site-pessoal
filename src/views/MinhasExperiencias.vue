<template>
  <div id="minhas-experiencias" class="minhas-experiencias">
    <h2>{{ heading }}</h2>
    <ul class="lista-experiencias">
      <li v-for="experiencia in experiencias" :key="experiencia.id">
        <div class="experiencia-item">
          <div class="empresa-container">
            <a :href="experiencia.empresaLink" target="_blank" class="empresa-link">
              <img :src="require(`@/assets/${experiencia.empresaImagem}`)" :alt="experiencia.empresa" class="empresa-imagem">
            </a>
            <div class="conteudo-info">
              <h3
                @click="toggleDetails(experiencia.id)"
                @keyup.enter="toggleDetails(experiencia.id)"
                role="button"
                tabindex="0"
                :aria-expanded="showDetailsMap[experiencia.id]"
                class="cargo-titulo"
              >
                {{ experiencia.titulo }}
              </h3>
              <div v-if="showDetailsMap[experiencia.id]" class="detalhes-experiencia">
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
import { i18nState } from '@/i18n'

const EMPRESAS = [
  { id: 1, empresa: 'SEIDOR', empresaLink: 'https://www.seidor.com/pt-br', empresaImagem: 'seidor.png' },
  { id: 2, empresa: 'IBM', empresaLink: 'https://www.ibm.com', empresaImagem: 'ibm.png' },
  { id: 3, empresa: 'Icatu Seguros', empresaLink: 'https://www.icatuseguros.com.br', empresaImagem: 'icatu.png' },
  { id: 4, empresa: "Domino's Pizza", empresaLink: 'https://www.dominos.com.br', empresaImagem: 'dominos.png' }
]

const TEXT = {
  pt: {
    heading: 'Experiência Profissional',
    experiencias: [
      {
        id: 1,
        titulo: 'Consultora de TI JR',
        periodo: 'Março/2026 – Atual',
        responsabilidades: [
          'Atuação em projetos de implementação de soluções corporativas SAP, elaboração de especificações funcionais/técnicas e integração entre aplicações.',
          'Análise, modelagem e validação de dados: identificação de rotinas e mapeamento das tabelas para garantir a consistência e eficiência do fluxo de informação.',
          'Investigação de redundâncias e proposição de melhorias estruturais nos modelos de dados para otimizar o processamento e a governança.',
          'Conexão entre regras de negócio, modelagem e qualidade de software para garantir entregas eficientes e aderentes às demandas dos clientes.'
        ]
      },
      {
        id: 2,
        titulo: 'Estagiária de Desenvolvimento Web',
        periodo: 'Novembro/2023 – Novembro/2025',
        responsabilidades: [
          'Desenvolvimento de automações em Python e JavaScript para governança de dados, controle de acessos e segurança de aplicações em IBM Cloud e Mainframe.',
          'Criação de scripts Python integrados ao Jira com biblioteca Pandas para tratamento, cruzamento e consolidação de dados com geração de relatórios gerenciais.',
          'Identificação e correção de vulnerabilidades via ferramentas SAST/DAST, Contrast Security e auditoria de dependências JavaScript.',
          'Desenvolvimento de scripts em Node.js/JavaScript para monitoramento proativo de vulnerabilidades em pipelines Git com integração a GraphQL, REST APIs e alertas automatizados.',
          'Análise de acessos privilegiados e suporte a processos regulatórios por meio de consultas SQL estruturadas no DBeaver (IBM Db2 em z/OS) e extração de dados.',
          'Consolidação e refatoração de microsserviços, incluindo redesign de rotas, testes de integração via API Echo e manutenção de pipelines CI/CD com GitHub Actions.',
          'Gestão do Security Office: administração de acessos em Mainframe/Web, revisões periódicas e produção de documentação técnica para auditorias internas e externas.'
        ]
      },
      {
        id: 3,
        titulo: 'Estagiária de Engenharia de Dados em Transformação Digital',
        periodo: 'Março/2023 – Outubro/2023',
        responsabilidades: [
          'Construção e manutenção de pipelines de ingestão e transformação de dados (ETL) utilizando Azure Data Factory, Databricks e Python.',
          'Ingestão e integração de múltiplas fontes de dados, incluindo bancos relacionais, APIs REST e arquivos nos formatos CSV e JSON.',
          'Elaboração e manutenção de dashboards operacionais e executivos em Power BI e Excel para acompanhamento de KPIs e indicadores de projetos.',
          'Configuração e gerenciamento de ambientes na nuvem Azure, garantindo disponibilidade, confiabilidade das bases e suporte à governança.',
          'Apoio no alinhamento estratégico com stakeholders, priorização de backlog das linhas de negócio e mapeamento de riscos/fluxos operacionais.'
        ]
      },
      {
        id: 4,
        titulo: 'Estagiária de Tecnologia em Canais Digitais',
        periodo: 'Abril/2022 – Fevereiro/2023',
        responsabilidades: [
          'Análise de integrações com agregadores de pedidos utilizando consultas SQL e investigação profunda de logs em formato XML.',
          'Elaboração e execução de mais de 220 cenários de testes manuais e automatizados para validação de funcionalidades e homologação de sistemas.',
          'Testes de integração de APIs RESTful e simulação de raios de atendimento utilizando a ferramenta Postman.',
          'Suporte em processos de upgrade de sistemas: backups de ambientes virtuais, aplicação de quickfixes, ajuste de parâmetros no SQL Server e validação pós-deploy.',
          'Elaboração de cadernos de homologação, manuais técnicos de VMs e padronização/tradução de documentação (PT ↔ EN).'
        ]
      }
    ]
  },
  en: {
    heading: 'Professional Experience',
    experiencias: [
      {
        id: 1,
        titulo: 'Jr. IT Consultant',
        periodo: 'March/2026 – Present',
        responsabilidades: [
          'Involved in SAP corporate solution implementation projects, drafting functional/technical specifications and application integration.',
          'Data analysis, modeling, and validation: identifying routines and mapping tables to ensure consistency and efficiency of information flow.',
          'Investigating redundancies and proposing structural improvements to data models to optimize processing and governance.',
          'Connecting business rules, modeling, and software quality to ensure efficient deliveries aligned with client demands.'
        ]
      },
      {
        id: 2,
        titulo: 'Web Development Intern',
        periodo: 'November/2023 – November/2025',
        responsabilidades: [
          'Developed Python and JavaScript automations for data governance, access control, and application security on IBM Cloud and Mainframe.',
          'Built Python scripts integrated with Jira using the Pandas library for data processing, cross-referencing, and consolidation, generating management reports.',
          'Identified and fixed vulnerabilities using SAST/DAST tools, Contrast Security, and JavaScript dependency audits.',
          'Developed Node.js/JavaScript scripts for proactive vulnerability monitoring in Git pipelines, integrating GraphQL, REST APIs, and automated alerts.',
          'Analyzed privileged access and supported regulatory processes through structured SQL queries in DBeaver (IBM Db2 on z/OS) and data extraction.',
          'Consolidated and refactored microservices, including route redesign, integration testing via the Echo API, and maintenance of CI/CD pipelines with GitHub Actions.',
          'Managed the Security Office: administered Mainframe/Web access, conducted periodic reviews, and produced technical documentation for internal and external audits.'
        ]
      },
      {
        id: 3,
        titulo: 'Data Engineering Intern, Digital Transformation',
        periodo: 'March/2023 – October/2023',
        responsabilidades: [
          'Built and maintained data ingestion and transformation (ETL) pipelines using Azure Data Factory, Databricks, and Python.',
          'Ingested and integrated multiple data sources, including relational databases, REST APIs, and CSV/JSON files.',
          'Built and maintained operational and executive dashboards in Power BI and Excel to track project KPIs and indicators.',
          'Configured and managed Azure cloud environments, ensuring availability, database reliability, and governance support.',
          'Supported strategic alignment with stakeholders, backlog prioritization for business lines, and mapping of risks/operational flows.'
        ]
      },
      {
        id: 4,
        titulo: 'Technology Intern, Digital Channels',
        periodo: 'April/2022 – February/2023',
        responsabilidades: [
          'Analyzed order aggregator integrations using SQL queries and in-depth investigation of XML-format logs.',
          'Designed and executed over 220 manual and automated test scenarios for feature validation and system acceptance testing.',
          'Performed RESTful API integration testing and delivery radius simulations using Postman.',
          'Supported system upgrade processes: virtual environment backups, quickfix application, SQL Server parameter tuning, and post-deploy validation.',
          "Created acceptance test documentation, VM technical manuals, and standardized/translated documentation (PT ↔ EN)."
        ]
      }
    ]
  }
}

export default {
  data() {
    return {
      i18nState,
      showDetailsMap: { 1: false, 2: false, 3: false, 4: false }
    };
  },
  computed: {
    heading() {
      return TEXT[this.i18nState.locale].heading;
    },
    experiencias() {
      const textList = TEXT[this.i18nState.locale].experiencias;
      return EMPRESAS.map(base => ({
        ...base,
        ...textList.find(item => item.id === base.id)
      }));
    }
  },
  methods: {
    toggleDetails(id) {
      this.showDetailsMap[id] = !this.showDetailsMap[id];
    }
  },
};
</script>

<style scoped>
.minhas-experiencias {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 20px;
  color: var(--text-secondary);
}

.minhas-experiencias h2 {
  font-size: 1.8em;
  margin-bottom: 24px;
  text-align: center;
  color: var(--text-primary);
}

.lista-experiencias {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experiencia-item {
  background-color: var(--surface-soft);
  padding: 12px 18px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 6px var(--shadow-color);
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.experiencia-item:hover {
  transform: translateY(-2px);
  border-color: var(--accent-pink);
  background-color: rgba(255, 143, 194, 0.1);
  box-shadow: 0 4px 14px var(--shadow-color);
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
  padding: 8px;
  box-sizing: border-box;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--border-color);
  transition: background 0.2s ease, border-color 0.2s ease;
}

.experiencia-item:hover .empresa-imagem {
  background: rgba(255, 143, 194, 0.22);
  border-color: var(--accent-pink);
}

.conteudo-info {
  flex: 1;
}

.cargo-titulo {
  font-size: 1.1em;
  font-weight: 600;
  color: var(--text-primary);
  cursor: pointer;
  margin: 0;
  transition: color 0.2s ease;
}

.cargo-titulo:focus-visible {
  outline: 2px solid var(--accent-pink);
  outline-offset: 3px;
  border-radius: 4px;
}

.cargo-titulo:hover {
  color: var(--accent-pink);
}

.detalhes-experiencia {
  padding-top: 12px;
}

.empresa-detalhes {
  background-color: var(--surface-soft);
  color: var(--text-primary);
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
  color: var(--text-primary);
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
  color: var(--text-secondary);
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