<template>
  <div class="tecnologias">
    <h2>Skills</h2>
    <div class="grupos-tecnologias">
      <div v-for="grupo in grupos" :key="grupo.id" class="grupo-card">
        <h3 class="grupo-titulo">{{ grupo.titulo }}</h3>
        <div class="icones-tecnologias">
          <div
            v-for="tecnologia in grupo.itens"
            :key="tecnologia.nome"
            class="tecnologia-item"
          >
            <a
              :href="tecnologia.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${saibaMais} ${tecnologia.nome}`"
              class="tecnologia-link"
            >
              <img
                :src="require(`@/assets/${tecnologia.imagem}`)"
                :alt="tecnologia.nome"
                class="icone-tecnologia"
              >
              <span class="tecnologia-nome">{{ tecnologia.nome }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { i18nState } from '@/i18n'

const TECNOLOGIAS = {
  python: { nome: 'Python', imagem: 'python.svg', link: 'https://www.python.org/' },
  javascript: { nome: 'JavaScript', imagem: 'javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  sql: { nome: 'SQL', imagem: 'sql.svg', link: 'https://en.wikipedia.org/wiki/SQL' },
  html: { nome: 'HTML5', imagem: 'html.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  css: { nome: 'CSS3', imagem: 'css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  vue: { nome: 'Vue.js', imagem: 'vue.svg', link: 'https://vuejs.org/' },
  react: { nome: 'React', imagem: 'react.svg', link: 'https://reactjs.org/' },
  node: { nome: 'Node.js', imagem: 'nodejs.svg', link: 'https://nodejs.org/' },
  graphql: { nome: 'GraphQL', imagem: 'graphql.svg', link: 'https://graphql.org/' },
  postman: { nome: 'Postman', imagem: 'postman.svg', link: 'https://www.postman.com/' },
  swagger: { nome: 'Swagger', imagem: 'swagger.svg', link: 'https://swagger.io/' },
  docker: { nome: 'Docker', imagem: 'docker.svg', link: 'https://www.docker.com/' },
  git: { nome: 'Git', imagem: 'git.svg', link: 'https://git-scm.com/' },
  fastapi: { nome: 'FastAPI', imagem: 'fastapi.svg', link: 'https://fastapi.tiangolo.com/' },
  postgresql: { nome: 'PostgreSQL', imagem: 'postgresql.svg', link: 'https://www.postgresql.org/' },
  mysql: { nome: 'MySQL', imagem: 'mysql.svg', link: 'https://www.mysql.com/' },
  mongodb: { nome: 'MongoDB', imagem: 'mongodb.svg', link: 'https://www.mongodb.com/' },
  githubactions: { nome: 'GitHub Actions', imagem: 'githubactions.svg', link: 'https://github.com/features/actions' },
  cicd: { nome: 'CI/CD', imagem: 'cicd.svg', link: 'https://en.wikipedia.org/wiki/CI/CD' }
}

const GRUPOS = [
  { id: 'linguagens', itens: ['python', 'javascript', 'sql'] },
  { id: 'frontend', itens: ['html', 'css', 'vue', 'react'] },
  { id: 'backend', itens: ['node', 'graphql', 'postman', 'swagger', 'fastapi'] },
  { id: 'bancodedados', itens: ['postgresql', 'mysql', 'mongodb'] },
  { id: 'ferramentas', itens: ['docker', 'git', 'githubactions', 'cicd'] }
]

const TEXT = {
  pt: {
    saibaMais: 'Saiba mais sobre',
    titulos: {
      linguagens: 'Linguagens',
      frontend: 'Frontend',
      backend: 'Backend & APIs',
      bancodedados: 'Bancos de Dados',
      ferramentas: 'DevOps & Ferramentas'
    }
  },
  en: {
    saibaMais: 'Learn more about',
    titulos: {
      linguagens: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend & APIs',
      bancodedados: 'Databases',
      ferramentas: 'DevOps & Tools'
    }
  }
}

export default {
  data() {
    return { i18nState }
  },
  computed: {
    saibaMais() {
      return TEXT[this.i18nState.locale].saibaMais
    },
    grupos() {
      const titulos = TEXT[this.i18nState.locale].titulos
      return GRUPOS.map(grupo => ({
        id: grupo.id,
        titulo: titulos[grupo.id],
        itens: grupo.itens.map(chave => TECNOLOGIAS[chave])
      }))
    }
  }
}
</script>

<style scoped>
.tecnologias {
  margin-top: 0;
  color: var(--text-secondary);
  padding: 20px;
  max-width: 100%;
}

.tecnologias h2 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.grupos-tecnologias {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.grupo-card {
  background: var(--surface-soft);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px 18px 18px;
  box-shadow: 0 2px 6px var(--shadow-color);
  transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.grupo-card:hover {
  border-color: var(--accent-pink);
  background-color: rgba(255, 143, 194, 0.08);
  box-shadow: 0 4px 14px var(--shadow-color);
}

.grupo-titulo {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--accent-pink);
  margin-bottom: 14px;
}

.grupo-titulo::before {
  content: '⟡';
  margin-right: 6px;
  color: var(--accent-blue);
}

.icones-tecnologias {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.tecnologia-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tecnologia-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.tecnologia-link:focus-visible {
  outline: 2px solid var(--accent-pink);
  outline-offset: 4px;
  border-radius: 8px;
}

.icone-tecnologia {
  width: 50px;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--border-color);
  box-shadow: 0 2px 8px var(--shadow-color);
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 6px;
}

.tecnologia-item:hover .icone-tecnologia {
  transform: scale(1.1);
  border-color: var(--accent-pink);
  background: rgba(255, 143, 194, 0.22);
  box-shadow: 0 4px 16px var(--shadow-color);
}

.tecnologia-nome {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-align: center;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .grupos-tecnologias {
    grid-template-columns: 1fr;
  }

  .tecnologias {
    padding: 10px;
  }

  .icone-tecnologia {
    width: 44px;
    height: 44px;
  }
}
</style>
