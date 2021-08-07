<template>
      <span>Crypto dashboard</span>
      <p>ToDo</p>
  <ul>
    <li v-for="item in todo" :key="item">{{item}}</li>
  </ul>
      <CoinPrice/>
      <FearAndGreed/>
</template>

<script>
import CoinPrice from "@/components/CoinPrice";
import FearAndGreed from "@/components/FearAndGreed";
export default {
  name: 'LayoutDefault',
  components: {
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
          'FUD Twitter feed1'
      ]
    }
  }
}
</script>
