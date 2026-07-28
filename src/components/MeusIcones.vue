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
  name: 'MeusIcones'
};
</script>

<style scoped>
.meus-icones {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  width: 100%;
  margin: 1.5rem 0;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px var(--shadow-color);
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.icon img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.icon:hover img {
  transform: scale(1.15);
}

.icon:hover {
  transform: translateY(-2px);
  border-color: var(--accent-pink);
  background: rgba(255, 143, 194, 0.22);
  box-shadow: 0 4px 16px var(--shadow-color);
}

@media (max-width: 768px) {
  .meus-icones {
    justify-content: center;
  }
}
</style>