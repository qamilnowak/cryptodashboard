<template>
        <q-markup-table class="fng-table">
          <thead>
          <tr>
            <th class="text-left">Fear & Greed Index</th>
            <th class="text-right">alternative.me</th>
            <th class="text-right">btctools.io</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="text-left">Index</td>
            <td class="text-right"><FnGDot :index="{value: 77, btc: true}"/></td>
            <td class="text-right"><FnGDot :index="{value: 80, btc: false}"/></td>
          </tr>
          <tr>
            <td class="text-left">Status</td>
            <td class="text-right">Fear</td>
            <td class="text-right">Fear</td>
          </tr>
          <tr>
            <td class="text-left">Next Update</td>
            <td class="text-right">262</td>
            <td class="text-right">16</td>
          </tr>
          </tbody>
        </q-markup-table>
<!--        <div style="display: flex">-->
<!--        <div v-if="index" >-->
<!--          <div class="dot" v-if="index">{{index.value}}</div>-->
<!--          <div>{{index.value_classification}}</div>-->
<!--          <p>Last updated: {{timestamp(index.timestamp)}}</p>-->
<!--          <p>The next update will happen in: {{nextUpdate(index.time_until_update)}}</p>-->
<!--        </div>-->
<!--          <q-separator vertical inset class="fng-separator"></q-separator>-->
<!--          <div v-if="indexBTCTools">-->
<!--            <div class="dot" v-if="index">{{indexBTCTools.current}}</div>-->
<!--            <p>{{fngZones(indexBTCTools.current)}}</p>-->
<!--            <p>{{timestamp(indexBTCTools.next_update, 'DD-MM-YYYY h:mm')}}</p>-->
<!--          </div>-->
<!--          </div>-->
</template>

<script>
import FnGDot from "@/components/FnGDot";
// import FearAndGreedService from "@/services/FearAndGreedService";
import helpers from "@/helpers/helpers";
export default {
  name: 'CoinPrice',
  components: {
    FnGDot
  },
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
    // FearAndGreedService.getFNGIndex().then((response) => {
    //   this.index = response.data.data[0]
    // })
    // FearAndGreedService.getFNGBTCIndex().then((response) => {
    //   this.indexBTCTools = response.data.data
    // })
  }
}
</script>

<style scoped>
.fng-table {
  vertical-align: middle;
  max-width: 350px;
}
.fng-icon {
  width: 20px;
  height: 20px;
}
.fng-separator {
  margin-left: 5px;
  margin-right: 5px;
}

</style>
