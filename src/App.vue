<template>
  <div style="display: block">
      <Header/>
  </div>
  <div>
    <span>ToDo</span>
    <ul>
      <li v-for="item in todo" :key="item">{{item}}</li>
    </ul>
  </div>
      <CoinPrice/>
      <FearAndGreed/>
  <ETHCard/>
</template>

<script>
import Header from "@/components/Header";
import ETHCard from "@/components/ETHCard";
import CoinPrice from "@/components/CoinPrice";
import FearAndGreed from "@/components/FearAndGreed";
export default {
  name: 'LayoutDefault',
  components: {
    Header,
    ETHCard,
    CoinPrice,
    FearAndGreed
  },
  data() {
    return {
      todo: [
        'Fear and greed',
        'BTC and ETH market dominance',
        'Shorts vs Longs',
        'BTC and ETH market dominance',
        'Burned ETH',
        'FUD Twitter feed',
         'ETH Gasprice',
         'ETH 2.0 Contract'
      ]
    }
  },

}
</script>
