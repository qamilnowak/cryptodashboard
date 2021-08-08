<template>
  <q-card class="eth-card">
    <q-card-section>
      <div>ETH Gas</div>
    </q-card-section>
    <q-separator inset></q-separator><q-card-section>
      <div style="display: inline-flex">
        <div class="eth-gas">
          <p>Low</p>
          <p>{{ethGas.SafeGasPrice}}</p>
        </div>
        <div class="eth-gas">
          <p>Average</p>
          <p>{{ethGas.ProposeGasPrice}}</p>
        </div>
        <div class="eth-gas">
          <p>High</p>
          <p>{{ethGas.FastGasPrice}}</p>
        </div>
      </div>
    <p>ETH 2.0 Contract Staked: {{eth2Contract}}</p>
    </q-card-section>
  </q-card>
</template>

<script>
import MainService from "@/services/MainService";
export default {
  name: "ETHCard",
  data() {
    return {
      ethGas: {},
      eth2Contract: {},
    }
  },
  methods: {
    formatValue (v) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency'
      })
      return formatter.format(v)
    }
  },
  mounted() {
    MainService.getEthGas().then((response) => {
      this.ethGas = response.data
    })
    MainService.getEth2Contract().then((response) => {
      this.eth2Contract = this.formatValue(response.data)
    })
  }
}
</script>

<style scoped>
.eth-card{
  max-width: 300px;
}
.eth-gas {
  text-align: center;
  margin: 8px;
}
</style>
