<template>
  <div id="app">
    <Button class="tax-button" button-type="transparent">
      Налоговый вычет
    </Button>
    <Popup></Popup>
  </div>
</template>

<script>

import Button from "./components/Button";
import Popup from "./components/Popup";

export default {
  name: 'App',
  components: {
    Popup,
    Button
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
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
