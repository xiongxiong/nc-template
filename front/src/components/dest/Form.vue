<template>
  <div id="nc-dest-form">
    <div id="nc-dest-form-header">
      <span id="nc-dest-form-header-bar" :style="{background: color}"> </span>
      <b id="nc-dest-form-header-title">{{title}}</b>
    </div>
    <a-divider/>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    title: String,
    color: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nc-dest-form {
  padding: 4px;
  margin: 4px;
  background: white;
}

#nc-dest-form-header {
  display: flex;
}

#nc-dest-form-header-bar {
  width: 4px;
}

#nc-dest-form-header-title {
  flex: 1;
  text-align: start;
  margin-left: 5px;
}
</style>
