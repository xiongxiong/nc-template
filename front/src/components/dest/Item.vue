<template>
  <div id="nc-dest-card">
    <div id="nc-dest-card-header">
      <span id="nc-dest-card-header-bar" :style="{background: color}"> </span>
      <b id="nc-dest-card-header-title">{{title}}</b>
    </div>
    <a-divider/>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    title: String,
    color: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nc-dest-card {
  padding: 4px;
  margin: 4px;
  background: white;
}

#nc-dest-card-header {
  display: flex;
}

#nc-dest-card-header-bar {
  width: 4px;
}

#nc-dest-card-header-title {
  flex: 1;
  text-align: start;
  margin-left: 5px;
}
</style>
