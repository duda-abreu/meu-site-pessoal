<template>
  <div class="icones">
    <a :href="linkedinUrl" target="_blank">
      <img src="@/assets/linkedin-icon.png" alt="LinkedIn">
    </a>
    <a :href="githubUrl" target="_blank">
      <img src="@/assets/github-icon.png" alt="GitHub">
    </a>
    <a :href="whatsappUrl" target="_blank">
      <img src="@/assets/whatsapp-icon.png" alt="WhatsApp">
    </a>
    <a :href="gmailUrl" target="_blank">
      <img src="@/assets/gmail-icon.png" alt="Gmail">
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
.icones img {
  width: 40px;
  height: 40px;
}
</style>
