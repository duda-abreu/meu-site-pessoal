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
  background: rgba(200, 180, 255, 0.85); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 12px;
  width: 80%;
  max-width: 800px;
  position: relative;
  box-shadow: 
    0 0 0 1px rgba(147, 51, 180, 0.1), 
    0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(147, 51, 180, 0.2);
  padding: 20px;
}

.close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  background: #9333b4;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #7b2cbf;
  transform: scale(1.1);
}
</style>