<template>
  <button type="button" :class="[`button`, buttonTypeClass]" @click="$emit(`click`)">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonType: {
      type: String,
      default: "transparent"
    },
    isDisabled: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    buttonTypeClass() {
      switch (this.buttonType) {
        case 'transparent':
          return ''
        case 'red':
          return 'button--red'
        case 'text':
          return 'button--text'
        default:
          return ''
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Lab Grotesque', Arial, sans-serif;
  border-radius: 6px;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: white;
  border: 1px solid white;
  width: fit-content;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }

  &:hover,
  &:active {
    background: white;
    box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
    color: black;
  }
}

.button--red {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border: transparent;

  &:hover,
  &:active {
    background: #EA0029;
    box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
    color: white;
  }
}

.button--text {
  padding: 0;
  color: #EA0029;
  border: none;
  background: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  &:hover {
    color: #F53A31;
    box-shadow: none;
  }

  &:active {
    color: #EA0029;
  }
}

.button.disabled {
  background: #BEC5CC;
  color: white;
  border: none;
  box-shadow: none;
  cursor: not-allowed;
}

</style>