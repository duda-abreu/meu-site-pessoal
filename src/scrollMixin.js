export default {
  data() {
    return {
      observer: null,
      sectionElements: []
    }
  },
  mounted() {
    this.setupObserver()
  },
  beforeUnmount() {
    this.cleanupObserver()
  },
  methods: {
    setupObserver() {
      try {
        this.sectionElements = document.querySelectorAll('.fade-in')
        
        if (!this.sectionElements.length) {
          console.warn('Nenhum elemento com classe .fade-in encontrado')
          return
        }

        this.observer = new IntersectionObserver(
          this.handleIntersect, 
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
          }
        )

        this.sectionElements.forEach(section => {
          this.observer.observe(section)
        })

      } catch (error) {
        console.error('Erro ao configurar o IntersectionObserver:', error)
      }
    },
    cleanupObserver() {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        entry.target.classList.toggle(
          'fade-in-visible', 
          entry.isIntersecting
        )
        
        if (entry.isIntersecting) {
          this.$emit('section-visible', {
            id: entry.target.id,
            element: entry.target
          })
        }
      })
    }
  }
}