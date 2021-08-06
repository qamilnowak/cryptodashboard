<template>
      <span>Crypto dashboard</span>
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
  }
}
</script>
