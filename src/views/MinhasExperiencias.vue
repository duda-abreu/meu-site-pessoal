<template>
  <div id="minhas-experiencias" class="minhas-experiencias">
    <h2>Minhas Experiências</h2>
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
                  <p>{{ experiencia.empresa }}</p>
                  <p>{{ experiencia.periodo }}</p>
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
          titulo: "Estagiária de Canais Digitais",
          periodo: "Abril/2022 - Fevereiro/2023",
          empresaLink: "https://www.dominos.com.br",
          empresaImagem: "dominos.png", 
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
          periodo: "Março/2023 - Agosto/2023",
          empresaLink: "https://www.icatuseguros.com.br",
          empresaImagem: "icatu.png", 
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
          periodo: "Setembro/2023 - Atual",
          empresaLink: "https://www.ibm.com",
          empresaImagem: "ibm.png", 
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

<style scoped><style scoped>
.minhas-experiencias {
  margin-top: 5px;
  color: #C0C0C0;
  padding: 10px; /* reduzir padding para diminuir a borda */
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.minhas-experiencias h2 {
  font-size: 2.0em;
  margin-bottom: 20px;
  padding-left: 40px; 
}

.minhas-experiencias ul {
  list-style: none;
  padding: 0;
}

.minhas-experiencias li {
  padding-bottom: 10px;
  position: relative; 
}

.experiencia-item {
  display: flex; /* flexbox */
  flex-direction: column; 
  align-items: center; 
  gap: 15px; /* espaçamento entre a imagem e o título */
  position: relative; 
  width: 100%; /* item ocupa toda a largura disponível */
  transition: transform 0.3s ease; 
}

.experiencia-item:hover {
  transform: translateX(-10px); /* move o item para a esquerda ao passar o mouse */
}

.empresa-info {
  display: flex; 
  align-items: center;
  gap: 15px; 
  width: 100%;
  justify-content: flex-start; 
  position: relative;
  padding-left: 60px; 
}

.experiencia-info {
  text-align: center; 
  transition: max-height 0.3s ease-in-out; 
  overflow: hidden;
  max-height: 1000px; 
  width: 100%; 
}

.experiencia-info h3 {
  cursor: pointer; 
  color: #C0C0C0; 
}

.empresa-link {
  display: flex; 
  align-items: center;
  position: absolute; 
  left: 0;
}

.empresa-imagem {
  width: 50px; /* tamanho da imagem para consistência */
  height: 50px; /* altura seja igual ao tamanho */
  object-fit: contain; /* mantém a proporção da imagem */
}

.minhas-experiencias h3 {
  font-size: 1.2em;
  margin-top: 0;
  cursor: pointer; 
  color: #C0C0C0;
  text-decoration: none;
}

.minhas-experiencias p {
  margin-top: 5px;
  margin-bottom: 5px; /* ajusta a margem inferior para diminuir o espaçamento entre as frases */
}

.minhas-experiencias ul ul {
  margin-left: 20px;
}

.cargo-titulo {
  color: #C0C0C0; 
  font-size: 1em; 
}

.detalhes-experiencia {
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center; 
}

.empresa-detalhes {
  background-color: rgba(192, 192, 192, 0.7);
  border-radius: 5px;
  padding: 5px; 
  margin-bottom: 10px;
  max-width: fit-content; 
  text-align: center;
}

.empresa-detalhes p {
  font-size: 0.9em; 
  margin: 4px 0; 
}
</style>
