<template>
  <div class="icones">
    <a :href="linkedinUrl" target="_blank" class="icone-linkedin">
      <img src="@/assets/linkedin-icon.png" alt="LinkedIn" class="icone">
    </a>
    <a :href="githubUrl" target="_blank" class="icone-github">
      <img src="@/assets/github-icon.png" alt="GitHub" class="icone">
    </a>
    <a :href="whatsappUrl" target="_blank" class="icone-whatsapp">
      <img src="@/assets/whatsapp-icon.png" alt="WhatsApp" class="icone">
    </a>
    <a :href="gmailUrl" target="_blank" class="icone-gmail">
      <img src="@/assets/gmail-icon.png" alt="Gmail" class="icone">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    linkedinUrl: {
      type: String,
      required: true
    },
    githubUrl: {
      type: String,
      required: true
    },
    whatsappUrl: {
      type: String,
      required: true
    },
    gmailUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.icones {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.icone {
  width: 40px;
  height: 40px;
  border-radius: 20%; /* Torna os ícones redondos */
  overflow: hidden; /* Esconde qualquer parte do ícone que ultrapasse o raio */
  transition: transform 0.3s ease-in-out; /* Adiciona transição suave */
}

/* Adiciona animação de rotação */
.icone:hover {
  transform: rotate(360deg);
}

/* Estilizações específicas para cada ícone */
.icone-linkedin {
  background-color: #F9DBD4; /* Cor de fundo do LinkedIn */
}
.icone-github {
  background-color: #F9DBD4; /* Cor de fundo do GitHub */
}
.icone-whatsapp {
  background-color: #F9DBD4; /* Cor de fundo do WhatsApp */
}
.icone-gmail {
  background-color: #F9DBD4; /* Cor de fundo do Gmail */
}
</style>
