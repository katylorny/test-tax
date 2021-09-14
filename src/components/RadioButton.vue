<template>
  <label :class="[`radio-button`, isActive ? `radio-button--active` : ``]">
    <input class="radio-button__input" type="radio" :checked="isActive">
    <span class="radio-button__text">
       <slot/>
    </span>
  </label>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.radio-button {
  display: block;
  padding: 6px 12px;
  background: #EEF0F2;
  border-radius: 50px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
}

.radio-button--active {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  color: white;
}

.radio-button__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
</style>