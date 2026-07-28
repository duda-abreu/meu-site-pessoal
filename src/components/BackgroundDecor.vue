<template>
  <div class="background-decor" aria-hidden="true">
    <span class="decor decor-1">⋆.ೃ࿔🌸</span>
    <span class="decor decor-2">⋆˚꩜｡</span>
    <span class="decor decor-3">𓂃 ࣪˖</span>
    <span class="decor decor-4">🐇་༘࿐</span>
    <span class="decor decor-5">⋆˚꩜｡</span>
    <span class="decor decor-6">*:･ ⋆</span>
    <span class="decor decor-7">🌸⋆</span>
    <span class="decor decor-8">˚₊‧꒰ა ✧ ໒꒱‧₊˚</span>
    <span class="decor decor-9">⋆.˚✮🎧✮˚.⋆</span>
    <span class="decor decor-10">⡞⠳⣄⣀⣠⠞⢷</span>
    <span class="decor decor-11">ֹ۪(๑ᵔ⤙ᵔ๑)</span>
    <span class="decor decor-12">ִֶָ. ..𓂃 ࣪ ִֶָ🪽་༘࿐</span>
    <span class="decor decor-13">⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆°</span>
    <span class="decor decor-14">‧🫧⋆.ೃ࿔*:･</span>
    <div class="decor borboleta borboleta-1"><PixelButterfly /></div>
    <div class="decor borboleta borboleta-2"><PixelButterfly /></div>
  </div>
</template>

<script>
import PixelButterfly from '@/components/PixelButterfly.vue'

export default {
  name: 'BackgroundDecor',
  components: {
    PixelButterfly
  }
}
</script>

<style scoped>
.background-decor {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

.decor {
  position: absolute;
  color: var(--accent-pink);
  opacity: 0.35;
  font-size: 1.4rem;
  animation: float-decor 7s ease-in-out infinite;
}

.decor-1 { top: 8%;  left: 4%;  font-size: 1.6rem; animation-delay: 0s; }
.decor-2 { top: 18%; right: 6%; font-size: 1.3rem; animation-delay: 1s; color: var(--accent-blue); }
.decor-3 { top: 42%; left: 3%;  font-size: 1.5rem; animation-delay: 2s; }
.decor-4 { top: 60%; right: 4%; font-size: 1.5rem; animation-delay: 0.5s; }
.decor-5 { top: 78%; left: 6%;  font-size: 1.3rem; animation-delay: 1.5s; color: var(--accent-blue); }
.decor-6 { top: 92%; right: 8%; font-size: 1.4rem; animation-delay: 3s; }
.decor-7 { top: 30%; right: 15%; font-size: 1.2rem; animation-delay: 2.5s; }
.decor-8 { top: 68%; left: 12%; font-size: 1.2rem; animation-delay: 1.2s; color: var(--accent-blue); }
.decor-9 { top: 50%; right: 3%; font-size: 1.2rem; animation-delay: 2.2s; }
.decor-10 { top: 85%; left: 3%; font-size: 1.1rem; animation-delay: 0.8s; color: var(--accent-blue); }
.decor-11 { top: 24%; left: 8%; font-size: 1.1rem; animation-delay: 1.8s; }
.decor-12 { top: 5%; right: 20%; font-size: 1.1rem; animation-delay: 2.8s; }
.decor-13 { top: 46%; right: 9%; font-size: 1.2rem; animation-delay: 0.6s; color: var(--accent-blue); }
.decor-14 { top: 88%; right: 20%; font-size: 1.2rem; animation-delay: 2s; color: var(--accent-blue); }

.borboleta {
  width: 42px;
  height: 32px;
  opacity: 0.55;
}

.borboleta-1 { top: 14%; right: 9%; animation-delay: 0.3s; }
.borboleta-2 { top: 72%; left: 8%; width: 34px; height: 26px; animation-delay: 1.6s; }

@keyframes float-decor {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(6deg); }
}

@media (max-width: 900px) {
  .background-decor {
    display: none;
  }
}
</style>
