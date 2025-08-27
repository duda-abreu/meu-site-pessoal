<template>
  <div id="minhas-experiencias" class="minhas-experiencias">
    <h2>Experiência Profissional</h2>
    <ul>
      <li v-for="experiencia in experiencias" :key="experiencia.id">
        <div class="experiencia-item">
          <div class="empresa-info">
            <a :href="experiencia.empresaLink" target="_blank" class="empresa-link">
              <img :src="require(`@/assets/${experiencia.empresaImagem}`)" :alt="experiencia.empresa" class="empresa-imagem">
            </a>
            <div class="experiencia-info">
              <h3 @click="toggleDetails(experiencia.id)" class="cargo-titulo">
                {{ experiencia.titulo }}
              </h3>
              <div v-if="experiencia.showDetails" class="detalhes-experiencia">
                <div class="empresa-detalhes">
                  <p><strong>{{ experiencia.empresa }}</strong></p>
                  <p><i>{{ experiencia.periodo }}</i></p>
                </div>
                <ul>
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
            "Desenvolvimento de automações em Python e JavaScript para governança de dados, controle de acessos e segurança de aplicações em IBM Cloud e ambientes mainframe, otimizando fluxos de trabalho internos.",
            "Criação de scripts Python integrados ao Jira, utilizando a biblioteca Pandas para tratamento, cruzamento e consolidação periódica de dados, gerando relatórios em Excel para apoio a processos internos de verificação e controle.",
            "Identificação e correção de vulnerabilidades utilizando ferramentas SAST, DAST, Contrast Security e auditoria de dependências JavaScript, assegurando compliance.",
            "Desenvolvimento de scripts JavaScript para monitoramento proativo de vulnerabilidades em pipelines de repositórios Git, comintegração a GraphQL, REST APIs, sistemas de alertas e envio automático de e-mails via NodeMailer.",
            "Realização de consultas SQL na plataforma DBeaver (IBM Db2 em z/OS), com foco em extração estruturada de dados, análise de acessos privilegiados e suporte a processos regulatórios.",
            "Atuação na consolidação e refatoração de microsserviços, incluindo redesign de rotas, testes de integração via API Echo e aprimoramento da arquitetura RESTful",
            "Manutenção e gerenciamento de pipelines CI/CD em nuvem, empregando GitHub Actions e scripts customizados para entregas automatizadas, seguras e auditáveis em ambientes de teste e produção",
            "Responsável pelo Security Office, gerenciando concessão e revogação de acessos em sistemas mainframe e web, realizando revisões periódicas e garantindo rastreabilidade.",
            "Produção de documentação técnica para auditorias internas e externas, detalhando fluxos de controle de acesso, monitoramento de atividades críticas e cumprimento de normas de segurança."          ],
          showDetails: false
        },
        {
          id: 2,
          titulo: "Estagiária de Engenharia de Dados em Transformação Digital",
          periodo: "Março/2023 – Outubro/2023",
          empresaLink: "https://www.icatuseguros.com.br",
          empresaImagem: "icatu.png", 
          responsabilidades: [
            "Atuação com o time de Growth na construção e manutenção de pipelines de ingestão e transformação de dados utilizando Azure Data Factory, Databricks e Python, aplicando boas práticas de ETL para garantir eficiência e qualidade.",
            "Projeto e implementação de pipelines para ingestão de dados de múltiplas fontes: bancos relacionais, APIs REST e arquivos nos formatos CSV e JSON.",
            "Configuração e gerenciamento de ambientes na nuvem Azure, assegurando disponibilidade e confiabilidade das bases de dados para suporte à tomada de decisão.",
            "Criação, suporte e manutenção contínua de scripts e notebooks para automação e monitoramento dos pipelines.",
            "Apoio na manutenção e priorização do backlog de demandas das linhas de negócio, garantindo alinhamento estratégico e comunicação ativa com stakeholders para entendimento de novos produtos e iniciativas, apoiando na análise de impacto e adaptação de processos de ingestão e reporting.",
            "Participação na construção de dashboards operacionais com visualização de dados em Power BI, acompanhando indicadores, análise de riscos e mapeamento de fluxos de projetos."],
          showDetails: false
        },
        {
          id: 3,
          titulo: "Estagiária de Tecnologia em Canais Digitais",
          periodo: "Março/2022 – Fevereiro/2023",
          empresaLink: "https://www.dominos.com.br",
          empresaImagem: "dominos.png", 
          responsabilidades: [
            "Utilização da ferramenta Postman para verificação de raios de atendimento e execução de testes de integração de sistemas, envolvendo interação com APIs RESTful, análise de inserções e investigação de erros via bancos de dados SQL e logs em XML, com base em princípios de Testing.",
            "Análise de inserções e investigação de erros via bancos SQL e logs em XML, com base em Testing e comunicação entre serviços.",
            "Elaboração e execução de mais de 220 cenários de testes para validação de integrações com agregadores de aplicativos, documentados em cadernos de homologação, garantindo a qualidade das entregas.",
            "Participação ativa no processo de upgrade dos sistemas da empresa, incluindo backup de ambientes virtuais, preparação e aplicação de quickfixes, alteração de parâmetros em SQL Server e realização de testes pós-upgrade para validação das atualizações.",
            "Tradução e adaptação de manuais técnicos de Virtual Machines (PT → EN), convertendo-os em modelos padronizados para uso interno, além de atuação em ambientes virtuais para backups, instalações e atualizações de softwares.",
            "Interação com ambientes virtuais para backups, instalações e atualizações de softwares."
          ],
          showDetails: false
        },
      ],
    };
  },
  methods: {
    toggleDetails(id) {
      const experiencia = this.experiencias.find(exp => exp.id === id);
      experiencia.showDetails = !experiencia.showDetails;
    }
  },
};
</script>

<style scoped>
.minhas-experiencias {
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  background-color: transparent; 
  color: #C0C0C0;
}

.minhas-experiencias h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
  color: #ffffff; 
}

.minhas-experiencias ul {
  list-style: none;
  padding: 0;
}

.experiencia-item {
  background-color: transparent; 
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #7B2CBF; 
  box-shadow: 0 2px 6px rgba(123, 44, 191, 0.3); 
  transition: transform 0.3s ease;
}

.experiencia-item:hover {
  transform: scale(1.03);
}

.empresa-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.empresa-link {
  display: flex;
  align-items: center;
}

.empresa-imagem {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.experiencia-info {
  flex: 1;
  padding-left: 20px;
}

.cargo-titulo {
  font-size: 1.5em;
  color: #C0C0C0;
  cursor: pointer;
}

.detalhes-experiencia {
  padding-top: 15px;
}

.empresa-detalhes {
  background-color: rgba(123, 44, 191, 0.3); 
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: center;
}

.empresa-detalhes p {
  font-size: 1em;
  margin: 5px 0;
  font-style: normal; 
}

ul {
  margin-top: 10px;
}

ul li {
  padding: 5px 0;
  font-size: 1em;
  color: #C0C0C0;
}

@media (max-width: 768px) {
  .empresa-info {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

