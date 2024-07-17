<template>
  <div class="minhas-experiencias">
    <h2>Minhas Experiências</h2>
    <ul>
      <li v-for="experiencia in experiencias" :key="experiencia.id">
        <h3>{{ experiencia.titulo }}</h3>
        <p>{{ experiencia.empresa }}</p>
        <p>{{ experiencia.periodo }}</p>
        <ul>
          <li v-for="responsabilidade in experiencia.responsabilidades" :key="responsabilidade">
            {{ responsabilidade }}
          </li>
        </ul>
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
          titulo: "Estagiária de Canais Digitais",
          empresa: "Domino's Pizza",
          periodo: "abr de 2022 - fev de 2023",
          responsabilidades: [
            "Análise de inserções de sistemas e investigação de erros a partir de consultas a bancos SQL e logs em XML.",
            "Elaboração de cenários e realização de testes para sanção de integração com agregadores de aplicativos.",
            "Uso de API para verificação de raios de atendimentos e interação com Virtual Machines para realização de backups, instalações e atualizações próprias da empresa.",
            "Construção de cadernos para homologação de projetos, tradução e adaptação de manuais de conhecimentos técnicos.",
          ],
        },
        {
          id: 2,
          titulo: "Estagiária de PMO",
          empresa: "Icatu Seguros",
          periodo: "2022-04-01 - Presente",
          responsabilidades: [
            "Apoio na manutenção do backlog de demandas das linhas de negócio, elaboração de dashboards operacionais/executivos e monitoramento de desempenho de projetos.", 
            "Colaboração na análise do fluxo da gestão do portfólio dos setores de atividade propondo melhorias e registrando em relatórios.",
            "Suporte na criação de diagnósticos de demandas e projetos construindo materiais de multiplicação de conhecimento para demais áreas internas.",
            "Auxílio na criação de pipelines e de usuários em Sistema de Entrega de Projetos.",
          ],
        },
        {
          id: 3,
          titulo: "Estagiária de desenvolvimento",
          empresa: "IBM",
          periodo: "set de 2023 - o momento",
          responsabilidades: [
            "Responsável pelo Security Office para concessão de acessos a sistemas via mainframe/web e sua documentação para monitoramento.", 
            "Extração de dados para elaboração de planilhas Excel.",
            "Alteração, análise e desenvolvimento de jobs em JCL e programas em PL/I.", 
            "Realização de relatórios diários de controle interno.", 
            "Identificação e solução de vulnerabilidades em aplicação utilizando a ferramenta Contrast Security.",
            "Criação e gerenciamento de pipelines de implantação eficientes para entrega de código em ambientes de testes e produção com Cirrus CI/CD.",
            "Levantamento da relação de usuários ativos e seus acessos para revalidação para fins de compliance.",
          ],
        },
      ],
    };
  },
  methods: {
    // Add any additional methods here
  },
};
</script>

<style scoped>
.minhas-experiencias {
  margin-top: 30px;
}

.minhas-experiencias h2 {
  text-align: center;
  font-size: 1.8em;
  margin-bottom: 20px;
}

.minhas-experiencias ul {
  list-style: none;
  padding: 0;
}

.minhas-experiencias li {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.minhas-experiencias h3 {
  font-size: 1.4em;
  margin-top: 0;
}

.minhas-experiencias p {
  margin-top: 5px;
}

.minhas-experiencias ul ul {
  margin-left: 20px;
}
</style>
