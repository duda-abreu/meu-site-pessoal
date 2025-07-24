<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(147, 51, 180, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90vh;
  overflow: auto;
}

.close-btn {
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  font-size: 2.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}
</style>