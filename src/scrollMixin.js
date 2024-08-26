export default {
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersect, {
      threshold: 0.1, 
    
    });

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
      this.observer.observe(section);
    });
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        } else {
          entry.target.classList.remove('fade-in-visible');
        }
      });
    },
  },
};