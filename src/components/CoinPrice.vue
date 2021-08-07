<template>
  <q-card class="fng-card">
    <h6>{{ status }}</h6>
  </q-card>
</template>

<script>
import CoinGeckoService from "@/services/CoinGeckoService";
export default {
  name: 'CoinPrice',
  data() {
    return {
      status: null
    }
  },
  mounted() {
    CoinGeckoService.getStatus().then((response) => {
      this.status = response.data
    })
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
