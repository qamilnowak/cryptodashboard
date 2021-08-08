<template>
  <div class="dot" v-bind:class="classObject">{{index.value}}</div>
</template>

<script>
export default {
  name: "FnGDot",
  props: {
    index: {
        type: Object,
        required: true,
    }
  },
  computed: {
    classObject: function () {
      return {
        'dot-greed': this.index.value > 70,
        'dot-neural': this.index.value == 60,
        'dot-fear': this.index.value < 25,
      }
    }
  }
}
</script>

<style scoped>
.dot {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  color: #fff;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  horiz-align: center;
  display: inline-block;
}
.dot-neutral {
  background-color: rgb(223, 206, 96);
}
.dot-greed {
  background-color: rgb(155, 190, 68);
}
.dot-fear {
  background-color: rgb(209, 115, 57);
}
</style>
