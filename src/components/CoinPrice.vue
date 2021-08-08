<template>
  <q-card class="coinprice">
    <q-markup-table>
      <thead>
      <tr>
        <th class="text-left" v-for="item in headers" :key="item">{{item}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="row in basicData" :key="row.id">
        <td><img :src="row.image" class="icon"/> {{row.name}}</td>
        <td>{{row.current_price}} USD</td>
        <td>{{roundChange(row.price_change_percentage_24h)}} %</td>
      </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script>
import CoinGeckoService from "@/services/CoinGeckoService";
export default {
  name: 'CoinPrice',
  data() {
    return {
      headers: [
          'Waluta', 'Cena', 'Zmiana 24h'
      ],
      basicData: null
    }
  },
  methods: {
      roundChange(value) {
        return parseFloat(value).toFixed(2);

      }
  },
  mounted() {
    CoinGeckoService.getBasicData().then((response) => {
      this.basicData = response.data
    })
  }
}
</script>
<style scoped>
.icon {
  width: 25px;
  height: 25px;
}
.coinprice {
  max-width: 350px;
}
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
