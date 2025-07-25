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
        threshold: 0.3, 
      };
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this.$refs.secoesRefs.indexOf(entry.target);
            if (index !== -1) {
              this.secoes[index].visible = true;
            }
          } else {
            const index = this.$refs.secoesRefs.indexOf(entry.target);
            if (index !== -1 && index !== 0) { 
              this.secoes[index].visible = false;
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

#skills {
  padding-top: 60px;
  padding-bottom: 40px;
}

#skills .skills-container {
  max-width: 100%;
  display: flex;
  justify-content: center;
}

#skills .skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
  width: 100%;
  max-width: 950px;
  justify-items: center;
}

#tela-inicial {
  scroll-behavior: smooth;
}

.secao {
  padding: 70px 20px;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(40px); 
  transition: opacity 0.8s ease, transform 0.8s ease;
  margin: 0 auto;
  max-width: 1200px;
}

.secao.visible {
  opacity: 1;
  transform: translateY(0);
}

#inicio {
  padding-bottom: 40px;
}

#experiencias {
  padding-top: 60px;
  padding-bottom: 40px;
}

#certificados {
  padding-top: 60px;
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Mobile */
@media (max-width: 768px) {
  .secao {
    padding: 40px 15px;
  }
  
  #inicio {
    padding-bottom: 30px;
  }
  
  #experiencias,
  #skills {
    padding-top: 50px;
    padding-bottom: 30px;
  }
  
  #certificados {
    padding-top: 50px;
    padding-bottom: 60px;
  }
}
</style>