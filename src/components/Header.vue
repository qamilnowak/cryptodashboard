<template>
  <div class="dashboard-header">
    <div class="title">Crypto dashboard</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
}
}
</script>

<style scoped>
.dashboard-header {
  background-color: white;
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
}
.title {
  margin: 15px;
  color: rgba(17,24,39,1);
  letter-spacing: .05em;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: .25rem;
}
.title:hover {
  color:blue;
}
</style>
