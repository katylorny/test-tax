<template>
  <div id="app">
    <Button class="tax-button" button-type="transparent" @click="openPopup">
      Налоговый вычет
    </Button>
    <Popup v-if="isPopupOpened" @close-popup="closePopup"></Popup>
  </div>
</template>

<script>

import Button from "./components/Button";
import Popup from "./components/Popup";

export default {
  name: 'App',
  data() {
    return {
      isPopupOpened: false
    }
  },
  components: {
    Popup,
    Button
  },
  methods: {
    openPopup() {
      this.isPopupOpened = true
    },
    closePopup() {
      this.isPopupOpened = false
    }
  }
}
</script>

<style lang="scss">

@import "assets/styles/fonts";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Lab Grotesque', Arial, sans-serif;
}

#app {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>

<style lang="scss" scoped>

.tax-button {
  margin: auto;
}
</style>
