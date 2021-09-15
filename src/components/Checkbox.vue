<template>
  <label :class="[`checkbox`, vmodelprop ? `checked` : ``]">
    <input
        class="checkbox__input"
        type="checkbox"
        :checked="vmodelprop"
        @change="$emit(`vmodelevent`, $event.target.checked)"
    >
    <span class="checkbox__label">
      <slot/>
    </span>

    <span class="checkbox__year"> {{ number === 2 ? `во` : `в`}} {{ number | formatYearNumber }} год </span>
  </label>
</template>

<script>

export default {
  name: "Checkbox",
  model: {
    prop: `vmodelprop`,
    event: `vmodelevent`
  },
  props: {
    number: {
      type: Number
    },
    vmodelprop: {
      type: Boolean
    }
  },
  filters: {
    formatYearNumber(yearNumber) {

      // ый - по умолчанию

      // ой
      const firstArray = [2, 6, 7, 8]

      //ий
      const secondArray = [3]

      let ending;

      if (firstArray.includes(yearNumber)) {
        ending = 'ой'
      } else if (secondArray.includes(yearNumber)) {
        ending = 'ий'
      } else {
        ending = 'ый'
      }

      return yearNumber + '-' + ending
    }
  }
}
</script>

<style lang="scss" scoped>

.checkbox {
  display: block;
  padding-left: 31px;
  width: 100%;
  position: relative;
  padding-top: 18px;
  padding-bottom: 19px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background: url("../assets/img/icon-not-checked.svg") no-repeat;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    border-bottom: 1px solid #DFE3E6;
  }
}

.checkbox.checked {
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background: url("../assets/img/icon-checked.svg") no-repeat;
  }
}

.checkbox__input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox__label {
  font-size: 14px;
}

.checkbox__year {
  color: #808080;
  font-size: 14px;

}
</style>