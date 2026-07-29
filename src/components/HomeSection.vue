<template>
  <div class="home-container">
    <div id="home" class="intro-section">
      <div class="text-content">
        <h2 class="typewriter-title" @mouseenter="embaralharTexto">
          <span class="typewriter-text">{{ textoDigitado }}</span><span class="blinking-cursor">_</span>
        </h2>
        
        <p class="graduation-text">
          {{ content.heroPrefix }}
          <a
            href="https://www.seidor.com/pt-br"
            target="_blank"
            rel="noopener"
            class="text-link"
          >
            SEIDOR
          </a>
        </p>

        <SocialIcons class="social-icons"/>

        <div class="bio-text">
          <p>
            {{ content.bioIntro }}
            <a href="#skills" class="text-link">Skills</a> {{ content.bioAnd }}
            <a href="#" class="text-link" @click.prevent="abrirCurriculo">
              {{ content.resumeWord }}<span class="download-icon"></span>
            </a>
          </p>
        </div>
      </div>

      <ProfilePhoto class="profile-photo"/>
    </div>

    <section id="sobre-mim" class="secao fade-in">
      <h2>{{ content.sobreMimHeading }}</h2>
      <p v-for="(paragrafo, idx) in content.sobreMimParagrafos" :key="idx" class="sobre-mim-texto">
        {{ paragrafo }}
      </p>
    </section>

    <section id="experiencias" class="secao fade-in">
      <MinhasExperiencias />
    </section>

    <section id="skills" class="secao fade-in">
      <Tecnologias />
    </section>

    <section id="certificados" class="secao fade-in">
      <Certificados />
    </section>

    <div v-if="mostrarCurriculo" class="modal-curriculo" @click.self="fecharCurriculo">
      <div class="modal-content">
        <button class="close-btn" @click="fecharCurriculo">&times;</button>
        <object
          data="/CV - Maria Eduarda Abreu.pdf#toolbar=0&navpanes=0"
          type="application/pdf"
          width="100%"
          height="500px"
          class="pdf-viewer"
        >
          <p>{{ content.pdfUnsupported }}
            <a href="/CV - Maria Eduarda Abreu.pdf" download class="download-link">
              {{ content.clickToDownload }}
            </a>
          </p>
        </object>
        <a href="/CV - Maria Eduarda Abreu.pdf" download class="download-btn">
          {{ content.downloadResume }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '@/components/MeusIcones.vue'
import ProfilePhoto from '@/components/FotodePerfil.vue'
import MinhasExperiencias from '@/views/MinhasExperiencias.vue'
import Tecnologias from '@/views/AsTecnologias.vue'
import Certificados from '@/views/MeusCertificados.vue'
import { i18nState } from '@/i18n'

const TEXT = {
  pt: {
    heroPrefix: 'Desenvolvedora de Software na',
    bioIntro: 'Oie! Aqui você pode conhecer um pouco da minha trajetória, explorar as minhas',
    bioAnd: 'e conferir meu',
    resumeWord: 'currículo',
    sobreMimHeading: 'Sobre mim',
    sobreMimParagrafos: [
      'Trabalho com desenvolvimento de software há mais de 4 anos, principalmente do lado do Backend — mas gosto de me aventurar no Front-end sempre que dá (como nesse site). Já passei por empresas de diferentes setores, como Seidor, IBM, Icatu Seguros e Domino\'s Pizza, e em cada uma delas ficou ainda mais claro pra mim que um bom desenvolvedor precisa transitar por várias frentes.',
      'Tecnologia entrou na minha vida cedo. Cresci com computador em casa numa época em que isso ainda não era tão comum, e sempre fui viciada em livros. Nos anos 2010, todo mundo tinha um blog, e o meu começou como um espaço pra falar de livros e animes. Só que, sem perceber, passei mais tempo mexendo no HTML do blog do que escrevendo os posts: trocava o cursor do mouse, colocava player de música tocando escondido e ajustava cada detalhezinho do layout.',
      'Das tardes brincando com HTML passei a virar noites no Stack Overflow, até parar nas aulas do Gustavo Guanabara ensinando pedra-papel-tesoura em Python. Depois disso, cursar Ciência da Computação foi praticamente inevitável e eu escolhi a melhor do Rio: a UERJ.',
      'Hoje continuo com a mesma curiosidade de quando passava horas personalizando um blog, mas aplicada a problemas bem maiores. Gosto de entender como tudo se conecta: da regra de negócio aos dados, da arquitetura ao código. É isso que mais me motiva no desenvolvimento de software: construir soluções que sejam simples de usar, fáceis de manter e que realmente resolvam o problema de quem está do outro lado da tela. E, claro, se elas ainda tiverem um design bonito, melhor ainda ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧'
    ],
    pdfUnsupported: 'Seu navegador não suporta visualização de PDF.',
    clickToDownload: 'Clique para baixar',
    downloadResume: 'Baixar Currículo ⬇️'
  },
  en: {
    heroPrefix: 'Software Developer at',
    bioIntro: 'Hi! Here you can learn a bit about my journey, explore my',
    bioAnd: 'and check out my',
    resumeWord: 'résumé',
    sobreMimHeading: 'About Me',
    sobreMimParagrafos: [
      'I\'ve been working in software development for over 4 years, mainly on the Backend side — but I enjoy venturing into Front-end whenever I get the chance (like on this site). I\'ve worked at companies across different industries, such as Seidor, IBM, Icatu Seguros, and Domino\'s Pizza, and each one made it even clearer to me that a good developer needs to move across multiple fronts.',
      'Technology came into my life early. I grew up with a computer at home at a time when that wasn\'t so common yet, and I was always hooked on books. In the 2010s, everyone had a blog, and mine started as a space to talk about books and anime. Except, without realizing it, I spent more time tinkering with the blog\'s HTML than actually writing posts: swapping out the cursor, sneaking in a hidden background music player, and adjusting every little detail of the layout.',
      'Afternoons playing around with HTML turned into nights on Stack Overflow, until I landed on Gustavo Guanabara\'s classes teaching rock-paper-scissors in Python. After that, studying Computer Science was pretty much inevitable, and I chose the best school in Rio: UERJ.',
      'Today I still carry the same curiosity I had spending hours customizing a blog, just applied to much bigger problems. I like understanding how everything connects: from business rules to data, from architecture to code. That\'s what motivates me most in software development: building solutions that are simple to use, easy to maintain, and that truly solve the problem for whoever\'s on the other side of the screen. And, of course, if they still look good, even better ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧'
    ],
    pdfUnsupported: 'Your browser does not support PDF viewing.',
    clickToDownload: 'Click to download',
    downloadResume: 'Download Résumé ⬇️'
  }
}

export default {
  components: {
    SocialIcons,
    ProfilePhoto,
    MinhasExperiencias,
    Tecnologias,
    Certificados
  },
  data() {
    return {
      i18nState,
      mostrarCurriculo: false,
      textoCompleto: "Duda Abreu",
      textoDigitado: "",
      indexDigitacao: 0,
      animandoEmbaralhar: false,
      observer: null
    }
  },
  computed: {
    content() {
      return TEXT[this.i18nState.locale]
    }
  },
  methods: {
    abrirCurriculo() {
      this.mostrarCurriculo = true
    },
    fecharCurriculo() {
      this.mostrarCurriculo = false
    },
    digitarTexto() {
      if (this.indexDigitacao < this.textoCompleto.length) {
        this.textoDigitado += this.textoCompleto.charAt(this.indexDigitacao);
        this.indexDigitacao++;
        setTimeout(this.digitarTexto, 120);
      }
    },
    embaralharTexto() {
      if (this.animandoEmbaralhar || this.textoDigitado.length < this.textoCompleto.length) return;
      
      this.animandoEmbaralhar = true;
      const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
      let iteracao = 0;
      
      const interval = setInterval(() => {
        this.textoDigitado = this.textoCompleto
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteracao) return this.textoCompleto[idx];
            return caracteres[Math.floor(Math.random() * caracteres.length)];
          })
          .join("");

        if (iteracao >= this.textoCompleto.length) {
          clearInterval(interval);
          this.animandoEmbaralhar = false;
        }

        iteracao += 1 / 3;
      }, 30);
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }
  },

  mounted() {
    this.digitarTexto();
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      rootMargin: '0px 0px -20% 0px',
      threshold: 0.25
    });
    this.$nextTick(() => {
      document.querySelectorAll('.fade-in').forEach(section => {
        this.observer.observe(section);
      });
    });
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2.5rem 5rem;
  font-family: 'Segoe UI', system-ui, sans-serif;
  line-height: 1.6;
}

.intro-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 100px);
  gap: 2rem;
  margin-bottom: 10px;
}

.intro-section,
.secao {
  padding: 30px 0; 
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.secao:nth-of-type(2) { transition-delay: 0.05s; }
.secao:nth-of-type(3) { transition-delay: 0.1s; }
.secao:nth-of-type(4) { transition-delay: 0.15s; }

#sobre-mim {
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
}

#sobre-mim h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.sobre-mim-texto {
  max-width: 800px;
  margin: 0 auto 16px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  text-align: left;
}

.sobre-mim-texto:last-child {
  margin-bottom: 0;
}

#experiencias {
  padding-top: 60px;
  padding-bottom: 60px;
}

#skills {
  padding-top: 60px;
  padding-bottom: 60px;
}

#certificados {
  padding-top: 60px;
  padding-bottom: 80px;
}

.secao.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-content {
  flex: 1;
  max-width: 55%;
  text-align: left;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.typewriter-title {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-weight: 700;
  display: inline-block;
  cursor: pointer;
  user-select: none;
}

.blinking-cursor {
  display: inline-block;
  color: var(--accent-pink);
  font-weight: bold;
  animation: piscar 0.8s infinite;
  margin-left: 2px;
}

@keyframes piscar {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.graduation-text {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.bio-text {
  max-width: 800px;
  margin: 2rem auto 0;
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.text-link,
.graduation-text a,
.bio-text a {
  color: var(--accent-pink);
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  transform-origin: center;
}

.text-link:hover,
.graduation-text a:hover,
.bio-text a:hover {
  color: var(--accent-blue);
  transform: scale(1.02);
}

.text-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  transition: width 0.3s ease;
  transform: scale(1.1);
}

.text-link:hover::after {
  width: 100%;
  transform: scale(1.1);
}

.download-btn,
.close-btn {
  transition: all 0.3s ease;
  transform-origin: center;
}

.download-btn:hover {
  background: var(--accent-blue);
  transform: scale(1.05);
}

.social-icons a:hover img {
  transform: scale(1.1); 
}

.graduation-text a:hover {
  border-bottom-color: transparent;
}

.download-icon {
  font-size: 0.8em;
  margin-left: 0.25rem;
}

.social-icons {
  margin: 1.5rem 0;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  width: 100%;
}

@media (max-width: 768px) {
  .social-icons {
    justify-content: center; 
  }
}

.profile-photo {
  flex: 1;
}

.profile-photo img {
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 1.5rem var(--shadow-color);
}

.modal-curriculo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none; 
}

.modal-content {
  background: var(--surface);
  border-radius: 12px;
  width: 80%;
  max-width: 800px;
  position: relative;
  box-shadow: 0 2px 20px var(--shadow-color);
  border: 1px solid var(--border-color);
  pointer-events: auto;
}

.pdf-viewer {
  border: 1px solid var(--border-color);
  margin-bottom: 15px;
}

.download-btn {
  display: block;
  background: var(--accent-pink);
  color: #ffffff;
  text-align: center;
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  transition: all 0.3s ease;
  border: 2px solid var(--border-color);
}

.download-link {
  color: var(--text-primary);
  font-weight: bold;
}

.close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  background: var(--accent-pink);
  color: #ffffff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px var(--shadow-color);
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: var(--accent-blue);
  transform: scale(1.1);
}

/* Ajustes para mobile */
@media (max-width: 768px) {
  .home-container {
    padding: 1.25rem;
  }

  .intro-section {
    flex-direction: column;
    margin-bottom: 30px;
  }
  
  .text-content {
    max-width: 100%;
    margin-bottom: 2rem;
    order: 2;
    text-align: center;
  }
  
  .profile-photo img {
    width: 18rem;
    height: 18rem;
    margin-bottom: 2rem;
  }

  .secao {
    padding: 30px 0;
  }
  
  #sobre-mim,
  #experiencias,
  #skills,
  #certificados {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  
  .graduation-text,
  .bio-text {
    font-size: 1rem;
  }

  .modal-content {
    width: 95%;
    padding: 10px;
  }
  
  .pdf-viewer {
    height: 400px;
  }
}
</style>