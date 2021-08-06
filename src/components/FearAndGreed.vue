<template>
    <q-card bordered style="max-width: 150px">
      <q-card-section>
        <div>Fear & Greed Index</div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section>
        <div class="dot" v-if="index">{{index.value}}
        </div>
        <div v-if="index">{{index.value_classification}}</div>
          <p v-if="index">{{timestamp}}</p>
        <p v-if="index">{{nextUpdate}}</p>
      </q-card-section>
    </q-card>
</template>

<script>

import FearAndGreedService from "@/services/FearAndGreedService";
import helpers from "@/helpers/helpers";
export default {
  name: 'CoinPrice',
  data() {
    return {
      index: null
    }
  },
  methods: {},
  computed: {
  timestamp () {
    return helpers.dateFormat(this.index.timestamp)
},
    nextUpdate () {
    return helpers.secondsToHours(this.index.time_until_update)
}
  },
  mounted() {
    FearAndGreedService.getFNGIndex().then((response) => {
      this.index = response.data.data[0]
    })
  }
}
</script>

<style scoped>
.dot {
  height: 40px;
  width: 40px;
  background-color: rgb(223, 206, 96);
  border-radius: 50%;
  color: #fff;
  padding: 3px;
  font-size: 22px;
  text-align: center;
  vertical-align: middle;
  horiz-align: center;
  display: inline-block;
}
</style>
