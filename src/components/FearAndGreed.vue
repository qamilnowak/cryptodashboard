<template>
    <q-card class="fng-card">
      <q-card-section>
        <div>Fear & Greed Index</div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section>
        <div style="display: flex">
        <div v-if="index" >
          <div class="dot" v-if="index">{{index.value}}</div>
          <div>{{index.value_classification}}</div>
          <p>Last updated: {{timestamp(index.timestamp)}}</p>
          <p>The next update will happen in: {{nextUpdate(index.time_until_update)}}</p>
        </div>
          <q-separator vertical inset class="fng-separator"></q-separator>
          <div v-if="indexBTCTools">
            <div class="dot" v-if="index">{{indexBTCTools.current}}</div>
            <p>{{fngZones(indexBTCTools.current)}}</p>
            <p>{{timestamp(indexBTCTools.next_update, 'DD-MM-YYYY h:mm')}}</p>
          </div>
          </div>
      </q-card-section>
    </q-card>
  <div v-if="indexBTCTools">

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
      indexBTCTools: {}
    }
  },
  methods: {
    nextUpdate (time) {
      return helpers.secondsToHours(time)
    },
    timestamp (timestamp, format = "DD-MM-YYYY") {
      return helpers.dateFormat(timestamp, format)
    },
    fngZones(fng) {
      return helpers.fngZones(fng)
    }
  },
  computed: {
  },
  mounted() {
    FearAndGreedService.getFNGIndex().then((response) => {
      this.index = response.data.data[0]
    })
    FearAndGreedService.getFNGBTCIndex().then((response) => {
      this.indexBTCTools = response.data.data
    })
  }
}
</script>

<style scoped>
.fng-card {
  vertical-align: middle;
  max-width: 350px;
}
.fng-separator {
  margin-left: 5px;
  margin-right: 5px;
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
