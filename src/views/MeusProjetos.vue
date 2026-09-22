<template>
  <div class="projetos">
    <div class="projetos-cabecalho">
      <p class="projetos-kicker">{{ content.kicker }}</p>
      <h2>{{ content.heading }}</h2>
    </div>

    <div class="projetos-lista">
      <article
        v-for="projeto in projetos"
        :key="projeto.slug"
        class="projeto-card"
      >
        <a
          :href="projeto.repositorio"
          target="_blank"
          rel="noopener noreferrer"
          class="projeto-imagem-link"
          :aria-label="`${content.openProject} ${projeto.nome}`"
        >
          <img
            :src="require(`@/assets/projects/${projeto.imagem}`)"
            :alt="projeto.alt"
            class="projeto-imagem"
            loading="lazy"
          >
        </a>

        <div class="projeto-conteudo">
          <div class="projeto-meta">
            <span v-if="projeto.status" class="projeto-status">{{ projeto.status }}</span>
            <span v-if="projeto.nota" class="projeto-nota">{{ projeto.nota }}</span>
          </div>

          <h3>{{ projeto.nome }}</h3>
          <p class="projeto-descricao">{{ projeto.descricao }}</p>

          <ul class="projeto-destaques">
            <li v-for="destaque in projeto.destaques" :key="destaque">
              <span aria-hidden="true">›</span>{{ destaque }}
            </li>
          </ul>

          <div class="projeto-rodape">
            <ul class="projeto-tecnologias" :aria-label="content.technologies">
              <li v-for="tecnologia in projeto.tecnologias" :key="tecnologia">
                {{ tecnologia }}
              </li>
            </ul>

            <a
              :href="projeto.repositorio"
              target="_blank"
              rel="noopener noreferrer"
              class="repositorio-link"
            >
              {{ content.repository }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { i18nState } from '@/i18n'

const REPOSITORIES = {
  divtrack: 'https://github.com/duda-abreu/divtrack',
  frenchlingo: 'https://github.com/duda-abreu/frenchlingo',
  djsBestFriend: 'https://github.com/duda-abreu/djs-best-friend',
  tcc: 'https://github.com/duda-abreu/mlops-devsecops-tcc'
}

const TEXT = {
  pt: {
    kicker: 'PROJETOS SELECIONADOS',
    heading: 'Projetos',
    technologies: 'Tecnologias usadas',
    repository: 'Ver repositório',
    openProject: 'Abrir repositório do projeto',
    projects: [
      {
        slug: 'divtrack',
        nome: 'DivTrack',
        status: 'Em desenvolvimento',
        imagem: 'divtrack.webp',
        alt: 'Tela principal do dashboard DivTrack',
        repositorio: REPOSITORIES.divtrack,
        descricao: 'Dashboard para acompanhar carteiras da B3, proventos, agenda de pagamentos e notícias dos ativos em um só lugar.',
        destaques: [
          'Sincronização de dividendos e JCP pela brapi.dev',
          'Carteiras, posições e agenda de próximos pagamentos',
          'Alertas, notícias, API documentada e persistência local'
        ],
        tecnologias: ['Python', 'FastAPI', 'SQLite', 'JavaScript', 'Docker', 'OpenAPI']
      },
      {
        slug: 'frenchlingo',
        nome: 'FrenchLingo',
        imagem: 'frenchlingo.webp',
        alt: 'Tela do curso interativo do FrenchLingo',
        repositorio: REPOSITORIES.frenchlingo,
        descricao: 'Aplicação para aprender francês com música, combinando letra sincronizada, tradução e exercícios de compreensão.',
        destaques: [
          'Letras sincronizadas com tradução e vocabulário',
          'Ditados e exercícios usando trechos reais de músicas',
          'Parcours Défi com gramática, conversação e progresso'
        ],
        tecnologias: ['Python', 'HTML', 'CSS', 'JavaScript']
      },
      {
        slug: 'djs-best-friend',
        nome: "DJ's Best Friend",
        imagem: 'djs-best-friend.webp',
        alt: "Tela principal do DJ's Best Friend",
        repositorio: REPOSITORIES.djsBestFriend,
        descricao: 'Ferramenta para pesquisar faixas, ouvir prévias, consultar BPM e organizar referências para sets de DJ.',
        destaques: [
          'Busca e prévias oficiais na versão web',
          'Integração local com Spotify e YouTube',
          'BPM, tendências do Beatport e fila de downloads pessoais'
        ],
        tecnologias: ['Python', 'FastAPI', 'JavaScript', 'Spotify API', 'YouTube API', 'Docker']
      },
      {
        slug: 'mlops-devsecops-tcc',
        nome: 'MLOps + DevSecOps',
        nota: 'Nota 10',
        imagem: 'tcc-capa.png',
        alt: 'Capa do Trabalho de Conclusão de Curso apresentado na UERJ',
        repositorio: REPOSITORIES.tcc,
        descricao: 'Meu Trabalho de Conclusão de Curso da UERJ, integrando práticas de MLOps e DevSecOps em um pipeline de Machine Learning seguro e observável.',
        destaques: [
          'Modelo de Machine Learning servido por API FastAPI',
          'Análises automatizadas com Bandit, Safety, Trivy e OPA',
          'CI/CD, testes, métricas e containerização multi-stage'
        ],
        tecnologias: ['Python', 'FastAPI', 'scikit-learn', 'Docker', 'GitHub Actions', 'Trivy', 'OPA']
      }
    ]
  },
  en: {
    kicker: 'SELECTED PROJECTS',
    heading: 'Projects',
    technologies: 'Technologies used',
    repository: 'View repository',
    openProject: 'Open project repository',
    projects: [
      {
        slug: 'divtrack',
        nome: 'DivTrack',
        status: 'In development',
        imagem: 'divtrack.webp',
        alt: 'DivTrack dashboard main screen',
        repositorio: REPOSITORIES.divtrack,
        descricao: 'A dashboard for tracking B3 portfolios, dividends, payment schedules and asset news in one place.',
        destaques: [
          'Dividend and interest-on-equity sync via brapi.dev',
          'Portfolios, positions and upcoming payment schedule',
          'Alerts, news, documented API and local persistence'
        ],
        tecnologias: ['Python', 'FastAPI', 'SQLite', 'JavaScript', 'Docker', 'OpenAPI']
      },
      {
        slug: 'frenchlingo',
        nome: 'FrenchLingo',
        imagem: 'frenchlingo.webp',
        alt: 'FrenchLingo interactive course screen',
        repositorio: REPOSITORIES.frenchlingo,
        descricao: 'An app for learning French through music, combining synchronized lyrics, translations and listening exercises.',
        destaques: [
          'Synchronized lyrics with translations and vocabulary',
          'Dictation and exercises using real song excerpts',
          'Parcours Défi with grammar, conversation and progress tracking'
        ],
        tecnologias: ['Python', 'HTML', 'CSS', 'JavaScript']
      },
      {
        slug: 'djs-best-friend',
        nome: "DJ's Best Friend",
        imagem: 'djs-best-friend.webp',
        alt: "DJ's Best Friend main screen",
        repositorio: REPOSITORIES.djsBestFriend,
        descricao: 'A tool to search tracks, play previews, check BPM and organize references for DJ sets.',
        destaques: [
          'Search and official previews in the web version',
          'Local Spotify and YouTube integrations',
          'BPM, Beatport trends and personal download queue'
        ],
        tecnologias: ['Python', 'FastAPI', 'JavaScript', 'Spotify API', 'YouTube API', 'Docker']
      },
      {
        slug: 'mlops-devsecops-tcc',
        nome: 'MLOps + DevSecOps',
        nota: 'Grade 10/10',
        imagem: 'tcc-capa.png',
        alt: 'Cover of the final degree project presented at UERJ',
        repositorio: REPOSITORIES.tcc,
        descricao: 'My final degree project at UERJ, integrating MLOps and DevSecOps practices into a secure, observable Machine Learning pipeline.',
        destaques: [
          'Machine Learning model served through a FastAPI API',
          'Automated analysis with Bandit, Safety, Trivy and OPA',
          'CI/CD, tests, metrics and multi-stage containerization'
        ],
        tecnologias: ['Python', 'FastAPI', 'scikit-learn', 'Docker', 'GitHub Actions', 'Trivy', 'OPA']
      }
    ]
  }
}

export default {
  name: 'MeusProjetos',
  data() {
    return { i18nState }
  },
  computed: {
    content() {
      return TEXT[this.i18nState.locale]
    },
    projetos() {
      return this.content.projects
    }
  }
}
</script>

<style scoped>
.projetos {
  color: var(--text-primary);
}

.projetos-cabecalho {
  max-width: 720px;
  margin: 0 auto 38px;
  text-align: center;
}

.projetos-kicker {
  margin-bottom: 8px;
  color: var(--accent-pink);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.projetos-cabecalho h2 {
  margin-bottom: 10px;
  font-size: 2rem;
}

.projetos-lista {
  display: grid;
  gap: 24px;
}

.projeto-card {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  overflow: hidden;
  border: 1px solid var(--border-color);
  border-radius: 18px;
  background: var(--surface-soft);
  box-shadow: 0 12px 34px var(--shadow-color);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.projeto-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-pink);
  box-shadow: 0 18px 42px var(--shadow-color);
}

.projeto-card:nth-child(even) .projeto-imagem-link {
  order: 2;
}

.projeto-imagem-link {
  display: block;
  min-height: 300px;
  overflow: hidden;
  background: var(--surface);
}

.projeto-imagem {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 300px;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.45s ease;
}

.projeto-card:hover .projeto-imagem {
  transform: scale(1.025);
}

.projeto-card:last-child .projeto-imagem {
  object-fit: contain;
  padding: 24px;
}

.projeto-conteudo {
  display: flex;
  flex-direction: column;
  padding: 26px;
}

.projeto-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.projeto-status,
.projeto-nota {
  padding: 5px 10px;
  border: 1px solid var(--border-color);
  border-radius: 999px;
  color: var(--accent-pink);
  background: rgba(255, 143, 194, 0.12);
  font-size: 0.72rem;
  font-weight: 700;
}

.projeto-status::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 8px currentColor;
}

.projeto-conteudo h3 {
  margin-bottom: 12px;
  font-size: clamp(1.55rem, 3vw, 2.15rem);
  line-height: 1.15;
}

.projeto-descricao {
  margin-bottom: 18px;
  color: var(--text-secondary);
  font-size: 0.98rem;
}

.projeto-destaques {
  display: grid;
  gap: 8px;
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.projeto-destaques li {
  display: flex;
  gap: 8px;
}

.projeto-destaques span {
  color: var(--accent-pink);
  font-weight: 700;
}

.projeto-rodape {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: auto;
}

.projeto-tecnologias {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.projeto-tecnologias li {
  padding: 5px 9px;
  border: 1px solid var(--border-color-blue);
  border-radius: 999px;
  color: var(--text-secondary);
  background: var(--surface-soft);
  font-size: 0.7rem;
}

.repositorio-link {
  align-self: flex-start;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--accent-pink);
  color: var(--accent-pink);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.repositorio-link:hover,
.repositorio-link:focus-visible {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
}

@media (max-width: 900px) {
  .projeto-card {
    grid-template-columns: 1fr;
  }

  .projeto-card:nth-child(even) .projeto-imagem-link {
    order: 0;
  }

  .projeto-imagem-link,
  .projeto-imagem {
    min-height: 240px;
  }
}

@media (max-width: 560px) {
  .projetos-cabecalho {
    margin-bottom: 26px;
  }

  .projetos-cabecalho h2 {
    font-size: 1.7rem;
  }

  .projetos-lista {
    gap: 24px;
  }

  .projeto-imagem-link,
  .projeto-imagem {
    min-height: 180px;
  }

  .projeto-conteudo {
    padding: 20px 18px;
  }

  .projeto-card:last-child .projeto-imagem {
    padding: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .projeto-card,
  .projeto-imagem {
    transition: none;
  }
}
</style>
