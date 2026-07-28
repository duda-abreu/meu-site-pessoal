<template>
  <svg viewBox="0 0 16 12" class="pixel-butterfly" preserveAspectRatio="xMidYMid meet">
    <rect x="6" y="0" width="1" height="1" class="linha" />
    <rect x="9" y="0" width="1" height="1" class="linha" />

    <rect x="4" y="2" width="3" height="1" class="linha" />
    <rect x="9" y="2" width="3" height="1" class="linha" />

    <rect x="3" y="3" width="4" height="3" class="corpo-ala" />
    <rect x="9" y="3" width="4" height="3" class="corpo-ala" />
    <rect x="3" y="3" width="1" height="3" class="linha" />
    <rect x="6" y="3" width="1" height="3" class="linha" />
    <rect x="9" y="3" width="1" height="3" class="linha" />
    <rect x="12" y="3" width="1" height="3" class="linha" />

    <rect x="7" y="1" width="2" height="9" class="linha" />

    <rect x="4" y="7" width="3" height="2" class="corpo-ala" />
    <rect x="9" y="7" width="3" height="2" class="corpo-ala" />
    <rect x="4" y="7" width="1" height="2" class="linha" />
    <rect x="6" y="7" width="1" height="2" class="linha" />
    <rect x="9" y="7" width="1" height="2" class="linha" />
    <rect x="11" y="7" width="1" height="2" class="linha" />
  </svg>
</template>

<script>
export default {
  name: 'PixelButterfly'
}
</script>

<style scoped>
.pixel-butterfly {
  width: 100%;
  height: 100%;
  shape-rendering: crispEdges;
}

.linha {
  fill: #8a5fb8;
}

.corpo-ala {
  fill: #d9c2f0;
}
</style>
