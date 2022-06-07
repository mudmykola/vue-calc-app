<template>
  <div
    class="p-3"
    style="max-width: 600px; margin: 50px auto; background: #234"
  >
    <div
      class="w-full rounded text-end m-1 p-3 lead font-weight-bold text-white bg-vue-dark"
    >
      {{ calcValue || 0 }}
    </div>
    <!-- Calc buttons -->
    <div class="row no-gutters">
      <div class="col-3" v-for="num in calcElement" :key="num">
        <div
          class="lead text-white text-center m-2 py-4 rounded hover-class bg-vue-dark"
          :class="{
            'bg-vue-green': ['C', '*', '/', '-', '+', '%', '='].includes(num),
          }"
          @click="action(num)"
        >
          {{ num }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalCulator",
  props: {
    msg: String,
  },
  data() {
    return {
      calcValue: "",
      calcElement: [
        "C",
        "*",
        "/",
        "-",
        7,
        8,
        9,
        "+",
        4,
        5,
        6,
        "%",
        1,
        2,
        3,
        "=",
        0,
        ".",
      ],
      oper: null,
      prevCalcValue: "",
    };
  },
  methods: {
    action(num) {
      if (!isNaN(num) || num === ".") {
        this.calcValue += num + "";
      }
      // Clear option
      if (num === "C") {
        this.calcValue = "";
      }
      if (num === "%") {
        this.calcValue = this.calcValue / 100 + "";
      }
      if (["/", "+", "-", "*"].includes(num)) {
        this.oper = num;
        this.prevCalcValue = this.calcValue;
        this.calcValue = "";
      }
      if (num === "=") {
        this.calcValue = eval(this.prevCalcValue + this.oper + this.calcValue);
        (this.prevCalcValue = ""), (this.oper = null);
      }
    },
  },
};
</script>

<style>
.bg-vue-dark {
  background: #31475e;
}
.hover-class:hover {
  cursor: pointer;
  background: #3d5875;
}
.bg-vue-green {
  background: #3fb984;
}
</style>
