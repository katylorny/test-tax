<template>
  <label class="text-input">
    <p class="text-input__label">
      <slot/>
    </p>
    <input
        :class="[`text-input__input`, isDisabled ? `disabled` : ``, isError ? `text-input__input--error` : ``]"
        type="number"
        :placeholder="placeholder"
        :disabled="isDisabled"
        :value="vmodelprop"
        @change="$emit('vmodelevent', $event.target.value)"
        min='0'
        oninput="validity.valid||(value='');"
    >
    <span class="text-input__error-text" v-if="isError">
      Поле обязательно для заполнения
    </span>
  </label>
</template>

<script>
export default {
  name: "Input",
  model: {
    prop: 'vmodelprop',
    event: 'vmodelevent'
  },
  props: {
    placeholder: {
      type: String,
      default: "Введите данные"
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    vmodelprop: {
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>

.text-input {
  display: block;
}

.text-input__label {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  margin: 0 0 8px;
}

.text-input__input {
  font-family: 'Lab Grotesque', Arial, sans-serif;
  border: 1px solid #DFE3E6;
  height: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 10px;
  border-radius: 3px;
  background: transparent;
  width: 100%;

  &::placeholder {
    font-family: 'Lab Grotesque', Arial, sans-serif;
    color: #BEC5CC;
    padding: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }

  &:hover {
    border-color: black;
  }

  &:focus {
    outline: none;
    border: 1px solid #DFE3E6;

  }
}

.text-input__input.disabled {
  border: 1px solid #808080;
  color: #808080;

  &::placeholder {
    color: #808080;
  }
}

.text-input__input--error {
  border-color: #EA0029;

  &:hover,
  &:focus {
    border-color: #EA0029;
  }
}

.text-input__error-text {
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #EA0029;
}

</style>