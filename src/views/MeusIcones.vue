<template>
    <div class="meus-icones">
      <a :href="linkedinUrl" target="_blank" class="icon">
        <img src="@/assets/linkedin-icon.png" alt="LinkedIn" />
      </a>
      <a :href="githubUrl" target="_blank" class="icon">
        <img src="@/assets/github-icon.png" alt="GitHub" />
      </a>
      <a :href="whatsappUrl" target="_blank" class="icon">
        <img src="@/assets/whatsapp-icon.png" alt="WhatsApp" />
      </a>
      <a :href="gmailUrl" target="_blank" class="icon">
        <img src="@/assets/gmail-icon.png" alt="E-mail" />
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
  </style>
  