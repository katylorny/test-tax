<template>
  <div class="layout" @click.self="$emit(`close-popup`)">
    <div class="popup">
      <div class="popup__header">
        <h2 class="popup__title">
          Налоговый вычет
        </h2>
        <close-button class="popup__close-button" @click="$emit(`close-popup`)"/>
      </div>
      <div class="popup__content">
        <p class="popup__text">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13%
          от своего официального годового дохода.
        </p>

        <v-input v-model="salary" class="popup__text-input" :is-error="isError">
          Ваша зарплата в месяц
        </v-input>

        <v-button class="popup__calculate-button" button-type="text" @click="onCalculateButtonClick">
          Рассчитать
        </v-button>

        <div class="popup__early-payments" v-if="isEarlyPaymentShowing">
          <p class="popup__p popup__p--decrease">
            Итого можете внести в качестве досрочных:
          </p>

          <checkbox v-for="(year, i) in years" :year-number="year.id" :key="year.id" v-model="years[i].checked">
            {{ year.taxDeduction }} рублей
          </checkbox>
        </div>

        <div class="popup__decrease-choice">
          <p class="popup__p">
            Что уменьшаем?
          </p>
          <radio-button class="popup__radio-button" :is-active="true" value="pay" v-model="decreaseChoice"
                        name="decrease">
            Платёж
          </radio-button>
          <radio-button class="popup__radio-button" value="time" v-model="decreaseChoice" name="decrease">
            Срок
          </radio-button>
        </div>
      </div>
      <v-button class="popup__add-button" button-type="red" @click="$emit(`close-popup`)">
        Добавить
      </v-button>
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
    VButton: Button,
    VInput: Input,
    CloseButton
  },
  data() {
    return {
      decreaseChoice: 'pay',
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
      const taxDeductionPerYear = Math.round(annualIncome * 0.13)

      while (max > 0) {
        this.years.push({
          id: this.years.length + 1,
          checked: true,
          taxDeduction: max > taxDeductionPerYear ? taxDeductionPerYear : max
        })
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

  @media (max-width: 767px) {
    padding: 0;
  }
}

.popup {
  width: 552px;
  padding: 27px 29px 32px 32px;
  background: #FFFFFF;
  border-radius: 30px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    width: 453px;
    padding: 27px 23px 32px 32px;
  }

  @media (max-width: 767px) {
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
  margin: 3px 0 16px;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 24px;
  }
}

.popup__text {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #808080;
  margin: 0 0 24px;
  padding-right: 51px;

  @media (max-width: 1023px) {
    padding-right: 25px;
    margin: 0 0 26px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 31px;
  }
}

.popup__p {
  font-size: 14px;
  margin: 0 32px 0 0;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #000000;

  @media (max-width: 1023px) {
    margin: 0 77px 0 0;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
}

.popup__p--decrease {
  @media (max-width: 767px) {
    width: 55%;
  }
}

.popup__decrease-choice {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
}

.popup__radio-button {
  margin-right: 16px;

  @media (max-width: 767px) {
    margin-top: 27px;
  }
}

.popup__calculate-button {
  margin-bottom: 19px;

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
}

.popup__text-input {
  margin-bottom: 8px;

  @media (max-width: 767px) {
    margin-bottom: 12px;
  }
}

.popup__add-button {
  width: 100%;

  @media (max-width: 767px) {
    margin-top: auto;
  }
}

.popup__early-payments {
  margin-bottom: 20px;

  @media (max-width: 767px) {
    margin-bottom: 34px;
  }
}

</style>