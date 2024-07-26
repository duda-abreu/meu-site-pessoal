<template>
  <div id="minhas-experiencias" class="minhas-experiencias">
    <h2>Minhas Experiências</h2>
    <ul>
      <li v-for="experiencia in experiencias" :key="experiencia.id">
        <div class="experiencia-item">
          <a :href="experiencia.empresaLink" target="_blank" class="empresa-link">
            <img :src="require(`@/assets/${experiencia.empresaImagem}`)" :alt="experiencia.empresa" class="empresa-imagem">
          </a>
          <div class="experiencia-info">
            <h3 @click="toggleDetails(experiencia.id)" class="cargo-titulo">
              {{ experiencia.titulo }}
            </h3>
            <div v-if="experiencia.showDetails" class="detalhes-experiencia">
              <p>{{ experiencia.empresa }}</p>
              <p>{{ experiencia.periodo }}</p>
              <ul>
                <li v-for="responsabilidade in experiencia.responsabilidades" :key="responsabilidade">
                  {{ responsabilidade }}
                </li>
              </ul>
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
          titulo: "Estagiária de Canais Digitais",
          empresa: "Domino's Pizza",
          periodo: "abr de 2022 - fev de 2023",
          empresaLink: "https://www.dominos.com.br",
          empresaImagem: "dominos.png", // Nome da imagem da empresa
          responsabilidades: [
            "Análise de inserções de sistemas e investigação de erros a partir de consultas a bancos SQL e logs em XML.",
            "Elaboração de cenários e realização de testes para sanção de integração com agregadores de aplicativos.",
            "Uso de API para verificação de raios de atendimentos e interação com Virtual Machines para realização de backups, instalações e atualizações próprias da empresa.",
            "Construção de cadernos para homologação de projetos, tradução e adaptação de manuais de conhecimentos técnicos.",
          ],
          showDetails: false
        },
        {
          id: 2,
          titulo: "Estagiária de PMO",
          empresa: "Icatu Seguros",
          periodo: "mar de 2023 - ago de 2023",
          empresaLink: "https://www.icatuseguros.com.br",
          empresaImagem: "icatu.png", // Nome da imagem da empresa
          responsabilidades: [
            "Apoio na manutenção do backlog de demandas das linhas de negócio, elaboração de dashboards operacionais/executivos e monitoramento de desempenho de projetos.",
            "Colaboração na análise do fluxo da gestão do portfólio dos setores de atividade propondo melhorias e registrando em relatórios.",
            "Suporte na criação de diagnósticos de demandas e projetos construindo materiais de multiplicação de conhecimento para demais áreas internas.",
            "Auxílio na criação de pipelines e de usuários em Sistema de Entrega de Projetos.",
          ],
          showDetails: false
        },
        {
          id: 3,
          titulo: "Estagiária de desenvolvimento",
          empresa: "IBM",
          periodo: "set de 2023 - o momento",
          empresaLink: "https://www.ibm.com",
          empresaImagem: "ibm.png", // Nome da imagem da empresa
          responsabilidades: [
            "Responsável pelo Security Office para concessão de acessos a sistemas via mainframe/web e sua documentação para monitoramento.",
            "Extração de dados para elaboração de planilhas Excel.",
            "Alteração, análise e desenvolvimento de jobs em JCL e programas em PL/I.",
            "Realização de relatórios diários de controle interno.",
            "Identificação e solução de vulnerabilidades em aplicação utilizando a ferramenta Contrast Security.",
            "Criação e gerenciamento de pipelines de implantação eficientes para entrega de código em ambientes de testes e produção com Cirrus CI/CD.",
            "Levantamento da relação de usuários ativos e seus acessos para revalidação para fins de compliance.",
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
  margin-top: 5px; /* Aumentei a margem para empurrar o componente mais para baixo */
  color: #C0C0C0; /* Cor da fonte do componente */
  padding: 20px;
  border-radius: 8px;
  text-align: center; /* Alinha todo o conteúdo no centro */
  display: flex; /* Usar flexbox para layout */
  flex-direction: column; /* Organizar os itens em uma coluna */
  align-items: center; /* Alinhar os itens horizontalmente no centro */
}

.minhas-experiencias h2 {
  font-size: 2.0em;
  margin-bottom: 20px;
}

.minhas-experiencias ul {
  list-style: none;
  padding: 0;
}

.minhas-experiencias li {
  padding-bottom: 10px;
}

.experiencia-item {
  display: flex; /* Usar flexbox para layout */
  flex-direction: column; /* Organizar os itens em uma coluna */
  align-items: center; /* Alinhar os itens horizontalmente no centro */
  gap: 15px; /* Espaçamento entre a imagem e o título */
}

.experiencia-info {
  flex-grow: 1; /* Faz com que a informação ocupe o restante do espaço */
  text-align: center; /* Alinhar todo o conteúdo do .experiencia-info ao centro */
  transition: transform 0.3s ease-in-out; /* Adicionar transição para o efeito de expansão */
}

.experiencia-info h3 {
  cursor: pointer; /* Adicione um cursor de ponteiro para indicar que é clicável */
  color: #C0C0C0; /* Cor dos links clicáveis */
}

.experiencia-info:hover {
  transform: translateX(-10px); /* Expandir o .experiencia-info para a esquerda quando passar o mouse */
}

.empresa-link {
  display: flex; /* Garante que a imagem se ajuste corretamente dentro do link */
  align-items: center;
}

.empresa-imagem {
  width: 50px; /* Ajuste o tamanho da imagem para garantir a consistência */
  height: 50px; /* Ajuste a altura da imagem para garantir que seja igual ao tamanho */
  object-fit: contain; /* Mantém a proporção da imagem */
}

.experiencia-info {
  flex-grow: 1; /* Faz com que a informação ocupe o restante do espaço */
}


.minhas-experiencias h3 {
  font-size: 1.2em;
  margin-top: 0;
  cursor: pointer; /* Adicione um cursor de ponteiro para indicar que é clicável */
  color: #C0C0C0; /* Cor dos links clicáveis */
  text-decoration: none;
}

.minhas-experiencias p {
  margin-top: 5px;
  margin-bottom: 5px; /* Ajuste a margem inferior para diminuir o espaçamento entre as frases */
}

.minhas-experiencias ul ul {
  margin-left: 20px;
}

.cargo-titulo {
  color: #C0C0C0; /* Define a cor dos links clicáveis */
  font-size: 1em; /* Diminui o tamanho da fonte */
}

.detalhes-experiencia ul li {
  margin-bottom: 6px; /* Ajuste a margem inferior para diminuir o espaçamento entre as responsabilidades */
}
</style>
