<template>
  <div id="nc-editor-item">
    <div id="nc-editor-item-header">
      <a-select id="nc-editor-item-type" :default-value="type" @change="(type) => updateItem({item: {...item, type}})">
        <a-select-option :value="t" v-for="t in types" :key="t">{{t}}</a-select-option>
      </a-select>
      <Spacer />
      <a-button type="link" icon="vertical-align-top" size="default" @click="insertItemUp({item})"/>
      <a-button type="link" icon="vertical-align-bottom" size="default" @click="insertItemDown({item})"/>
      <a-button type="link" icon="arrow-up" size="default" @click="moveItemUp({item})"/>
      <a-button type="link" icon="arrow-down" size="default" @click="moveItemDown({item})"/>
      <a-button type="link" icon="copy" size="default" @click="copyItem({item})"/>
      <a-button type="link" icon="delete" size="default" @click="deleteItem({item})"/>
    </div>
    <Divider />
    <Form v-if="type === 'form'"/>
    <Card v-else-if="type === 'card'"/>
    <a-button type="primary" v-else>hello</a-button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Divider from "@/components/Divider.vue"
import Spacer from "@/components/Spacer.vue"
import Form from "@/components/editor/Form.vue"
import Card from "@/components/editor/Card.vue"

export default {
  name: "Item",
  components: {
    Divider,
    Spacer,
    Form,
    Card,
  },
  props: {
    item: Object,
  },
  data () {
    return {
      
    }
  },
  computed: {
    types: () => ["form", "card", "button"],
    type () {
      return this.item.type || "form"
    },
  },
  methods: {
    ...mapMutations(['updateItem', 'deleteItem', 'copyItem', 'moveItemUp', 'moveItemDown', 'insertItemUp', 'insertItemDown']),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nc-editor-item {
  padding: 4px;
  margin: 4px;
  background: white;
}

#nc-editor-item-header {
  display: flex;
  flex-direction: row;
}

#nc-editor-item-type {
  width: 120px;
}
</style>
