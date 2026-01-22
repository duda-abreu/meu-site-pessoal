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

