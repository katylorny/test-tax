<template>
  <button class="close-button" @click="$emit(`click`)">
    <img :src="closeButtonIcon" alt="Закрыть">
  </button>
</template>

<script>
import closeButtonIcon from "/src/assets/img/icon-close.svg"

export default {
  name: "CloseButton",
  data() {
    return {
      closeButtonIcon
    }
  }
}
</script>

<style lang="scss" scoped>
.close-button {
  border: none;
  background: transparent;
  width: 18px;
  height: 18px;
  padding: 0;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 12px;
    height: 12px;
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>