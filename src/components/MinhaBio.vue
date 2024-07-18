<template>
  <div class="bio">
    <p>{{ biografia }}</p>
  </div>
</template>

<script>
export default {
  props: {
    biografia: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.bio {
  margin: 10px auto; /* Ajusta o espaçamento vertical */
  text-align: center;
}

/* Aplica margem apenas acima das biografias que não são a primeira */
.bio + .bio {
  margin-top: 5px; /* Define o espaçamento entre as biografias */
}
</style>
