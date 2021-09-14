<template>
  <div class="layout" @click.self="$emit(`close-popup`)">
    <div class="popup">
      <div class="popup__header">
        <h2 class="popup__title">
          Налоговый вычет
        </h2>
        <CloseButton class="popup__close-button" @click="$emit(`close-popup`)"/>
      </div>
      <div class="popup__content">
        <p class="popup__text">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13%
          от своего официального годового дохода.
        </p>

        <Input v-model="salary" class="popup__text-input" :is-error="isError">
          Ваша зарплата в месяц
        </Input>

        <Button class="popup__calculate-button" button-type="text" @click="onCalculateButtonClick">
          Рассчитать
        </Button>

        <div class="popup__early-payments" v-if="isEarlyPaymentShowing">
          <p class="popup__p">
            Итого можете внести в качестве досрочных:
          </p>

          <Checkbox v-for="year in years" :checked="true" :number="year.id" :key="year.id">
            {{ year.taxDeduction }} рублей
          </Checkbox>
        </div>

        <div class="popup__decrease-choice">
          <p class="popup__p">
            Что уменьшаем?
          </p>
          <RadioButton class="popup__radio-button" :is-active="true">
            Платёж
          </RadioButton>
          <RadioButton class="popup__radio-button">
            Срок
          </RadioButton>
        </div>
      </div>
      <Button class="popup__add-button" button-type="red">
        Добавить
      </Button>
    </div>
  </div>
</template>

<script>
import CloseButton from "./CloseButton";
import Input from "./Input";
import Button from "./Button";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";

export default {
  name: "Popup",
  components: {
    Checkbox,
    RadioButton,
    Button,
    Input,
    CloseButton
  },
  data() {
    return {
      // decreaseChoice:
      isEarlyPaymentShowing: false,
      years: [],
      salary: '',
      isError: false,
    }
  },
  methods: {
    onCalculateButtonClick() {

      if (!this.salary) {
        console.log(11111);
        this.isError = true
        return
      } else {
        this.isError = false
      }
      this.years = []
      this.isEarlyPaymentShowing = true
      this.calculateTax()
    },
    calculateTax() {

      // Допустим, квартира дороже 2млн
      let max = 260000

      // годовой доход
      const annualIncome = Number(this.salary) * 12

      // налоговый вычет в год
      const taxDeductionPerYear = annualIncome * 0.13

      while (max > 0) {
        if (max > taxDeductionPerYear) {
          this.years.push({
            id: this.years.length + 1,
            checked: true,
            taxDeduction: taxDeductionPerYear
          })
        } else {
          this.years.push({
            id: this.years.length + 1,
            checked: true,
            taxDeduction: max
          })
        }
        max = max - taxDeductionPerYear
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.layout {
  position: absolute;
  background: #b3b3b3;
  padding: 20px;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0;
  }
}

.popup {
  width: 552px;
  padding: 27px 32px 32px;
  background: #FFFFFF;
  border-radius: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    min-height: 100vh;
  }
}

.popup__header {
  display: flex;
  align-items: flex-start;
}

.popup__close-button {
  margin-left: auto;
}

.popup__title {
  //font-family: Lab Grotesque;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: #000000;
  margin: 0 0 16px;
}

.popup__text {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #808080;
  margin: 0 0 24px;
  padding-right: 51px;
}

.popup__p {
  font-size: 14px;
  margin: 0 32px 0 0;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
}

.popup__decrease-choice {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.popup__radio-button {
  margin-right: 16px;
}

.popup__calculate-button {
  margin-bottom: 24px;
}

.popup__text-input {
  margin-bottom: 8px;
}

.popup__add-button {
  width: 100%;

  @media (max-width: 768px) {
    margin-top: auto;
  }
}

.popup__early-payments {
  margin-bottom: 20px;
}

</style>