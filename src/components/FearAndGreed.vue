<template>
    <q-card class="fng-card">
      <q-card-section>
        <div>Fear & Greed Index</div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section>
        <div class="dot" v-if="index">{{index.value}}
        </div>
        <div v-if="index">{{index.value_classification}}</div>
          <p v-if="index">Last updated: {{timestamp}}</p>
        <p v-if="index">The next update will happen in: {{nextUpdate}}</p>
      </q-card-section>
    </q-card>
  <div>
    {{indexBTCTools}}
  </div>
</template>

<script>

import FearAndGreedService from "@/services/FearAndGreedService";
import helpers from "@/helpers/helpers";
export default {
  name: 'CoinPrice',
  data() {
    return {
      index: null,
      indexBTCTools: null
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
    FearAndGreedService.getFNGBTCIndex().then((response) => {
      this.indexBTCTools = response.data
    })
  }
}
</script>

<style scoped>
.fng-card {
  vertical-align: middle;
  max-width: 160px;
}
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
