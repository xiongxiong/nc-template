<template>
  <div id="app">
    <div id="nc-container-out">
      <div id="nc-container-header">
        <a-avatar size="large" icon="user" />
      </div>
      <div id="nc-container-content">
        <div id="nc-container-content-toolbar">
          <a-button type="normal" icon="radius-setting"/>
          <a-button type="normal" icon="snippets"/>
          <a-button type="normal" icon="download"/>
          <a-button type="normal" icon="delete"/>
        </div>
        <div id="nc-container-content-editor">
          <Editor />
        </div>
        <div id="nc-container-content-dest">
          <Dest />
        </div>
      </div>
      <div id="nc-container-footer">
        <a-button type="link">Doc</a-button>
        <Divider vertical />
        <a-button type="link">About</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "@/views/Editor.vue";
import Dest from "@/views/Dest.vue";
import Divider from "@/components/Divider.vue";

export default {
  name: "App",
  components: {
    Editor,
    Dest,
    Divider
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nc-container-out {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#nc-container-header {
  display: flex;
  background: white;
  margin: 16px;
}

#nc-container-content {
  flex: 1;
  display: flex;
  margin: 4px;
}

#nc-container-footer {
  display: flex;
  justify-content: center;
  background: white;
  margin: 8px;
}

#nc-container-content-toolbar {
  display: flex;
  flex-direction: column;
}

#nc-container-content-toolbar > * {
  margin: 2px;
}

#nc-container-content-editor {
  flex: 1;
  overflow: scroll;
  background: lightblue;
}

#nc-container-content-dest {
  display: flex;
  overflow: scroll;
  min-width: 360px;
  border-radius: 12;
}
</style>
