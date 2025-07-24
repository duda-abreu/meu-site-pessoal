<template>
  <div id="tela-inicial">
    <SideMenu />

    <section
      v-for="(secao, index) in secoes"
      :key="index"
      :id="secao.id"
      class="secao"
      :class="{ visible: secao.visible }"
      ref="secoesRefs"
    >
      <component :is="secao.component" />
    </section>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import HomeSection from '@/components/HomeSection.vue';
import MeusCertificados from '@/views/MeusCertificados.vue';
import AsTecnologias from '@/views/AsTecnologias.vue';
import MinhasExperiencias from '@/views/MinhasExperiencias.vue';

export default {
  name: 'TelaInicial',
  components: {
    SideMenu,
    HomeSection,
    MeusCertificados,
    AsTecnologias,
    MinhasExperiencias,
  },
  data() {
    return {
      secoes: [
        { id: 'inicio', component: 'HomeSection', visible: false },
        { id: 'experiencias', component: 'MinhasExperiencias', visible: false },  
        { id: 'skills', component: 'AsTecnologias', visible: false },              
        { id: 'certificados', component: 'MeusCertificados', visible: false },    
      ],
    };
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
      };
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this.$refs.secoesRefs.indexOf(entry.target);
            if (index !== -1) {
              this.secoes[index].visible = true;
              this.observer.unobserve(entry.target);
            }
          }
        });
      };

      this.observer = new IntersectionObserver(callback, options);
      this.$nextTick(() => {
        this.$refs.secoesRefs.forEach((el) => {
          this.observer.observe(el);
        });
      });
    },
  },
};
</script>

<style scoped>
.secao {
  min-height: 100vh;
  padding: 60px 20px;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  margin-bottom: 40px;
}

.secao.visible {
  opacity: 1;
  transform: translateY(0);
}

#certificados {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
