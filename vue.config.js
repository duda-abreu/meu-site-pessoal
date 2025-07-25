module.exports = {
  // Configuração correta:
  transpileDependencies: [], // Array vazio ou com os pacotes que precisam ser transpilados
  
  // Exemplo se precisar transpilar pacotes específicos:
  // transpileDependencies: ['vue-awesome', 'vuex-persistedstate'],
  
  chainWebpack: config => {
    // Suas outras configurações webpack (se houver)
  }
}