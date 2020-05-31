<template>
  <div id="nc-editor-form">
    <a-input ref="userNameInput" v-model="userName" placeholder="Basic usage">
      <a-icon slot="prefix" type="user" />
      <a-tooltip slot="suffix" title="Extra information">
        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
      </a-tooltip>
    </a-input>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    title: String,
    color: String,
    userName: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nc-editor-form {
  background: white;
}
</style>
