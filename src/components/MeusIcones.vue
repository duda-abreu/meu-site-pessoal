<template>
  <div class="meus-icones">
    <a href="https://www.linkedin.com/in/mariaeduardaabreu/" target="_blank" rel="noopener noreferrer" class="icon">
      <img src="@/assets/linkedin-icon.png" alt="LinkedIn" />
    </a>
    <a href="https://github.com/duda-abreu" target="_blank" rel="noopener noreferrer" class="icon">
      <img src="@/assets/github-icon.png" alt="GitHub" />
    </a>
    <a href="https://wa.me/5521970923247?text=Olá, gostaria de saber mais sobre seu trabalho" target="_blank" rel="noopener noreferrer" class="icon">
      <img src="@/assets/whatsapp-icon.png" alt="WhatsApp" />
    </a>
    <a href="mailto:mariaedrdabreu@gmail.com?subject=Olá&body=Gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho" target="_blank" rel="noopener noreferrer" class="icon">
      <img src="@/assets/gmail-icon.png" alt="E-mail" />
    </a>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.meus-icones {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.icon img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
}

.icon:hover img {
  transform: scale(1.1);
}

.icon {
  transition: opacity 0.2s ease;
}

.icon:hover {
  opacity: 0.9;
}

</style>
